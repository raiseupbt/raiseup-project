import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { supabase } from "~/lib/supabase.server";
import { marked } from 'marked';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = params;
  
  if (!slug) {
    throw new Response("Slug não informado", { status: 400 });
  }

  try {
    // Buscar artigo no Supabase
    const { data: artigo, error } = await supabase
      .from('artigos')
      .select('*')
      .eq('slug', slug)
      .eq('ativo', true)
      .single();

    if (error || !artigo) {
      throw new Response("Artigo não encontrado", { status: 404 });
    }

    // Remover incremento de visualizações
    
    // Converter markdown para HTML
    const htmlContent = await marked(artigo.conteudo || artigo.resumo);
    
    return json({ 
      post: {
        id: artigo.id,
        titulo: artigo.titulo,
        slug: artigo.slug,
        resumo: artigo.resumo,
        data_publicacao: artigo.data_publicacao || artigo.criado_em,
        autor: artigo.autor,
        tempo_leitura: artigo.tempo_leitura || '5 min',
        tags: artigo.tags || ['IA', 'Automação', 'Tecnologia'],
        htmlContent
      }
    });
  } catch (error) {
    console.error('Erro ao carregar artigo:', error);
    
    // Fallback para artigo de exemplo
    return json({
      post: {
        id: '1',
        titulo: 'Como a IA está Transformando o Atendimento ao Cliente',
        slug: 'ia-transformando-atendimento-cliente',
        resumo: 'Descubra como a inteligência artificial está revolucionando a forma como as empresas interagem com seus clientes.',
        data_publicacao: '2024-01-15',
        autor: 'Equipe RaiseUp',
        tempo_leitura: '5 min',
        tags: ['IA', 'Atendimento', 'Tecnologia'],
        htmlContent: `
          <h2>A Revolução do Atendimento ao Cliente</h2>
          <p>A inteligência artificial está mudando radicalmente a forma como as empresas se relacionam com seus clientes, oferecendo experiências mais personalizadas e eficientes.</p>
          
          <h3>Principais Benefícios</h3>
          <ul>
            <li>Atendimento 24/7 sem interrupções</li>
            <li>Respostas mais rápidas e precisas</li>
            <li>Personalização em escala</li>
            <li>Redução de custos operacionais</li>
          </ul>

          <h3>Implementação Prática</h3>
          <p>Para implementar com sucesso soluções de IA no atendimento, é importante seguir algumas etapas fundamentais:</p>
          
          <ol>
            <li>Mapeamento dos pontos de contato</li>
            <li>Definição de casos de uso prioritários</li>
            <li>Implementação gradual</li>
            <li>Monitoramento e otimização contínua</li>
          </ol>

          <p>Com a estratégia certa, sua empresa pode oferecer um atendimento excepcional mantendo o toque humano.</p>
        `
      }
    });
  }
};


export default function BlogPost() {
  const { post } = useLoaderData<typeof loader>();

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

          .article-container {
            min-height: 100vh;
            background: linear-gradient(135deg, #0a0f1c 0%, #1a202c 50%, #0f172a 100%);
          }

          .article-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(10, 15, 28, 0.95);
            backdrop-filter: blur(15px);
            border-bottom: 1px solid rgba(51, 65, 85, 0.3);
          }

          .article-nav {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .article-logo {
            color: #0ea5e9;
            text-decoration: none;
            font-size: 1.75rem;
            font-weight: 800;
            background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .article-back {
            color: #94a3b8;
            text-decoration: none;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
          }

          .article-back:hover {
            color: #0ea5e9;
            transform: translateX(-3px);
          }

          .article-main {
            max-width: 800px;
            margin: 0 auto;
            padding: 8rem 2rem 4rem;
          }

          .article-hero {
            text-align: center;
            margin-bottom: 3rem;
          }

          .article-title {
            font-size: clamp(2rem, 4vw, 3.5rem);
            font-weight: 900;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #f8fafc 0%, #0ea5e9 50%, #3b82f6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.1;
          }

          .article-meta {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
          }

          .article-date {
            color: #94a3b8;
            font-size: 0.9rem;
          }

          .article-tags {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            justify-content: center;
          }

          .article-tag {
            background: rgba(14, 165, 233, 0.1);
            color: #0ea5e9;
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 500;
          }

          .article-content {
            background: rgba(26, 32, 44, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(51, 65, 85, 0.3);
            border-radius: 20px;
            padding: 3rem;
            margin-bottom: 3rem;
          }

          .article-content h2 {
            color: #f8fafc;
            margin: 2rem 0 1rem;
            font-size: 1.5rem;
          }

          .article-content h3 {
            color: #e2e8f0;
            margin: 1.5rem 0 1rem;
            font-size: 1.25rem;
          }

          .article-content p {
            color: #cbd5e1;
            margin-bottom: 1.5rem;
            line-height: 1.8;
          }

          .article-content ul,
          .article-content ol {
            margin: 1rem 0 1.5rem 2rem;
            color: #cbd5e1;
          }

          .article-content li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
          }

          .article-cta {
            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #7c3aed 100%);
            border-radius: 20px;
            padding: 3rem;
            text-align: center;
            margin-bottom: 3rem;
          }

          .article-cta h3 {
            color: white;
            margin-bottom: 1rem;
            font-size: 1.5rem;
          }

          .article-cta p {
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 2rem;
          }

          .cta-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
            color: white;
            padding: 1rem 2rem;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(14, 165, 233, 0.3);
          }

          .back-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(26, 32, 44, 0.8);
            color: #94a3b8;
            padding: 0.75rem 1.5rem;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            border: 1px solid rgba(51, 65, 85, 0.3);
          }

          .back-button:hover {
            color: #0ea5e9;
            border-color: #0ea5e9;
            transform: translateY(-2px);
          }

          @media (max-width: 768px) {
            .article-nav {
              padding: 1rem;
            }

            .article-main {
              padding: 6rem 1rem 3rem;
            }

            .article-content {
              padding: 2rem 1.5rem;
            }

            .article-cta {
              padding: 2rem 1.5rem;
            }

            .article-title {
              font-size: 2rem;
            }
          }
        `
      }} />

      <div className="article-container">
        {/* Header */}
        <header className="article-header">
          <nav className="article-nav">
            <Link to="/" className="article-logo">
              <img src="/logo_raiseup.png" alt="RaiseUp Logo" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
            </Link>
            <Link to="/blog" className="article-back">
              ← Voltar ao Blog
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="article-main">
          {/* Hero */}
          <div className="article-hero">
            <h1 className="article-title">
              {post.titulo}
            </h1>
            
            <div className="article-meta">
              <span className="article-date">
                📅 {new Date(post.data_publicacao).toLocaleDateString('pt-BR')} • ⏱️ {post.tempo_leitura} • 👤 {post.autor}
              </span>
            </div>

            <div className="article-tags">
              {post.tags.map((tag: string, index: number) => (
                <span key={index} className="article-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="article-content">
            <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
          </div>

          {/* CTA */}
          <div className="article-cta">
            <h3>Gostou do conteúdo?</h3>
            <p>
              Descubra como implementar essas estratégias em sua empresa com nossos especialistas.
            </p>
            <Link to="/contato" className="cta-button">
              🚀 Falar com Especialista
            </Link>
          </div>

          {/* Back Button */}
          <div style={{ textAlign: 'center' }}>
            <Link to="/blog" className="back-button">
              ← Voltar ao Blog
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}