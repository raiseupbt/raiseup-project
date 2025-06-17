import type { ActionFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { validarFormularioContato, sanitizarTexto, extrairNumerosTelefone } from '~/lib/validacao';

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

    // Simular sucesso até configurar Supabase
    console.log('Contato recebido:', dadosFormulario);

    return json({ 
      sucesso: true, 
      mensagem: 'Contato enviado com sucesso! Retornaremos em breve.',
      id: 'temp-id'
    });

  } catch (error) {
    console.error('Erro no endpoint de contato:', error);
    return json(
      { erro: 'Erro interno do servidor. Tente novamente.' }, 
      { status: 500 }
    );
  }
}