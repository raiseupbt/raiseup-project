import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  // Dados mockados para demonstração
  return json({
    estatisticas: {
      totalContatos: 42,
      totalArtigos: 8,
      contatosHoje: 3,
      contatosOntem: 5,
      acessos30Dias: 12500,
      crescimentoAcessos: 18
    },
    contatosRecentes: [
      { id: '1', nome: 'João Silva', email: 'joao@email.com', criado_em: new Date().toISOString(), status: 'novo' },
      { id: '2', nome: 'Maria Santos', email: 'maria@email.com', criado_em: new Date().toISOString(), status: 'respondido' },
      { id: '3', nome: 'Pedro Costa', email: 'pedro@email.com', criado_em: new Date().toISOString(), status: 'novo' }
    ],
    artigosPopulares: [
      { id: '1', titulo: 'Como a IA está transformando negócios', visualizacoes: 150, ativo: true },
      { id: '2', titulo: 'Automação humanizada: o futuro do atendimento', visualizacoes: 98, ativo: true },
      { id: '3', titulo: 'Agentes de produtividade na prática', visualizacoes: 76, ativo: true }
    ]
  });
};

export default function Admin() {
  const { estatisticas, contatosRecentes, artigosPopulares } = useLoaderData<typeof loader>();

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
        padding: '1rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link to="/" style={{
              color: '#0ea5e9',
              textDecoration: 'none',
              fontSize: '1.5rem',
              fontWeight: '700'
            }}>
              RaiseUp Admin
            </Link>
            <nav style={{ display: 'flex', gap: '1rem' }}>
              <span style={{
                color: '#0ea5e9',
                padding: '0.5rem 1rem',
                background: 'rgba(14, 165, 233, 0.1)',
                borderRadius: '8px',
                fontSize: '0.9rem'
              }}>
                Dashboard
              </span>
              <span style={{
                color: '#94a3b8',
                padding: '0.5rem 1rem',
                fontSize: '0.9rem'
              }}>
                Contatos
              </span>
              <span style={{
                color: '#94a3b8',
                padding: '0.5rem 1rem',
                fontSize: '0.9rem'
              }}>
                Artigos
              </span>
            </nav>
          </div>
          <Link to="/" style={{
            color: '#94a3b8',
            textDecoration: 'none',
            fontSize: '0.9rem'
          }}>
            ← Voltar ao Site
          </Link>
        </div>
      </header>

      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: '600',
          marginBottom: '2rem',
          color: '#f8fafc'
        }}>
          Dashboard Administrativo
        </h1>

        {/* Statistics Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(14, 165, 233, 0.3)',
            padding: '1.5rem',
            borderRadius: '16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  Total de Contatos
                </h3>
                <p style={{ fontSize: '2rem', fontWeight: '700', color: '#0ea5e9', margin: 0 }}>
                  {estatisticas.totalContatos}
                </p>
              </div>
              <span style={{ fontSize: '2rem', opacity: 0.7 }}>📞</span>
            </div>
          </div>

          <div style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            padding: '1.5rem',
            borderRadius: '16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  Contatos Hoje
                </h3>
                <p style={{ fontSize: '2rem', fontWeight: '700', color: '#8b5cf6', margin: 0 }}>
                  {estatisticas.contatosHoje}
                </p>
              </div>
              <span style={{ fontSize: '2rem', opacity: 0.7 }}>📅</span>
            </div>
          </div>

          <div style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            padding: '1.5rem',
            borderRadius: '16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  Total de Artigos
                </h3>
                <p style={{ fontSize: '2rem', fontWeight: '700', color: '#10b981', margin: 0 }}>
                  {estatisticas.totalArtigos}
                </p>
              </div>
              <span style={{ fontSize: '2rem', opacity: 0.7 }}>📝</span>
            </div>
          </div>

          <div style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            padding: '1.5rem',
            borderRadius: '16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  Acessos (30 dias)
                </h3>
                <p style={{ fontSize: '2rem', fontWeight: '700', color: '#f59e0b', margin: 0 }}>
                  {(estatisticas.acessos30Dias / 1000).toFixed(1)}K
                </p>
              </div>
              <span style={{ fontSize: '2rem', opacity: 0.7 }}>📈</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem'
        }}>
          {/* Recent Contacts */}
          <div style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            padding: '1.5rem',
            borderRadius: '16px',
            border: '1px solid rgba(51, 65, 85, 0.3)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>
                Contatos Recentes
              </h2>
              <span style={{ color: '#0ea5e9', fontSize: '0.9rem' }}>
                Ver todos →
              </span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {contatosRecentes.map(contato => (
                <div key={contato.id} style={{
                  padding: '1rem',
                  background: 'rgba(45, 55, 72, 0.5)',
                  borderRadius: '8px',
                  borderLeft: '3px solid #0ea5e9'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: '500' }}>{contato.nome}</span>
                    <span style={{
                      fontSize: '0.8rem',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      background: contato.status === 'novo' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(156, 163, 175, 0.2)',
                      color: contato.status === 'novo' ? '#22c55e' : '#9ca3af'
                    }}>
                      {contato.status}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                    {contato.email}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Articles */}
          <div style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            padding: '1.5rem',
            borderRadius: '16px',
            border: '1px solid rgba(51, 65, 85, 0.3)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>
                Artigos Populares
              </h2>
              <span style={{ color: '#0ea5e9', fontSize: '0.9rem' }}>
                Gerenciar →
              </span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {artigosPopulares.map(artigo => (
                <div key={artigo.id} style={{
                  padding: '1rem',
                  background: 'rgba(45, 55, 72, 0.5)',
                  borderRadius: '8px',
                  borderLeft: '3px solid #8b5cf6'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>
                      {artigo.titulo}
                    </span>
                    <span style={{
                      fontSize: '0.8rem',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      background: 'rgba(34, 197, 94, 0.2)',
                      color: '#22c55e'
                    }}>
                      Ativo
                    </span>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                    {artigo.visualizacoes} visualizações
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>
            Ações Rápidas
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contato" style={{
              display: 'inline-block',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              Ver Página de Contato
            </Link>
            <Link to="/blog" style={{
              display: 'inline-block',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              Gerenciar Blog
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}