import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return {
    title: "Política de Privacidade - RaiseUp",
    description: "Política de Privacidade da RaiseUp Business Technology - Como tratamos e protegemos seus dados pessoais"
  };
};

export default function PoliticaPrivacidade() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            background: linear-gradient(135deg, #0a0f1c 0%, #1a202c 100%);
            color: #f8fafc;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            display: flex;
            flex-direction: column;
          }
          
          .privacy-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            flex: 1;
          }
          
          .privacy-header {
            text-align: center;
            margin-bottom: 3rem;
            padding: 2rem 0;
          }
          
          .privacy-title {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .privacy-subtitle {
            font-size: 1.1rem;
            color: #94a3b8;
            margin: 0;
          }
          
          .privacy-content {
            background: rgba(26, 32, 44, 0.8);
            backdrop-filter: blur(20px);
            padding: 2.5rem;
            border-radius: 20px;
            border: 1px solid rgba(51, 65, 85, 0.3);
            box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.3);
            margin-bottom: 2rem;
          }
          
          .privacy-content h2 {
            color: #0ea5e9;
            font-size: 1.5rem;
            font-weight: 700;
            margin-top: 2rem;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid rgba(14, 165, 233, 0.3);
          }
          
          .privacy-content h2:first-child {
            margin-top: 0;
          }
          
          .privacy-content h3 {
            color: #8b5cf6;
            font-size: 1.2rem;
            font-weight: 600;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }
          
          .privacy-content p {
            color: #e2e8f0;
            margin-bottom: 1rem;
          }
          
          .privacy-content ul {
            color: #e2e8f0;
            padding-left: 1.5rem;
          }
          
          .privacy-content li {
            margin-bottom: 0.5rem;
          }
          
          .privacy-content strong {
            color: #f8fafc;
          }
          
          .privacy-contact {
            background: rgba(14, 165, 233, 0.1);
            border: 1px solid rgba(14, 165, 233, 0.3);
            padding: 1.5rem;
            border-radius: 12px;
            margin: 2rem 0;
          }
          
          .privacy-contact h3 {
            color: #0ea5e9;
            margin-top: 0;
          }
          
          .back-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            margin-bottom: 2rem;
          }
          
          .back-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
          }
          
          @media (max-width: 768px) {
            .privacy-container {
              padding: 1rem;
            }
            
            .privacy-title {
              font-size: 2rem;
            }
            
            .privacy-content {
              padding: 1.5rem;
              border-radius: 16px;
            }
            
            .privacy-content h2 {
              font-size: 1.25rem;
            }
          }
        `
      }} />
      
      <div className="privacy-container">
        <a href="/" className="back-button">
          <i className="fas fa-arrow-left"></i>
          Voltar ao Site
        </a>
        
        <div className="privacy-header">
          <h1 className="privacy-title">Política de Privacidade</h1>
          <p className="privacy-subtitle">
            Como a RaiseUp Business Technology protege e trata seus dados pessoais
          </p>
        </div>

        <div className="privacy-content">
          <h2>1. Informações Gerais</h2>
          <p>
            A <strong>RaiseUp Business Technology LTDA</strong>, inscrita no CNPJ sob o nº 51.769.510/0001-69, 
            com sede na Av. Anselmo Alves dos Santos, CEP: 38408-097, Bairro Santa Mônica, Uberlândia/MG, 
            está comprometida com a proteção da privacidade e dos dados pessoais de seus usuários.
          </p>
          <p>
            Esta Política de Privacidade tem como objetivo esclarecer como coletamos, usamos, armazenamos 
            e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados 
            (LGPD - Lei nº 13.709/2018).
          </p>

          <h2>2. Dados Coletados</h2>
          <h3>2.1 Dados fornecidos voluntariamente:</h3>
          <ul>
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Nome da empresa</li>
            <li>Área de interesse em nossos serviços</li>
            <li>Mensagens enviadas através de formulários de contato</li>
          </ul>
          
          <h3>2.2 Dados coletados automaticamente:</h3>
          <ul>
            <li>Endereço IP</li>
            <li>Informações do navegador (User Agent)</li>
            <li>Páginas visitadas e tempo de permanência</li>
            <li>Data e hora de acesso</li>
            <li>Dados de navegação e interação com o site</li>
          </ul>

          <h2>3. Finalidade do Tratamento</h2>
          <p>Utilizamos seus dados pessoais para as seguintes finalidades:</p>
          <ul>
            <li><strong>Comunicação:</strong> Responder suas solicitações e dúvidas</li>
            <li><strong>Prestação de serviços:</strong> Fornecer informações sobre nossos produtos e serviços</li>
            <li><strong>Marketing:</strong> Enviar comunicações promocionais e conteúdo relevante (com seu consentimento)</li>
            <li><strong>Análise:</strong> Melhorar nosso website e serviços através de análises de comportamento</li>
            <li><strong>Segurança:</strong> Proteger nossos sistemas e prevenir fraudes</li>
            <li><strong>Cumprimento legal:</strong> Atender obrigações legais e regulamentares</li>
          </ul>

          <h2>4. Base Legal</h2>
          <p>O tratamento de seus dados pessoais é fundamentado nas seguintes bases legais:</p>
          <ul>
            <li><strong>Consentimento:</strong> Para envio de comunicações de marketing</li>
            <li><strong>Legítimo interesse:</strong> Para análise de navegação e melhoria dos serviços</li>
            <li><strong>Execução de contrato:</strong> Para prestação dos serviços solicitados</li>
            <li><strong>Cumprimento de obrigação legal:</strong> Para atender exigências legais</li>
          </ul>

          <h2>5. Compartilhamento de Dados</h2>
          <p>
            Seus dados pessoais não são vendidos, alugados ou cedidos a terceiros para fins comerciais. 
            Podemos compartilhar informações apenas nas seguintes situações:
          </p>
          <ul>
            <li>Com prestadores de serviços que nos auxiliam na operação do website (sob acordos de confidencialidade)</li>
            <li>Quando exigido por lei ou ordem judicial</li>
            <li>Para proteger nossos direitos, propriedade ou segurança</li>
            <li>Com seu consentimento expresso</li>
          </ul>

          <h2>6. Retenção de Dados</h2>
          <p>
            Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, 
            observando os prazos legais de retenção. Após esse período, os dados são eliminados de forma segura, 
            exceto quando sua manutenção for exigida por lei.
          </p>

          <h2>7. Segurança</h2>
          <p>
            Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra 
            acesso não autorizado, alteração, divulgação ou destruição, incluindo:
          </p>
          <ul>
            <li>Criptografia de dados em trânsito e em repouso</li>
            <li>Controles de acesso rigorosos</li>
            <li>Monitoramento contínuo de segurança</li>
            <li>Treinamento regular da equipe sobre proteção de dados</li>
          </ul>

          <h2>8. Seus Direitos</h2>
          <p>De acordo com a LGPD, você possui os seguintes direitos:</p>
          <ul>
            <li><strong>Acesso:</strong> Saber quais dados pessoais tratamos sobre você</li>
            <li><strong>Correção:</strong> Solicitar a correção de dados incompletos ou incorretos</li>
            <li><strong>Eliminação:</strong> Solicitar a exclusão de dados desnecessários ou tratados em desconformidade</li>
            <li><strong>Portabilidade:</strong> Solicitar a transferência de dados para outro controlador</li>
            <li><strong>Oposição:</strong> Opor-se ao tratamento de dados</li>
            <li><strong>Revogação do consentimento:</strong> Retirar seu consentimento a qualquer momento</li>
          </ul>

          <h2>9. Cookies e Tecnologias Similares</h2>
          <p>
            Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação, 
            personalizar conteúdo e analisar o tráfego do site. Você pode gerenciar suas preferências 
            de cookies através das configurações do seu navegador.
          </p>

          <h2>10. Alterações nesta Política</h2>
          <p>
            Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças 
            em nossas práticas ou na legislação aplicável. Recomendamos que você a consulte regularmente. 
            A data da última atualização será sempre indicada no início do documento.
          </p>

          <div className="privacy-contact">
            <h3>📞 Entre em Contato</h3>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, 
              entre em contato conosco:
            </p>
            <p>
              <strong>E-mail:</strong> contato@raiseup.com.br<br />
              <strong>Endereço:</strong> Avenida Anselmo Alves dos Santos, 1076 loja 1, CEP: 38408-097, Bairro Santa Mônica, Uberlândia/MG
            </p>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: '#94a3b8' }}>
            <strong>Última atualização:</strong> 20 de junho de 2025
          </p>
        </div>
      </div>
      
      <Footer />
    </>
  );
}