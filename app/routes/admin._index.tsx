import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { requireUser } from "~/lib/auth.server";
import { supabase } from "~/lib/supabase.server";
import AdminLayout from "~/components/AdminLayout";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard Admin - RaiseUp" },
    { name: "robots", content: "noindex, nofollow" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await requireUser(request);

  try {
    const hoje = new Date();
    const ontem = new Date(hoje);
    ontem.setDate(hoje.getDate() - 1);
    
    const inicioSemana = new Date(hoje);
    inicioSemana.setDate(hoje.getDate() - 7);
    
    const mesPassado = new Date(hoje);
    mesPassado.setMonth(hoje.getMonth() - 1);

    // Buscar estatísticas com comparações temporais
    const [
      contatosResult,
      artigosResult,
      totalContatosResult,
      totalArtigosResult,
      contatosHojeResult,
      contatosOntemResult,
      contatosSemanaResult,
      contatosMesPassadoResult,
      artigosSemanaResult
    ] = await Promise.all([
      // Contatos recentes
      supabase
        .from('contatos')
        .select('id, nome, criado_em, status')
        .order('criado_em', { ascending: false })
        .limit(5),
      
      // Artigos populares
      supabase
        .from('artigos')
        .select('id, titulo, visualizacoes, ativo')
        .order('visualizacoes', { ascending: false })
        .limit(5),
      
      // Total de contatos
      supabase
        .from('contatos')
        .select('id', { count: 'exact', head: true }),
      
      // Total de artigos
      supabase
        .from('artigos')
        .select('id', { count: 'exact', head: true }),
      
      // Contatos hoje
      supabase
        .from('contatos')
        .select('id', { count: 'exact', head: true })
        .gte('criado_em', hoje.toISOString().split('T')[0]),
      
      // Contatos ontem
      supabase
        .from('contatos')
        .select('id', { count: 'exact', head: true })
        .gte('criado_em', ontem.toISOString().split('T')[0])
        .lt('criado_em', hoje.toISOString().split('T')[0]),
      
      // Contatos esta semana
      supabase
        .from('contatos')
        .select('id', { count: 'exact', head: true })
        .gte('criado_em', inicioSemana.toISOString().split('T')[0]),
      
      // Contatos mês passado
      supabase
        .from('contatos')
        .select('id', { count: 'exact', head: true })
        .gte('criado_em', mesPassado.toISOString().split('T')[0])
        .lt('criado_em', hoje.toISOString().split('T')[0]),
      
      // Artigos criados esta semana
      supabase
        .from('artigos')
        .select('id', { count: 'exact', head: true })
        .gte('criado_em', inicioSemana.toISOString().split('T')[0])
    ]);

    const contatos = contatosResult.data || [];
    const artigos = artigosResult.data || [];
    
    const totalContatos = totalContatosResult.count || 0;
    const totalArtigos = totalArtigosResult.count || 0;
    const contatosHoje = contatosHojeResult.count || 0;
    const contatosOntem = contatosOntemResult.count || 0;
    const contatosSemana = contatosSemanaResult.count || 0;
    const contatosMesPassado = contatosMesPassadoResult.count || 0;
    const artigosSemana = artigosSemanaResult.count || 0;

    // Calcular percentuais de crescimento
    const crescimentoContatosVsOntem = contatosOntem > 0 
      ? ((contatosHoje - contatosOntem) / contatosOntem * 100).toFixed(1)
      : contatosHoje > 0 ? '100' : '0';

    const crescimentoContatosVsMes = contatosMesPassado > 0 
      ? ((totalContatos - contatosMesPassado) / contatosMesPassado * 100).toFixed(1)
      : totalContatos > 0 ? '100' : '0';

    return json({
      user,
      contatos,
      artigos,
      stats: {
        totalContatos,
        totalArtigos,
        contatosHoje,
        artigosSemana,
        crescimentoContatosVsOntem: parseFloat(crescimentoContatosVsOntem),
        crescimentoContatosVsMes: parseFloat(crescimentoContatosVsMes),
        // Simulando dados de acesso (pode integrar com Analytics depois)
        acessos30Dias: 15400,
        crescimentoAcessos: 18.5
      }
    });
  } catch (error) {
    console.error('Erro ao carregar dashboard:', error);
    // Retornar dados vazios em caso de erro
    return json({
      user,
      contatos: [],
      artigos: [],
      stats: {
        totalContatos: 0,
        totalArtigos: 0,
        contatosHoje: 0,
        artigosSemana: 0,
        crescimentoContatosVsOntem: 0,
        crescimentoContatosVsMes: 0,
        acessos30Dias: 0,
        crescimentoAcessos: 0
      }
    });
  }
};

export default function AdminDashboard() {
  const { user, contatos, artigos, stats } = useLoaderData<typeof loader>();

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
      
      <AdminLayout 
        user={user} 
        currentPage="dashboard"
        pageTitle="Dashboard"
      >

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
            {stats.totalContatos}
          </p>
          <p style={{ 
            color: stats.crescimentoContatosVsMes >= 0 ? '#22c55e' : '#ef4444', 
            fontSize: '0.8rem', 
            margin: 0 
          }}>
            {stats.crescimentoContatosVsMes >= 0 ? '+' : ''}{stats.crescimentoContatosVsMes}% vs mês anterior
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
            {stats.contatosHoje}
          </p>
          <p style={{ 
            color: stats.crescimentoContatosVsOntem >= 0 ? '#22c55e' : '#ef4444', 
            fontSize: '0.8rem', 
            margin: 0 
          }}>
            {stats.crescimentoContatosVsOntem >= 0 ? '+' : ''}{stats.crescimentoContatosVsOntem}% vs ontem
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
            {stats.totalArtigos}
          </p>
          <p style={{ color: '#22c55e', fontSize: '0.8rem', margin: 0 }}>
            +{stats.artigosSemana} esta semana
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
            {(stats.acessos30Dias / 1000).toFixed(1)}K
          </p>
          <p style={{ color: '#22c55e', fontSize: '0.8rem', margin: 0 }}>
            +{stats.crescimentoAcessos}% vs mês anterior
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
              {contatos.length > 0 ? contatos.map(contato => (
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
              {artigos.length > 0 ? artigos.map(artigo => (
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
    </AdminLayout>
    </>
  );
}