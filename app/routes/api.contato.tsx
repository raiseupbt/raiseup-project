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

    // Debug dos dados recebidos
    console.log('Dados do formulário recebidos:', dadosFormulario);
    
    // Validação simplificada para debug
    const erros = [];
    if (!dadosFormulario.nome || dadosFormulario.nome.length < 2) {
      erros.push({ campo: 'nome', mensagem: `Nome inválido: "${dadosFormulario.nome}"` });
    }
    if (!dadosFormulario.email || !dadosFormulario.email.includes('@')) {
      erros.push({ campo: 'email', mensagem: `Email inválido: "${dadosFormulario.email}"` });
    }
    if (!dadosFormulario.telefone || dadosFormulario.telefone.length < 8) {
      erros.push({ campo: 'telefone', mensagem: `Telefone inválido: "${dadosFormulario.telefone}"` });
    }
    if (!dadosFormulario.area_interesse) {
      erros.push({ campo: 'area_interesse', mensagem: `Área inválida: "${dadosFormulario.area_interesse}"` });
    }
    
    if (erros.length > 0) {
      console.log('Erros de validação:', erros);
      return json({ erros }, { status: 400 });
    }

    // Simular sucesso até configurar Supabase
    console.log('Contato válido recebido:', dadosFormulario);

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