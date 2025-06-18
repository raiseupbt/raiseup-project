import { supabase } from './supabase.server';
import * as bcrypt from 'bcryptjs';
import { createCookieSessionStorage, redirect } from '@remix-run/node';

// Configuração de sessão
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_session',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: [process.env.SESSION_SECRET || 'default-secret-change-in-production'],
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 7 dias
  },
});

export type Usuario = {
  id: string;
  email: string;
  nome: string;
  ativo: boolean;
  ultimo_login: string | null;
  criado_em: string;
  atualizado_em: string;
};

// Funções de sessão
export async function getSession(request: Request) {
  return sessionStorage.getSession(request.headers.get('Cookie'));
}

export async function getUserId(request: Request): Promise<string | null> {
  const session = await getSession(request);
  return session.get('userId') || null;
}

export async function getUser(request: Request): Promise<Usuario | null> {
  const userId = await getUserId(request);
  if (!userId) return null;

  console.log('=== GET USER ===');
  console.log('User ID da sessão:', userId);

  // Verificar se é o usuário temporário
  if (userId === 'temp-admin-1') {
    console.log('Retornando usuário temporário');
    return {
      id: 'temp-admin-1',
      email: 'admin@raiseup.com.br',
      nome: 'Administrador RaiseUp',
      ativo: true,
      ultimo_login: new Date().toISOString(),
      criado_em: new Date().toISOString(),
      atualizado_em: new Date().toISOString()
    };
  }

  console.log('Buscando usuário no Supabase...');
  const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('id', userId)
    .eq('ativo', true)
    .single();

  console.log('Resultado da busca:', { data, error });

  if (error || !data) return null;
  return data;
}

export async function requireUser(request: Request): Promise<Usuario> {
  const user = await getUser(request);
  if (!user) {
    throw redirect('/admin/login');
  }
  return user;
}

// Autenticação
export async function login(email: string, senha: string): Promise<Usuario | null> {
  console.log('=== FUNÇÃO LOGIN ===');
  console.log('Email recebido:', email);
  console.log('Senha recebida:', senha);
  
  // Validação de entrada
  if (!email || !senha) {
    console.log('Email ou senha vazios');
    return null;
  }
  
  // Sanitização do email
  const emailSanitizado = email.toLowerCase().trim();
  console.log('Email sanitizado:', emailSanitizado);
  
  // Validação básica do formato do email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailSanitizado)) {
    console.log('Formato de email inválido');
    return null;
  }

  try {
    console.log('=== DEBUG AUTENTICAÇÃO ===');
    console.log('Email sanitizado:', emailSanitizado);
    console.log('Senha fornecida:', senha);
    console.log('SUPABASE_URL configurada:', !!process.env.SUPABASE_URL);
    console.log('SUPABASE_ANON_KEY configurada:', !!process.env.SUPABASE_ANON_KEY);
    console.log('Tentando autenticação via Supabase primeiro...');
    
    // Tentar buscar no Supabase PRIMEIRO
    const { data: usuario, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('email', emailSanitizado)
      .eq('ativo', true)
      .single();

    console.log('Resultado da busca no Supabase:', { 
      usuario: usuario ? 'Usuário encontrado' : 'Usuário não encontrado', 
      email: usuario?.email,
      error: error?.message || 'Sem erro'
    });

    if (usuario && !error) {
      const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);
      console.log('Senha válida:', senhaValida);
      
      if (senhaValida) {
        // Atualizar último login
        await supabase
          .from('usuarios')
          .update({ ultimo_login: new Date().toISOString() })
          .eq('id', usuario.id);

        console.log('Login bem-sucedido via Supabase');
        return usuario;
      }
    }
    
    console.log('Não foi possível autenticar via Supabase, tentando credenciais temporárias...');
    
    // Fallback para credenciais temporárias apenas se Supabase falhar
    if (emailSanitizado === 'admin@raiseup.com.br' && senha === 'admin123') {
      console.log('Login bem-sucedido com credenciais temporárias (fallback)');
      return {
        id: 'temp-admin-1',
        email: 'admin@raiseup.com.br',
        nome: 'Administrador RaiseUp (Temporário)',
        ativo: true,
        ultimo_login: new Date().toISOString(),
        criado_em: new Date().toISOString(),
        atualizado_em: new Date().toISOString()
      };
    }
    
    console.log('Credenciais inválidas');
    return null;
  } catch (error) {
    console.error('Erro na autenticação:', error);
    
    // Em caso de erro, tentar credenciais temporárias como último recurso
    if (emailSanitizado === 'admin@raiseup.com.br' && senha === 'admin123') {
      console.log('Login com credenciais temporárias devido a erro no Supabase');
      return {
        id: 'temp-admin-1',
        email: 'admin@raiseup.com.br',
        nome: 'Administrador RaiseUp (Modo Emergência)',
        ativo: true,
        ultimo_login: new Date().toISOString(),
        criado_em: new Date().toISOString(),
        atualizado_em: new Date().toISOString()
      };
    }
    
    return null;
  }
}

export async function logout(request: Request) {
  const session = await getSession(request);
  return redirect('/admin/login', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  });
}

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await sessionStorage.getSession();
  session.set('userId', userId);
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session),
    },
  });
}

// Utilitários para senhas
export async function hashSenha(senha: string): Promise<string> {
  return bcrypt.hash(senha, 10);
}

export async function criarUsuario(email: string, senha: string, nome: string): Promise<Usuario | null> {
  try {
    const senhaHash = await hashSenha(senha);
    
    const { data, error } = await supabase
      .from('usuarios')
      .insert({
        email: email.toLowerCase(),
        senha_hash: senhaHash,
        nome
      })
      .select()
      .single();

    if (error) {
      console.error('Erro ao criar usuário:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return null;
  }
}