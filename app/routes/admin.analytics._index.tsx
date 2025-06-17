import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { requireUser } from "~/lib/auth.server";
import { getAnalyticsData } from "~/lib/analytics.server";
import AdminLayout from "~/components/AdminLayout";


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await requireUser(request);
  
  try {
    const analyticsData = await getAnalyticsData();
    return json({ user, analyticsData });
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
      locations: []
    };
    return json({ user, analyticsData });
  }
};

export default function AdminAnalytics() {
  const { user, analyticsData } = useLoaderData<typeof loader>();

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
        `
      }} />
      
      <AdminLayout 
        user={user} 
        currentPage="analytics"
        pageTitle="Analytics"
        pageActions={
          <div style={{
            padding: '0.75rem 1rem',
            background: 'rgba(45, 55, 72, 0.8)',
            borderRadius: '8px',
            fontSize: '0.9rem',
            color: '#94a3b8',
            border: '1px solid rgba(51, 65, 85, 0.3)'
          }}>
            📅 Últimos 30 dias
          </div>
        }
      >
        {/* Cards de Estatísticas */}
        <div className="analytics-stats-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
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
        </div>

        <div className="analytics-content-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
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
              🌍 Localizações
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