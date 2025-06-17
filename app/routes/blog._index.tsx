import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import BlogLayout from "~/components/BlogLayout";
import { buscarArtigosDestaque, buscarArtigosRegulares } from "~/lib/blog.server";


export const loader = async () => {
  try {
    const [artigosDestaque, artigosRegulares] = await Promise.all([
      buscarArtigosDestaque(),
      buscarArtigosRegulares()
    ]);

    return json({
      artigosDestaque,
      artigosRegulares
    });
  } catch (error) {
    console.error('Erro ao carregar artigos:', error);
    // Retorna dados vazios em caso de erro
    return json({
      artigosDestaque: [],
      artigosRegulares: []
    });
  }
};

export default function BlogIndex() {
  const { artigosDestaque, artigosRegulares } = useLoaderData<typeof loader>();
  const featuredPost = artigosDestaque[0];
  const regularPosts = artigosRegulares;

  return (
    <BlogLayout>
      <div style={{padding: '4rem 0 2rem', textAlign: 'center'}}>
        <div className="container">
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #f8fafc 0%, #0ea5e9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'var(--text-primary)'
          }}>
            Blog RaiseUp
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-muted)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Insights, estratégias e tendências em automação empresarial com IA humanizada
          </p>
        </div>
      </div>

      <div className="container">
        {/* Featured Post */}
        {featuredPost && (
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              color: 'var(--text-primary)', 
              marginBottom: '2rem',
              fontSize: '2rem',
              textAlign: 'center'
            }}>
              ⭐ Post em Destaque
            </h2>
            <Link 
              to={`/blog/${featuredPost.slug}`} 
              className="blog-card"
              style={{
                display: 'block',
                background: 'var(--gradient-primary)',
                border: 'none',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(10, 15, 28, 0.8)',
                zIndex: 1
              }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="blog-tags" style={{ marginBottom: '1rem' }}>
                  {featuredPost.tags.map(tag => (
                    <span key={tag} className="blog-tag" style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      color: 'white'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                  {featuredPost.titulo}
                </h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                  {featuredPost.resumo}
                </p>
                <div className="blog-card-meta">
                  <span>{new Date(featuredPost.data_publicacao).toLocaleDateString('pt-BR')}</span>
                  <span>{featuredPost.tempo_leitura} de leitura</span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 style={{ 
            color: 'var(--text-primary)', 
            marginBottom: '2rem',
            fontSize: '2rem',
            textAlign: 'center'
          }}>
            Últimos Posts
          </h2>
          <div className="blog-list">
            {regularPosts.map(post => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-tags" style={{ marginBottom: '1rem' }}>
                  {post.tags.map(tag => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <h3>{post.titulo}</h3>
                <p>{post.resumo}</p>
                <div className="blog-card-meta">
                  <span>{new Date(post.data_publicacao).toLocaleDateString('pt-BR')}</span>
                  <span>{post.tempo_leitura} de leitura</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'var(--gradient-secondary)',
          borderRadius: 'var(--border-radius-lg)',
          padding: '3rem',
          textAlign: 'center',
          margin: '4rem 0',
          color: 'white'
        }}>
          <h2 style={{ marginBottom: '1rem', color: 'white' }}>
            Pronto para Implementar Automação?
          </h2>
          <p style={{ 
            marginBottom: '2rem', 
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Descubra como nossa automação com IA pode transformar seu negócio
          </p>
          <Link to="/contato" className="btn btn-primary" style={{
            background: 'white',
            color: 'var(--accent-bg)',
            border: 'none'
          }}>
            <i className="fas fa-rocket"></i>
            Começar Agora
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}