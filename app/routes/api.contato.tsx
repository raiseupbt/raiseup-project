import type { ActionFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { supabase, type ContatoData } from '~/lib/supabase.server';
import { validarFormularioContato, sanitizarTexto, extrairNumerosTelefone } from '~/lib/validacao';
import { verificarRateLimit } from '~/lib/rate-limit.server';

function obterIpCliente(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIp) {
    return realIp;
  }
  
  // Fallback para desenvolvimento local
  return '127.0.0.1';
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return json({ erro: 'Método não permitido' }, { status: 405 });
  }

  try {
    const ip = obterIpCliente(request);
    const userAgent = request.headers.get('user-agent') || '';

    // Verificar rate limiting
    const rateLimitResult = await verificarRateLimit(ip);
    if (!rateLimitResult.permitir) {
      return json(
        { erro: rateLimitResult.mensagem || 'Muitas tentativas' }, 
        { status: 429 }
      );
    }

    // Processar dados do formulário
    const formData = await request.formData();
    const dadosFormulario = {
      nome: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      telefone: formData.get('phone')?.toString() || '',
      empresa: formData.get('company')?.toString() || '',
      area_interesse: formData.get('interest')?.toString() || '',
      mensagem: formData.get('message')?.toString() || ''
    };

    // Validar dados
    const erros = validarFormularioContato(dadosFormulario);
    if (erros.length > 0) {
      return json({ erros }, { status: 400 });
    }

    // Sanitizar dados
    const dadosLimpos: ContatoData = {
      nome: sanitizarTexto(dadosFormulario.nome),
      email: dadosFormulario.email.toLowerCase().trim(),
      telefone: extrairNumerosTelefone(dadosFormulario.telefone), // Salva apenas números
      empresa: dadosFormulario.empresa ? sanitizarTexto(dadosFormulario.empresa) : undefined,
      area_interesse: dadosFormulario.area_interesse as ContatoData['area_interesse'],
      mensagem: dadosFormulario.mensagem ? sanitizarTexto(dadosFormulario.mensagem) : 'Nenhuma mensagem adicional',
      endereco_ip: ip,
      navegador: userAgent.slice(0, 500) // Limita o tamanho
    };

    // Salvar no banco
    const { data, error } = await supabase
      .from('contatos')
      .insert(dadosLimpos)
      .select()
      .single();

    if (error) {
      console.error('Erro ao salvar contato:', error);
      return json(
        { erro: 'Erro interno do servidor. Tente novamente.' }, 
        { status: 500 }
      );
    }

    return json({ 
      sucesso: true, 
      mensagem: 'Contato enviado com sucesso! Retornaremos em breve.',
      id: data.id 
    });

  } catch (error) {
    console.error('Erro no endpoint de contato:', error);
    return json(
      { erro: 'Erro interno do servidor. Tente novamente.' }, 
      { status: 500 }
    );
  }
}