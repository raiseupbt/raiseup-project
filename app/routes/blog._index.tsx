import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  // Dados mockados até configurar Supabase
  return json({
    artigosDestaque: [
      {
        id: '1',
        titulo: 'Como a IA está Transformando o Atendimento ao Cliente',
        slug: 'ia-transformando-atendimento-cliente',
        resumo: 'Descubra como a inteligência artificial está revolucionando a forma como as empresas interagem com seus clientes.',
        data_publicacao: '2024-01-15',
        tempo_leitura: '5 min',
        tags: ['IA', 'Atendimento', 'Transformação Digital']
      }
    ],
    artigosRegulares: [
      {
        id: '2', 
        titulo: 'Automação de Mídias Sociais: O Futuro do Marketing Digital',
        slug: 'automacao-midias-sociais-marketing',
        resumo: 'Aprenda como automatizar suas redes sociais mantendo a autenticidade e engajamento.',
        data_publicacao: '2024-01-10',
        tempo_leitura: '7 min',
        tags: ['Marketing', 'Automação', 'Redes Sociais']
      },
      {
        id: '3',
        titulo: 'Agentes de Produtividade: Automatizando Processos Internos',
        slug: 'agentes-produtividade-processos',
        resumo: 'Como implementar agentes inteligentes para otimizar workflows e aumentar a eficiência operacional.',
        data_publicacao: '2024-01-05',
        tempo_leitura: '6 min',
        tags: ['Produtividade', 'Automação', 'Workflows']
      }
    ]
  });
};

export default function BlogIndex() {
  const { artigosDestaque, artigosRegulares } = useLoaderData<typeof loader>();
  const featuredPost = artigosDestaque[0];

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

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .blog-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(10, 15, 28, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid #334155;
            padding: 1rem 0;
          }

          .blog-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .blog-logo {
            color: #0ea5e9;
            text-decoration: none;
            font-size: 1.5rem;
            font-weight: 700;
          }

          .blog-nav-link {
            color: #e2e8f0;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            transition: all 0.3s ease;
          }

          .blog-nav-link:hover {
            background: rgba(14, 165, 233, 0.1);
            color: #0ea5e9;
          }

          .blog-hero {
            padding: 8rem 0 4rem;
            text-align: center;
            background: linear-gradient(135deg, #0a0f1c 0%, #1a202c 100%);
          }

          .featured-post {
            background: rgba(26, 32, 44, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(14, 165, 233, 0.3);
            border-radius: 20px;
            padding: 2rem;
            margin: 3rem 0;
            position: relative;
            overflow: hidden;
          }

          .featured-post::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%);
          }

          .posts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
          }

          .post-card {
            background: rgba(26, 32, 44, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(51, 65, 85, 0.3);
            border-radius: 16px;
            padding: 1.5rem;
            transition: all 0.3s ease;
          }

          .post-card:hover {
            transform: translateY(-5px);
            border-color: #0ea5e9;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 0 20px rgba(14, 165, 233, 0.3);
          }

          .post-meta {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
            font-size: 0.875rem;
            color: #94a3b8;
          }

          .post-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #f8fafc;
            line-height: 1.3;
          }

          .post-excerpt {
            color: #cbd5e1;
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }

          .post-tags {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            margin-bottom: 1rem;
          }

          .tag {
            background: rgba(14, 165, 233, 0.1);
            color: #0ea5e9;
            padding: 0.25rem 0.75rem;
            border-radius: 50px;
            font-size: 0.8rem;
            border: 1px solid rgba(14, 165, 233, 0.3);
          }

          .read-more {
            color: #0ea5e9;
            text-decoration: none;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
          }

          .read-more:hover {
            color: #38bdf8;
          }

          @media (max-width: 768px) {
            .container {
              padding: 0 1rem;
            }
            
            .posts-grid {
              grid-template-columns: 1fr;
            }
            
            .post-meta {
              flex-direction: column;
              gap: 0.5rem;
            }
          }
        `
      }} />

      {/* Header */}
      <header className="blog-header">
        <div className="container">
          <nav className="blog-nav">
            <Link to="/" className="blog-logo">RaiseUp</Link>
            <Link to="/" className="blog-nav-link">← Voltar ao Site</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #f8fafc 0%, #0ea5e9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Blog RaiseUp
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#94a3b8',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Insights, estratégias e tendências em automação empresarial com IA humanizada
          </p>
        </div>
      </section>

      <main className="container">
        {/* Featured Post */}
        {featuredPost && (
          <article className="featured-post">
            <div className="post-meta">
              <span>📅 {new Date(featuredPost.data_publicacao).toLocaleDateString('pt-BR')}</span>
              <span>⏱️ {featuredPost.tempo_leitura}</span>
              <span style={{
                background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '50px',
                fontSize: '0.8rem'
              }}>
                ⭐ Em Destaque
              </span>
            </div>
            <h2 className="post-title" style={{ fontSize: '2rem' }}>
              {featuredPost.titulo}
            </h2>
            <p className="post-excerpt" style={{ fontSize: '1.1rem' }}>
              {featuredPost.resumo}
            </p>
            <div className="post-tags">
              {featuredPost.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <Link to={`/blog/${featuredPost.slug}`} className="read-more">
              Ler artigo completo →
            </Link>
          </article>
        )}

        {/* Regular Posts Grid */}
        <section>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '600',
            margin: '3rem 0 2rem',
            color: '#f8fafc'
          }}>
            Artigos Recentes
          </h2>
          <div className="posts-grid">
            {artigosRegulares.map((post) => (
              <article key={post.id} className="post-card">
                <div className="post-meta">
                  <span>📅 {new Date(post.data_publicacao).toLocaleDateString('pt-BR')}</span>
                  <span>⏱️ {post.tempo_leitura}</span>
                </div>
                <h3 className="post-title">{post.titulo}</h3>
                <p className="post-excerpt">{post.resumo}</p>
                <div className="post-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <Link to={`/blog/${post.slug}`} className="read-more">
                  Ler mais →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section style={{
          textAlign: 'center',
          padding: '4rem 0',
          background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
          borderRadius: '20px',
          margin: '4rem 0'
        }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>
            Pronto para Transformar Seu Negócio?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
            Descubra como nossas soluções podem automatizar seus processos
          </p>
          <Link 
            to="/contato" 
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            Falar com Especialista
          </Link>
        </section>
      </main>
    </>
  );
}