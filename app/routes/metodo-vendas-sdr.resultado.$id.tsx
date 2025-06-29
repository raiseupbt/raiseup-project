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
  
  // URL atual para compartilhamento
  const urlAtual = typeof window !== 'undefined' ? window.location.href : '';
  
  // Converter markdown básico para HTML
  const formatarConteudo = (texto: string) => {
    // Primeiro, dividir em linhas para processar linha por linha
    const linhas = texto.split('\n');
    
    const linhasProcessadas = linhas.map(linha => {
      // Headers
      if (linha.match(/^### /)) {
        return `<h3>${linha.replace(/^### /, '')}</h3>`;
      }
      if (linha.match(/^## /)) {
        return `<h2>${linha.replace(/^## /, '')}</h2>`;
      }
      if (linha.match(/^# /)) {
        return `<h1>${linha.replace(/^# /, '')}</h1>`;
      }
      
      // Remover linhas que são só hashtags
      if (linha.match(/^#+\s*$/)) {
        return '';
      }
      
      // Processar bold e italic na linha
      linha = linha.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      linha = linha.replace(/\*(.*?)\*/g, '<em>$1</em>');
      
      return linha;
    });
    
    // Juntar novamente com <br />
    return linhasProcessadas
      .filter(linha => linha !== '') // Remove linhas vazias
      .join('<br />');
  };

  const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(criadoEm));

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          body {
            margin: 0 !important;
            padding: 0 !important;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
          }
          html {
            margin: 0 !important;
            padding: 0 !important;
          }
        `
      }} />
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        padding: '2rem 1rem',
        margin: 0,
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
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
                  marginBottom: '1.5rem',
                  marginTop: '1rem'
                },
                '& h2': {
                  fontSize: '1.4rem',
                  fontWeight: 'bold',  
                  color: '#34d399',
                  marginBottom: '1.25rem',
                  marginTop: '0.75rem'
                },
                '& h3': {
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  marginTop: '0.5rem'
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

        {/* Botão Compartilhar */}
        <div style={{
          background: 'rgba(26, 32, 44, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '2rem',
          marginTop: '2rem',
          textAlign: 'center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            📤 Compartilhe Seus Resultados
          </h3>
          
          <p style={{
            color: '#cbd5e1',
            marginBottom: '1.5rem',
            fontSize: '1rem'
          }}>
            Envie este link personalizado para colegas ou outros interessados
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                const texto = `🎯 Acabei de receber minha análise personalizada de métodos SDR! Confira as recomendações específicas para ${usuario.empresa || 'minha empresa'}: ${urlAtual}`;
                const urlWhatsApp = `https://wa.me/?text=${encodeURIComponent(texto)}`;
                window.open(urlWhatsApp, '_blank');
              }}
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: '#25D366',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '1rem'
              }}
            >
              📱 Compartilhar no WhatsApp
            </button>
            
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(urlAtual).then(() => {
                    alert('Link copiado para a área de transferência!');
                  });
                } else {
                  // Fallback para navegadores mais antigos
                  const textArea = document.createElement('textarea');
                  textArea.value = urlAtual;
                  document.body.appendChild(textArea);
                  textArea.select();
                  document.execCommand('copy');
                  document.body.removeChild(textArea);
                  alert('Link copiado para a área de transferência!');
                }
              }}
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '1rem'
              }}
            >
              🔗 Copiar Link
            </button>
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
    </>
  );
}

// Componente para mostrar resumo de cada etapa
function ResumoEtapa({ titulo, dados, labels }: {
  titulo: string;
  dados: any;
  labels: Record<string, string>;
}) {
  const formatarValor = (valor: any) => {
    if (!valor) return 'Não especificado';
    
    // Mapeamento específico para valores conhecidos
    const mapeamento: Record<string, string> = {
      // Segmentos
      'saude-clinicas': 'Saúde/Clínicas',
      'beleza-estetica': 'Beleza/Estética',
      'tecnologia-software': 'Tecnologia/Software',
      'consultoria-servicos': 'Consultoria/Serviços',
      'varejo-ecommerce': 'Varejo/E-commerce',
      'educacao': 'Educação',
      'outro': 'Outro',
      
      // Porte da empresa
      'pequena': 'Pequena (até 10 funcionários)',
      'media': 'Média (11-100 funcionários)',
      'grande': 'Grande (100+ funcionários)',
      
      // Valores médios
      'ate-500': 'Até R$ 500',
      '501-2000': 'R$ 501 - R$ 2.000',
      '2001-10000': 'R$ 2.001 - R$ 10.000',
      'acima-10000': 'Acima de R$ 10.000',
      
      // Perfil do cliente
      'sabem-o-que-querem': 'Já sabem o que querem',
      'pesquisando-opcoes': 'Estão pesquisando opções',
      'precisam-educacao': 'Precisam ser educados sobre a necessidade',
      'tem-resistencia': 'Têm resistência/objeções',
      
      // Motivação
      'resolver-urgente': 'Resolver problema urgente',
      'melhorar-atual': 'Melhorar situação atual',
      'acompanhar-concorrencia': 'Acompanhar concorrência',
      'aproveitar-oportunidade': 'Aproveitar oportunidade',
      
      // Processo de decisão
      'individual': 'Individual (cliente decide sozinho)',
      'familiar': 'Familiar (cônjuge/família)',
      'empresarial': 'Empresarial (múltiplos decisores)',
      
      // Desafios
      'qualificar-leads': 'Qualificar leads',
      'converter-visitantes': 'Converter visitantes em interessados',
      'vencer-objecoes': 'Vencer objeções de preço',
      'agendar-reunioes': 'Agendar reuniões/consultas',
      'educar-produto': 'Educar sobre o produto',
      
      // Origem dos clientes
      'google-seo': 'Google/SEO',
      'redes-sociais': 'Redes sociais',
      'indicacoes': 'Indicações',
      'anuncios-pagos': 'Anúncios pagos',
      'prospeccao-ativa': 'Prospecção ativa',
      
      // Urgência
      'emergencial': 'Emergencial (precisa resolver hoje)',
      'planejada': 'Planejada (tem tempo para decidir)',
      'oportunidade': 'Oportunidade (pode esperar promoção)',
      
      // Objetivos SDR
      'agendar-consultas': 'Agendar consultas/reuniões',
      'qualificar-passar': 'Qualificar e passar para vendedor',
      'fechar-vendas': 'Fechar vendas diretamente',
      'educar-nutrir': 'Educar e nutrir leads',
      
      // Tom de comunicação
      'profissional-tecnico': 'Profissional e técnico',
      'amigavel-proximo': 'Amigável e próximo',
      'consultivo-educativo': 'Consultivo e educativo',
      'direto-objetivo': 'Direto e objetivo'
    };
    
    // Se for array, formatar cada item
    if (Array.isArray(valor)) {
      return valor
        .map(item => mapeamento[String(item)] || String(item))
        .join(', ');
    }
    
    // Se for string, usar mapeamento ou fallback
    const valorString = String(valor);
    return mapeamento[valorString] || valorString;
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