import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";


export const loader = async () => {
  // Temporariamente desabilitado até configurar autenticação
  // const user = await requireUser(request);

  try {
    // Dados mockados até configurar Supabase
    return json({
      estatisticas: {
        totalContatos: 42,
        totalArtigos: 8,
        contatosHoje: 3,
        contatosOntem: 5,
        contatosSemana: 15,
        contatosMesPassado: 28,
        crescimentoContatosVsOntem: 15,
        crescimentoContatosVsMes: 22,
        artigosSemana: 2,
        acessos30Dias: 12500,
        crescimentoAcessos: 18
      },
      contatosRecentes: [
        { id: '1', nome: 'João Silva', criado_em: new Date().toISOString(), status: 'novo' },
        { id: '2', nome: 'Maria Santos', criado_em: new Date().toISOString(), status: 'respondido' }
      ],
      artigosPopulares: [
        { id: '1', titulo: 'Como a IA está transformando negócios', visualizacoes: 150, ativo: true },
        { id: '2', titulo: 'Automação humanizada: o futuro do atendimento', visualizacoes: 98, ativo: true }
      ]
    });
  } catch (error) {
    console.error('Error loading admin dashboard:', error);
    return json({
      estatisticas: {
        totalContatos: 0,
        totalArtigos: 0,
        contatosHoje: 0,
        contatosOntem: 0,
        contatosSemana: 0,
        contatosMesPassado: 0,
        crescimentoContatosVsOntem: 0,
        crescimentoContatosVsMes: 0,
        artigosSemana: 0,
        acessos30Dias: 0,
        crescimentoAcessos: 0
      },
      contatosRecentes: [],
      artigosPopulares: []
    });
  }
};

export default function AdminDashboard() {
  const { estatisticas, contatosRecentes, artigosPopulares } = useLoaderData<typeof loader>();

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .dashboard-stats-grid {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            
            .dashboard-content-grid {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            
            .dashboard-stat-card {
              padding: 1.5rem !important;
            }
            
            .dashboard-stat-number {
              font-size: 2rem !important;
            }
            
            .dashboard-content-card {
              padding: 1rem !important;
            }
            
            .dashboard-contact-item {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 0.5rem !important;
            }
            
            .dashboard-article-item {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 0.5rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .dashboard-stat-card {
              padding: 1rem !important;
            }
            
            .dashboard-stat-number {
              font-size: 1.75rem !important;
            }
            
            .dashboard-stat-icon {
              font-size: 1.5rem !important;
            }
          }
        `
      }} />
      
      <div style={{
        minHeight: '100vh',
        background: '#0a0f1c',
        color: '#e2e8f0',
        fontFamily: 'Inter, sans-serif'
      }}>
        {/* Admin Header */}
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
                  borderRadius: '8px'
                }}>
                  Dashboard
                </span>
                <Link to="/admin/contatos" style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px'
                }}>
                  Contatos
                </Link>
                <Link to="/admin/artigos" style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px'
                }}>
                  Artigos
                </Link>
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

      {/* Cards de Estatísticas */}
      <div className="dashboard-stats-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div className="dashboard-stat-card" style={{
          background: 'rgba(26, 32, 44, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(14, 165, 233, 0.3)',
          padding: '2rem',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
        }}>
          <div className="dashboard-stat-icon" style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            fontSize: '2rem',
            opacity: 0.7
          }}>
            📞
          </div>
          <h3 style={{ 
            fontSize: '0.9rem', 
            marginBottom: '0.5rem', 
            color: '#94a3b8',
            fontWeight: '500'
          }}>
            Total de Contatos
          </h3>
          <p className="dashboard-stat-number" style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            margin: '0 0 0.5rem 0',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {estatisticas.totalContatos}
          </p>
          <p style={{ 
            color: estatisticas.crescimentoContatosVsMes >= 0 ? '#22c55e' : '#ef4444', 
            fontSize: '0.8rem', 
            margin: 0 
          }}>
            {estatisticas.crescimentoContatosVsMes >= 0 ? '+' : ''}{estatisticas.crescimentoContatosVsMes}% vs mês anterior
          </p>
        </div>

        <div className="dashboard-stat-card" style={{
          background: 'rgba(26, 32, 44, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          padding: '2rem',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
        }}>
          <div className="dashboard-stat-icon" style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            fontSize: '2rem',
            opacity: 0.7
          }}>
            📅
          </div>
          <h3 style={{ 
            fontSize: '0.9rem', 
            marginBottom: '0.5rem', 
            color: '#94a3b8',
            fontWeight: '500'
          }}>
            Contatos Hoje
          </h3>
          <p style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            margin: '0 0 0.5rem 0',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {estatisticas.contatosHoje}
          </p>
          <p style={{ 
            color: estatisticas.crescimentoContatosVsOntem >= 0 ? '#22c55e' : '#ef4444', 
            fontSize: '0.8rem', 
            margin: 0 
          }}>
            {estatisticas.crescimentoContatosVsOntem >= 0 ? '+' : ''}{estatisticas.crescimentoContatosVsOntem}% vs ontem
          </p>
        </div>

        <div className="dashboard-stat-card" style={{
          background: 'rgba(26, 32, 44, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          padding: '2rem',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
        }}>
          <div className="dashboard-stat-icon" style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            fontSize: '2rem',
            opacity: 0.7
          }}>
            📝
          </div>
          <h3 style={{ 
            fontSize: '0.9rem', 
            marginBottom: '0.5rem', 
            color: '#94a3b8',
            fontWeight: '500'
          }}>
            Total de Artigos
          </h3>
          <p style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            margin: '0 0 0.5rem 0',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {estatisticas.totalArtigos}
          </p>
          <p style={{ color: '#22c55e', fontSize: '0.8rem', margin: 0 }}>
            +{estatisticas.artigosSemana} esta semana
          </p>
        </div>

        <div className="dashboard-stat-card" style={{
          background: 'rgba(26, 32, 44, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          padding: '2rem',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
        }}>
          <div className="dashboard-stat-icon" style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            fontSize: '2rem',
            opacity: 0.7
          }}>
            📈
          </div>
          <h3 style={{ 
            fontSize: '0.9rem', 
            marginBottom: '0.5rem', 
            color: '#94a3b8',
            fontWeight: '500'
          }}>
            Acessos (30 dias)
          </h3>
          <p style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            margin: '0 0 0.5rem 0',
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {(estatisticas.acessos30Dias / 1000).toFixed(1)}K
          </p>
          <p style={{ color: '#22c55e', fontSize: '0.8rem', margin: 0 }}>
            +{estatisticas.crescimentoAcessos}% vs mês anterior
          </p>
        </div>
      </div>

      {/* Grid de Conteúdo */}
      <div className="dashboard-content-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem'
      }}>
        {/* Contatos Recentes */}
        <div className="dashboard-content-card" style={{
          background: 'rgba(26, 32, 44, 0.8)',
          backdropFilter: 'blur(20px)',
          padding: '1.5rem',
          borderRadius: '16px',
          border: '1px solid rgba(51, 65, 85, 0.3)',
          boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
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
              <Link to="/admin/contatos" style={{
                color: '#0ea5e9',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}>
                Ver todos →
              </Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {contatosRecentes.length > 0 ? contatosRecentes.map(contato => (
                <div key={contato.id} style={{
                  padding: '0.75rem',
                  background: 'rgba(45, 55, 72, 0.5)',
                  borderRadius: '6px',
                  borderLeft: '3px solid #0ea5e9'
                }}>
                  <div className="dashboard-contact-item" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontWeight: '500' }}>{contato.nome}</span>
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#94a3b8'
                    }}>
                      {new Date(contato.criado_em).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
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
              )) : (
                <p style={{ color: '#94a3b8', textAlign: 'center', padding: '2rem' }}>
                  Nenhum contato encontrado
                </p>
              )}
            </div>
          </div>

        {/* Artigos Populares */}
        <div className="dashboard-content-card" style={{
          background: 'rgba(26, 32, 44, 0.8)',
          backdropFilter: 'blur(20px)',
          padding: '1.5rem',
          borderRadius: '16px',
          border: '1px solid rgba(51, 65, 85, 0.3)',
          boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
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
              <Link to="/admin/artigos" style={{
                color: '#0ea5e9',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}>
                Gerenciar →
              </Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {artigosPopulares.length > 0 ? artigosPopulares.map(artigo => (
                <div key={artigo.id} style={{
                  padding: '0.75rem',
                  background: 'rgba(45, 55, 72, 0.5)',
                  borderRadius: '6px',
                  borderLeft: '3px solid #8b5cf6'
                }}>
                  <div className="dashboard-article-item" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ 
                      fontWeight: '500',
                      fontSize: '0.9rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {artigo.titulo}
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#94a3b8'
                    }}>
                      {artigo.visualizacoes} views
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.8rem',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    background: artigo.ativo ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                    color: artigo.ativo ? '#22c55e' : '#ef4444'
                  }}>
                    {artigo.ativo ? 'Ativo' : 'Inativo'}
                  </span>
                </div>
              )) : (
                <p style={{ color: '#94a3b8', textAlign: 'center', padding: '2rem' }}>
                  Nenhum artigo encontrado
                </p>
              )}
            </div>
          </div>
        </div>
        </main>
      </div>
    </>
  );
}