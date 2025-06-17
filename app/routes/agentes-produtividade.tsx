
export default function AgentesProdutividade() {
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
            color: #ffffff;
            background: #1a2332;
            overflow-x: hidden;
          }

          :root {
            --primary-orange: #ff7c3a;
            --secondary-green: #00d084;
            --bg-dark: #1a2332;
            --text-white: #ffffff;
            --text-gray: #a0aec0;
            --orange-gradient: linear-gradient(135deg, #ff7c3a 0%, #00d084 100%);
            
            --text-primary: #ffffff;
            --text-secondary: #f8fafc;
            --text-muted: #e2e8f0;
            
            --container-max-width: 1200px;
            --section-padding: 100px 0;
            --border-radius: 25px;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            --shadow-glow: 0 0 40px rgba(255, 154, 86, 0.4);
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
            background: rgba(255, 154, 86, 0.1);
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
            background: linear-gradient(135deg, #ffffff 0%, #ff9a56 100%);
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
            background: var(--orange-gradient);
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
            background: var(--bg-dark);
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
                        radial-gradient(circle at 80% 70%, rgba(255, 154, 86, 0.3) 0%, transparent 50%);
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
            background: var(--orange-gradient);
            color: white;
            font-weight: 700;
            box-shadow: 0 10px 30px rgba(255, 124, 58, 0.3);
            border: none;
          }

          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px rgba(255, 124, 58, 0.4);
          }

          .productivity-demo {
            position: relative;
            width: 500px;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: slideInRight 1s ease-out;
          }

          .central-icon {
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, #4f9cf9 0%, #3b82f6 50%, #2563eb 100%);
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            color: white;
            position: relative;
            z-index: 10;
            animation: float 3s ease-in-out infinite;
            box-shadow: 
              0 10px 30px rgba(79, 156, 249, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.1);
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          .floating-icons {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          }

          .floating-icon {
            position: absolute;
            width: 60px;
            height: 60px;
            background: transparent;
            border: 3px solid var(--primary-orange);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            color: var(--primary-orange);
            z-index: 5;
            animation: floatAround 4s ease-in-out infinite;
          }

          .float-1 {
            top: 10%;
            right: 30%;
            animation-delay: 0s;
          }

          .float-2 {
            top: 40%;
            right: 10%;
            animation-delay: 1s;
          }

          .float-3 {
            bottom: 20%;
            right: 25%;
            animation-delay: 2s;
          }

          .float-4 {
            bottom: 10%;
            left: 20%;
            animation-delay: 3s;
          }

          @keyframes floatAround {
            0%, 100% { 
              transform: translateY(0px) scale(1);
              opacity: 1;
            }
            50% { 
              transform: translateY(-15px) scale(1.05);
              opacity: 0.8;
            }
          }

          .hero-buttons {
            display: flex;
            gap: 1rem;
            align-items: center;
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

          section {
            padding: var(--section-padding);
            position: relative;
          }

          .features {
            background: linear-gradient(135deg, #4f9cf9 0%, #667eea 100%);
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
            box-shadow: 0 20px 40px rgba(255, 154, 86, 0.3);
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
            color: var(--primary-orange);
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

          .implementation {
            background: linear-gradient(135deg, #764ba2 0%, #667eea 50%, #4f9cf9 100%);
          }

          .implementation-timeline {
            max-width: 800px;
            margin: 0 auto;
            display: grid;
            gap: 2rem;
            padding: 2rem 0;
          }

          .timeline-step {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
            padding: 0;
            margin: 0;
            position: relative;
          }

          .step-number {
            width: 56px;
            height: 56px;
            background: rgba(26, 26, 46, 0.8);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 600;
            color: #e67e22;
            border: 1px solid rgba(230, 126, 34, 0.3);
            backdrop-filter: blur(10px);
            box-shadow: 
              0 4px 16px rgba(0, 0, 0, 0.2),
              0 0 0 1px rgba(255, 255, 255, 0.05);
            flex-shrink: 0;
            position: relative;
          }

          .step-number::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            width: 2px;
            height: 48px;
            background: linear-gradient(to bottom, rgba(230, 126, 34, 0.3), transparent);
            transform: translateX(-50%);
          }

          .timeline-step:last-child .step-number::after {
            display: none;
          }

          .step-content {
            background: rgba(26, 26, 46, 0.6);
            padding: 1.5rem;
            border-radius: 16px;
            border: 1px solid rgba(230, 126, 34, 0.2);
            backdrop-filter: blur(10px);
            box-shadow: 
              0 4px 16px rgba(0, 0, 0, 0.2),
              0 0 0 1px rgba(255, 255, 255, 0.05);
            flex: 1;
          }

          .step-content h3 {
            color: white;
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .step-content p {
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          .step-features {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .step-feature {
            background: rgba(255, 255, 255, 0.2);
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            font-size: 0.875rem;
            color: white;
          }

          .cta-section {
            background: var(--orange-gradient);
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
            color: var(--primary-orange);
            font-weight: 700;
            border: 2px solid var(--primary-orange);
            box-shadow: none;
          }

          .btn-secondary:hover {
            transform: translateY(-3px);
            background: rgba(255, 124, 58, 0.1);
            box-shadow: 0 10px 20px rgba(255, 124, 58, 0.2);
          }

          @media (max-width: 768px) {
            .nav-menu {
              position: fixed;
              top: 0;
              right: -100%;
              width: 100%;
              height: 100vh;
              background: rgba(255, 154, 86, 0.98);
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

            .features-grid {
              grid-template-columns: 1fr;
            }

            .productivity-demo {
              height: 400px;
              max-width: 100%;
              margin: 2rem 0;
            }

            .agent-character {
              width: 100px;
              height: 100px;
              font-size: 2.5rem;
            }

            .tool-icon {
              width: 50px;
              height: 50px;
              font-size: 1.25rem;
            }

            .timeline-step {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 1rem;
            }

            .step-number::after {
              display: none;
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

            .central-icon {
              width: 80px;
              height: 80px;
              font-size: 2rem;
            }

            .floating-icon {
              width: 45px;
              height: 45px;
              font-size: 1.2rem;
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
                  <i className="fas fa-cogs"></i>
                  <span>Agentes de Produtividade</span>
                </div>
                
                <h1>
                  Eficiência<br/>Máxima em<br/><span style={{background: 'linear-gradient(135deg, #ff7c3a 0%, #ff9a56 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Cada Processo</span>
                </h1>
                
                <p>
                  Libere o potencial da sua equipe automatizando processos repetitivos, integrando sistemas e otimizando fluxos de trabalho com inteligência artificial.
                </p>
                
                <div className="hero-buttons">
                  <a href="/contato" className="btn btn-primary">
                    <i className="fas fa-cogs"></i>
                    Otimizar Processos
                  </a>
                  <a href="#funcionalidades" className="btn btn-secondary">
                    <i className="fas fa-eye"></i>
                    Ver Soluções
                  </a>
                </div>
              </div>
              
              <div className="productivity-demo">
                <div className="central-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <div className="floating-icons">
                  <div className="floating-icon float-1">
                    <i className="fas fa-cog"></i>
                  </div>
                  <div className="floating-icon float-2">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="floating-icon float-3">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <div className="floating-icon float-4">
                    <i className="fas fa-project-diagram"></i>
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
              <h2 className="section-title">Automação Completa de Processos</h2>
              <p className="section-subtitle">
                Transforme operações manuais em fluxos automatizados inteligentes
              </p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <h3>Workflows Automatizados</h3>
                <p>
                  Crie fluxos de trabalho personalizados que executam tarefas 
                  complexas automaticamente, reduzindo erros e tempo de execução significativamente.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-plug"></i>
                </div>
                <h3>Integração de Sistemas</h3>
                <p>
                  Conecte diferentes ferramentas e sistemas da sua empresa, 
                  criando um ecossistema unificado e eficiente para máxima produtividade.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h3>Relatórios Automatizados</h3>
                <p>
                  Geração automática de relatórios personalizados com dados 
                  em tempo real de todas as suas operações e processos críticos.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-tasks"></i>
                </div>
                <h3>Gestão Inteligente de Tarefas</h3>
                <p>
                  Distribuição automática de tarefas, acompanhamento de progresso 
                  e otimização de recursos da equipe para máxima eficiência.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h3>Processamento de Dados</h3>
                <p>
                  Análise automática de grandes volumes de dados, 
                  extraindo insights valiosos para tomada de decisões estratégicas.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-bell"></i>
                </div>
                <h3>Alertas Inteligentes</h3>
                <p>
                  Sistema proativo de notificações que identifica problemas 
                  e oportunidades antes que se tornem críticos para o negócio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section className="implementation">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Metodologia</span>
              <h2 className="section-title">Como Implementamos a Automação</h2>
              <p className="section-subtitle">
                Processo estruturado e gradual para máximo sucesso na transformação
              </p>
            </div>
            
            <div className="implementation-timeline">
              <div className="timeline-line"></div>
              
              <div className="timeline-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Análise e Mapeamento</h3>
                  <p>
                    Realizamos uma auditoria completa dos seus processos atuais, identificando 
                    gargalos, ineficiências e oportunidades de automação.
                  </p>
                  <ul className="step-features">
                    <li className="step-feature">Mapeamento de processos</li>
                    <li className="step-feature">Identificação de gargalos</li>
                    <li className="step-feature">Análise de ROI</li>
                    <li className="step-feature">Priorização de oportunidades</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Design da Solução</h3>
                  <p>
                    Desenvolvemos uma arquitetura personalizada que integra com seus sistemas 
                    existentes e atende às necessidades específicas do seu negócio.
                  </p>
                  <ul className="step-features">
                    <li className="step-feature">Arquitetura personalizada</li>
                    <li className="step-feature">Integração com sistemas</li>
                    <li className="step-feature">Workflow design</li>
                    <li className="step-feature">Prototipagem</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Implementação Gradual</h3>
                  <p>
                    Implementamos a automação em fases controladas, minimizando riscos e 
                    garantindo adaptação gradual da equipe aos novos processos.
                  </p>
                  <ul className="step-features">
                    <li className="step-feature">Deploy por fases</li>
                    <li className="step-feature">Testes rigorosos</li>
                    <li className="step-feature">Treinamento da equipe</li>
                    <li className="step-feature">Monitoramento contínuo</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Otimização e Suporte</h3>
                  <p>
                    Monitoramos continuamente o desempenho, realizamos ajustes e fornecemos 
                    suporte técnico para garantir máxima eficiência.
                  </p>
                  <ul className="step-features">
                    <li className="step-feature">Monitoramento 24/7</li>
                    <li className="step-feature">Suporte técnico</li>
                    <li className="step-feature">Otimizações contínuas</li>
                    <li className="step-feature">Relatórios de performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Transformação que Impacta Resultados</h2>
              <p>
                Descubra como nossa automação pode revolucionar seus processos e 
                multiplicar a produtividade da sua equipe.
              </p>
              <a href="/contato" className="btn btn-secondary">
                <i className="fas fa-chart-line"></i>
                Solicitar Análise Gratuita
              </a>
            </div>
          </div>
        </section>
      </main>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', () => {
            // Timeline animation on scroll
            const timelineSteps = document.querySelectorAll('.timeline-step');
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                }
              });
            }, { threshold: 0.1 });

            timelineSteps.forEach(step => {
              step.style.opacity = '0';
              step.style.transform = 'translateY(50px)';
              observer.observe(step);
            });
          });

          // Add slideInUp animation
          const style = document.createElement('style');
          style.textContent = \`
            @keyframes slideInUp {
              from {
                opacity: 0;
                transform: translateY(50px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          \`;
          document.head.appendChild(style);
        `
      }} />
    </>
  );
}