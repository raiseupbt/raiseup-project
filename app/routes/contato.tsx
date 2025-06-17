import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  
  // Dados do formulário
  const dadosFormulario = {
    nome: formData.get('name')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    telefone: formData.get('phone')?.toString() || '',
    empresa: formData.get('company')?.toString() || '',
    area_interesse: formData.get('interest')?.toString() || '',
    mensagem: formData.get('message')?.toString() || ''
  };

  console.log('=== DEBUG FORMULÁRIO ===');
  console.log('FormData recebido:', dadosFormulario);
  console.log('Todos os campos do formData:');
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: "${value}"`);
  }
  console.log('========================');

  // Validação básica
  const erros = [];
  if (!dadosFormulario.nome || dadosFormulario.nome.trim().length < 2) {
    erros.push(`Nome: "${dadosFormulario.nome}" (muito curto)`);
  }
  if (!dadosFormulario.email || !dadosFormulario.email.includes('@')) {
    erros.push(`Email: "${dadosFormulario.email}" (inválido)`);
  }
  if (!dadosFormulario.telefone || dadosFormulario.telefone.length < 8) {
    erros.push(`Telefone: "${dadosFormulario.telefone}" (muito curto)`);
  }
  if (!dadosFormulario.area_interesse) {
    erros.push(`Área: "${dadosFormulario.area_interesse}" (não selecionada)`);
  }

  if (erros.length > 0) {
    return json({ 
      success: false, 
      errors: erros,
      dados: dadosFormulario 
    }, { status: 400 });
  }

  return json({ 
    success: true, 
    message: 'Formulário enviado com sucesso! Dados recebidos corretamente.',
    dados: dadosFormulario
  });
}

export default function Contato() {
  const actionData = useActionData<typeof action>();

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a0f1c', 
      color: '#e2e8f0',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ color: '#0ea5e9', marginBottom: '2rem' }}>
          Contato - RaiseUp (Teste Debug)
        </h1>

        {actionData?.success === false && (
          <div style={{
            background: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#dc2626',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}>
            <h3>❌ Erros encontrados:</h3>
            <ul>
              {actionData.errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
            <details style={{ marginTop: '1rem' }}>
              <summary>Debug dos dados recebidos:</summary>
              <pre style={{ background: '#f3f4f6', padding: '1rem', marginTop: '0.5rem' }}>
                {JSON.stringify(actionData.dados, null, 2)}
              </pre>
            </details>
          </div>
        )}

        {actionData?.success === true && (
          <div style={{
            background: '#f0fdf4',
            border: '1px solid #bbf7d0',
            color: '#16a34a',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}>
            <h3>✅ {actionData.message}</h3>
            <details style={{ marginTop: '1rem' }}>
              <summary>Dados enviados:</summary>
              <pre style={{ background: '#f3f4f6', padding: '1rem', marginTop: '0.5rem' }}>
                {JSON.stringify(actionData.dados, null, 2)}
              </pre>
            </details>
          </div>
        )}

        <form method="POST" style={{ 
          background: 'rgba(26, 32, 44, 0.8)', 
          padding: '2rem', 
          borderRadius: '12px',
          border: '1px solid #334155'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Nome Completo *
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #64748b',
                background: '#1e293b',
                color: '#e2e8f0',
                fontSize: '1rem'
              }}
              placeholder="Digite seu nome completo"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Email *
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #64748b',
                background: '#1e293b',
                color: '#e2e8f0',
                fontSize: '1rem'
              }}
              placeholder="seu@email.com"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Telefone *
            </label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #64748b',
                background: '#1e293b',
                color: '#e2e8f0',
                fontSize: '1rem'
              }}
              placeholder="(11) 99999-9999"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="company" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Empresa
            </label>
            <input 
              type="text" 
              id="company" 
              name="company" 
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #64748b',
                background: '#1e293b',
                color: '#e2e8f0',
                fontSize: '1rem'
              }}
              placeholder="Nome da sua empresa"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="interest" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Área de Interesse *
            </label>
            <select 
              id="interest" 
              name="interest" 
              required 
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #64748b',
                background: '#1e293b',
                color: '#e2e8f0',
                fontSize: '1rem'
              }}
            >
              <option value="">Selecione uma opção</option>
              <option value="conversacional">Agentes Conversacionais</option>
              <option value="midias-sociais">Agentes para Mídias Sociais</option>
              <option value="produtividade">Agentes de Produtividade</option>
              <option value="todos">Todas as Soluções</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Mensagem
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows={4}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #64748b',
                background: '#1e293b',
                color: '#e2e8f0',
                fontSize: '1rem',
                resize: 'vertical'
              }}
              placeholder="Conte-nos sobre seu projeto..."
            />
          </div>

          <button 
            type="submit" 
            style={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Enviar Formulário
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
            ← Voltar ao Site Principal
          </a>
        </div>
      </div>
    </div>
  );
}