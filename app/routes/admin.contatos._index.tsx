import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { requireUser } from "~/lib/auth.server";
import { supabase } from "~/lib/supabase.server";
import AdminLayout from "~/components/AdminLayout";

// Responsive styles for contacts admin page
const contatosStyles = `
  .contatos-page-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }

  .contatos-search-input {
    padding: 0.75rem 1rem;
    background: rgba(45, 55, 72, 0.8);
    border: 1px solid rgba(51, 65, 85, 0.4);
    border-radius: 8px;
    color: #f8fafc;
    font-size: 0.9rem;
    outline: none;
    min-width: 250px;
    flex: 1;
    max-width: 400px;
  }

  .contatos-filter-select {
    padding: 0.75rem 1rem;
    background: rgba(45, 55, 72, 0.8);
    border: 1px solid rgba(51, 65, 85, 0.4);
    border-radius: 8px;
    color: #f8fafc;
    font-size: 0.9rem;
    outline: none;
    min-width: 150px;
  }

  .contatos-main-container {
    background: rgba(26, 32, 44, 0.8);
    backdrop-filter: blur(20px);
    padding: 1.5rem;
    border-radius: 16px;
    border: 1px solid rgba(51, 65, 85, 0.3);
    box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.3);
  }

  .contatos-header {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #f8fafc;
  }

  .contatos-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contatos-card {
    background: rgba(45, 55, 72, 0.5);
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid #334155;
  }

  .contatos-card-header {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: start;
  }

  .contatos-card-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .contatos-card-name {
    color: #f8fafc;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .contatos-card-contact {
    color: #94a3b8;
    margin: 0;
    font-size: 0.9rem;
  }

  .contatos-card-meta {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  }

  .contatos-card-date {
    color: #94a3b8;
    margin: 0;
    font-size: 0.9rem;
    white-space: nowrap;
  }

  .contatos-card-status {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  .contatos-card-status.novo {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
  }

  .contatos-card-status.respondido {
    background: rgba(59, 130, 246, 0.2);
    color: #3b82f6;
  }

  .contatos-card-status.arquivado {
    background: rgba(156, 163, 175, 0.2);
    color: #9ca3af;
  }

  .contatos-card-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .contatos-card-detail {
    color: #94a3b8;
    margin: 0;
    font-size: 0.9rem;
  }

  .contatos-card-message {
    background: rgba(15, 23, 42, 0.5);
    padding: 1rem;
    border-radius: 6px;
    margin-top: 1rem;
  }

  .contatos-card-message-title {
    color: #f8fafc;
    margin: 0 0 0.5rem 0;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .contatos-card-message-content {
    color: #e2e8f0;
    margin: 0;
    line-height: 1.5;
    font-size: 0.9rem;
  }

  .contatos-empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: #94a3b8;
  }

  .contatos-empty-title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .contatos-empty-subtitle {
    font-size: 0.9rem;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .contatos-page-actions {
      flex-direction: column;
      align-items: stretch;
      gap: 0.75rem;
    }

    .contatos-search-input {
      min-width: unset;
      max-width: unset;
      width: 100%;
      font-size: 1rem;
    }

    .contatos-filter-select {
      min-width: unset;
      width: 100%;
      font-size: 1rem;
    }

    .contatos-main-container {
      padding: 1rem;
      border-radius: 12px;
    }

    .contatos-header {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    .contatos-card {
      padding: 1rem;
    }

    .contatos-card-header {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .contatos-card-meta {
      text-align: left;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .contatos-card-date {
      font-size: 0.8rem;
    }

    .contatos-card-status {
      font-size: 0.75rem;
      padding: 0.2rem 0.6rem;
    }

    .contatos-card-name {
      font-size: 1rem;
      margin-bottom: 0.75rem;
    }

    .contatos-card-contact {
      font-size: 0.85rem;
    }

    .contatos-card-detail {
      font-size: 0.85rem;
    }

    .contatos-card-message {
      padding: 0.75rem;
      margin-top: 0.75rem;
    }

    .contatos-card-message-title {
      font-size: 0.85rem;
    }

    .contatos-card-message-content {
      font-size: 0.85rem;
    }

    .contatos-empty-state {
      padding: 2rem 1rem;
    }

    .contatos-empty-title {
      font-size: 1rem;
    }

    .contatos-empty-subtitle {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    .contatos-main-container {
      padding: 0.75rem;
    }

    .contatos-card {
      padding: 0.75rem;
    }

    .contatos-card-meta {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .contatos-search-input,
    .contatos-filter-select {
      padding: 0.875rem 1rem;
    }
  }
`;

export const meta: MetaFunction = () => {
  return [
    { title: "Contatos - Admin RaiseUp" },
    { name: "robots", content: "noindex, nofollow" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await requireUser(request);

  try {
    const { data: contatos, error } = await supabase
      .from('contatos')
      .select('*')
      .order('criado_em', { ascending: false });

    if (error) {
      console.error('Erro ao buscar contatos:', error);
    }

    return json({
      user,
      contatos: contatos || []
    });
  } catch (error) {
    console.error('Erro ao carregar contatos:', error);
    return json({
      user,
      contatos: []
    });
  }
};

export default function AdminContatos() {
  const { user, contatos } = useLoaderData<typeof loader>();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: contatosStyles }} />
      <AdminLayout 
        user={user} 
        currentPage="contatos"
        pageTitle="Gerenciar Contatos"
        pageActions={
          <div className="contatos-page-actions">
            <input
              type="search"
              placeholder="🔍 Buscar contatos..."
              className="contatos-search-input"
            />
            <select className="contatos-filter-select">
              <option value="">Todos os status</option>
              <option value="novo">Novos</option>
              <option value="respondido">Respondidos</option>
              <option value="arquivado">Arquivados</option>
            </select>
            <select className="contatos-filter-select">
              <option value="">Ordenar por</option>
              <option value="data_desc">Mais recentes</option>
              <option value="data_asc">Mais antigos</option>
              <option value="nome_asc">Nome A-Z</option>
              <option value="nome_desc">Nome Z-A</option>
            </select>
          </div>
        }
      >

      <div className="contatos-main-container">
          <h2 className="contatos-header">
            Contatos Recebidos ({contatos.length})
          </h2>

          {contatos.length > 0 ? (
            <div className="contatos-list">
              {contatos.map((contato: any) => (
                <div key={contato.id} className="contatos-card">
                  <div className="contatos-card-header">
                    <div className="contatos-card-info">
                      <h3 className="contatos-card-name">
                        {contato.nome}
                      </h3>
                      <p className="contatos-card-contact">
                        📧 {contato.email}
                      </p>
                      {contato.telefone && (
                        <p className="contatos-card-contact">
                          📱 {contato.telefone}
                        </p>
                      )}
                    </div>
                    <div className="contatos-card-meta">
                      <p className="contatos-card-date">
                        {new Date(contato.criado_em).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                      <span className={`contatos-card-status ${contato.status || 'novo'}`}>
                        {contato.status || 'novo'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="contatos-card-details">
                    {contato.empresa && (
                      <p className="contatos-card-detail">
                        🏢 {contato.empresa}
                      </p>
                    )}
                    
                    <p className="contatos-card-detail">
                      🎯 Área: {contato.area_interesse}
                    </p>
                  </div>
                  
                  {contato.mensagem && (
                    <div className="contatos-card-message">
                      <h4 className="contatos-card-message-title">
                        Mensagem:
                      </h4>
                      <p className="contatos-card-message-content">
                        {contato.mensagem}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="contatos-empty-state">
              <p className="contatos-empty-title">
                📭 Nenhum contato encontrado
              </p>
              <p className="contatos-empty-subtitle">
                Os contatos enviados através do formulário aparecerão aqui.
              </p>
            </div>
          )}
      </div>
    </AdminLayout>
    </>
  );
}