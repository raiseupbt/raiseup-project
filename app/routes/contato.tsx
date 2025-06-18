import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, Link } from "@remix-run/react";
import { supabase } from "~/lib/supabase.server";

// Validação dos dados
function validarFormulario(data: any) {
  const erros: string[] = [];
  
  if (!data.nome || data.nome.trim().length < 2) {
    erros.push('Nome deve ter pelo menos 2 caracteres');
  }
  
  if (!data.email || !data.email.includes('@')) {
    erros.push('Email deve ser válido');
  }
  
  if (!data.telefone || data.telefone.length < 8) {
    erros.push('Telefone deve ter pelo menos 8 dígitos');
  }
  
  if (!data.area_interesse) {
    erros.push('Selecione uma área de interesse');
  }
  
  // Mensagem não é mais obrigatória
  if (data.mensagem && data.mensagem.trim().length > 0 && data.mensagem.trim().length < 10) {
    erros.push('Mensagem deve ter pelo menos 10 caracteres se fornecida');
  }
  
  return erros;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  
  // Extrair dados do formulário
  const dados = {
    nome: formData.get('nome')?.toString()?.trim() || '',
    email: formData.get('email')?.toString()?.trim() || '',
    telefone: formData.get('telefone')?.toString()?.trim() || '',
    empresa: formData.get('empresa')?.toString()?.trim() || '',
    area_interesse: formData.get('area_interesse')?.toString() || '',
    mensagem: formData.get('mensagem')?.toString()?.trim() || ''
  };

  // Validar dados
  const erros = validarFormulario(dados);
  
  if (erros.length > 0) {
    return json({
      success: false,
      errors: erros
    }, { status: 400 });
  }

  // Tentar salvar no Supabase
  try {
    console.log('=== SALVANDO CONTATO ===');
    console.log('Dados:', dados);
    
    const { data: resultado, error } = await supabase
      .from('contatos')
      .insert({
        nome: dados.nome,
        email: dados.email,
        telefone: dados.telefone,
        empresa: dados.empresa,
        area_interesse: dados.area_interesse,
        mensagem: dados.mensagem || 'Nenhuma mensagem adicional',
        endereco_ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'desconhecido',
        navegador: request.headers.get('user-agent') || 'desconhecido',
        status: 'novo',
        origem: 'website'
      })
      .select();

    console.log('Resultado do Supabase:', { resultado, error });

    if (error) {
      console.error('Erro ao salvar no Supabase:', error);
      return json({
        success: false,
        errors: ['Erro interno. Tente novamente mais tarde.']
      }, { status: 500 });
    }

    console.log('Contato salvo com sucesso!');
    return json({
      success: true,
      message: 'Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.'
    });
  } catch (error) {
    console.error('Erro ao processar formulário:', error);
    return json({
      success: false,
      errors: ['Erro interno. Tente novamente mais tarde.']
    }, { status: 500 });
  }
}

export default function Contato() {
  const actionData = useActionData<typeof action>();

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #e2e8f0;
            background: #0a0f1c;
            overflow-x: hidden;
          }

          .contact-container {
            min-height: 100vh;
            background: linear-gradient(135deg, #0a0f1c 0%, #1a202c 50%, #0f172a 100%);
            position: relative;
          }

          .contact-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(10, 15, 28, 0.95);
            backdrop-filter: blur(15px);
            border-bottom: 1px solid rgba(51, 65, 85, 0.3);
          }

          .contact-nav {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .contact-logo {
            color: #0ea5e9;
            text-decoration: none;
            font-size: 1.75rem;
            font-weight: 800;
            background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .contact-back {
            color: #94a3b8;
            text-decoration: none;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
          }

          .contact-back:hover {
            color: #0ea5e9;
            transform: translateX(-3px);
          }

          .contact-hero {
            padding: 8rem 0 4rem;
            text-align: center;
            background: linear-gradient(135deg, #0a0f1c 0%, #1a202c 100%);
            position: relative;
            overflow: hidden;
          }

          .contact-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
            pointer-events: none;
          }

          .contact-hero-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 2rem;
            position: relative;
            z-index: 2;
          }

          .contact-hero-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 900;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #f8fafc 0%, #0ea5e9 50%, #3b82f6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.1;
          }

          .contact-hero-subtitle {
            font-size: 1.25rem;
            color: #94a3b8;
            max-width: 600px;
            margin: 0 auto 2rem;
            line-height: 1.6;
          }

          .contact-main {
            max-width: 800px;
            margin: 0 auto;
            padding: 4rem 2rem;
          }

          .contact-form-container {
            background: rgba(26, 32, 44, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(51, 65, 85, 0.3);
            border-radius: 20px;
            padding: 3rem;
            position: relative;
            overflow: hidden;
          }

          .contact-form-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
          }

          .success-message {
            background: rgba(34, 197, 94, 0.1);
            border: 1px solid rgba(34, 197, 94, 0.3);
            color: #22c55e;
            padding: 1.5rem;
            border-radius: 12px;
            margin-bottom: 2rem;
            text-align: center;
          }

          .error-message {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #ef4444;
            padding: 1.5rem;
            border-radius: 12px;
            margin-bottom: 2rem;
          }

          .form-group {
            margin-bottom: 1.5rem;
          }

          .form-group-double {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 1.5rem;
          }

          .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: #f8fafc;
            font-size: 0.95rem;
          }

          .form-input,
          .form-select,
          .form-textarea {
            width: 100%;
            padding: 1rem 1.25rem;
            background: rgba(30, 41, 59, 0.8);
            border: 1px solid rgba(71, 85, 105, 0.5);
            border-radius: 12px;
            color: #e2e8f0;
            font-size: 1rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .form-input:focus,
          .form-select:focus,
          .form-textarea:focus {
            outline: none;
            border-color: #0ea5e9;
            box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
            background: rgba(30, 41, 59, 0.9);
          }

          .form-input::placeholder,
          .form-textarea::placeholder {
            color: #64748b;
          }

          .form-textarea {
            resize: vertical;
            min-height: 120px;
          }

          .form-button {
            width: 100%;
            padding: 1.25rem 2rem;
            background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 1rem;
          }

          .form-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(14, 165, 233, 0.3);
            background: linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%);
          }

          .contact-info {
            margin-top: 3rem;
            text-align: center;
            padding: 2rem;
            background: rgba(15, 23, 42, 0.6);
            border-radius: 16px;
          }

          .contact-info h3 {
            color: #0ea5e9;
            margin-bottom: 1rem;
            font-size: 1.3rem;
          }

          .contact-info p {
            color: #94a3b8;
            margin-bottom: 0.5rem;
          }

          .whatsapp-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: #25d366;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            margin-top: 1rem;
            transition: all 0.3s ease;
          }

          .whatsapp-link:hover {
            background: #128c7e;
            transform: translateY(-2px);
          }

          @media (max-width: 768px) {
            .contact-nav {
              padding: 1rem;
            }

            .contact-hero {
              padding: 6rem 0 3rem;
            }

            .contact-main {
              padding: 2rem 1rem;
            }

            .contact-form-container {
              padding: 2rem 1.5rem;
            }

            .form-group-double {
              grid-template-columns: 1fr;
              gap: 0;
            }

            .contact-hero-title {
              font-size: 2.5rem;
            }
          }
        `
      }} />

      <div className="contact-container">
        {/* Header */}
        <header className="contact-header">
          <nav className="contact-nav">
            <Link to="/" className="contact-logo">
              <img src="/logo_raiseup.png" alt="RaiseUp Logo" style={{ height: '32px' }} />
            </Link>
            <Link to="/" className="contact-back">
              ← Voltar ao Site
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">
              Fale Conosco
            </h1>
            <p className="contact-hero-subtitle">
              Pronto para transformar seu negócio com automações inteligentes? 
              Entre em contato e descubra como podemos ajudar.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="contact-main">
          <div className="contact-form-container">
            {/* Success Message */}
            {actionData?.success && (
              <div className="success-message">
                <h3>✅ Mensagem Enviada com Sucesso!</h3>
                <p>{actionData.message}</p>
              </div>
            )}

            {/* Error Messages */}
            {actionData?.success === false && (
              <div className="error-message">
                <h3>❌ Corrija os seguintes erros:</h3>
                <ul>
                  {actionData.errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <form method="POST">
              <div className="form-group-double">
                <div className="form-group">
                  <label htmlFor="nome" className="form-label">
                    Nome Completo *
                  </label>
                  <input 
                    type="text" 
                    id="nome" 
                    name="nome" 
                    className="form-input"
                    placeholder="Seu nome completo"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input"
                    placeholder="seu@email.com"
                    required 
                  />
                </div>
              </div>

              <div className="form-group-double">
                <div className="form-group">
                  <label htmlFor="telefone" className="form-label">
                    Telefone *
                  </label>
                  <input 
                    type="tel" 
                    id="telefone" 
                    name="telefone" 
                    className="form-input"
                    placeholder="(11) 99999-9999"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="empresa" className="form-label">
                    Empresa
                  </label>
                  <input 
                    type="text" 
                    id="empresa" 
                    name="empresa" 
                    className="form-input"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="area_interesse" className="form-label">
                  Área de Interesse *
                </label>
                <select 
                  id="area_interesse" 
                  name="area_interesse" 
                  className="form-select"
                  required
                >
                  <option value="">Selecione uma área de interesse</option>
                  <option value="conversacional">Agentes Conversacionais</option>
                  <option value="midias-sociais">Agentes de Mídias Sociais</option>
                  <option value="produtividade">Agentes de Produtividade</option>
                  <option value="consultoria">Consultoria em IA</option>
                  <option value="integracao">Integração de Sistemas</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="mensagem" className="form-label">
                  Mensagem
                </label>
                <textarea 
                  id="mensagem" 
                  name="mensagem" 
                  className="form-textarea"
                  placeholder="Conte-nos sobre seu projeto e como podemos ajudar... (opcional)"
                />
              </div>

              <button type="submit" className="form-button">
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Outras Formas de Contato</h3>
            <p>📧 contato@raiseup.com.br</p>
            <p>📱 +55 (19) 98147-6177</p>
            <a href="https://wa.me/5519981476177" className="whatsapp-link" target="_blank" rel="noopener noreferrer">
              💬 Falar no WhatsApp
            </a>
          </div>
        </main>
      </div>
    </>
  );
}