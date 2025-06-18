// Script para testar conexão com Supabase
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

async function testarSupabase() {
  console.log('=== TESTE DE CONEXÃO SUPABASE ===');
  
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
  
  console.log('SUPABASE_URL:', supabaseUrl ? '✅ Configurada' : '❌ NÃO CONFIGURADA');
  console.log('SUPABASE_ANON_KEY:', supabaseAnonKey ? '✅ Configurada' : '❌ NÃO CONFIGURADA');
  
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Variáveis de ambiente não configuradas');
    return;
  }
  
  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    
    console.log('\n=== TESTANDO CONEXÃO ===');
    
    // Testar conexão básica
    const { data: testData, error: testError } = await supabase
      .from('usuarios')
      .select('count')
      .limit(1);
    
    if (testError) {
      console.error('❌ Erro na conexão:', testError);
      return;
    }
    
    console.log('✅ Conexão funcionando');
    
    // Listar usuários existentes
    const { data: usuarios, error: usuariosError } = await supabase
      .from('usuarios')
      .select('id, email, nome, ativo, criado_em')
      .limit(10);
    
    if (usuariosError) {
      console.error('❌ Erro ao buscar usuários:', usuariosError);
      return;
    }
    
    console.log('\n=== USUÁRIOS EXISTENTES ===');
    console.log('Total de usuários:', usuarios?.length || 0);
    
    if (usuarios && usuarios.length > 0) {
      usuarios.forEach((user, index) => {
        console.log(`${index + 1}. ${user.nome} (${user.email}) - Ativo: ${user.ativo}`);
      });
    } else {
      console.log('❌ Nenhum usuário encontrado na tabela');
    }
    
    // Verificar se admin existe
    const { data: admin, error: adminError } = await supabase
      .from('usuarios')
      .select('*')
      .eq('email', 'admin@raiseup.com.br')
      .single();
    
    console.log('\n=== USUÁRIO ADMIN ===');
    if (adminError) {
      console.log('❌ Admin não encontrado:', adminError.message);
    } else {
      console.log('✅ Admin encontrado:', admin.nome);
      console.log('Email:', admin.email);
      console.log('Ativo:', admin.ativo);
      console.log('Hash existe:', admin.senha_hash ? 'Sim' : 'Não');
    }
    
  } catch (error) {
    console.error('❌ Erro geral:', error);
  }
}

testarSupabase().catch(console.error);