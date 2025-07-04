import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Form, useNavigation } from "@remix-run/react";
import { requireUser } from "~/lib/auth.server";
import { getAnalyticsData } from "~/lib/analytics.server";
import AdminLayout from "~/components/AdminLayout";
import { Suspense, useState, useEffect } from "react";


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await requireUser(request);
  
  const url = new URL(request.url);
  const period = url.searchParams.get('period') || '30daysAgo';
  
  try {
    const analyticsData = await getAnalyticsData(period);
    
    // Garantir que todas as propriedades existam com fallbacks seguros
    const safeAnalyticsData = {
      totalSessions: analyticsData.totalSessions || 0,
      totalUsers: analyticsData.totalUsers || 0,
      totalPageviews: analyticsData.totalPageviews || 0,
      bounceRate: analyticsData.bounceRate || 0,
      avgSessionDuration: analyticsData.avgSessionDuration || '0m 0s',
      topPages: analyticsData.topPages || [],
      trafficSources: analyticsData.trafficSources || [],
      devices: analyticsData.devices || [],
      locations: analyticsData.locations || [],
      cities: analyticsData.cities || [],
      hourlyData: analyticsData.hourlyData || [],
      realtimeUsers: analyticsData.realtimeUsers || 0,
      searchTerms: analyticsData.searchTerms || [],
      newVsReturning: analyticsData.newVsReturning || [],
      pageEngagement: analyticsData.pageEngagement || [],
      performance: analyticsData.performance || [],
      conversions: analyticsData.conversions || []
    };
    
    return json({ user, analyticsData: safeAnalyticsData, currentPeriod: period });
  } catch (error) {
    console.error('Erro ao carregar analytics:', error);
    // Fallback para dados simulados em caso de erro
    const analyticsData = {
      totalSessions: 0,
      totalUsers: 0,
      totalPageviews: 0,
      bounceRate: 0,
      avgSessionDuration: '0m 0s',
      topPages: [],
      trafficSources: [],
      devices: [],
      locations: [],
      cities: [],
      hourlyData: [],
      realtimeUsers: 0,
      searchTerms: [],
      newVsReturning: [],
      pageEngagement: [],
      performance: [],
      conversions: []
    };
    return json({ user, analyticsData, currentPeriod: period });
  }
};

export default function AdminAnalytics() {
  const { user, analyticsData, currentPeriod } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  
  const periodLabels: Record<string, string> = {
    'today': 'Hoje',
    '7daysAgo': 'Últimos 7 dias', 
    '30daysAgo': 'Últimos 30 dias',
    '90daysAgo': 'Últimos 90 dias'
  };

  // Detectar quando está carregando dados
  useEffect(() => {
    if (navigation.state === 'loading') {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [navigation.state]);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .analytics-stats-grid {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            
            .analytics-content-grid {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            
            .analytics-content-grid .analytics-content-card {
              max-width: 100% !important;
            }
            
            .analytics-stat-card {
              padding: 1.25rem !important;
            }
            
            .analytics-stat-value {
              font-size: 1.75rem !important;
            }
            
            .analytics-stat-icon {
              font-size: 1.25rem !important;
              top: 0.75rem !important;
              right: 0.75rem !important;
            }
            
            .analytics-content-card {
              padding: 1rem !important;
            }
            
            .analytics-card-title {
              font-size: 1.1rem !important;
              margin-bottom: 1rem !important;
            }
            
            .analytics-progress-item {
              margin-bottom: 0.75rem !important;
            }
            
            .analytics-progress-header {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 0.25rem !important;
              margin-bottom: 0.25rem !important;
            }
            
            .analytics-integration-actions {
              flex-direction: column !important;
              gap: 0.75rem !important;
            }
            
            .analytics-integration-button {
              width: 100% !important;
              text-align: center !important;
            }
          }
          
          @media (max-width: 480px) {
            .analytics-stat-card {
              padding: 1rem !important;
            }
            
            .analytics-stat-value {
              font-size: 1.5rem !important;
            }
            
            .analytics-content-card {
              padding: 0.75rem !important;
            }
            
            .analytics-card-title {
              font-size: 1rem !important;
            }
            
            .analytics-progress-label {
              font-size: 0.8rem !important;
            }
          }
          
          /* Skeleton loading animations */
          @keyframes shimmer {
            0% { background-position: -200px 0; }
            100% { background-position: calc(200px + 100%) 0; }
          }
          
          .skeleton {
            background: linear-gradient(90deg, #1a202c 25%, #2d3748 50%, #1a202c 75%);
            background-size: 200px 100%;
            animation: shimmer 1.5s infinite;
            border-radius: 8px;
          }
          
          .loading-overlay {
            filter: blur(2px);
            opacity: 0.6;
            pointer-events: none;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `
      }} />
      
      <AdminLayout 
        user={user} 
        currentPage="analytics"
        pageTitle="Analytics"
        pageActions={
          <Form method="get" style={{ margin: 0 }}>
            <select
              name="period"
              value={currentPeriod}
              onChange={(e) => {
                const form = e.target.closest('form');
                if (form) form.submit();
              }}
              style={{
                padding: '0.75rem 1rem',
                background: 'rgba(45, 55, 72, 0.8)',
                borderRadius: '8px',
                fontSize: '0.9rem',
                color: '#f8fafc',
                border: '1px solid rgba(51, 65, 85, 0.3)',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <option value="today">📅 Hoje</option>
              <option value="7daysAgo">📅 Últimos 7 dias</option>
              <option value="30daysAgo">📅 Últimos 30 dias</option>
              <option value="90daysAgo">📅 Últimos 90 dias</option>
            </select>
          </Form>
        }
      >
        {/* Indicador de Período Atual */}
        <div style={{
          background: 'rgba(14, 165, 233, 0.1)',
          border: '1px solid rgba(14, 165, 233, 0.3)',
          borderRadius: '8px',
          padding: '0.75rem 1rem',
          marginBottom: '1.5rem',
          color: '#0ea5e9',
          fontSize: '0.9rem',
          textAlign: 'center'
        }}>
          📊 Exibindo dados: <strong>{periodLabels[currentPeriod] || 'Últimos 30 dias'}</strong>
          {process.env.NODE_ENV === 'development' && (
            <span style={{ marginLeft: '1rem', opacity: 0.7 }}>
              (Período: {currentPeriod})
            </span>
          )}
        </div>

        {/* Cards de Estatísticas */}
        <div className={`analytics-stats-grid ${isLoading ? 'loading-overlay' : ''}`} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem',
          position: 'relative'
        }}>
          {isLoading && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              background: 'rgba(26, 32, 44, 0.95)',
              padding: '1rem 2rem',
              borderRadius: '8px',
              border: '1px solid rgba(51, 65, 85, 0.3)',
              color: '#0ea5e9',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                border: '2px solid rgba(14, 165, 233, 0.3)',
                borderRadius: '50%',
                borderTopColor: '#0ea5e9',
                animation: 'spin 1s linear infinite'
              }} />
              Atualizando dados...
            </div>
          )}
          <StatCard
            title="Total de Sessões"
            value={analyticsData.totalSessions.toLocaleString()}
            subtitle="+12% vs mês anterior"
            color="#0ea5e9"
            icon="👥"
          />
          <StatCard
            title="Usuários Únicos"
            value={analyticsData.totalUsers.toLocaleString()}
            subtitle="+8% vs mês anterior"
            color="#8b5cf6"
            icon="👤"
          />
          <StatCard
            title="Visualizações"
            value={analyticsData.totalPageviews.toLocaleString()}
            subtitle="+15% vs mês anterior"
            color="#10b981"
            icon="👁️"
          />
          <StatCard
            title="Taxa de Rejeição"
            value={`${analyticsData.bounceRate}%`}
            subtitle="-3% vs mês anterior"
            color="#f59e0b"
            icon="📊"
          />
          <StatCard
            title="Duração Média"
            value={analyticsData.avgSessionDuration}
            subtitle="+18s vs mês anterior"
            color="#ef4444"
            icon="⏱️"
          />
          <StatCard
            title="Online Agora"
            value={(analyticsData.realtimeUsers || 0).toString()}
            subtitle="Usuários ativos"
            color="#10b981"
            icon="🟢"
          />
        </div>

        <div className={`analytics-content-grid ${isLoading ? 'loading-overlay' : ''}`} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2rem'
        }}>
          {/* Páginas Mais Visitadas */}
          <div className="analytics-content-card" style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            padding: '1.5rem',
            borderRadius: '16px',
            border: '1px solid rgba(51, 65, 85, 0.3)',
            boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 className="analytics-card-title" style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              margin: '0 0 1.5rem 0',
              color: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              📈 Páginas Mais Visitadas
            </h2>
            {analyticsData.topPages.map((page, index) => (
              <ProgressBar
                key={page.page}
                label={page.page === '/' ? 'Página Inicial' : page.page}
                value={page.views}
                percentage={page.percentage}
                color={index === 0 ? '#0ea5e9' : index === 1 ? '#8b5cf6' : '#10b981'}
              />
            ))}
          </div>

          {/* Fontes de Tráfego */}
          <div className="analytics-content-card" style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            padding: '1.5rem',
            borderRadius: '16px',
            border: '1px solid rgba(51, 65, 85, 0.3)',
            boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 className="analytics-card-title" style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              margin: '0 0 1.5rem 0',
              color: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🚀 Fontes de Tráfego
            </h2>
            {analyticsData.trafficSources.map((source, index) => (
              <ProgressBar
                key={source.source}
                label={source.source}
                value={source.sessions}
                percentage={source.percentage}
                color={index === 0 ? '#0ea5e9' : index === 1 ? '#8b5cf6' : index === 2 ? '#10b981' : '#f59e0b'}
              />
            ))}
          </div>

          {/* Dispositivos */}
          <div className="analytics-content-card" style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            padding: '1.5rem',
            borderRadius: '16px',
            border: '1px solid rgba(51, 65, 85, 0.3)',
            boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 className="analytics-card-title" style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              margin: '0 0 1.5rem 0',
              color: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              📱 Dispositivos
            </h2>
            {analyticsData.devices.map((device, index) => (
              <ProgressBar
                key={device.device}
                label={device.device}
                value={device.sessions}
                percentage={device.percentage}
                color={index === 0 ? '#0ea5e9' : index === 1 ? '#8b5cf6' : '#10b981'}
              />
            ))}
          </div>

          {/* Localizações */}
          <div className="analytics-content-card" style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            padding: '1.5rem',
            borderRadius: '16px',
            border: '1px solid rgba(51, 65, 85, 0.3)',
            boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 className="analytics-card-title" style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              margin: '0 0 1.5rem 0',
              color: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🌍 Países
            </h2>
            {analyticsData.locations.map((location, index) => (
              <ProgressBar
                key={location.country}
                label={location.country}
                value={location.sessions}
                percentage={location.percentage}
                color={index === 0 ? '#0ea5e9' : index === 1 ? '#8b5cf6' : '#10b981'}
              />
            ))}
          </div>

          {/* Cidades */}
          <div className="analytics-content-card" style={{
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            padding: '1.5rem',
            borderRadius: '16px',
            border: '1px solid rgba(51, 65, 85, 0.3)',
            boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 className="analytics-card-title" style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              margin: '0 0 1.5rem 0',
              color: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🏙️ Principais Cidades
            </h2>
            {analyticsData.cities.map((city, index) => (
              <ProgressBarWithSubtitle
                key={`${city.city}-${city.country}`}
                label={city.city}
                subtitle={city.country}
                value={city.sessions}
                percentage={city.percentage}
                color={index === 0 ? '#0ea5e9' : index === 1 ? '#8b5cf6' : index === 2 ? '#10b981' : '#f59e0b'}
              />
            ))}
          </div>
        </div>

        {/* Seções Avançadas */}
        <div className={`analytics-content-grid ${isLoading ? 'loading-overlay' : ''}`} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
            {/* Horários de Pico */}
            {(
              <div className="analytics-content-card" style={{
                background: 'rgba(26, 32, 44, 0.8)',
                backdropFilter: 'blur(20px)',
                padding: '1.5rem',
                borderRadius: '16px',
                border: '1px solid rgba(51, 65, 85, 0.3)',
                boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
              }}>
                <h2 className="analytics-card-title" style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  margin: '0 0 1.5rem 0',
                  color: '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  ⏰ Horários de Pico
                </h2>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))', 
                  gap: '0.5rem',
                  fontSize: '0.75rem',
                  color: '#94a3b8'
                }}>
                  {(analyticsData.hourlyData || []).map((hour, index) => (
                    <div key={hour.hour} style={{
                      textAlign: 'center',
                      padding: '0.5rem 0.25rem',
                      background: `rgba(14, 165, 233, ${Math.min(hour.sessions / 1000, 0.8)})`,
                      borderRadius: '4px',
                      border: '1px solid rgba(14, 165, 233, 0.3)'
                    }}>
                      <div style={{ fontWeight: '600', color: '#f8fafc' }}>{hour.hour}</div>
                      <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>{hour.sessions}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Termos de Busca */}
            {(analyticsData.searchTerms || []).length > 0 && (
              <div className="analytics-content-card" style={{
                background: 'rgba(26, 32, 44, 0.8)',
                backdropFilter: 'blur(20px)',
                padding: '1.5rem',
                borderRadius: '16px',
                border: '1px solid rgba(51, 65, 85, 0.3)',
                boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
              }}>
                <h2 className="analytics-card-title" style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  margin: '0 0 1.5rem 0',
                  color: '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  🔍 Termos de Busca
                </h2>
                {(analyticsData.searchTerms || []).map((term, index) => (
                  <ProgressBar
                    key={term.term}
                    label={term.term}
                    value={term.sessions}
                    percentage={parseFloat(((term.sessions / analyticsData.totalSessions) * 100).toFixed(1))}
                    color={index === 0 ? '#0ea5e9' : index === 1 ? '#8b5cf6' : '#10b981'}
                  />
                ))}
              </div>
            )}

            {/* Usuários Novos vs Recorrentes */}
            {(
              <div className="analytics-content-card" style={{
                background: 'rgba(26, 32, 44, 0.8)',
                backdropFilter: 'blur(20px)',
                padding: '1.5rem',
                borderRadius: '16px',
                border: '1px solid rgba(51, 65, 85, 0.3)',
                boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
              }}>
                <h2 className="analytics-card-title" style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  margin: '0 0 1.5rem 0',
                  color: '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  👥 Novos vs Recorrentes
                </h2>
                {(analyticsData.newVsReturning || []).map((segment, index) => (
                  <ProgressBar
                    key={segment.type}
                    label={segment.type}
                    value={segment.users}
                    percentage={segment.percentage}
                    color={segment.type === 'Novos' ? '#10b981' : '#8b5cf6'}
                  />
                ))}
              </div>
            )}

            {/* Engajamento por Página */}
            <div className="analytics-content-card" style={{
              background: 'rgba(26, 32, 44, 0.8)',
              backdropFilter: 'blur(20px)',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid rgba(51, 65, 85, 0.3)',
              boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
            }}>
              <h2 className="analytics-card-title" style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                margin: '0 0 1.5rem 0',
                color: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                📈 Tempo na Página
              </h2>
              {(analyticsData.pageEngagement || []).map((item, index) => (
                <div key={item.page} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  background: `${['#0ea5e9', '#10b981', '#8b5cf6', '#f59e0b'][index % 4]}15`,
                  borderRadius: '8px',
                  border: `1px solid ${['#0ea5e9', '#10b981', '#8b5cf6', '#f59e0b'][index % 4]}30`
                }}>
                  <span style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>
                    {item.page === '/' ? 'Página Inicial' : item.page}
                  </span>
                  <span style={{ color: ['#0ea5e9', '#10b981', '#8b5cf6', '#f59e0b'][index % 4], fontWeight: '600' }}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Performance do Site */}
            <div className="analytics-content-card" style={{
              background: 'rgba(26, 32, 44, 0.8)',
              backdropFilter: 'blur(20px)',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid rgba(51, 65, 85, 0.3)',
              boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
            }}>
              <h2 className="analytics-card-title" style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                margin: '0 0 1.5rem 0',
                color: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                ⚡ Performance
              </h2>
              {(analyticsData.performance || []).map((item, index) => (
                <div key={item.metric} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  background: `${item.color}15`,
                  borderRadius: '8px',
                  border: `1px solid ${item.color}30`
                }}>
                  <span style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>
                    {item.metric}
                  </span>
                  <span style={{ color: item.color, fontWeight: '600' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Conversões e Objetivos */}
            <div className="analytics-content-card" style={{
              background: 'rgba(26, 32, 44, 0.8)',
              backdropFilter: 'blur(20px)',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid rgba(51, 65, 85, 0.3)',
              boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
            }}>
              <h2 className="analytics-card-title" style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                margin: '0 0 1.5rem 0',
                color: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                🎯 Conversões
              </h2>
              {(analyticsData.conversions || []).map((item, index) => (
                <div key={item.goal} style={{ marginBottom: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>{item.goal}</span>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
                        {item.conversions}
                      </span>
                      <span style={{ color: item.color, fontSize: '0.8rem', fontWeight: '600' }}>
                        {item.rate}
                      </span>
                    </div>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: 'rgba(45, 55, 72, 0.5)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${parseFloat(item.rate)}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${item.color} 0%, ${item.color}80 100%)`,
                      borderRadius: '4px',
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* Integração com Google Analytics */}
        <div style={{
          marginTop: '2rem',
          background: 'rgba(26, 32, 44, 0.8)',
          backdropFilter: 'blur(20px)',
          padding: '1.5rem',
          borderRadius: '16px',
          border: '1px solid rgba(51, 65, 85, 0.3)',
          boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)',
          textAlign: 'center'
        }}>
          <h3 style={{
            color: '#f8fafc',
            fontSize: '1.1rem',
            fontWeight: '600',
            margin: '0 0 1rem 0'
          }}>
            📊 Integração com Google Analytics
          </h3>
          <p style={{
            color: '#94a3b8',
            margin: '0 0 1.5rem 0',
            lineHeight: '1.6'
          }}>
            Os dados mostrados acima são simulados para demonstração. Para dados reais em tempo real,
            integre com a API do Google Analytics 4.
          </p>
          <div className="analytics-integration-actions" style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://analytics.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="analytics-integration-button"
              style={{
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
            >
              📈 Abrir Google Analytics
            </a>
            <a
              href="https://console.cloud.google.com/apis/library/analyticsreporting.googleapis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="analytics-integration-button"
              style={{
                padding: '0.75rem 1.5rem',
                background: 'rgba(107, 114, 128, 0.2)',
                border: '1px solid rgba(107, 114, 128, 0.3)',
                color: '#d1d5db',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
            >
              🔧 Configurar API
            </a>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

function StatCard({ title, value, subtitle, color, icon }: any) {
  return (
    <div className="analytics-stat-card" style={{
      background: `linear-gradient(135deg, ${color}15 0%, ${color}25 100%)`,
      border: `1px solid ${color}30`,
      padding: '1.5rem',
      borderRadius: '12px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="analytics-stat-icon" style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        fontSize: '1.5rem',
        opacity: 0.7
      }}>
        {icon}
      </div>
      <h3 style={{
        color: '#94a3b8',
        fontSize: '0.9rem',
        fontWeight: '500',
        margin: '0 0 0.5rem 0'
      }}>
        {title}
      </h3>
      <p className="analytics-stat-value" style={{
        color: '#f8fafc',
        fontSize: '2rem',
        fontWeight: '700',
        margin: '0 0 0.5rem 0'
      }}>
        {value}
      </p>
      {subtitle && (
        <p style={{
          color: '#94a3b8',
          fontSize: '0.8rem',
          margin: 0
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function ProgressBar({ label, value, percentage, color }: any) {
  return (
    <div className="analytics-progress-item" style={{ marginBottom: '1rem' }}>
      <div className="analytics-progress-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.5rem'
      }}>
        <span className="analytics-progress-label" style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>{label}</span>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
            {value.toLocaleString()}
          </span>
          <span style={{ color: color, fontSize: '0.8rem', fontWeight: '600' }}>
            {percentage}%
          </span>
        </div>
      </div>
      <div style={{
        width: '100%',
        height: '8px',
        background: 'rgba(45, 55, 72, 0.5)',
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${percentage}%`,
          height: '100%',
          background: `linear-gradient(90deg, ${color} 0%, ${color}80 100%)`,
          borderRadius: '4px',
          transition: 'width 0.3s ease'
        }} />
      </div>
    </div>
  );
}

function ProgressBarWithSubtitle({ label, subtitle, value, percentage, color }: any) {
  return (
    <div className="analytics-progress-item" style={{ marginBottom: '1rem' }}>
      <div className="analytics-progress-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.5rem'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
          <span className="analytics-progress-label" style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>{label}</span>
          <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{subtitle}</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
            {value.toLocaleString()}
          </span>
          <span style={{ color: color, fontSize: '0.8rem', fontWeight: '600' }}>
            {percentage}%
          </span>
        </div>
      </div>
      <div style={{
        width: '100%',
        height: '8px',
        background: 'rgba(45, 55, 72, 0.5)',
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${percentage}%`,
          height: '100%',
          background: `linear-gradient(90deg, ${color} 0%, ${color}80 100%)`,
          borderRadius: '4px',
          transition: 'width 0.3s ease'
        }} />
      </div>
    </div>
  );
}