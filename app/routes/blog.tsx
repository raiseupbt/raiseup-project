import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { supabase } from "~/lib/supabase.server";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return {
    title: "Blog - RaiseUp",
    description: "Blog da RaiseUp: Artigos sobre automação empresarial, IA, produtividade e tendências em tecnologia. Conteúdo especializado para transformar seu negócio."
  };
};

export const loader = async () => {
  try {
    // Buscar artigos reais do Supabase
    const { data: artigos, error } = await supabase
      .from('artigos')
      .select('*')
      .eq('ativo', true)
      .order('data_publicacao', { ascending: false });

    if (error) {
      console.error('Erro ao buscar artigos:', error);
    }

    // Se não houver artigos ou houver erro, usar dados mockados
    const artigosParaExibir = artigos && artigos.length > 0 ? artigos.map(artigo => ({
      id: artigo.id,
      titulo: artigo.titulo,
      slug: artigo.slug,
      resumo: artigo.resumo,
      conteudo_preview: artigo.conteudo.substring(0, 150) + '...',
      data_publicacao: artigo.data_publicacao || artigo.criado_em,
      autor: artigo.autor,
      categoria: 'Automação com IA', // Categoria padrão
      tempo_leitura: artigo.tempo_leitura || '5 min',
      tags: artigo.tags || ['IA', 'Automação', 'Tecnologia'],
      featured: artigo.destaque || false
    })) : [
      {
        id: '1',
        titulo: 'Como a IA está Transformando o Atendimento ao Cliente',
        slug: 'ia-transformando-atendimento-cliente',
        resumo: 'Descubra como a inteligência artificial está revolucionando a forma como as empresas interagem com seus clientes, mantendo o toque humano que faz toda a diferença.',
        conteudo_preview: 'A revolução da IA no atendimento ao cliente não é sobre substituir o fator humano, mas sim potencializá-lo...',
        data_publicacao: '2024-01-15',
        autor: 'Equipe RaiseUp',
        categoria: 'Agentes Conversacionais',
        tempo_leitura: '5 min',
        tags: ['IA', 'Atendimento', 'Chatbot', 'Customer Service'],
        featured: true
      },
      {
        id: '2',
        titulo: 'Automação de Mídias Sociais: O Futuro do Marketing Digital',
        slug: 'automacao-midias-sociais-marketing',
        resumo: 'Aprenda como automatizar suas redes sociais mantendo a autenticidade e engajamento com seu público, sem perder a personalização.',
        conteudo_preview: 'As redes sociais são fundamentais para qualquer estratégia de marketing digital moderna...',
        data_publicacao: '2024-01-10',
        autor: 'Equipe RaiseUp',
        categoria: 'Mídias Sociais',
        tempo_leitura: '7 min',
        tags: ['Social Media', 'Automação', 'Marketing', 'Engajamento'],
        featured: false
      },
      {
        id: '3',
        titulo: 'Agentes de Produtividade: Automatizando Processos Internos',
        slug: 'agentes-produtividade-processos',
        resumo: 'Como implementar agentes inteligentes para otimizar workflows e aumentar a eficiência operacional da sua empresa de forma sustentável.',
        conteudo_preview: 'A produtividade empresarial pode ser drasticamente melhorada com a implementação correta de agentes de IA...',
        data_publicacao: '2024-01-05',
        autor: 'Equipe RaiseUp',
        categoria: 'Produtividade',
        tempo_leitura: '6 min',
        tags: ['Produtividade', 'Workflow', 'Automação', 'Processos'],
        featured: false
      },
      {
        id: '4',
        titulo: 'ROI da Automação: Calculando o Retorno dos Investimentos em IA',
        slug: 'roi-automacao-investimentos-ia',
        resumo: 'Entenda como medir e maximizar o retorno sobre investimento em projetos de automação empresarial com metodologias comprovadas.',
        conteudo_preview: 'Investir em automação é uma decisão estratégica que precisa ser baseada em dados concretos...',
        data_publicacao: '2023-12-28',
        autor: 'Equipe RaiseUp',
        categoria: 'Estratégia',
        tempo_leitura: '8 min',
        tags: ['ROI', 'Investimento', 'KPIs', 'Métricas'],
        featured: true
      },
      {
        id: '5',
        titulo: 'Implementação de IA: Guia Completo para Empresas',
        slug: 'implementacao-ia-guia-empresas',
        resumo: 'Um roadmap detalhado para implementar soluções de inteligência artificial na sua empresa, desde o planejamento até a execução.',
        conteudo_preview: 'A implementação bem-sucedida de IA requer planejamento estratégico e execução cuidadosa...',
        data_publicacao: '2023-12-20',
        autor: 'Equipe RaiseUp',
        categoria: 'Implementação',
        tempo_leitura: '10 min',
        tags: ['Implementação', 'Planejamento', 'Estratégia', 'Roadmap'],
        featured: false
      }
    ];

    return json({
      artigos: artigosParaExibir
    });
  } catch (error) {
    console.error('Erro ao carregar blog:', error);
    
    // Fallback com dados mockados
    return json({
      artigos: [
        {
          id: '1',
          titulo: 'Como a IA está Transformando o Atendimento ao Cliente',
          slug: 'ia-transformando-atendimento-cliente',
          resumo: 'Descubra como a inteligência artificial está revolucionando a forma como as empresas interagem com seus clientes.',
          conteudo_preview: 'A revolução da IA no atendimento ao cliente não é sobre substituir o fator humano...',
          data_publicacao: '2024-01-15',
          autor: 'Equipe RaiseUp',
          categoria: 'IA',
          tempo_leitura: '5 min',
          tags: ['IA', 'Atendimento', 'Tecnologia'],
          featured: true
        }
      ]
    });
  }
};

export default function Blog() {
  const { artigos } = useLoaderData<typeof loader>();
  const artigosFeatured = artigos.filter((artigo: any) => artigo.featured);
  const artigosRegulares = artigos.filter((artigo: any) => !artigo.featured);

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

          .blog-container {
            min-height: 100vh;
            background: linear-gradient(135deg, #0a0f1c 0%, #1a202c 50%, #0f172a 100%);
          }

          .blog-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(10, 15, 28, 0.95);
            backdrop-filter: blur(15px);
            border-bottom: 1px solid rgba(51, 65, 85, 0.3);
            transition: all 0.3s ease;
          }

          .blog-nav {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .blog-logo {
            color: #0ea5e9;
            text-decoration: none;
            font-size: 1.75rem;
            font-weight: 800;
            background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .blog-nav-links {
            display: flex;
            gap: 2rem;
            align-items: center;
          }

          .blog-nav-link {
            color: #94a3b8;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
          }

          .blog-nav-link:hover {
            color: #0ea5e9;
            transform: translateY(-1px);
          }

          .blog-back-link {
            color: #94a3b8;
            text-decoration: none;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
          }

          .blog-back-link:hover {
            color: #0ea5e9;
            transform: translateX(-3px);
          }

          .blog-hero {
            padding: 8rem 0 6rem;
            text-align: center;
            background: linear-gradient(135deg, #0a0f1c 0%, #1a202c 100%);
            position: relative;
            overflow: hidden;
          }

          .blog-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
            pointer-events: none;
          }

          .blog-hero-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            position: relative;
            z-index: 2;
          }

          .blog-hero-title {
            font-size: clamp(3rem, 6vw, 5rem);
            font-weight: 900;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #f8fafc 0%, #0ea5e9 50%, #8b5cf6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.1;
          }

          .blog-hero-subtitle {
            font-size: 1.5rem;
            color: #94a3b8;
            max-width: 700px;
            margin: 0 auto 2rem;
            line-height: 1.6;
          }

          .blog-hero-stats {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-top: 3rem;
          }

          .blog-stat {
            text-align: center;
          }

          .blog-stat-number {
            font-size: 2rem;
            font-weight: 700;
            color: #0ea5e9;
            display: block;
          }

          .blog-stat-label {
            font-size: 0.9rem;
            color: #64748b;
            margin-top: 0.25rem;
          }

          .blog-main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
          }

          .blog-featured-section {
            margin-bottom: 5rem;
          }

          .blog-section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #f8fafc;
            margin-bottom: 3rem;
            text-align: center;
            position: relative;
          }

          .blog-section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%);
            border-radius: 2px;
          }

          .blog-featured-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
            gap: 3rem;
            margin-bottom: 4rem;
          }

          .blog-articles-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
            gap: 2.5rem;
          }

          .blog-article-card {
            background: rgba(26, 32, 44, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(51, 65, 85, 0.3);
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            height: fit-content;
          }

          .blog-article-card:hover {
            transform: translateY(-8px);
            border-color: rgba(14, 165, 233, 0.4);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 
                        0 0 40px rgba(14, 165, 233, 0.1);
          }

          .blog-article-card.featured {
            border: 2px solid rgba(14, 165, 233, 0.3);
            background: rgba(30, 41, 59, 0.9);
          }


          .blog-article-content {
            padding: 2rem;
          }

          .blog-article-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 1rem;
            font-size: 0.875rem;
            color: #64748b;
          }

          .blog-article-category {
            background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .blog-article-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #f8fafc;
            line-height: 1.3;
            transition: color 0.3s ease;
          }

          .blog-article-card:hover .blog-article-title {
            color: #0ea5e9;
          }

          .blog-article-title.featured {
            font-size: 1.75rem;
          }

          .blog-article-summary {
            color: #cbd5e1;
            margin-bottom: 1.5rem;
            line-height: 1.7;
            font-size: 1rem;
          }

          .blog-article-preview {
            color: #94a3b8;
            font-style: italic;
            margin-bottom: 1.5rem;
            line-height: 1.6;
            font-size: 0.95rem;
          }

          .blog-article-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
          }

          .blog-article-tag {
            background: rgba(51, 65, 85, 0.6);
            color: #94a3b8;
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 500;
          }

          .blog-article-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 1rem;
            border-top: 1px solid rgba(51, 65, 85, 0.3);
          }

          .blog-article-link {
            color: #0ea5e9;
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            font-size: 0.95rem;
          }

          .blog-article-link:hover {
            gap: 0.75rem;
            color: #38bdf8;
          }

          .blog-cta {
            text-align: center;
            padding: 4rem 2rem;
            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #7c3aed 100%);
            border-radius: 24px;
            margin: 5rem 0 2rem;
            position: relative;
            overflow: hidden;
          }

          .blog-cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
            pointer-events: none;
          }

          .blog-cta-content {
            position: relative;
            z-index: 2;
          }

          .blog-cta-title {
            color: white;
            margin-bottom: 1rem;
            font-size: 2.5rem;
            font-weight: 800;
          }

          .blog-cta-text {
            color: rgba(255,255,255,0.9);
            margin-bottom: 2rem;
            font-size: 1.2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          .blog-cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
            color: white;
            padding: 1.25rem 2.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 10px 25px rgba(14, 165, 233, 0.3);
          }

          .blog-cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(14, 165, 233, 0.4);
            background: linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%);
          }

          @media (max-width: 768px) {
            .blog-nav {
              padding: 1rem;
            }

            .blog-nav-links {
              gap: 1rem;
            }

            .blog-hero {
              padding: 6rem 0 4rem;
            }

            .blog-hero-stats {
              flex-direction: column;
              gap: 1.5rem;
            }

            .blog-main {
              padding: 2rem 1rem;
            }

            .blog-featured-grid,
            .blog-articles-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }

            .blog-article-content {
              padding: 1.5rem;
            }

            .blog-section-title {
              font-size: 2rem;
            }

            .blog-cta {
              margin: 3rem 0 2rem;
              padding: 3rem 1rem;
            }

            .blog-cta-title {
              font-size: 2rem;
            }

            .blog-article-footer {
              flex-direction: column;
              gap: 1rem;
              align-items: flex-start;
            }
          }
        `
      }} />

      <div className="blog-container">
        {/* Header */}
        <header className="blog-header">
          <nav className="blog-nav">
            <Link to="/" className="blog-logo">
              <img src="/logo_raiseup.png" alt="RaiseUp Logo" style={{ height: '80px', filter: 'brightness(0) invert(1)' }} />
            </Link>
            <div className="blog-nav-links">
              <Link to="/" className="blog-back-link">
                ← Voltar ao Site
              </Link>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="blog-hero">
          <div className="blog-hero-content">
            <h1 className="blog-hero-title">
              Blog RaiseUp
            </h1>
            <p className="blog-hero-subtitle">
              Insights, estratégias e tendências em automação empresarial com IA humanizada. 
              Transforme seu negócio com conhecimento de ponta.
            </p>
            <div className="blog-hero-stats">
              <div className="blog-stat">
                <span className="blog-stat-number">{artigos.length}+</span>
                <span className="blog-stat-label">Artigos Publicados</span>
              </div>
              <div className="blog-stat">
                <span className="blog-stat-number">10k+</span>
                <span className="blog-stat-label">Leitores Mensais</span>
              </div>
              <div className="blog-stat">
                <span className="blog-stat-number">95%</span>
                <span className="blog-stat-label">Satisfação</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="blog-main">
          {/* Featured Articles */}
          {artigosFeatured.length > 0 && (
            <section className="blog-featured-section">
              <h2 className="blog-section-title">Artigos em Destaque</h2>
              <div className="blog-featured-grid">
                {artigosFeatured.map((artigo: any) => (
                  <article key={artigo.id} className="blog-article-card featured">
                    <div className="blog-article-content">
                      <div className="blog-article-meta">
                        <span className="blog-article-category">{artigo.categoria}</span>
                        <span>📅 {new Date(artigo.data_publicacao).toLocaleDateString('pt-BR')}</span>
                        <span>⏱️ {artigo.tempo_leitura}</span>
                        <span>👤 {artigo.autor}</span>
                      </div>
                      
                      <h2 className="blog-article-title featured">
                        {artigo.titulo}
                      </h2>
                      
                      <p className="blog-article-summary">
                        {artigo.resumo}
                      </p>

                      <p className="blog-article-preview">
                        "{artigo.conteudo_preview}"
                      </p>

                      <div className="blog-article-tags">
                        {artigo.tags.map((tag: string, index: number) => (
                          <span key={index} className="blog-article-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="blog-article-footer">
                        <Link 
                          to={`/blog/${artigo.slug}`}
                          className="blog-article-link"
                        >
                          Ler artigo completo →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Regular Articles */}
          <section>
            <h2 className="blog-section-title">Todos os Artigos</h2>
            <div className="blog-articles-grid">
              {artigosRegulares.map((artigo: any) => (
                <article key={artigo.id} className="blog-article-card">
                  <div className="blog-article-content">
                    <div className="blog-article-meta">
                      <span className="blog-article-category">{artigo.categoria}</span>
                      <span>📅 {new Date(artigo.data_publicacao).toLocaleDateString('pt-BR')}</span>
                      <span>⏱️ {artigo.tempo_leitura}</span>
                    </div>
                    
                    <h2 className="blog-article-title">
                      {artigo.titulo}
                    </h2>
                    
                    <p className="blog-article-summary">
                      {artigo.resumo}
                    </p>

                    <div className="blog-article-tags">
                      {artigo.tags.map((tag: string, index: number) => (
                        <span key={index} className="blog-article-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="blog-article-footer">
                      <Link 
                        to={`/blog/${artigo.slug}`}
                        className="blog-article-link"
                      >
                        Ler artigo →
                      </Link>
                      <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
                        por {artigo.autor}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="blog-cta">
            <div className="blog-cta-content">
              <h2 className="blog-cta-title">
                Pronto para Transformar Seu Negócio?
              </h2>
              <p className="blog-cta-text">
                Descubra como nossas soluções de automação com IA podem revolucionar seus processos 
                e potencializar seus resultados. Converse com nossos especialistas.
              </p>
              <Link to="/contato" className="blog-cta-button">
                Falar com Especialista
              </Link>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}