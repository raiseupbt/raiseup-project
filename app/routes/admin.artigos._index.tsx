import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { requireUser } from "~/lib/auth.server";
import { listarArtigos } from "~/lib/blog.server";
import AdminLayout from "~/components/AdminLayout";

export const meta: MetaFunction = () => {
  return [
    { title: "Gerenciar Artigos - Admin RaiseUp" },
    { name: "robots", content: "noindex, nofollow" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await requireUser(request);
  const artigos = await listarArtigos();
  return json({ user, artigos });
};

export default function AdminArtigos() {
  const { user, artigos } = useLoaderData<typeof loader>();

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .artigos-page-actions {
              flex-direction: column !important;
              gap: 0.75rem !important;
              align-items: stretch !important;
            }
            
            .artigos-search-input {
              min-width: auto !important;
              width: 100% !important;
            }
            
            .artigos-select {
              width: 100% !important;
            }
            
            .artigos-new-button {
              width: 100% !important;
              justify-content: center !important;
            }
            
            .artigos-table-header {
              grid-template-columns: 1fr auto !important;
              gap: 0.5rem !important;
              padding: 0.75rem 1rem !important;
            }
            
            .artigos-table-row {
              grid-template-columns: 1fr !important;
              padding: 1rem !important;
              gap: 0.75rem !important;
            }
            
            .artigos-row-meta {
              display: flex !important;
              justify-content: space-between !important;
              align-items: center !important;
              flex-wrap: wrap !important;
              gap: 0.5rem !important;
            }
            
            .artigos-desktop-column {
              display: none !important;
            }
            
            .artigos-mobile-visible {
              display: block !important;
            }
          }
          
          @media (max-width: 480px) {
            .artigos-table-header {
              padding: 0.5rem !important;
            }
            
            .artigos-table-row {
              padding: 0.75rem !important;
            }
            
            .artigos-row-meta {
              flex-direction: column !important;
              align-items: flex-start !important;
            }
          }
        `
      }} />
      
      <AdminLayout 
        user={user} 
        currentPage="artigos"
        pageTitle="Gerenciar Artigos"
        pageActions={
          <div className="artigos-page-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="search"
              placeholder="🔍 Buscar artigos..."
              className="artigos-search-input"
              style={{
                padding: '0.75rem 1rem',
                background: 'rgba(45, 55, 72, 0.8)',
                border: '1px solid rgba(51, 65, 85, 0.4)',
                borderRadius: '8px',
                color: '#f8fafc',
                fontSize: '0.9rem',
                outline: 'none',
                minWidth: '250px'
              }}
            />
            <select
              className="artigos-select"
              style={{
                padding: '0.75rem 1rem',
                background: 'rgba(45, 55, 72, 0.8)',
                border: '1px solid rgba(51, 65, 85, 0.4)',
                borderRadius: '8px',
                color: '#f8fafc',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            >
              <option value="">Todos os status</option>
              <option value="ativo">Ativos</option>
              <option value="inativo">Inativos</option>
            </select>
            <Link to="/admin/artigos/novo" className="artigos-new-button" style={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}>
              ➕ Novo Artigo
            </Link>
          </div>
        }
      >

      {/* Lista de Artigos */}
      <div style={{
        background: 'rgba(26, 32, 44, 0.8)',
        backdropFilter: 'blur(20px)',
        borderRadius: '16px',
        border: '1px solid rgba(51, 65, 85, 0.3)',
        overflow: 'hidden',
        boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
      }}>
          {/* Header da tabela */}
          <div className="artigos-table-header" style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto auto auto auto',
            gap: '1rem',
            padding: '1rem 1.5rem',
            borderBottom: '1px solid #334155',
            background: 'rgba(45, 55, 72, 0.5)',
            fontWeight: '600',
            fontSize: '0.9rem',
            color: '#94a3b8'
          }}>
            <div>ARTIGO</div>
            <div className="artigos-desktop-column" style={{ textAlign: 'center' }}>VISUALIZAÇÕES</div>
            <div className="artigos-desktop-column" style={{ textAlign: 'center' }}>STATUS</div>
            <div className="artigos-desktop-column" style={{ textAlign: 'center' }}>DATA</div>
            <div style={{ textAlign: 'center' }}>AÇÕES</div>
          </div>

          {/* Linhas da tabela */}
          {artigos.length > 0 ? artigos.map(artigo => (
            <div key={artigo.id} className="artigos-table-row" style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto auto auto auto',
              gap: '1rem',
              padding: '1.5rem',
              borderBottom: '1px solid rgba(51, 65, 85, 0.3)',
              alignItems: 'center',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(45, 55, 72, 0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              {/* Info do Artigo */}
              <div>
                <h3 style={{
                  margin: 0,
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#f8fafc'
                }}>
                  {artigo.titulo}
                </h3>
                <p style={{
                  margin: 0,
                  fontSize: '0.8rem',
                  color: '#94a3b8',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {artigo.resumo}
                </p>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginTop: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  {artigo.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '0.7rem',
                      padding: '0.25rem 0.5rem',
                      background: 'rgba(14, 165, 233, 0.2)',
                      color: '#0ea5e9',
                      borderRadius: '4px'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Mobile Meta Info */}
                <div className="artigos-row-meta artigos-mobile-visible" style={{ display: 'none', marginTop: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                      👁️ {artigo.visualizacoes.toLocaleString()}
                    </span>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      background: artigo.ativo ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                      color: artigo.ativo ? '#22c55e' : '#ef4444'
                    }}>
                      {artigo.ativo ? 'Ativo' : 'Inativo'}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                      {new Date(artigo.data_publicacao).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Visualizações */}
              <div className="artigos-desktop-column" style={{
                textAlign: 'center',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#f8fafc'
              }}>
                {artigo.visualizacoes.toLocaleString()}
              </div>

              {/* Status */}
              <div className="artigos-desktop-column" style={{ textAlign: 'center' }}>
                <span style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  background: artigo.ativo ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                  color: artigo.ativo ? '#22c55e' : '#ef4444'
                }}>
                  {artigo.ativo ? 'Ativo' : 'Inativo'}
                </span>
                {artigo.destaque && (
                  <div style={{
                    marginTop: '0.25rem',
                    fontSize: '0.7rem',
                    color: '#fbbf24'
                  }}>
                    ⭐ Destaque
                  </div>
                )}
              </div>

              {/* Data */}
              <div className="artigos-desktop-column" style={{
                textAlign: 'center',
                fontSize: '0.8rem',
                color: '#94a3b8'
              }}>
                {new Date(artigo.data_publicacao).toLocaleDateString('pt-BR')}
              </div>

              {/* Ações */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center'
              }}>
                <Link to={`/blog/${artigo.slug}`} target="_blank" style={{
                  padding: '0.5rem',
                  background: 'rgba(34, 197, 94, 0.2)',
                  color: '#22c55e',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  👁️
                </Link>
                <Link to={`/admin/artigos/${artigo.id}/editar`} style={{
                  padding: '0.5rem',
                  background: 'rgba(14, 165, 233, 0.2)',
                  color: '#0ea5e9',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  ✏️
                </Link>
              </div>
            </div>
          )) : (
            <div style={{
              padding: '3rem',
              textAlign: 'center',
              color: '#94a3b8'
            }}>
              <p style={{ marginBottom: '1rem' }}>Nenhum artigo encontrado</p>
              <Link to="/admin/artigos/novo" style={{
                color: '#0ea5e9',
                textDecoration: 'none'
              }}>
                Criar primeiro artigo →
              </Link>
            </div>
          )}
      </div>
    </AdminLayout>
    </>
  );
}