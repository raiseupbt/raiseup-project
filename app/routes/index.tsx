import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return {
    title: "RaiseUp - Automação com IA Humanizada",
    description: "RaiseUp oferece soluções de automação empresarial com IA para atendimento 24/7, gestão de mídias sociais e otimização de processos. Automatize mantendo o toque humano."
  };
};

export default function Index() {
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
            background: #0a0f1c;
            overflow-x: hidden;
          }

          /* Garantir que o footer tenha a fonte correta */
          .footer-container,
          .footer-container * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }

          :root {
            --primary-bg: #0a0f1c;
            --secondary-bg: #1a202c;
            --tertiary-bg: #2d3748;
            --accent-bg: #1e3a8a;
            --accent-light: #3b82f6;
            --accent-darker: #1e40af;
            
            --primary-blue: #0ea5e9;
            --blue-light: #38bdf8;
            --blue-dark: #0284c7;
            --cyan: #06b6d4;
            --purple: #8b5cf6;
            
            --text-primary: #f8fafc;
            --text-secondary: #e2e8f0;
            --text-muted: #94a3b8;
            --text-accent: #0ea5e9;
            
            --border-color: #334155;
            --border-light: #475569;
            
            --gradient-primary: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%);
            --gradient-secondary: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
            --gradient-dark: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            
            --container-max-width: 1200px;
            --section-padding: 100px 0;
            --card-padding: 2rem;
            
            --border-radius: 12px;
            --border-radius-lg: 20px;
            
            --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
            --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
            --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
            --shadow-glow: 0 0 20px rgba(14, 165, 233, 0.3);
            
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            --transition-fast: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }

          h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
            line-height: 1.2;
            color: var(--text-primary);
          }

          h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
          h2 { font-size: clamp(2rem, 4vw, 3rem); }
          h3 { font-size: clamp(1.5rem, 3vw, 2rem); }
          h4 { font-size: 1.25rem; }

          p {
            font-size: 1.1rem;
            color: var(--text-secondary);
            line-height: 1.7;
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
            transition: var(--transition);
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
            position: relative;
            padding: 8rem 0 4rem;
            overflow: hidden;
          }

          .hero-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
          }

          .hero-grid {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: gridMove 20s linear infinite;
          }

          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }

          .hero-container {
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }

          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: rgba(14, 165, 233, 0.1);
            border: 1px solid var(--primary-blue);
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--primary-blue);
            margin-bottom: 2rem;
          }

          .hero-title {
            margin-bottom: 1.5rem;
            line-height: 1.1;
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

          .hero-buttons {
            display: flex;
            gap: 1rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
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
          }

          .btn-primary {
            background: var(--gradient-primary);
            color: white;
            box-shadow: var(--shadow-md);
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg), var(--shadow-glow);
          }

          .btn-secondary {
            background: transparent;
            color: var(--text-primary);
            border: 2px solid var(--primary-blue);
          }

          .btn-secondary:hover {
            background: var(--primary-blue);
            color: white;
            transform: translateY(-2px);
            box-shadow: var(--shadow-glow);
          }

          .hero-stats {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
          }

          .stat {
            text-align: center;
          }

          .stat-number {
            display: block;
            font-size: 2rem;
            font-weight: 800;
            color: var(--primary-blue);
            line-height: 1;
          }

          .stat-label {
            font-size: 0.875rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .hero-visual {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 500px;
            position: relative;
          }

          .ai-animation {
            position: relative;
            width: 300px;
            height: 300px;
          }

          .ai-circle {
            position: absolute;
            border: 2px solid var(--primary-blue);
            border-radius: 50%;
            opacity: 0.3;
          }

          .ai-circle-1 {
            width: 100px;
            height: 100px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: pulse 2s ease-in-out infinite;
          }

          .ai-circle-2 {
            width: 200px;
            height: 200px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: pulse 2s ease-in-out infinite 0.5s;
          }

          .ai-circle-3 {
            width: 300px;
            height: 300px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: pulse 2s ease-in-out infinite 1s;
          }

          .ai-brain {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            color: var(--primary-blue);
            animation: glow 2s ease-in-out infinite alternate;
          }

          @keyframes pulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
            50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.6; }
          }

          @keyframes glow {
            0% { text-shadow: 0 0 20px var(--primary-blue); }
            100% { text-shadow: 0 0 30px var(--primary-blue), 0 0 40px var(--primary-blue); }
          }

          section {
            padding: var(--section-padding);
            position: relative;
          }

          .about {
            background: var(--secondary-bg);
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
            background: var(--gradient-primary);
            color: white;
            font-size: 0.875rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-radius: 50px;
            margin-bottom: 1rem;
          }

          .section-title {
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--blue-light) 100%);
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

          .about-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .about-card {
            padding: var(--card-padding);
            background: var(--tertiary-bg);
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            transition: var(--transition);
            text-align: center;
          }

          .about-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary-blue);
            box-shadow: var(--shadow-glow);
          }

          .about-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            background: var(--gradient-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
          }

          .services {
            background: var(--primary-bg);
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .service-card {
            padding: var(--card-padding);
            background: var(--secondary-bg);
            border-radius: var(--border-radius-lg);
            border: 1px solid var(--border-color);
            transition: var(--transition);
            position: relative;
            overflow: hidden;
          }

          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: var(--gradient-primary);
          }

          .service-card:hover {
            transform: translateY(-10px);
            border-color: var(--primary-blue);
            box-shadow: var(--shadow-lg), var(--shadow-glow);
          }

          .service-card-featured {
            border: 2px solid var(--primary-blue);
            box-shadow: var(--shadow-glow);
          }

          .service-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1.5rem;
          }

          .service-icon {
            width: 60px;
            height: 60px;
            background: var(--gradient-primary);
            border-radius: var(--border-radius);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: white;
          }

          .service-badge {
            background: var(--gradient-primary);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 50px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
          }

          .service-features {
            list-style: none;
            margin-bottom: 2rem;
          }

          .service-features li {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.5rem 0;
            color: var(--text-secondary);
          }

          .service-features i {
            color: var(--primary-blue);
            font-size: 0.875rem;
          }

          .btn-outline {
            background: transparent;
            color: var(--primary-blue);
            border: 1px solid var(--primary-blue);
            padding: 0.75rem 1.5rem;
            font-size: 0.9rem;
          }

          .btn-outline:hover {
            background: var(--primary-blue);
            color: white;
          }

          .cta {
            background: var(--gradient-secondary);
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .cta-content {
            position: relative;
            z-index: 1;
            max-width: 600px;
            margin: 0 auto;
          }

          .cta h2 {
            margin-bottom: 1rem;
            color: white;
          }

          .cta p {
            margin-bottom: 2rem;
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.25rem;
          }

          .btn-large {
            padding: 1.25rem 2.5rem;
            font-size: 1.1rem;
          }

          @media (max-width: 768px) {
            .nav-menu {
              position: fixed;
              top: 0;
              right: -100%;
              width: 100%;
              height: 100vh;
              background: rgba(10, 15, 28, 0.98);
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
            
            .hero-visual {
              height: 300px;
            }
            
            .ai-animation {
              width: 200px;
              height: 200px;
            }
            
            .ai-brain {
              font-size: 2rem;
            }
            
            .hero-buttons {
              justify-content: center;
              flex-direction: column;
              align-items: center;
            }
            
            .hero-stats {
              justify-content: center;
            }

            .nav-container {
              padding: 0 1rem;
            }

            .about-grid {
              grid-template-columns: 1fr;
            }

            .services-grid {
              grid-template-columns: 1fr;
            }

            .container {
              padding: 0 1rem;
            }

            h1 { font-size: 2.5rem; }
            h2 { font-size: 2rem; }
            
            .hero-subtitle {
              font-size: 1.1rem;
            }

            .section-subtitle {
              font-size: 1.1rem;
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

            h1 { font-size: 2rem; }
            
            .hero-buttons {
              gap: 0.5rem;
            }

            .hero-stats {
              gap: 1rem;
            }

            .stat-number {
              font-size: 1.5rem;
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
              <li><a href="#home" className="nav-link" onClick={() => document.getElementById('nav-menu')?.classList.remove('active')}>Início</a></li>
              <li><a href="#about" className="nav-link" onClick={() => document.getElementById('nav-menu')?.classList.remove('active')}>Sobre</a></li>
              <li><a href="#services" className="nav-link" onClick={() => document.getElementById('nav-menu')?.classList.remove('active')}>Serviços</a></li>
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
        <section id="home" className="hero">
          <div className="hero-background">
            <div className="hero-grid"></div>
          </div>
          
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <i className="fas fa-robot"></i>
                <span>Automações com IA Humanizada</span>
              </div>
              
              <h1 className="hero-title">
                Transformação Digital que <span className="highlight">Eleva Pessoas</span>
              </h1>
              
              <p className="hero-subtitle">
                Liberamos sua equipe de tarefas repetitivas através de automações inteligentes, 
                preservando o que há de mais valioso: a criatividade, empatia e o cuidado humano.
              </p>
              
              <div className="hero-buttons">
                <a href="/contato" className="btn btn-primary">
                  <i className="fas fa-rocket"></i>
                  Transformar Meu Negócio
                </a>
                <a href="#services" className="btn btn-secondary">
                  <i className="fas fa-play"></i>
                  Ver Soluções
                </a>
              </div>
              
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Frentes de Atuação</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Foco no Humano</span>
                </div>
                <div className="stat">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Possibilidades</span>
                </div>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="ai-animation">
                <div className="ai-circle ai-circle-1"></div>
                <div className="ai-circle ai-circle-2"></div>
                <div className="ai-circle ai-circle-3"></div>
                <div className="ai-brain">
                  <i className="fas fa-brain"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Sobre a RaiseUp</span>
              <h2 className="section-title">IA para Liberar o Potencial Humano</h2>
              <p className="section-subtitle">
                Acreditamos que a tecnologia deve servir às pessoas, não substituí-las. Nossa missão é 
                acelerar o desenvolvimento intelectual coletivo através de automações que preservam a essência humana.
              </p>
            </div>
            
            <div className="about-grid">
              <div className="about-card">
                <div className="about-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Nossa Filosofia</h3>
                <p>
                  IA para liberar pessoas de tarefas repetitivas, focando na empatia, 
                  criatividade e cuidado humano em cada solução desenvolvida.
                </p>
              </div>
              
              <div className="about-card">
                <div className="about-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Nossa Missão</h3>
                <p>
                  Realizar transformações digitais que elevam a produtividade sem perder o toque humano, 
                  acelerando o desenvolvimento intelectual coletivo.
                </p>
              </div>
              
              <div className="about-card">
                <div className="about-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Nossa Visão</h3>
                <p>
                  Um futuro onde tecnologia e humanidade trabalham em perfeita harmonia, 
                  potencializando o que cada pessoa tem de melhor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Nossas Soluções</span>
              <h2 className="section-title">3 Frentes de Atuação Estratégicas</h2>
              <p className="section-subtitle">
                Cobrimos todas as necessidades de automação da sua empresa com foco na experiência humana
              </p>
            </div>
            
            <div className="services-grid">
              <div className="service-card service-card-featured">
                <div className="service-header">
                  <div className="service-icon">
                    <i className="fas fa-comments"></i>
                  </div>
                  <div className="service-badge">Mais Popular</div>
                </div>
                <h3>Agentes Conversacionais</h3>
                <p>
                  Atendimento automatizado 24/7 que mantém a empatia e personalização 
                  no relacionamento com seus clientes.
                </p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Chatbots inteligentes</li>
                  <li><i className="fas fa-check"></i> Atendimento multicanal</li>
                  <li><i className="fas fa-check"></i> Integração com CRM</li>
                  <li><i className="fas fa-check"></i> Análise de sentimentos</li>
                </ul>
                <a href="/agentes-conversacionais" className="btn btn-outline">
                  Saiba Mais
                </a>
              </div>
              
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">
                    <i className="fas fa-share-alt"></i>
                  </div>
                </div>
                <h3>Agentes para Mídias Sociais</h3>
                <p>
                  Automação estratégica das suas redes sociais mantendo autenticidade 
                  e engajamento genuíno.
                </p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Gestão automatizada de posts</li>
                  <li><i className="fas fa-check"></i> Resposta inteligente a comentários</li>
                  <li><i className="fas fa-check"></i> Análise de performance</li>
                  <li><i className="fas fa-check"></i> Criação de conteúdo</li>
                </ul>
                <a href="/agentes-midias-sociais" className="btn btn-outline">
                  Saiba Mais
                </a>
              </div>
              
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">
                    <i className="fas fa-cogs"></i>
                  </div>
                </div>
                <h3>Agentes de Produtividade</h3>
                <p>
                  Automação de processos internos e integração de sistemas para 
                  máxima eficiência operacional.
                </p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Automação de workflows</li>
                  <li><i className="fas fa-check"></i> Integração de sistemas</li>
                  <li><i className="fas fa-check"></i> Relatórios automatizados</li>
                  <li><i className="fas fa-check"></i> Gestão de tarefas</li>
                </ul>
                <a href="/agentes-produtividade" className="btn btn-outline">
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="container">
            <div className="cta-content">
              <h2>Pronto para Elevar Sua Empresa?</h2>
              <p>
                Descubra como nossas automações com IA podem transformar seu negócio 
                mantendo o toque humano
              </p>
              <a href="/contato" className="btn btn-primary btn-large">
                <i className="fas fa-calendar-alt"></i>
                Agendar Consultoria Gratuita
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}