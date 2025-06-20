import { Link, Form } from "@remix-run/react";
import type { Usuario } from "~/lib/auth.server";

interface AdminLayoutProps {
  user: Usuario;
  currentPage: 'dashboard' | 'artigos' | 'contatos' | 'analytics';
  children: React.ReactNode;
  pageTitle?: string;
  pageActions?: React.ReactNode;
}

export default function AdminLayout({ 
  user, 
  currentPage, 
  children, 
  pageTitle,
  pageActions 
}: AdminLayoutProps) {
  const navItems = [
    { key: 'dashboard', href: '/admin', label: '📊 Dashboard', icon: '📊' },
    { key: 'artigos', href: '/admin/artigos', label: '📝 Artigos', icon: '📝' },
    { key: 'contatos', href: '/admin/contatos', label: '📞 Contatos', icon: '📞' },
    { key: 'analytics', href: '/admin/analytics', label: '📈 Analytics', icon: '📈' },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Reset global para admin */
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            min-height: 100vh !important;
            overflow-x: hidden !important;
          }
          
          #root, [data-remix-root] {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            min-height: 100vh !important;
          }
          
          .admin-container {
            margin: 0 !important;
            padding: 0 !important;
            width: 100vw !important;
            min-height: 100vh !important;
            position: relative !important;
          }
          
          @media (max-width: 768px) {
            html, body {
              font-size: 14px !important;
            }
            
            .admin-header {
              padding: 0.75rem 1rem !important;
              position: relative !important;
              width: 100% !important;
              left: 0 !important;
              right: 0 !important;
            }
            
            .admin-header-content {
              flex-direction: column !important;
              gap: 0.75rem !important;
              align-items: flex-start !important;
            }
            
            .admin-logo {
              font-size: 1.25rem !important;
            }
            
            .admin-user-section {
              flex-direction: row !important;
              align-items: center !important;
              gap: 0.5rem !important;
              width: 100% !important;
              justify-content: space-between !important;
            }
            
            .admin-user-info {
              padding: 0.4rem 0.75rem !important;
              flex: 1 !important;
            }
            
            .admin-nav-container {
              padding: 0.5rem !important;
              overflow-x: auto !important;
              scrollbar-width: none !important;
              -ms-overflow-style: none !important;
              margin: 0 -1rem !important;
              padding-left: 1rem !important;
              padding-right: 1rem !important;
            }
            
            .admin-nav-container::-webkit-scrollbar {
              display: none !important;
            }
            
            .admin-nav-items {
              flex-wrap: nowrap !important;
              min-width: max-content !important;
              gap: 0.5rem !important;
            }
            
            .admin-nav-link {
              white-space: nowrap !important;
              min-width: max-content !important;
              padding: 0.5rem 1rem !important;
              font-size: 0.8rem !important;
            }
            
            .admin-page-title {
              font-size: 1.5rem !important;
            }
            
            .admin-main-container {
              padding: 1rem !important;
            }
            
            .admin-page-header {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 1rem !important;
            }
            
            .admin-page-actions {
              width: 100% !important;
              display: flex !important;
              justify-content: flex-start !important;
            }
            
            .admin-page-actions select {
              width: 100% !important;
              max-width: 200px !important;
            }
          }
          
          @media (max-width: 480px) {
            .admin-logo {
              font-size: 1.1rem !important;
            }
            
            .admin-nav-link {
              padding: 0.4rem 0.8rem !important;
              font-size: 0.75rem !important;
            }
            
            .admin-page-title {
              font-size: 1.25rem !important;
            }
          }
        `
      }} />
      
      <div className="admin-container" style={{
        minHeight: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a202c 100%)',
        color: '#f8fafc',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        position: 'relative'
      }}>
      {/* Header */}
      <header className="admin-header" style={{
        background: 'rgba(26, 32, 44, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(51, 65, 85, 0.3)',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="admin-header-content" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <Link to="/admin" className="admin-logo" style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <img src="/logo_raiseup.png" alt="RaiseUp Logo" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
            <span>Admin</span>
          </Link>
          
          <div className="admin-user-section" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="admin-user-info" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.5rem 1rem',
              background: 'rgba(45, 55, 72, 0.5)',
              borderRadius: '8px',
              border: '1px solid rgba(51, 65, 85, 0.3)'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                {user.nome.charAt(0).toUpperCase()}
              </div>
              <span style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>
                {user.nome}
              </span>
              <Form action="/admin/logout" method="post">
                <button style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#ef4444',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(239, 68, 68, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(239, 68, 68, 0.1)';
                }}
                >
                  🚪 Sair
                </button>
              </Form>
            </div>
          </div>
        </div>
      </header>

      <div className="admin-main-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
        {/* Navegação */}
        <nav style={{ marginBottom: '2rem' }}>
          <div className="admin-nav-container" style={{
            display: 'flex',
            gap: '0.5rem',
            background: 'rgba(26, 32, 44, 0.8)',
            backdropFilter: 'blur(20px)',
            padding: '0.75rem',
            borderRadius: '12px',
            border: '1px solid rgba(51, 65, 85, 0.3)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            flexWrap: 'wrap'
          }}>
            <div className="admin-nav-items" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {navItems.map(item => (
                <Link
                  key={item.key}
                  to={item.href}
                  className="admin-nav-link"
                  style={{
                    color: currentPage === item.key ? '#0ea5e9' : '#94a3b8',
                    textDecoration: 'none',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    transition: 'all 0.2s',
                    fontWeight: '500',
                    fontSize: '0.9rem',
                    background: currentPage === item.key 
                      ? 'rgba(14, 165, 233, 0.15)' 
                      : 'transparent',
                    border: currentPage === item.key 
                      ? '1px solid rgba(14, 165, 233, 0.3)' 
                      : '1px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    if (currentPage !== item.key) {
                      e.target.style.color = '#e2e8f0';
                      e.target.style.background = 'rgba(45, 55, 72, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== item.key) {
                      e.target.style.color = '#94a3b8';
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                  <span>{item.label.replace(/^.+ /, '')}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Título da Página e Ações */}
        {(pageTitle || pageActions) && (
          <div className="admin-page-header" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            {pageTitle && (
              <h1 className="admin-page-title" style={{
                fontSize: '2rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0
              }}>
                {pageTitle}
              </h1>
            )}
            {pageActions && (
              <div className="admin-page-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                {pageActions}
              </div>
            )}
          </div>
        )}

        {/* Conteúdo */}
        {children}
      </div>
    </div>
    </>
  );
}