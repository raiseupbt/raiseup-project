import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  // Dados mockados para demonstração
  return json({
    artigos: [
      {
        id: '1',
        titulo: 'Como a IA está Transformando o Atendimento ao Cliente',
        slug: 'ia-transformando-atendimento-cliente',
        resumo: 'Descubra como a inteligência artificial está revolucionando a forma como as empresas interagem com seus clientes, mantendo o toque humano.',
        data_publicacao: '2024-01-15',
        autor: 'Equipe RaiseUp'
      },
      {
        id: '2',
        titulo: 'Automação de Mídias Sociais: O Futuro do Marketing Digital',
        slug: 'automacao-midias-sociais-marketing',
        resumo: 'Aprenda como automatizar suas redes sociais mantendo a autenticidade e engajamento com seu público.',
        data_publicacao: '2024-01-10',
        autor: 'Equipe RaiseUp'
      },
      {
        id: '3',
        titulo: 'Agentes de Produtividade: Automatizando Processos Internos',
        slug: 'agentes-produtividade-processos',
        resumo: 'Como implementar agentes inteligentes para otimizar workflows e aumentar a eficiência operacional da sua empresa.',
        data_publicacao: '2024-01-05',
        autor: 'Equipe RaiseUp'
      }
    ]
  });
};

export default function Blog() {
  const { artigos } = useLoaderData<typeof loader>();

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a0f1c', 
      color: '#e2e8f0',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        background: 'rgba(26, 32, 44, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #334155',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link to="/" style={{
            color: '#0ea5e9',
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: '700'
          }}>
            RaiseUp
          </Link>
          <Link to="/" style={{
            color: '#94a3b8',
            textDecoration: 'none',
            fontSize: '0.9rem'
          }}>
            ← Voltar ao Site
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: '4rem 0',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a202c 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
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

      {/* Articles Grid */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {artigos.map((artigo) => (
            <article key={artigo.id} style={{
              background: 'rgba(26, 32, 44, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(51, 65, 85, 0.3)',
              borderRadius: '16px',
              padding: '1.5rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1rem',
                fontSize: '0.875rem',
                color: '#94a3b8'
              }}>
                <span>📅 {new Date(artigo.data_publicacao).toLocaleDateString('pt-BR')}</span>
                <span>👤 {artigo.autor}</span>
              </div>
              
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#f8fafc',
                lineHeight: 1.3
              }}>
                {artigo.titulo}
              </h2>
              
              <p style={{
                color: '#cbd5e1',
                marginBottom: '1.5rem',
                lineHeight: 1.6
              }}>
                {artigo.resumo}
              </p>
              
              <Link 
                to={`/blog/${artigo.slug}`}
                style={{
                  color: '#0ea5e9',
                  textDecoration: 'none',
                  fontWeight: '500',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Ler artigo completo →
              </Link>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <section style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
          borderRadius: '20px',
          margin: '4rem 0 2rem'
        }}>
          <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2rem' }}>
            Pronto para Transformar Seu Negócio?
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.9)', 
            marginBottom: '2rem',
            fontSize: '1.1rem'
          }}>
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
              fontSize: '1.1rem'
            }}
          >
            Falar com Especialista
          </Link>
        </section>
      </main>
    </div>
  );
}