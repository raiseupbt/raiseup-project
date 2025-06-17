import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import BlogLayout from "~/components/BlogLayout";
import { buscarArtigoPorSlug, incrementarVisualizacoes, sanitizeHtml } from "~/lib/blog.server";
import { marked } from 'marked';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = params;
  
  if (!slug) {
    throw new Response("Slug não informado", { status: 400 });
  }

  try {
    const post = await buscarArtigoPorSlug(slug);
    
    if (!post) {
      throw new Response("Post não encontrado", { status: 404 });
    }

    // Incrementar visualizações (não bloqueia se falhar)
    incrementarVisualizacoes(slug).catch(console.error);
    
    // Converter markdown para HTML e sanitizar
    const htmlContent = await marked(post.conteudo);
    const sanitizedContent = sanitizeHtml(htmlContent);
    
    return json({ 
      post: {
        ...post,
        htmlContent: sanitizedContent
      }
    });
  } catch (error) {
    console.error('Erro ao carregar artigo:', error);
    throw new Response("Erro interno do servidor", { status: 500 });
  }
};


export default function BlogPost() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <BlogLayout>
      <div className="blog-container">
        <div className="blog-content">
          <div className="blog-meta">
            <span className="blog-date">
              {new Date(post.data_publicacao).toLocaleDateString('pt-BR')} • {post.tempo_leitura} de leitura
            </span>
            <div className="blog-tags">
              {post.tags.map(tag => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>
          </div>
          
          <div 
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }} 
          />
          
          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'var(--tertiary-bg)',
            borderRadius: 'var(--border-radius)',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Gostou do conteúdo?
            </h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              Descubra como implementar essas estratégias em sua empresa
            </p>
            <Link to="/contato" className="btn btn-primary">
              <i className="fas fa-rocket"></i>
              Falar com Especialista
            </Link>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/blog" className="btn btn-secondary">
            <i className="fas fa-arrow-left"></i>
            Voltar ao Blog
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}