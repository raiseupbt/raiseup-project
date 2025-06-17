import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData, useNavigation } from "@remix-run/react";
import { useEffect, useState } from "react";


export async function action({ request }: ActionFunctionArgs) {
  // Redireciona para a API route
  const formData = await request.formData();
  
  const response = await fetch(`${new URL(request.url).origin}/api/contato`, {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  
  if (!response.ok) {
    return json(result, { status: response.status });
  }

  return json(result);
}

export default function Contato() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [telefone, setTelefone] = useState("");

  const isSubmitting = navigation.state === "submitting";

  const formatarTelefone = (valor: string) => {
    // Remove tudo que não é dígito
    const numeros = valor.replace(/\D/g, '');
    
    // Aplica a máscara
    if (numeros.length <= 10) {
      return numeros.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
      return numeros.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormatado = formatarTelefone(e.target.value);
    setTelefone(valorFormatado);
  };

  useEffect(() => {
    if (actionData?.sucesso) {
      setShowSuccess(true);
      setShowError(false);
      // Limpa o formulário
      setTelefone("");
      // Limpa a mensagem após 5 segundos
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    } else if (actionData?.erro || actionData?.erros) {
      setShowError(true);
      setShowSuccess(false);
    }
  }, [actionData]);

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
          }

          :root {
            --primary-bg: #0a0f1c;
            --secondary-bg: #1a202c;
            --tertiary-bg: #2d3748;
            --primary-blue: #0ea5e9;
            --text-primary: #f8fafc;
            --text-secondary: #e2e8f0;
            --text-muted: #94a3b8;
            --border-color: #334155;
            --gradient-primary: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%);
            --container-max-width: 1200px;
            --section-padding: 100px 0;
            --border-radius: 12px;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .container {
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
          }

          .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(10, 15, 28, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--border-color);
          }

          .navbar {
            padding: 1rem 0;
          }

          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
          }

          .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
            color: inherit;
          }

          .logo img {
            height: 80px;
            width: auto;
            filter: brightness(0) invert(1);
          }

          .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
            align-items: center;
          }

          .nav-link {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
          }

          .nav-link:hover {
            color: var(--primary-blue);
          }

          .hero {
            min-height: 50vh;
            display: flex;
            align-items: center;
            padding: 8rem 0 4rem;
            background: var(--secondary-bg);
          }

          .hero-content {
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
          }

          h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            line-height: 1.2;
            color: var(--text-primary);
            margin-bottom: 1.5rem;
          }

          .highlight {
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 2.5rem;
            color: var(--text-muted);
          }

          section {
            padding: var(--section-padding);
          }

          .contact {
            background: var(--primary-bg);
          }

          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
          }

          .contact-info {
            padding: 2rem;
          }

          .contact-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
            padding: 1.5rem;
            background: var(--secondary-bg);
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            transition: var(--transition);
          }

          .contact-item:hover {
            border-color: var(--primary-blue);
            box-shadow: 0 0 20px rgba(14, 165, 233, 0.3);
          }

          .contact-icon {
            width: 50px;
            height: 50px;
            background: var(--gradient-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            color: white;
            flex-shrink: 0;
          }

          .contact-details h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
          }

          .contact-details p {
            color: var(--text-muted);
            margin: 0;
          }

          .contact-form {
            background: var(--secondary-bg);
            padding: 2rem;
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
          }

          .form-group {
            margin-bottom: 1.5rem;
          }

          .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
            font-weight: 500;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            width: 100%;
            padding: 0.75rem 1rem;
            background: var(--tertiary-bg);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            color: var(--text-primary);
            font-family: inherit;
            transition: var(--transition);
          }

          .form-group input:focus,
          .form-group select:focus,
          .form-group textarea:focus {
            outline: none;
            border-color: var(--primary-blue);
            box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
          }

          .form-group textarea {
            min-height: 120px;
            resize: vertical;
          }

          .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: var(--border-radius);
            transition: var(--transition);
            cursor: pointer;
            border: none;
            width: 100%;
            justify-content: center;
          }

          .btn-primary {
            background: var(--gradient-primary);
            color: white;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 0 20px rgba(14, 165, 233, 0.3);
          }

          .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }

          .alert {
            padding: 1rem;
            border-radius: var(--border-radius);
            margin-bottom: 1.5rem;
            border: 1px solid;
          }

          .alert-success {
            background: rgba(34, 197, 94, 0.1);
            border-color: rgba(34, 197, 94, 0.3);
            color: #22c55e;
          }

          .alert-error {
            background: rgba(239, 68, 68, 0.1);
            border-color: rgba(239, 68, 68, 0.3);
            color: #ef4444;
          }

          .loading {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          h2 {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700;
            line-height: 1.2;
            color: var(--text-primary);
            margin-bottom: 1rem;
          }

          @media (max-width: 768px) {
            .nav-container {
              padding: 0 1rem;
            }
            
            .contact-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
          }
        `
      }} />

      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-container">
            <a href="/" className="logo">
              <img src="/logo_raiseup.png" alt="RaiseUp Logo" />
            </a>
            
            <ul className="nav-menu">
              <li><a href="/" className="nav-link">Início</a></li>
              <li><a href="/#about" className="nav-link">Sobre</a></li>
              <li><a href="/#services" className="nav-link">Serviços</a></li>
              <li><a href="/blog" className="nav-link">Blog</a></li>
              <li><a href="/contato" className="nav-link">Contato</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>
                Vamos <span className="highlight">Transformar</span> Seu Negócio
              </h1>
              
              <p className="hero-subtitle">
                Entre em contato conosco e descubra como nossas automações com IA 
                podem revolucionar sua empresa mantendo o toque humano.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Entre em Contato</h2>
                <p style={{marginBottom: '2rem', color: 'var(--text-muted)'}}>
                  Estamos prontos para ajudar você a automatizar e otimizar seus processos. 
                  Entre em contato através de qualquer um dos canais abaixo.
                </p>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>contato@raiseup.com.br</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fab fa-instagram"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Instagram</h3>
                    <p><a href="https://www.instagram.com/raiseup_bt/" target="_blank" style={{color: 'var(--primary-blue)', textDecoration: 'none'}}>@raiseup_bt</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="contact-details">
                    <h3>WhatsApp</h3>
                    <p><a href="https://wa.me/5519981476177" target="_blank" style={{color: 'var(--primary-blue)', textDecoration: 'none'}}>(19) 98147-6177</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="contact-details">
                    <h3>LinkedIn</h3>
                    <p>Em breve</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-form">
                <h2>Agende sua Consultoria Gratuita</h2>
                
                {/* Mensagens de sucesso/erro */}
                {showSuccess && (
                  <div className="alert alert-success">
                    ✅ {actionData?.mensagem || 'Contato enviado com sucesso!'}
                  </div>
                )}
                
                {showError && actionData?.erro && (
                  <div className="alert alert-error">
                    ❌ {actionData.erro}
                  </div>
                )}
                
                {showError && actionData?.erros && (
                  <div className="alert alert-error">
                    ❌ Corrija os seguintes erros:
                    <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem'}}>
                      {actionData.erros.map((erro: any, index: number) => (
                        <li key={index}>{erro.mensagem}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <form method="POST">
                  <div className="form-group">
                    <label htmlFor="name">Nome Completo*</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Telefone*</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={telefone}
                      onChange={handleTelefoneChange}
                      placeholder="(11) 99999-9999"
                      maxLength={15}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Empresa</label>
                    <input type="text" id="company" name="company" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="interest">Área de Interesse*</label>
                    <select id="interest" name="interest" required>
                      <option value="">Selecione uma opção</option>
                      <option value="conversacional">Agentes Conversacionais</option>
                      <option value="midias-sociais">Agentes para Mídias Sociais</option>
                      <option value="produtividade">Agentes de Produtividade</option>
                      <option value="todos">Todas as Soluções</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Conte-nos mais sobre seu projeto e como podemos ajudar..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="loading"></span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}