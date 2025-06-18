import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { requireUser } from "~/lib/auth.server";
import { supabase } from "~/lib/supabase.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // Proteger rota com autenticação
  await requireUser(request);

  try {
    // Buscar dados reais do Supabase
    const { data: contatos, error: errorContatos } = await supabase
      .from('contatos')
      .select('*')
      .order('criado_em', { ascending: false });

    const { data: artigos, error: errorArtigos } = await supabase
      .from('artigos')
      .select('*')
      .order('visualizacoes', { ascending: false });

    // Calcular estatísticas
    const totalContatos = contatos?.length || 0;
    const totalArtigos = artigos?.length || 0;
    const contatosHoje = contatos?.filter(c => {
      const hoje = new Date().toDateString();
      const dataContato = new Date(c.criado_em).toDateString();
      return hoje === dataContato;
    }).length || 0;

    const contatosOntem = contatos?.filter(c => {
      const ontem = new Date();
      ontem.setDate(ontem.getDate() - 1);
      const dataContato = new Date(c.criado_em).toDateString();
      return ontem.toDateString() === dataContato;
    }).length || 0;

    // Dados para o dashboard
    return json({
      estatisticas: {
        totalContatos,
        totalArtigos,
        contatosHoje,
        contatosOntem,
        crescimentoContatos: contatosHoje > contatosOntem ? Math.round(((contatosHoje - contatosOntem) / Math.max(contatosOntem, 1)) * 100) : 0,
      },
      contatosRecentes: contatos?.slice(0, 4) || [],
      artigosPopulares: artigos?.slice(0, 4) || []
    });
  } catch (error) {
    console.error('Erro ao carregar dados do admin:', error);
    
    // Fallback com dados mockados em caso de erro
    return json({
      estatisticas: {
        totalContatos: 0,
        totalArtigos: 0,
        contatosHoje: 0,
        contatosOntem: 0,
        crescimentoContatos: 0,
      },
      contatosRecentes: [],
      artigosPopulares: []
    });
  }
};

export default function Admin() {
  const { estatisticas, contatosRecentes, artigosPopulares } = useLoaderData<typeof loader>();

  // Função para formatar data
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Função para retornar cor do status
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'novo': return { bg: 'rgba(34, 197, 94, 0.2)', color: '#22c55e' };
      case 'respondido': return { bg: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6' };
      case 'em_andamento': return { bg: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b' };
      default: return { bg: 'rgba(156, 163, 175, 0.2)', color: '#9ca3af' };
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0f1c 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#e2e8f0',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* Enhanced Header */}
      <header style={{
        background: 'rgba(26, 32, 44, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(14, 165, 233, 0.3)',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
            <Link to="/" style={{
              color: '#0ea5e9',
              textDecoration: 'none',
              fontSize: '1.8rem',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <img src="/logo_raiseup.png" alt="RaiseUp Logo" style={{ height: '36px' }} />
              <span>Admin</span>
            </Link>
            <nav style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{
                color: '#0ea5e9',
                padding: '0.75rem 1.5rem',
                background: 'rgba(14, 165, 233, 0.15)',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: '600',
                border: '1px solid rgba(14, 165, 233, 0.3)'
              }}>
                📊 Dashboard
              </span>
              <Link to="/admin/contatos" style={{
                color: '#94a3b8',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                fontSize: '0.9rem',
                fontWeight: '500',
                borderRadius: '12px',
                transition: 'all 0.3s ease'
              }}>
                📞 Contatos
              </Link>
              <Link to="/admin/artigos" style={{
                color: '#94a3b8',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                fontSize: '0.9rem',
                fontWeight: '500',
                borderRadius: '12px',
                transition: 'all 0.3s ease'
              }}>
                📝 Artigos
              </Link>
              <Link to="/admin/analytics" style={{
                color: '#94a3b8',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                fontSize: '0.9rem',
                fontWeight: '500',
                borderRadius: '12px',
                transition: 'all 0.3s ease'
              }}>
                📈 Analytics
              </Link>
            </nav>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              padding: '0.5rem 1rem',
              background: 'rgba(34, 197, 94, 0.1)',
              borderRadius: '8px',
              fontSize: '0.85rem',
              color: '#22c55e',
              border: '1px solid rgba(34, 197, 94, 0.3)'
            }}>
              🟢 Sistema Online
            </div>
            <Link to="/admin/logout" style={{
              color: '#f87171',
              textDecoration: 'none',
              fontSize: '0.9rem',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: '1px solid rgba(248, 113, 113, 0.3)'
            }}>
              ← Sair
            </Link>
          </div>
        </div>
      </header>

      <main style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        {/* Welcome Header */}
        <div style={{
          marginBottom: '3rem',
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
          padding: '2rem',
          borderRadius: '20px',
          border: '1px solid rgba(14, 165, 233, 0.2)'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            marginBottom: '0.5rem',
            color: '#f8fafc',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Dashboard RaiseUp
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#94a3b8',
            margin: 0
          }}>
            Bem-vindo ao painel administrativo. Aqui você pode acompanhar todas as métricas importantes do seu negócio.
          </p>
        </div>

        {/* Enhanced Statistics Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {/* Total Contacts Card */}
          <div style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(14, 165, 233, 0.3)',
            padding: '2rem',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, transparent 100%)',
              borderRadius: '0 20px 0 100px'
            }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem', fontWeight: '600' }}>
                  TOTAL DE CONTATOS
                </h3>
                <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0ea5e9', margin: 0 }}>
                  {estatisticas.totalContatos}
                </p>
              </div>
              <div style={{
                background: 'rgba(14, 165, 233, 0.15)',
                padding: '0.75rem',
                borderRadius: '12px',
                fontSize: '1.5rem'
              }}>
                📞
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{
                color: '#22c55e',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                +{estatisticas.crescimentoContatos}%
              </span>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>vs mês anterior</span>
            </div>
          </div>

          {/* Today's Contacts Card */}
          <div style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            padding: '2rem',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, transparent 100%)',
              borderRadius: '0 20px 0 100px'
            }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem', fontWeight: '600' }}>
                  CONTATOS HOJE
                </h3>
                <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#8b5cf6', margin: 0 }}>
                  {estatisticas.contatosHoje}
                </p>
              </div>
              <div style={{
                background: 'rgba(139, 92, 246, 0.15)',
                padding: '0.75rem',
                borderRadius: '12px',
                fontSize: '1.5rem'
              }}>
                📅
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{
                color: estatisticas.contatosHoje > estatisticas.contatosOntem ? '#22c55e' : '#f59e0b',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                {estatisticas.contatosHoje > estatisticas.contatosOntem ? '↗' : '→'} {estatisticas.contatosOntem} ontem
              </span>
            </div>
          </div>

          {/* Total Articles Card */}
          <div style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            padding: '2rem',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)',
              borderRadius: '0 20px 0 100px'
            }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem', fontWeight: '600' }}>
                  ARTIGOS PUBLICADOS
                </h3>
                <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#10b981', margin: 0 }}>
                  {estatisticas.totalArtigos}
                </p>
              </div>
              <div style={{
                background: 'rgba(16, 185, 129, 0.15)',
                padding: '0.75rem',
                borderRadius: '12px',
                fontSize: '1.5rem'
              }}>
                📝
              </div>
            </div>
          </div>
        </div>


        {/* Enhanced Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '2rem'
        }}>
          {/* Enhanced Recent Contacts */}
          <div style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid rgba(14, 165, 233, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, transparent 100%)',
              borderRadius: '0 20px 0 80px'
            }}></div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  background: 'rgba(14, 165, 233, 0.15)',
                  padding: '0.5rem',
                  borderRadius: '10px',
                  fontSize: '1.2rem'
                }}>
                  📞
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '700', margin: 0, color: '#f8fafc' }}>
                  Contatos Recentes
                </h2>
              </div>
              <Link to="/admin/contatos" style={{
                color: '#0ea5e9',
                fontSize: '0.9rem',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(14, 165, 233, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                Ver todos →
              </Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contatosRecentes.map(contato => {
                const statusStyle = getStatusColor(contato.status);
                return (
                  <div key={contato.id} style={{
                    padding: '1.5rem',
                    background: 'rgba(45, 55, 72, 0.6)',
                    borderRadius: '12px',
                    borderLeft: '4px solid #0ea5e9',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <div style={{ flex: 1 }}>
                        <span style={{ fontWeight: '600', fontSize: '1rem', color: '#f8fafc' }}>
                          {contato.nome}
                        </span>
                        <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                          {contato.email}
                        </div>
                      </div>
                      <span style={{
                        fontSize: '0.75rem',
                        padding: '0.375rem 0.75rem',
                        borderRadius: '6px',
                        background: statusStyle.bg,
                        color: statusStyle.color,
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        {contato.status === 'em_andamento' ? 'EM ANDAMENTO' : contato.status}
                      </span>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.5rem', fontSize: '0.8rem' }}>
                      {contato.empresa && (
                        <div style={{ color: '#94a3b8' }}>
                          <span style={{ color: '#64748b' }}>Empresa:</span> {contato.empresa}
                        </div>
                      )}
                      <div style={{ color: '#94a3b8' }}>
                        <span style={{ color: '#64748b' }}>Interesse:</span> {contato.area_interesse}
                      </div>
                      <div style={{ color: '#94a3b8' }}>
                        <span style={{ color: '#64748b' }}>Recebido:</span> {formatDate(contato.criado_em)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Popular Articles */}
          <div style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, transparent 100%)',
              borderRadius: '0 20px 0 80px'
            }}></div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  background: 'rgba(139, 92, 246, 0.15)',
                  padding: '0.5rem',
                  borderRadius: '10px',
                  fontSize: '1.2rem'
                }}>
                  📝
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '700', margin: 0, color: '#f8fafc' }}>
                  Artigos Populares
                </h2>
              </div>
              <Link to="/admin/artigos" style={{
                color: '#8b5cf6',
                fontSize: '0.9rem',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                Gerenciar →
              </Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {artigosPopulares.map(artigo => (
                <div key={artigo.id} style={{
                  padding: '1.5rem',
                  background: 'rgba(45, 55, 72, 0.6)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #8b5cf6',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div style={{ flex: 1 }}>
                      <Link to={`/blog/${artigo.slug}`} style={{
                        fontWeight: '600',
                        fontSize: '1rem',
                        color: '#f8fafc',
                        textDecoration: 'none',
                        display: 'block'
                      }}>
                        {artigo.titulo}
                      </Link>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                        Por {artigo.autor}
                      </div>
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      padding: '0.375rem 0.75rem',
                      borderRadius: '6px',
                      background: 'rgba(34, 197, 94, 0.2)',
                      color: '#22c55e',
                      fontWeight: '600',
                      textTransform: 'uppercase'
                    }}>
                      ATIVO
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                    <div style={{ color: '#94a3b8' }}>
                      Publicado em: {new Date(artigo.data_publicacao || artigo.criado_em).toLocaleDateString('pt-BR')}
                    </div>
                    <Link to={`/blog/${artigo.slug}`} style={{
                      color: '#8b5cf6',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(139, 92, 246, 0.3)'
                    }}>
                      Ver Post
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Enhanced Quick Actions */}
        <div style={{
          marginTop: '2rem',
          padding: '2.5rem',
          background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #7c3aed 100%)',
          borderRadius: '24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200px',
            height: '200px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-30%',
            left: '-30%',
            width: '150px',
            height: '150px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '50%',
          }}></div>
          
          <h2 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.8rem', fontWeight: '800' }}>
            🚀 Ações Rápidas
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem', fontSize: '1rem' }}>
            Acesse rapidamente as principais funcionalidades da plataforma
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <Link to="/admin/contatos" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '16px',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📞</div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Gerenciar Contatos</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Ver todos os leads</div>
            </Link>

            <Link to="/admin/artigos/novo" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '16px',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✍️</div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Novo Artigo</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Criar conteúdo</div>
            </Link>

            <Link to="/admin/analytics" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '16px',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📈</div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Analytics</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Relatórios</div>
            </Link>

            <Link to="/" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '16px',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌐</div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Ver Site</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Página principal</div>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          textAlign: 'center',
          borderTop: '1px solid rgba(71, 85, 105, 0.3)',
          color: '#94a3b8'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            © 2025 RaiseUp - Automação com IA Humanizada | Dashboard Administrativo v1.0
          </p>
        </div>
      </main>
    </div>
  );
}