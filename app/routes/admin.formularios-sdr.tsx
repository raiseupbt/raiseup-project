import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';
import { requireUser } from '~/lib/auth.server';
import { supabase } from '~/lib/supabase.server';

export const meta: MetaFunction = () => {
  return {
    title: 'Formulários SDR | Admin RaiseUp',
    robots: 'noindex, nofollow'
  };
};

interface FormularioSDR {
  id: string;
  nome: string;
  email: string;
  empresa?: string;
  segmento: string;
  porte_empresa: string;
  respostas: any;
  resposta_ia: string;
  criado_em: string;
  status: string;
}

interface LoaderData {
  formularios: FormularioSDR[];
  estatisticas: {
    total: number;
    esta_semana: number;
    por_segmento: Record<string, number>;
    por_porte: Record<string, number>;
  };
}

export const loader: LoaderFunction = async ({ request }) => {
  await requireUser(request);

  try {
    // Buscar todos os formulários
    const { data: formularios, error } = await supabase
      .from('formularios_sdr')
      .select('*')
      .order('criado_em', { ascending: false });

    if (error) {
      throw new Error('Erro ao buscar formulários');
    }

    // Calcular estatísticas
    const agora = new Date();
    const semanaAtras = new Date(agora.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    const estatisticas = {
      total: formularios?.length || 0,
      esta_semana: formularios?.filter(f => new Date(f.criado_em) >= semanaAtras).length || 0,
      por_segmento: {},
      por_porte: {}
    };

    // Contar por segmento
    formularios?.forEach((f: any) => {
      if (f.segmento) {
        estatisticas.por_segmento[f.segmento] = (estatisticas.por_segmento[f.segmento] || 0) + 1;
      }
      if (f.porte_empresa) {
        estatisticas.por_porte[f.porte_empresa] = (estatisticas.por_porte[f.porte_empresa] || 0) + 1;
      }
    });

    return json<LoaderData>({
      formularios: formularios || [],
      estatisticas
    });

  } catch (error) {
    console.error('Erro ao carregar formulários SDR:', error);
    return json<LoaderData>({
      formularios: [],
      estatisticas: { total: 0, esta_semana: 0, por_segmento: {}, por_porte: {} }
    });
  }
};

export default function AdminFormulariosSDR() {
  const { formularios, estatisticas } = useLoaderData<LoaderData>();

  const formatarSegmento = (segmento: string) => {
    const mapa: Record<string, string> = {
      'saude-clinicas': 'Saúde/Clínicas',
      'beleza-estetica': 'Beleza/Estética',
      'tecnologia-software': 'Tecnologia/Software',
      'consultoria-servicos': 'Consultoria/Serviços',
      'varejo-ecommerce': 'Varejo/E-commerce',
      'educacao': 'Educação',
      'outro': 'Outro'
    };
    return mapa[segmento] || segmento;
  };

  const formatarPorte = (porte: string) => {
    const mapa: Record<string, string> = {
      'pequena': 'Pequena (até 10)',
      'media': 'Média (11-100)',
      'grande': 'Grande (100+)'
    };
    return mapa[porte] || porte;
  };

  const formatarData = (data: string) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(data));
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      padding: '2rem 1rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          background: 'rgba(26, 32, 44, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#ffffff',
              margin: 0
            }}>
              📋 Formulários SDR
            </h1>
            
            <Link
              to="/admin"
              style={{
                padding: '0.5rem 1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease'
              }}
            >
              ← Voltar ao Dashboard
            </Link>
          </div>
          
          <p style={{ color: '#cbd5e1', margin: 0 }}>
            Visualize e analise todos os questionários de método de vendas SDR preenchidos
          </p>
        </div>

        {/* Estatísticas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <StatCard
            titulo="Total de Formulários"
            valor={estatisticas.total}
            icone="📊"
            cor="#10b981"
          />
          
          <StatCard
            titulo="Esta Semana"
            valor={estatisticas.esta_semana}
            icone="📈"
            cor="#3b82f6"
          />
          
          <StatCard
            titulo="Segmento Mais Comum"
            valor={Object.entries(estatisticas.por_segmento)
              .sort(([,a], [,b]) => b - a)[0]?.[0] || 'N/A'}
            icone="🎯"
            cor="#f59e0b"
            formatarValor={formatarSegmento}
          />
          
          <StatCard
            titulo="Porte Mais Comum"
            valor={Object.entries(estatisticas.por_porte)
              .sort(([,a], [,b]) => b - a)[0]?.[0] || 'N/A'}
            icone="🏢"
            cor="#8b5cf6"
            formatarValor={formatarPorte}
          />
        </div>

        {/* Lista de Formulários */}
        <div style={{
          background: 'rgba(26, 32, 44, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{
            padding: '2rem 2rem 1rem 2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#ffffff',
              margin: 0
            }}>
              Formulários Recentes
            </h2>
          </div>

          {formularios.length === 0 ? (
            <div style={{
              padding: '3rem',
              textAlign: 'center',
              color: '#64748b'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
              <p style={{ fontSize: '1.1rem', margin: 0 }}>
                Nenhum formulário SDR foi preenchido ainda
              </p>
            </div>
          ) : (
            <div style={{ padding: '0 2rem 2rem 2rem' }}>
              {formularios.map((formulario: any) => (
                <FormularioCard
                  key={formulario.id}
                  formulario={formulario}
                  formatarSegmento={formatarSegmento}
                  formatarPorte={formatarPorte}
                  formatarData={formatarData}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ titulo, valor, icone, cor, formatarValor }: {
  titulo: string;
  valor: string | number;
  icone: string;
  cor: string;
  formatarValor?: (valor: string) => string;
}) {
  const valorFormatado = typeof valor === 'string' && formatarValor 
    ? formatarValor(valor) 
    : valor;

  return (
    <div style={{
      background: 'rgba(26, 32, 44, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '16px',
      padding: '1.5rem',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      border: `1px solid ${cor}20`
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{icone}</span>
        <span style={{
          fontSize: '0.9rem',
          color: '#cbd5e1',
          fontWeight: '500'
        }}>
          {titulo}
        </span>
      </div>
      
      <div style={{
        fontSize: '1.75rem',
        fontWeight: 'bold',
        color: cor
      }}>
        {valorFormatado}
      </div>
    </div>
  );
}

function FormularioCard({ formulario, formatarSegmento, formatarPorte, formatarData }: {
  formulario: any;
  formatarSegmento: (segmento: string) => string;
  formatarPorte: (porte: string) => string;
  formatarData: (data: string) => string;
}) {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '1.5rem',
      marginBottom: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.2s ease'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1rem'
      }}>
        <div>
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#ffffff',
            margin: '0 0 0.25rem 0'
          }}>
            {formulario.nome}
          </h3>
          
          <p style={{
            color: '#cbd5e1',
            margin: '0 0 0.25rem 0',
            fontSize: '0.9rem'
          }}>
            {formulario.email}
          </p>
          
          {formulario.empresa && (
            <p style={{
              color: '#94a3b8',
              margin: 0,
              fontSize: '0.85rem'
            }}>
              {formulario.empresa}
            </p>
          )}
        </div>
        
        <div style={{ textAlign: 'right' }}>
          <div style={{
            fontSize: '0.8rem',
            color: '#64748b',
            marginBottom: '0.25rem'
          }}>
            {formatarData(formulario.criado_em)}
          </div>
          
          <Link
            to={`/metodo-vendas-sdr/resultado/${formulario.id}`}
            target="_blank"
            style={{
              fontSize: '0.8rem',
              color: '#10b981',
              textDecoration: 'none',
              padding: '0.25rem 0.5rem',
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '4px',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}
          >
            Ver Resultado →
          </Link>
        </div>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        padding: '1rem',
        background: 'rgba(255, 255, 255, 0.02)',
        borderRadius: '8px',
        fontSize: '0.9rem'
      }}>
        <div>
          <span style={{ color: '#94a3b8' }}>Segmento:</span>
          <span style={{ color: '#ffffff', marginLeft: '0.5rem', fontWeight: '500' }}>
            {formatarSegmento(formulario.segmento)}
          </span>
        </div>
        
        <div>
          <span style={{ color: '#94a3b8' }}>Porte:</span>
          <span style={{ color: '#ffffff', marginLeft: '0.5rem', fontWeight: '500' }}>
            {formatarPorte(formulario.porte_empresa)}
          </span>
        </div>
        
        <div>
          <span style={{ color: '#94a3b8' }}>Objetivo SDR:</span>
          <span style={{ color: '#ffffff', marginLeft: '0.5rem', fontWeight: '500' }}>
            {formulario.respostas?.etapa4?.objetivo_sdr?.replace('-', ' ') || 'N/A'}
          </span>
        </div>
        
        <div>
          <span style={{ color: '#94a3b8' }}>Maior Desafio:</span>
          <span style={{ color: '#ffffff', marginLeft: '0.5rem', fontWeight: '500' }}>
            {formulario.respostas?.etapa3?.maior_desafio?.replace('-', ' ') || 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
}