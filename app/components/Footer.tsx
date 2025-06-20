import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .footer-container {
            background: linear-gradient(135deg, #0a0f1c 0%, #1a202c 100%);
            color: #f8fafc;
            padding: 3rem 0 1.5rem 0;
            border-top: 1px solid rgba(51, 65, 85, 0.3);
            margin-top: auto;
          }
          
          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          
          .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
          }
          
          .footer-section h3 {
            color: #f8fafc;
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .footer-section p, .footer-section li {
            color: #94a3b8;
            line-height: 1.6;
            margin-bottom: 0.75rem;
          }
          
          .footer-section ul {
            list-style: none;
            padding: 0;
          }
          
          .footer-section a {
            color: #94a3b8;
            text-decoration: none;
            transition: color 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .footer-section a:hover {
            color: #0ea5e9;
          }
          
          .footer-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent 0%, rgba(51, 65, 85, 0.5) 50%, transparent 100%);
            margin: 2rem 0 1.5rem 0;
          }
          
          .footer-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            font-size: 0.9rem;
            color: #64748b;
          }
          
          .footer-social {
            display: flex;
            gap: 1rem;
          }
          
          .footer-social a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: rgba(14, 165, 233, 0.1);
            border-radius: 50%;
            color: #0ea5e9;
            transition: all 0.3s ease;
            border: 1px solid rgba(14, 165, 233, 0.2);
          }
          
          .footer-social a:hover {
            background: rgba(14, 165, 233, 0.2);
            transform: translateY(-2px);
          }
          
          @media (max-width: 768px) {
            .footer-container {
              padding: 2rem 0 1rem 0;
            }
            
            .footer-content {
              padding: 0 1rem;
            }
            
            .footer-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
              margin-bottom: 1.5rem;
            }
            
            .footer-section h3 {
              font-size: 1.1rem;
              margin-bottom: 1rem;
            }
            
            .footer-bottom {
              flex-direction: column;
              text-align: center;
              gap: 1rem;
            }
            
            .footer-social {
              justify-content: center;
            }
          }
        `
      }} />
      
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-grid">
            {/* Informações da Empresa */}
            <div className="footer-section">
              <h3>🚀 RaiseUp Business Technology</h3>
              <p><strong>RAISEUP BUSINESS TECHNOLOGY LTDA</strong></p>
              <p>CNPJ: 51.769.510/0001-69</p>
              <p>
                <i className="fas fa-map-marker-alt" style={{ color: '#0ea5e9', marginRight: '0.5rem' }}></i>
                Avenida Anselmo Alves dos Santos, 1076 loja 1<br />
                CEP: 38408-097<br />
                Bairro Santa Mônica<br />
                Uberlândia/MG
              </p>
            </div>

            {/* Serviços */}
            <div className="footer-section">
              <h3>🛠️ Nossos Serviços</h3>
              <ul>
                <li>
                  <Link to="/agentes-conversacionais">
                    <i className="fas fa-comments"></i>
                    Agentes Conversacionais
                  </Link>
                </li>
                <li>
                  <Link to="/agentes-midias-sociais">
                    <i className="fas fa-share-alt"></i>
                    Agentes de Mídias Sociais
                  </Link>
                </li>
                <li>
                  <Link to="/agentes-produtividade">
                    <i className="fas fa-rocket"></i>
                    Agentes de Produtividade
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    <i className="fas fa-blog"></i>
                    Blog e Conteúdo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contato e Links */}
            <div className="footer-section">
              <h3>📞 Contato</h3>
              <ul>
                <li>
                  <a href="mailto:contato@raiseup.com.br">
                    <i className="fas fa-envelope"></i>
                    contato@raiseup.com.br
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/5519981476177" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                    +55 (19) 98147-6177
                  </a>
                </li>
                <li>
                  <Link to="/contato">
                    <i className="fas fa-paper-plane"></i>
                    Formulário de Contato
                  </Link>
                </li>
                <li>
                  <Link to="/politica-privacidade" style={{ color: '#fbbf24' }}>
                    <i className="fas fa-shield-alt"></i>
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <div>
              <p style={{ margin: 0 }}>
                © 2025 RaiseUp Business Technology LTDA. Todos os direitos reservados.
              </p>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem' }}>
                Automatizando processos empresariais mantendo o toque humano.
              </p>
            </div>
            
            <div className="footer-social">
              <a href="https://instagram.com/raiseupbt" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/company/raiseupbt" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://wa.me/5519981476177" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="mailto:contato@raiseup.com.br" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}