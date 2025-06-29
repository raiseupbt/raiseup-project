import { useState, useEffect } from 'react';
import type { ActionFunction, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useActionData, useNavigation, Form } from '@remix-run/react';
import { supabase } from '~/lib/supabase.server';

export const meta: MetaFunction = () => {
  return {
    title: 'Descubra o Método de Vendas Ideal para Seu Agente SDR | RaiseUp',
    description: 'Questionário personalizado para descobrir o método de vendas mais eficaz para seu agente SDR via WhatsApp. Receba recomendações baseadas em IA.',
    keywords: 'SDR, vendas, WhatsApp, automação, agente de vendas, conversão'
  };
};

interface FormData {
  etapa: number;
  dados_pessoais: {
    nome: string;
    email: string;
    empresa: string;
  };
  etapa1: {
    segmento: string;
    porte_empresa: string;
    valor_medio: string;
  };
  etapa2: {
    perfil_cliente: string;
    motivacao_cliente: string;
    processo_decisao: string;
  };
  etapa3: {
    maior_desafio: string;
    origem_clientes: string;
    urgencia_necessidade: string;
  };
  etapa4: {
    objetivo_sdr: string;
    tom_comunicacao: string;
  };
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const acao = formData.get('acao');
  
  if (acao === 'processar_final') {
    try {
      const dados = JSON.parse(formData.get('dados_completos') as string);
      
      // Enviar para API do OpenAI para gerar resposta
      const response = await fetch('/api/sdr-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });
      
      if (!response.ok) {
        throw new Error('Erro ao processar formulário');
      }
      
      const result = await response.json();
      
      // Redirecionar para página de resultado
      return redirect(`/metodo-vendas-sdr/resultado/${result.id}`);
      
    } catch (error) {
      console.error('Erro ao processar formulário:', error);
      return json({ error: 'Erro ao processar formulário. Tente novamente.' }, { status: 500 });
    }
  }
  
  return json({ success: true });
};

export default function MetodoVendasSDR() {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    etapa: 0,
    dados_pessoais: { nome: '', email: '', empresa: '' },
    etapa1: { segmento: '', porte_empresa: '', valor_medio: '' },
    etapa2: { perfil_cliente: '', motivacao_cliente: '', processo_decisao: '' },
    etapa3: { maior_desafio: '', origem_clientes: '', urgencia_necessidade: '' },
    etapa4: { objetivo_sdr: '', tom_comunicacao: '' }
  });
  
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();
  const isSubmitting = navigation.state === 'submitting';

  const atualizarDados = (etapa: keyof FormData, campo: string, valor: string) => {
    setFormData(prev => ({
      ...prev,
      [etapa]: {
        ...(prev[etapa] as any),
        [campo]: valor
      }
    }));
  };

  const podeAvancar = () => {
    switch (etapaAtual) {
      case 0:
        return formData.dados_pessoais.nome && formData.dados_pessoais.email;
      case 1:
        return formData.etapa1.segmento && formData.etapa1.porte_empresa && formData.etapa1.valor_medio;
      case 2:
        return formData.etapa2.perfil_cliente && formData.etapa2.motivacao_cliente && formData.etapa2.processo_decisao;
      case 3:
        return formData.etapa3.maior_desafio && formData.etapa3.origem_clientes && formData.etapa3.urgencia_necessidade;
      case 4:
        return formData.etapa4.objetivo_sdr && formData.etapa4.tom_comunicacao;
      default:
        return false;
    }
  };

  const proximaEtapa = () => {
    if (podeAvancar() && etapaAtual < 4) {
      setEtapaAtual(etapaAtual + 1);
    }
  };

  const etapaAnterior = () => {
    if (etapaAtual > 0) {
      setEtapaAtual(etapaAtual - 1);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      padding: '2rem 1rem'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'rgba(26, 32, 44, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        padding: '3rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            Descubra o Método de Vendas Ideal para Seu Agente SDR
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#cbd5e1',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Responda algumas perguntas e receba recomendações personalizadas baseadas em inteligência artificial
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{
          width: '100%',
          height: '8px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '4px',
          marginBottom: '3rem',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${((etapaAtual + 1) / 5) * 100}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #10b981, #34d399)',
            borderRadius: '4px',
            transition: 'width 0.3s ease'
          }}></div>
        </div>

        {/* Etapa Atual */}
        <div style={{ marginBottom: '2rem' }}>
          <span style={{
            color: '#10b981',
            fontSize: '0.9rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Etapa {etapaAtual + 1} de 5
          </span>
        </div>

        {/* Conteúdo das Etapas */}
        {etapaAtual === 0 && (
          <DadosPessoais 
            dados={formData.dados_pessoais}
            onChange={(campo, valor) => atualizarDados('dados_pessoais', campo, valor)}
          />
        )}

        {etapaAtual === 1 && (
          <Etapa1 
            dados={formData.etapa1}
            onChange={(campo, valor) => atualizarDados('etapa1', campo, valor)}
          />
        )}

        {etapaAtual === 2 && (
          <Etapa2 
            dados={formData.etapa2}
            onChange={(campo, valor) => atualizarDados('etapa2', campo, valor)}
          />
        )}

        {etapaAtual === 3 && (
          <Etapa3 
            dados={formData.etapa3}
            onChange={(campo, valor) => atualizarDados('etapa3', campo, valor)}
          />
        )}

        {etapaAtual === 4 && (
          <Etapa4 
            dados={formData.etapa4}
            onChange={(campo, valor) => atualizarDados('etapa4', campo, valor)}
          />
        )}

        {/* Navegação */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <button
            type="button"
            onClick={etapaAnterior}
            disabled={etapaAtual === 0}
            style={{
              padding: '0.75rem 1.5rem',
              background: etapaAtual === 0 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)',
              color: etapaAtual === 0 ? '#64748b' : '#ffffff',
              border: 'none',
              borderRadius: '12px',
              cursor: etapaAtual === 0 ? 'not-allowed' : 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.2s ease'
            }}
          >
            ← Voltar
          </button>

          {etapaAtual < 4 ? (
            <button
              type="button"
              onClick={proximaEtapa}
              disabled={!podeAvancar()}
              style={{
                padding: '0.75rem 2rem',
                background: podeAvancar() ? 'linear-gradient(135deg, #10b981, #34d399)' : 'rgba(255, 255, 255, 0.1)',
                color: podeAvancar() ? '#ffffff' : '#64748b',
                border: 'none',
                borderRadius: '12px',
                cursor: podeAvancar() ? 'pointer' : 'not-allowed',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                transform: podeAvancar() ? 'translateY(0)' : 'none'
              }}
            >
              Continuar →
            </button>
          ) : (
            <Form method="post">
              <input type="hidden" name="acao" value="processar_final" />
              <input type="hidden" name="dados_completos" value={JSON.stringify(formData)} />
              <button
                type="submit"
                disabled={!podeAvancar() || isSubmitting}
                style={{
                  padding: '0.75rem 2rem',
                  background: podeAvancar() && !isSubmitting ? 'linear-gradient(135deg, #10b981, #34d399)' : 'rgba(255, 255, 255, 0.1)',
                  color: podeAvancar() && !isSubmitting ? '#ffffff' : '#64748b',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: podeAvancar() && !isSubmitting ? 'pointer' : 'not-allowed',
                  fontSize: '1rem',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
              >
                {isSubmitting ? 'Processando...' : 'Obter Recomendações →'}
              </button>
            </Form>
          )}
        </div>

        {actionData?.error && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            background: 'rgba(220, 38, 38, 0.1)',
            border: '1px solid rgba(220, 38, 38, 0.3)',
            borderRadius: '8px',
            color: '#fca5a5',
            fontSize: '0.9rem'
          }}>
            {actionData.error}
          </div>
        )}
      </div>
    </div>
  );
}

// Componente para Dados Pessoais
function DadosPessoais({ dados, onChange }: { dados: any, onChange: (campo: string, valor: string) => void }) {
  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '1rem' }}>
        Vamos começar com seus dados
      </h2>
      <p style={{ color: '#cbd5e1', marginBottom: '2rem' }}>
        Precisamos de algumas informações básicas para personalizar suas recomendações
      </p>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', color: '#ffffff', marginBottom: '0.5rem', fontWeight: '500' }}>
            Nome completo *
          </label>
          <input
            type="text"
            value={dados.nome}
            onChange={(e) => onChange('nome', e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '1rem'
            }}
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label style={{ display: 'block', color: '#ffffff', marginBottom: '0.5rem', fontWeight: '500' }}>
            Email *
          </label>
          <input
            type="email"
            value={dados.email}
            onChange={(e) => onChange('email', e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '1rem'
            }}
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label style={{ display: 'block', color: '#ffffff', marginBottom: '0.5rem', fontWeight: '500' }}>
            Empresa (opcional)
          </label>
          <input
            type="text"
            value={dados.empresa}
            onChange={(e) => onChange('empresa', e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '1rem'
            }}
            placeholder="Nome da sua empresa"
          />
        </div>
      </div>
    </div>
  );
}

// Componente para Etapa 1
function Etapa1({ dados, onChange }: { dados: any, onChange: (campo: string, valor: string) => void }) {
  const segmentos = [
    { value: 'saude-clinicas', label: 'Saúde/Clínicas' },
    { value: 'beleza-estetica', label: 'Beleza/Estética' },
    { value: 'tecnologia-software', label: 'Tecnologia/Software' },
    { value: 'consultoria-servicos', label: 'Consultoria/Serviços' },
    { value: 'varejo-ecommerce', label: 'Varejo/E-commerce' },
    { value: 'educacao', label: 'Educação' },
    { value: 'outro', label: 'Outro' }
  ];

  const portes = [
    { value: 'pequena', label: 'Pequena (até 10 funcionários)' },
    { value: 'media', label: 'Média (11-100 funcionários)' },
    { value: 'grande', label: 'Grande (100+ funcionários)' }
  ];

  const valores = [
    { value: 'ate-500', label: 'Até R$ 500' },
    { value: '501-2000', label: 'R$ 501 - R$ 2.000' },
    { value: '2001-10000', label: 'R$ 2.001 - R$ 10.000' },
    { value: 'acima-10000', label: 'Acima de R$ 10.000' }
  ];

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '1rem' }}>
        Identificação do Negócio
      </h2>
      <p style={{ color: '#cbd5e1', marginBottom: '2rem' }}>
        Vamos entender melhor seu segmento e perfil de empresa
      </p>

      <div style={{ display: 'grid', gap: '2rem' }}>
        <RadioGroup
          label="Qual seu segmento?"
          opcoes={segmentos}
          valor={dados.segmento}
          onChange={(valor) => onChange('segmento', valor)}
        />

        <RadioGroup
          label="Porte da empresa?"
          opcoes={portes}
          valor={dados.porte_empresa}
          onChange={(valor) => onChange('porte_empresa', valor)}
        />

        <RadioGroup
          label="Valor médio do seu produto/serviço?"
          opcoes={valores}
          valor={dados.valor_medio}
          onChange={(valor) => onChange('valor_medio', valor)}
        />
      </div>
    </div>
  );
}

// Componente para Etapa 2
function Etapa2({ dados, onChange }: { dados: any, onChange: (campo: string, valor: string) => void }) {
  const perfisCliente = [
    { value: 'sabem-o-que-querem', label: 'Já sabem o que querem (só querem agendar)' },
    { value: 'pesquisando-opcoes', label: 'Estão pesquisando opções' },
    { value: 'precisam-educacao', label: 'Precisam ser educados sobre a necessidade' },
    { value: 'tem-resistencia', label: 'Têm resistência/objeções' }
  ];

  const motivacoes = [
    { value: 'resolver-urgente', label: 'Resolver problema urgente' },
    { value: 'melhorar-atual', label: 'Melhorar situação atual' },
    { value: 'acompanhar-concorrencia', label: 'Acompanhar concorrência' },
    { value: 'aproveitar-oportunidade', label: 'Aproveitar oportunidade' }
  ];

  const processosDecisao = [
    { value: 'individual', label: 'Individual (cliente decide sozinho)' },
    { value: 'familiar', label: 'Familiar (cônjuge/família)' },
    { value: 'empresarial', label: 'Empresarial (múltiplos decisores)' }
  ];

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '1rem' }}>
        Perfil do Cliente
      </h2>
      <p style={{ color: '#cbd5e1', marginBottom: '2rem' }}>
        Como seus clientes se comportam no processo de compra?
      </p>

      <div style={{ display: 'grid', gap: '2rem' }}>
        <RadioGroup
          label="Seus clientes normalmente:"
          opcoes={perfisCliente}
          valor={dados.perfil_cliente}
          onChange={(valor) => onChange('perfil_cliente', valor)}
        />

        <RadioGroup
          label="Principal motivação dos clientes:"
          opcoes={motivacoes}
          valor={dados.motivacao_cliente}
          onChange={(valor) => onChange('motivacao_cliente', valor)}
        />

        <RadioGroup
          label="Processo de decisão:"
          opcoes={processosDecisao}
          valor={dados.processo_decisao}
          onChange={(valor) => onChange('processo_decisao', valor)}
        />
      </div>
    </div>
  );
}

// Componente para Etapa 3
function Etapa3({ dados, onChange }: { dados: any, onChange: (campo: string, valor: string) => void }) {
  const desafios = [
    { value: 'qualificar-leads', label: 'Qualificar leads' },
    { value: 'converter-visitantes', label: 'Converter visitantes em interessados' },
    { value: 'vencer-objecoes', label: 'Vencer objeções de preço' },
    { value: 'agendar-reunioes', label: 'Agendar reuniões/consultas' },
    { value: 'educar-produto', label: 'Educar sobre o produto' }
  ];

  const origens = [
    { value: 'google-seo', label: 'Google/SEO' },
    { value: 'redes-sociais', label: 'Redes sociais' },
    { value: 'indicacoes', label: 'Indicações' },
    { value: 'anuncios-pagos', label: 'Anúncios pagos' },
    { value: 'prospeccao-ativa', label: 'Prospecção ativa' }
  ];

  const urgencias = [
    { value: 'emergencial', label: 'Emergencial (precisa resolver hoje)' },
    { value: 'planejada', label: 'Planejada (tem tempo para decidir)' },
    { value: 'oportunidade', label: 'Oportunidade (pode esperar promoção)' }
  ];

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '1rem' }}>
        Contexto da Venda
      </h2>
      <p style={{ color: '#cbd5e1', marginBottom: '2rem' }}>
        Vamos entender melhor seu processo de vendas atual
      </p>

      <div style={{ display: 'grid', gap: '2rem' }}>
        <RadioGroup
          label="Maior desafio atual:"
          opcoes={desafios}
          valor={dados.maior_desafio}
          onChange={(valor) => onChange('maior_desafio', valor)}
        />

        <RadioGroup
          label="Como clientes chegam até você?"
          opcoes={origens}
          valor={dados.origem_clientes}
          onChange={(valor) => onChange('origem_clientes', valor)}
        />

        <RadioGroup
          label="Urgência típica da necessidade:"
          opcoes={urgencias}
          valor={dados.urgencia_necessidade}
          onChange={(valor) => onChange('urgencia_necessidade', valor)}
        />
      </div>
    </div>
  );
}

// Componente para Etapa 4
function Etapa4({ dados, onChange }: { dados: any, onChange: (campo: string, valor: string) => void }) {
  const objetivos = [
    { value: 'agendar-consultas', label: 'Agendar consultas/reuniões' },
    { value: 'qualificar-passar', label: 'Qualificar e passar para vendedor' },
    { value: 'fechar-vendas', label: 'Fechar vendas diretamente' },
    { value: 'educar-nutrir', label: 'Educar e nutrir leads' }
  ];

  const tons = [
    { value: 'profissional-tecnico', label: 'Profissional e técnico' },
    { value: 'amigavel-proximo', label: 'Amigável e próximo' },
    { value: 'consultivo-educativo', label: 'Consultivo e educativo' },
    { value: 'direto-objetivo', label: 'Direto e objetivo' }
  ];

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '1rem' }}>
        Objetivos e Comunicação
      </h2>
      <p style={{ color: '#cbd5e1', marginBottom: '2rem' }}>
        Finalmente, vamos definir os objetivos e o tom ideal para seu SDR
      </p>

      <div style={{ display: 'grid', gap: '2rem' }}>
        <RadioGroup
          label="Principal objetivo do SDR:"
          opcoes={objetivos}
          valor={dados.objetivo_sdr}
          onChange={(valor) => onChange('objetivo_sdr', valor)}
        />

        <RadioGroup
          label="Tom de comunicação desejado:"
          opcoes={tons}
          valor={dados.tom_comunicacao}
          onChange={(valor) => onChange('tom_comunicacao', valor)}
        />
      </div>
    </div>
  );
}

// Componente RadioGroup reutilizável
function RadioGroup({ label, opcoes, valor, onChange }: {
  label: string;
  opcoes: { value: string; label: string }[];
  valor: string;
  onChange: (valor: string) => void;
}) {
  return (
    <div>
      <label style={{
        display: 'block',
        color: '#ffffff',
        marginBottom: '1rem',
        fontWeight: '500',
        fontSize: '1.1rem'
      }}>
        {label}
      </label>
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        {opcoes.map((opcao) => (
          <label
            key={opcao.value}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
              background: valor === opcao.value ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${valor === opcao.value ? '#10b981' : 'rgba(255, 255, 255, 0.1)'}`,
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              color: '#ffffff'
            }}
          >
            <input
              type="radio"
              name={label}
              value={opcao.value}
              checked={valor === opcao.value}
              onChange={(e) => onChange(e.target.value)}
              style={{
                marginRight: '0.75rem',
                accentColor: '#10b981'
              }}
            />
            <span style={{ fontSize: '1rem' }}>{opcao.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}