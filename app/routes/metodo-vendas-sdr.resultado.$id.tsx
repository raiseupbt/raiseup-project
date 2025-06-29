import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';
import { supabase } from '~/lib/supabase.server';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return {
    title: `Recomendações Personalizadas de SDR para ${data?.usuario?.nome} | RaiseUp`,
    description: 'Suas recomendações personalizadas para otimizar seu agente SDR via WhatsApp, baseadas em inteligência artificial.',
    robots: 'noindex, nofollow' // Página privada
  };
};

interface LoaderData {
  usuario: {
    nome: string;
    email: string;
    empresa?: string;
  };
  respostas: any;
  recomendacoes: string;
  criadoEm: string;
}

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.id;
  
  if (!id) {
    throw new Response('ID não fornecido', { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from('formularios_sdr')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) {
      throw new Response('Resultado não encontrado', { status: 404 });
    }

    return json<LoaderData>({
      usuario: {
        nome: data.nome,
        email: data.email,
        empresa: data.empresa
      },
      respostas: data.respostas,
      recomendacoes: data.resposta_ia,
      criadoEm: data.criado_em
    });

  } catch (error) {
    console.error('Erro ao buscar resultado:', error);
    throw new Response('Erro interno do servidor', { status: 500 });
  }
};

export default function ResultadoSDR() {
  const { usuario, respostas, recomendacoes, criadoEm } = useLoaderData<LoaderData>();
  
  // Converter markdown básico para HTML
  const formatarConteudo = (texto: string) => {
    return texto
      .replace(/# (.*$)/gm, '<h1>$1</h1>')
      .replace(/## (.*$)/gm, '<h2>$1</h2>')
      .replace(/### (.*$)/gm, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br />');
  };

  const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(criadoEm));

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      padding: '2rem 1rem'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          background: 'rgba(26, 32, 44, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{
              width: '12px',
              height: '12px',
              background: '#10b981',
              borderRadius: '50%',
              marginRight: '0.75rem'
            }}></div>
            <span style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: '600' }}>
              ANÁLISE COMPLETA
            </span>
          </div>
          
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '0.5rem',
            lineHeight: '1.2'
          }}>
            Suas Recomendações Personalizadas
          </h1>
          
          <p style={{ color: '#cbd5e1', fontSize: '1rem' }}>
            Olá, <strong>{usuario.nome}</strong>! Baseado nas suas respostas, preparamos recomendações específicas para otimizar seu agente SDR.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '2rem',
            marginTop: '1.5rem',
            fontSize: '0.9rem',
            color: '#94a3b8'
          }}>
            <div>
              <strong>Email:</strong> {usuario.email}
            </div>
            {usuario.empresa && (
              <div>
                <strong>Empresa:</strong> {usuario.empresa}
              </div>
            )}
            <div>
              <strong>Gerado em:</strong> {dataFormatada}
            </div>
          </div>
        </div>

        {/* Conteúdo das Recomendações */}
        <div style={{
          background: 'rgba(26, 32, 44, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '2rem',
            color: '#ffffff',
            lineHeight: '1.7'
          }}>
            <div 
              dangerouslySetInnerHTML={{ __html: formatarConteudo(recomendacoes) }}
              style={{
                '& h1': {
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  color: '#10b981',
                  marginBottom: '1rem',
                  marginTop: '2rem'
                },
                '& h2': {
                  fontSize: '1.4rem',
                  fontWeight: 'bold',  
                  color: '#34d399',
                  marginBottom: '0.75rem',
                  marginTop: '1.5rem'
                },
                '& h3': {
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  marginTop: '1rem'
                },
                '& strong': {
                  color: '#10b981',
                  fontWeight: '600'
                },
                '& em': {
                  color: '#cbd5e1',
                  fontStyle: 'italic'
                }
              } as any}
            />
          </div>
        </div>

        {/* Resumo das Respostas */}
        <div style={{
          background: 'rgba(26, 32, 44, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '2rem',
          marginTop: '2rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '1.5rem'
          }}>
            📋 Resumo das Suas Respostas
          </h2>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <ResumoEtapa 
              titulo="Identificação do Negócio"
              dados={respostas.etapa1}
              labels={{
                segmento: 'Segmento',
                porte_empresa: 'Porte da Empresa', 
                valor_medio: 'Valor Médio'
              }}
            />
            
            <ResumoEtapa 
              titulo="Perfil do Cliente"
              dados={respostas.etapa2}
              labels={{
                perfil_cliente: 'Comportamento dos Clientes',
                motivacao_cliente: 'Principal Motivação',
                processo_decisao: 'Processo de Decisão'
              }}
            />
            
            <ResumoEtapa 
              titulo="Contexto de Vendas"
              dados={respostas.etapa3}
              labels={{
                maior_desafio: 'Maior Desafio',
                origem_clientes: 'Origem dos Clientes',
                urgencia_necessidade: 'Urgência Típica'
              }}
            />
            
            <ResumoEtapa 
              titulo="Objetivos"
              dados={respostas.etapa4}
              labels={{
                objetivo_sdr: 'Objetivo do SDR',
                tom_comunicacao: 'Tom de Comunicação'
              }}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          background: 'linear-gradient(135deg, #10b981, #34d399)',
          borderRadius: '24px',
          padding: '2rem',
          marginTop: '2rem',
          textAlign: 'center',
          color: '#ffffff'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            🚀 Pronto para Implementar?
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '1.5rem',
            opacity: 0.9
          }}>
            Transforme essas recomendações em um agente SDR automatizado e eficiente
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contato"
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: 'rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              💬 Falar com Especialista
            </Link>
            
            <a
              href="https://wa.me/5519981476177?text=Olá! Fiz o questionário SDR e gostaria de implementar as recomendações."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#10b981',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                transition: 'all 0.2s ease'
              }}
            >
              📱 WhatsApp Direto
            </a>
          </div>
        </div>

        {/* Footer Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '2rem',
          padding: '1rem',
          fontSize: '0.9rem'
        }}>
          <Link
            to="/metodo-vendas-sdr"
            style={{
              color: '#10b981',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            ← Fazer Novo Questionário
          </Link>
          
          <Link
            to="/blog"
            style={{
              color: '#10b981', 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            📚 Ver Mais Conteúdos
          </Link>
          
          <Link
            to="/"
            style={{
              color: '#10b981',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            🏠 Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
}

// Componente para mostrar resumo de cada etapa
function ResumoEtapa({ titulo, dados, labels }: {
  titulo: string;
  dados: any;
  labels: Record<string, string>;
}) {
  const formatarValor = (valor: string) => {
    return valor
      .split('-')
      .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(' ');
  };

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '1.5rem'
    }}>
      <h3 style={{
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#10b981',
        marginBottom: '1rem'
      }}>
        {titulo}
      </h3>
      
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        {Object.entries(dados).map(([chave, valor]) => (
          <div key={chave} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
              {labels[chave] || chave}:
            </span>
            <span style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '500' }}>
              {formatarValor(valor as string)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}