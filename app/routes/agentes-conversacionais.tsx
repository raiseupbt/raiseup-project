
import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return {
    title: "Agentes Conversacionais - RaiseUp",
    description: "Agentes Conversacionais da RaiseUp: Atendimento 24/7 inteligente para WhatsApp e outras plataformas. Automatize o atendimento mantendo o toque humano."
  };
};

export default function AgentesConversacionais() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #e2e8f0;
            background: #1a2332;
            overflow-x: hidden;
          }

          :root {
            --primary-green: #10b981;
            --green-light: #34d399;
            --green-dark: #059669;
            --cyan: #06b6d4;
            --blue-gradient: linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #0ea5e9 100%);
            --green-gradient: linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%);
            
            --text-primary: #f8fafc;
            --text-secondary: #e2e8f0;
            --text-muted: #94a3b8;
            
            --container-max-width: 1200px;
            --section-padding: 100px 0;
            --border-radius: 20px;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            --shadow-glow: 0 0 40px rgba(16, 185, 129, 0.3);
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
            background: rgba(15, 32, 39, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(16, 185, 129, 0.2);
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

          .logo-text h2 {
            font-size: 1.75rem;
            background: var(--blue-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0;
            font-weight: 800;
          }

          .logo-tagline {
            font-size: 0.75rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-top: -4px;
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
            position: relative;
          }

          .nav-link:hover {
            color: var(--primary-green);
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--green-gradient);
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .nav-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 4px;
            padding: 0.5rem;
          }

          .nav-toggle span {
            width: 25px;
            height: 3px;
            background: var(--text-secondary);
            transition: var(--transition);
            border-radius: 2px;
          }

          .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }

          .nav-toggle.active span:nth-child(2) {
            opacity: 0;
          }

          .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
          }

          .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 8rem 0 4rem;
            position: relative;
            background: #1a2332;
            overflow: hidden;
          }

          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 40%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 60%, rgba(6, 182, 212, 0.2) 0%, transparent 50%);
          }

          .hero-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            position: relative;
            z-index: 1;
          }

          .hero-content {
            animation: slideInLeft 1s ease-out;
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid var(--primary-green);
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--primary-green);
            margin-bottom: 2rem;
            backdrop-filter: blur(10px);
          }

          .hero h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #f8fafc 0%, #10b981 50%, #06b6d4 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hero p {
            font-size: 1.25rem;
            color: var(--text-muted);
            margin-bottom: 2.5rem;
            line-height: 1.7;
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
            position: relative;
            overflow: hidden;
          }

          .btn-primary {
            background: var(--green-gradient);
            color: white;
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
          }

          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px rgba(16, 185, 129, 0.4);
          }

          .chat-demo {
            background: rgba(255, 255, 255, 0.05);
            border-radius: var(--border-radius);
            padding: 2rem;
            backdrop-filter: blur(20px);
            border: 1px solid rgba(16, 185, 129, 0.2);
            animation: slideInRight 1s ease-out;
            position: relative;
            max-width: 500px;
            margin: 0 auto;
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .chat-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(16, 185, 129, 0.2);
          }

          .chat-avatar {
            width: 40px;
            height: 40px;
            background: var(--green-gradient);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
          }

          .chat-info h4 {
            color: var(--text-primary);
            font-size: 1rem;
            margin: 0;
          }

          .chat-status {
            color: var(--primary-green);
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .status-dot {
            width: 8px;
            height: 8px;
            background: var(--primary-green);
            border-radius: 50%;
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

          .chat-messages {
            space-y: 1rem;
          }

          .message {
            margin-bottom: 1rem;
            animation: messageSlide 0.5s ease-out;
          }

          @keyframes messageSlide {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .message-user {
            text-align: right;
          }

          .message-bot {
            text-align: left;
          }

          .message-bubble {
            display: inline-block;
            padding: 0.75rem 1rem;
            border-radius: 1rem;
            max-width: 80%;
            font-size: 0.9rem;
            line-height: 1.4;
          }

          .message-user .message-bubble {
            background: var(--green-gradient);
            color: white;
          }

          .message-bot .message-bubble {
            background: rgba(255, 255, 255, 0.1);
            color: var(--text-secondary);
            border: 1px solid rgba(16, 185, 129, 0.2);
          }

          .typing-indicator {
            display: flex;
            gap: 4px;
            padding: 0.75rem 1rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            border: 1px solid rgba(16, 185, 129, 0.2);
            width: fit-content;
          }

          .typing-dot {
            width: 6px;
            height: 6px;
            background: var(--primary-green);
            border-radius: 50%;
            animation: typing 1.4s infinite;
          }

          .typing-dot:nth-child(2) { animation-delay: 0.2s; }
          .typing-dot:nth-child(3) { animation-delay: 0.4s; }

          @keyframes typing {
            0%, 60%, 100% { opacity: 0.3; }
            30% { opacity: 1; }
          }

          section {
            padding: var(--section-padding);
            position: relative;
          }

          .features {
            background: linear-gradient(135deg, #0f2027 0%, #203a43 100%);
          }

          .section-header {
            text-align: center;
            margin-bottom: 4rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .section-tag {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: var(--green-gradient);
            color: white;
            font-size: 0.875rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-radius: 50px;
            margin-bottom: 1rem;
          }

          .section-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary-green) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .section-subtitle {
            font-size: 1.25rem;
            color: var(--text-muted);
            max-width: 600px;
            margin: 0 auto;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .feature-card {
            padding: 2rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: var(--border-radius);
            border: 1px solid rgba(16, 185, 129, 0.2);
            transition: var(--transition);
            backdrop-filter: blur(20px);
            text-align: center;
          }

          .feature-card:hover {
            transform: translateY(-10px);
            border-color: var(--primary-green);
            box-shadow: var(--shadow-glow);
          }

          .feature-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            background: var(--green-gradient);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
          }

          .feature-card h3 {
            margin-bottom: 1rem;
            color: var(--text-primary);
            font-size: 1.25rem;
          }

          .feature-card p {
            color: var(--text-secondary);
            line-height: 1.7;
          }

          .why-choose {
            background: linear-gradient(135deg, #203a43 0%, #2c5364 100%);
          }

          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .benefit-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            border: 1px solid rgba(16, 185, 129, 0.2);
            backdrop-filter: blur(20px);
          }

          .benefit-icon {
            width: 50px;
            height: 50px;
            background: var(--green-gradient);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.25rem;
            flex-shrink: 0;
          }

          .benefit-content h4 {
            color: var(--text-primary);
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
          }

          .benefit-content p {
            color: var(--text-secondary);
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .cta-section {
            background: var(--green-gradient);
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .cta-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          }

          .cta-content {
            position: relative;
            z-index: 1;
            max-width: 600px;
            margin: 0 auto;
          }

          .cta-section h2 {
            font-size: clamp(2rem, 4vw, 3rem);
            color: white;
            margin-bottom: 1rem;
            font-weight: 800;
          }

          .cta-section p {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 2rem;
            line-height: 1.6;
          }

          .btn-secondary {
            background: transparent;
            color: var(--primary-green);
            font-weight: 700;
            border: 2px solid var(--primary-green);
            box-shadow: none;
          }

          .btn-secondary:hover {
            transform: translateY(-3px);
            background: rgba(16, 185, 129, 0.1);
            box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
          }

          .hero-buttons {
            display: flex;
            gap: 1rem;
            align-items: center;
          }

          @media (max-width: 768px) {
            .nav-menu {
              position: fixed;
              top: 0;
              right: -100%;
              width: 100%;
              height: 100vh;
              background: rgba(15, 32, 39, 0.98);
              backdrop-filter: blur(20px);
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 3rem;
              transition: var(--transition);
              z-index: 999;
            }

            .nav-menu.active {
              right: 0;
            }

            .nav-menu .nav-link {
              font-size: 1.25rem;
              font-weight: 600;
            }

            .nav-toggle {
              display: flex;
              z-index: 1001;
            }

            .hero-container {
              grid-template-columns: 1fr;
              gap: 2rem;
              text-align: center;
              padding-top: 2rem;
            }
            
            .nav-container {
              padding: 0 1rem;
            }

            .features-grid,
            .benefits-grid {
              grid-template-columns: 1fr;
            }

            .chat-demo {
              max-width: 100%;
              margin: 2rem 0;
            }

            .container {
              padding: 0 1rem;
            }

            .hero-buttons {
              flex-direction: column;
              align-items: center;
              gap: 1rem;
            }

            .btn {
              width: 100%;
              max-width: 300px;
              justify-content: center;
            }
          }

          @media (max-width: 480px) {
            .nav-container {
              padding: 0 0.5rem;
            }

            .logo img {
              height: 60px;
            }

            .hero-content h1 {
              font-size: 2rem;
            }

            .hero-buttons {
              gap: 0.5rem;
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
            
            <ul className="nav-menu" id="nav-menu">
              <li><a href="/" className="nav-link">Início</a></li>
              <li><a href="/#about" className="nav-link" onClick={() => document.getElementById('nav-menu')?.classList.remove('active')}>Sobre</a></li>
              <li><a href="/#services" className="nav-link" onClick={() => document.getElementById('nav-menu')?.classList.remove('active')}>Serviços</a></li>
              <li><a href="/blog" className="nav-link">Blog</a></li>
              <li><a href="/contato" className="nav-link">Contato</a></li>
            </ul>
            
            <div className="nav-toggle" id="nav-toggle" onClick={() => {
              const navMenu = document.getElementById('nav-menu');
              const navToggle = document.getElementById('nav-toggle');
              navMenu?.classList.toggle('active');
              navToggle?.classList.toggle('active');
            }}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-container">
              <div className="hero-content">
                <div className="hero-badge">
                  <i className="fas fa-comments"></i>
                  <span>Agentes Conversacionais</span>
                </div>
                
                <h1>
                  Atendimento<br/>24/7 que <span style={{background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Nunca</span><br/>Perde a Empatia
                </h1>
                
                <p>
                  Transforme seu atendimento ao cliente com agentes conversacionais que combinam inteligência artificial avançada com o toque humano que seus clientes merecem.
                </p>
                
                <div className="hero-buttons">
                  <a href="/contato" className="btn btn-primary">
                    <i className="fas fa-check"></i>
                    Implementar Agora
                  </a>
                  <a href="#funcionalidades" className="btn btn-secondary">
                    <i className="fas fa-eye"></i>
                    Ver Funcionalidades
                  </a>
                </div>
              </div>
              
              <div className="chat-demo">
                <div className="chat-header">
                  <div className="chat-avatar">AI</div>
                  <div className="chat-info">
                    <h4>Agente RaiseUp</h4>
                    <div className="chat-status">
                      <div className="status-dot"></div>
                      Online agora
                    </div>
                  </div>
                </div>
                
                <div className="chat-messages">
                  <div className="message message-user">
                    <div className="message-bubble">
                      Olá! Preciso de ajuda com meu pedido
                    </div>
                  </div>
                  
                  <div className="message message-bot">
                    <div className="message-bubble">
                      Claro! Vou verificar seu pedido agora mesmo. 
                      Qual o número?
                    </div>
                  </div>
                  
                  <div className="message message-user">
                    <div className="message-bubble">
                      Perfeito! Muito obrigado pela agilidade! 😊
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="funcionalidades" className="features">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Funcionalidades</span>
              <h2 className="section-title">Recursos Avançados dos Nossos Agentes</h2>
              <p className="section-subtitle">
                Tecnologia de ponta para revolucionar seu atendimento ao cliente
              </p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h3>IA Conversacional Avançada</h3>
                <p>
                  Processamento de linguagem natural que entende contexto, 
                  intenções e nuances da comunicação humana para conversas mais naturais.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Disponibilidade 24/7</h3>
                <p>
                  Atendimento ininterrupto que nunca dorme, garantindo 
                  suporte aos seus clientes a qualquer hora do dia ou da noite.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Análise de Sentimentos</h3>
                <p>
                  Detecta emoções e ajusta o tom da conversa para 
                  proporcionar uma experiência mais empática e humana.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-link"></i>
                </div>
                <h3>Integração Completa</h3>
                <p>
                  Conecta-se facilmente com CRM, sistemas de vendas 
                  e outras ferramentas da sua empresa para máxima eficiência.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3>Multicanal</h3>
                <p>
                  Funciona em WhatsApp, site, Instagram, Facebook 
                  e outros canais para uma experiência unificada.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Analytics Detalhados</h3>
                <p>
                  Relatórios completos sobre interações, satisfação 
                  e oportunidades de melhoria com insights acionáveis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="why-choose">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Vantagens</span>
              <h2 className="section-title">Por que Escolher Nossos Agentes Conversacionais?</h2>
              <p className="section-subtitle">
                Diferenciais que fazem a diferença no seu atendimento
              </p>
            </div>
            
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <div className="benefit-content">
                  <h4>Resposta Instantânea</h4>
                  <p>Atendimento imediato sem filas de espera, aumentando a satisfação do cliente</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="benefit-content">
                  <h4>Personalização Inteligente</h4>
                  <p>Cada conversa é adaptada ao perfil e histórico do cliente para máxima relevância</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="benefit-content">
                  <h4>Segurança de Dados</h4>
                  <p>Proteção total das informações com criptografia de ponta a ponta</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <div className="benefit-content">
                  <h4>Escalabilidade Infinita</h4>
                  <p>Atende milhares de clientes simultaneamente sem perder qualidade</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="benefit-content">
                  <h4>Aprendizado Contínuo</h4>
                  <p>Melhora constantemente através de machine learning e feedback dos usuários</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <div className="benefit-content">
                  <h4>Redução de Custos</h4>
                  <p>Diminui significativamente os custos operacionais do atendimento</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Pronto para Revolucionar seu Atendimento?</h2>
              <p>
                Descubra como nossos agentes conversacionais podem transformar 
                a experiência dos seus clientes e impulsionar seus resultados.
              </p>
              <a href="/contato" className="btn btn-primary">
                <i className="fas fa-phone"></i>
                Solicitar Demonstração Gratuita
              </a>
            </div>
          </div>
        </section>
      </main>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Chat animation
          document.addEventListener('DOMContentLoaded', () => {
            const messages = document.querySelectorAll('.message');
            messages.forEach((message, index) => {
              message.style.animationDelay = (index * 0.8) + 's';
            });

            // Auto-scroll chat demo
            const chatDemo = document.querySelector('.chat-demo');
            if (chatDemo) {
              chatDemo.addEventListener('mouseenter', () => {
                chatDemo.style.transform = 'scale(1.02)';
              });
              chatDemo.addEventListener('mouseleave', () => {
                chatDemo.style.transform = 'scale(1)';
              });
            }
          });
        `
      }} />
      <Footer />
    </>
  );
}