
export default function AgentesMidiasSociais() {
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
            color: #f8fafc;
            background: linear-gradient(135deg, #2d1b4e 0%, #1a1332 50%, #0a0a1a 100%);
            overflow-x: hidden;
            position: relative;
          }

          body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
              radial-gradient(circle at 20% 80%, rgba(255, 23, 147, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 245, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.05) 0%, transparent 50%);
            z-index: -1;
            animation: backgroundPulse 8s ease-in-out infinite;
          }

          :root {
            --primary-pink: #ff1793;
            --pink-light: #ff4db8;
            --pink-dark: #e91e63;
            --purple: #a855f7;
            --purple-dark: #9333ea;
            --blue: #00f5ff;
            --pink-gradient: linear-gradient(135deg, #ff1793 0%, #e91e63 50%, #00f5ff 100%);
            --purple-gradient: linear-gradient(135deg, #00f5ff 0%, #a855f7 50%, #9333ea 100%);
            
            --text-primary: #ffffff;
            --text-secondary: #f8fafc;
            --text-muted: #e2e8f0;
            
            --container-max-width: 1200px;
            --section-padding: 100px 0;
            --border-radius: 25px;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            --shadow-glow: 0 0 40px rgba(255, 107, 157, 0.4);
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
            background: rgba(255, 107, 157, 0.1);
            backdrop-filter: blur(30px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
            background: linear-gradient(135deg, #ffffff 0%, #ff6b9d 100%);
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
            color: var(--text-primary);
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--pink-gradient);
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
            background: linear-gradient(135deg, #d63384 0%, #a61e4d 30%, #495057 70%, #6f42c1 100%);
            overflow: hidden;
          }

          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(255, 107, 157, 0.3) 0%, transparent 50%);
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
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 600;
            color: white;
            margin-bottom: 2rem;
            backdrop-filter: blur(20px);
          }

          .hero h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            color: white;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }

          .hero p {
            font-size: 1.25rem;
            color: var(--text-secondary);
            margin-bottom: 2.5rem;
            line-height: 1.7;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
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
            background: var(--pink-gradient);
            color: white;
            font-weight: 700;
            box-shadow: 0 10px 30px rgba(255, 23, 147, 0.3);
            border: none;
          }

          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px rgba(255, 23, 147, 0.4);
          }

          .social-demo {
            position: relative;
            width: 500px;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: slideInRight 1s ease-out;
          }

          .central-robot {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #ff1793 0%, #e91e63 50%, #a855f7 100%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            color: white;
            position: relative;
            z-index: 10;
            animation: float 3s ease-in-out infinite;
            box-shadow: 
              0 10px 30px rgba(255, 23, 147, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.1);
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
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

          .agent-character {
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, rgba(196, 69, 105, 0.1) 0%, rgba(100, 50, 150, 0.1) 100%);
            border-radius: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: #c44569;
            position: relative;
            z-index: 2;
            animation: subtleFloat 4s ease-in-out infinite;
            border: 1px solid rgba(196, 69, 105, 0.3);
            backdrop-filter: blur(10px);
            box-shadow: 
              0 8px 32px rgba(196, 69, 105, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes subtleFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }

          @keyframes modernFloat {
            0%, 100% { 
              transform: translateY(0px) scale(1);
              opacity: 0.8;
            }
            50% { 
              transform: translateY(-12px) scale(1.02);
              opacity: 1;
            }
          }

          .social-icons {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .social-icon {
            position: absolute;
            width: 60px;
            height: 60px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
            color: white;
            animation: modernFloat 4s ease-in-out infinite;
            z-index: 1;
            transition: all 0.3s ease;
          }

          .facebook-icon {
            background: #1877f2;
            animation-delay: 0s;
          }

          .instagram-icon {
            background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
            animation-delay: 0.5s;
          }

          .discord-icon {
            background: #7289da;
            animation-delay: 1s;
          }

          .twitter-icon {
            background: #1da1f2;
            animation-delay: 1.5s;
          }

          .youtube-icon {
            background: #ff0000;
            animation-delay: 2s;
          }

          .linkedin-icon {
            background: #0077b5;
            animation-delay: 2.5s;
          }

          .social-icon:hover {
            transform: scale(1.1) translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          }

          @keyframes socialFloat {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg);
              opacity: 0.8;
            }
            50% { 
              transform: translateY(-15px) rotate(5deg);
              opacity: 1;
            }
          }

          section {
            padding: var(--section-padding);
            position: relative;
          }

          .features {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
            background: rgba(255, 255, 255, 0.2);
            color: white;
            font-size: 0.875rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-radius: 50px;
            margin-bottom: 1rem;
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .section-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700;
            margin-bottom: 1rem;
            color: white;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }

          .section-subtitle {
            font-size: 1.25rem;
            color: var(--text-secondary);
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
            background: rgba(255, 255, 255, 0.1);
            border-radius: var(--border-radius);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: var(--transition);
            backdrop-filter: blur(30px);
            text-align: center;
          }

          .feature-card:hover {
            transform: translateY(-10px);
            border-color: rgba(255, 255, 255, 0.4);
            box-shadow: 0 20px 40px rgba(255, 107, 157, 0.3);
          }

          .feature-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: var(--primary-pink);
          }

          .feature-card h3 {
            margin-bottom: 1rem;
            color: white;
            font-size: 1.25rem;
          }

          .feature-card p {
            color: var(--text-secondary);
            line-height: 1.7;
          }

          .integrations {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%);
          }

          .integrations-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .integration-card {
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            transition: var(--transition);
            backdrop-filter: blur(30px);
            text-align: center;
          }

          .integration-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.2);
          }

          .integration-icon {
            width: 60px;
            height: 60px;
            margin: 0 auto 1rem;
            background: white;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
          }

          .integration-card h4 {
            color: white;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
          }

          .integration-card p {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .cta-section {
            background: var(--pink-gradient);
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
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }

          .cta-section p {
            font-size: 1.25rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
            line-height: 1.6;
          }

          .btn-secondary {
            background: transparent;
            color: var(--primary-pink);
            font-weight: 700;
            border: 2px solid var(--primary-pink);
            box-shadow: none;
          }

          .btn-secondary:hover {
            transform: translateY(-3px);
            background: rgba(255, 23, 147, 0.1);
            box-shadow: 0 10px 20px rgba(255, 23, 147, 0.2);
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
              background: rgba(255, 107, 157, 0.98);
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
            .integrations-grid {
              grid-template-columns: 1fr;
            }

            .social-demo {
              height: 400px;
              max-width: 100%;
              margin: 2rem 0;
            }

            .agent-character {
              width: 100px;
              height: 100px;
              font-size: 2.5rem;
            }

            .social-icon {
              width: 50px;
              height: 50px;
              font-size: 1.25rem;
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

            .central-robot {
              width: 80px;
              height: 80px;
              font-size: 2rem;
            }

            .social-icon {
              width: 45px;
              height: 45px;
              font-size: 1.1rem;
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
                  <i className="fas fa-share-alt"></i>
                  <span>Agentes para Mídias Sociais</span>
                </div>
                
                <h1>
                  Presença <span style={{background: 'linear-gradient(135deg, #ff1793 0%, #e91e63 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Digital</span><br/>Autêntica e<br/>Automatizada
                </h1>
                
                <p>
                  Mantenha suas redes sociais sempre ativas e engajadas com agentes inteligentes que preservam sua voz e personalidade de marca.
                </p>
                
                <div className="hero-buttons">
                  <a href="/contato" className="btn btn-primary">
                    <i className="fas fa-heart"></i>
                    Automatizar Agora
                  </a>
                  <a href="#funcionalidades" className="btn btn-secondary">
                    <i className="fas fa-eye"></i>
                    Ver Recursos
                  </a>
                </div>
              </div>
              
              <div className="social-demo">
                <div className="central-robot">
                  <i className="fas fa-robot"></i>
                </div>
                <div className="social-icons">
                  <div className="social-icon facebook-icon" style={{top: '20%', right: '30%'}}>
                    <i className="fab fa-facebook-f"></i>
                  </div>
                  <div className="social-icon instagram-icon" style={{top: '10%', right: '15%'}}>
                    <i className="fab fa-instagram"></i>
                  </div>
                  <div className="social-icon discord-icon" style={{top: '50%', right: '8%'}}>
                    <i className="fab fa-discord"></i>
                  </div>
                  <div className="social-icon twitter-icon" style={{top: '70%', left: '15%'}}>
                    <i className="fab fa-twitter"></i>
                  </div>
                  <div className="social-icon youtube-icon" style={{bottom: '20%', left: '30%'}}>
                    <i className="fab fa-youtube"></i>
                  </div>
                  <div className="social-icon linkedin-icon" style={{bottom: '10%', right: '25%'}}>
                    <i className="fab fa-linkedin-in"></i>
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
              <h2 className="section-title">Automação Inteligente para Redes Sociais</h2>
              <p className="section-subtitle">
                Mantenha sua marca ativa e engajada em todas as plataformas
              </p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3>Agendamento Inteligente</h3>
                <p>
                  Posts automáticos no melhor horário para seu público, 
                  com conteúdo personalizado para cada plataforma e análise de engajamento.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-reply"></i>
                </div>
                <h3>Respostas Automáticas</h3>
                <p>
                  Responde comentários e mensagens instantaneamente, 
                  mantendo o tom da sua marca e escalando para humanos quando necessário.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-edit"></i>
                </div>
                <h3>Criação de Conteúdo</h3>
                <p>
                  Gera posts, legendas e hashtags relevantes baseados 
                  nas tendências e no comportamento da sua audiência em tempo real.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h3>Analytics Avançados</h3>
                <p>
                  Relatórios detalhados sobre engajamento, crescimento 
                  e ROI das suas campanhas em redes sociais com insights acionáveis.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-hashtag"></i>
                </div>
                <h3>Monitoramento de Trends</h3>
                <p>
                  Identifica tendências relevantes para sua marca 
                  e sugere conteúdos para aproveitar o momento ideal de postagem.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Gestão de Comunidade</h3>
                <p>
                  Moderação automática, identificação de influenciadores 
                  e gestão proativa da sua comunidade online com engajamento autêntico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="integrations">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Conectividade</span>
              <h2 className="section-title">Integrações com Todas as Principais Redes</h2>
              <p className="section-subtitle">
                Conecte-se às plataformas mais importantes para sua marca
              </p>
            </div>
            
            <div className="integrations-grid">
              <div className="integration-card">
                <div className="integration-icon" style={{color: '#1877f2'}}>
                  <i className="fab fa-facebook-f"></i>
                </div>
                <h4>Facebook</h4>
                <p>Posts, Stories, Reels e gerenciamento completo de páginas empresariais</p>
              </div>
              
              <div className="integration-card">
                <div className="integration-icon" style={{color: '#e4405f'}}>
                  <i className="fab fa-instagram"></i>
                </div>
                <h4>Instagram</h4>
                <p>Feed, Stories, Reels, IGTV e interação automática com seguidores</p>
              </div>
              
              <div className="integration-card">
                <div className="integration-icon" style={{color: '#1da1f2'}}>
                  <i className="fab fa-twitter"></i>
                </div>
                <h4>Twitter</h4>
                <p>Tweets, threads, respostas automáticas e monitoramento de menções</p>
              </div>
              
              <div className="integration-card">
                <div className="integration-icon" style={{color: '#0077b5'}}>
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <h4>LinkedIn</h4>
                <p>Posts profissionais, artigos e networking automatizado B2B</p>
              </div>
              
              <div className="integration-card">
                <div className="integration-icon" style={{color: '#ff0000'}}>
                  <i className="fab fa-youtube"></i>
                </div>
                <h4>YouTube</h4>
                <p>Upload de vídeos, otimização de títulos e gestão de comentários</p>
              </div>
              
              <div className="integration-card">
                <div className="integration-icon" style={{color: '#ff0050'}}>
                  <i className="fab fa-tiktok"></i>
                </div>
                <h4>TikTok</h4>
                <p>Conteúdo viral, hashtags trending e engajamento com Gen Z</p>
              </div>
              
              <div className="integration-card">
                <div className="integration-icon" style={{color: '#25d366'}}>
                  <i className="fab fa-whatsapp"></i>
                </div>
                <h4>WhatsApp Business</h4>
                <p>Atendimento direto, campanhas e automação de mensagens</p>
              </div>
              
              <div className="integration-card">
                <div className="integration-icon" style={{color: '#7289da'}}>
                  <i className="fab fa-discord"></i>
                </div>
                <h4>Discord</h4>
                <p>Comunidades engajadas, bots interativos e eventos virtuais</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Pronto para Dominar as Redes Sociais?</h2>
              <p>
                Transforme sua presença digital com automação inteligente que 
                mantém a autenticidade e maximiza o engajamento.
              </p>
              <a href="/contato" className="btn btn-primary">
                <i className="fas fa-rocket"></i>
                Começar Automação Social
              </a>
            </div>
          </div>
        </section>
      </main>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Social icons animation
          document.addEventListener('DOMContentLoaded', () => {
            const socialIcons = document.querySelectorAll('.social-icon');
            socialIcons.forEach((icon, index) => {
              icon.style.animationDelay = (index * 0.3) + 's';
            });

            // Agent character interaction
            const agentCharacter = document.querySelector('.agent-character');
            if (agentCharacter) {
              agentCharacter.addEventListener('mouseenter', () => {
                agentCharacter.style.transform = 'scale(1.1) rotate(5deg)';
                socialIcons.forEach(icon => {
                  icon.style.animationDuration = '2s';
                });
              });
              
              agentCharacter.addEventListener('mouseleave', () => {
                agentCharacter.style.transform = 'scale(1) rotate(0deg)';
                socialIcons.forEach(icon => {
                  icon.style.animationDuration = '4s';
                });
              });
            }
          });
        `
      }} />
    </>
  );
}