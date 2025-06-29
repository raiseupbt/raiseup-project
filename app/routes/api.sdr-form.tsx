import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { supabase } from '~/lib/supabase.server';

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== 'POST') {
    return json({ error: 'Método não permitido' }, { status: 405 });
  }

  try {
    const dados = await request.json();
    console.log('📝 Dados recebidos:', JSON.stringify(dados, null, 2));
    
    // Extrair dados do formulário
    const { dados_pessoais, etapa1, etapa2, etapa3, etapa4 } = dados;
    
    // Verificar se todos os dados obrigatórios estão presentes
    if (!dados_pessoais?.nome || !dados_pessoais?.email) {
      console.error('❌ Dados pessoais incompletos:', dados_pessoais);
      return json({ error: 'Dados pessoais incompletos' }, { status: 400 });
    }
    
    // Criar objeto com todas as respostas
    const respostas = {
      etapa1,
      etapa2,
      etapa3,
      etapa4
    };
    
    console.log('📊 Respostas processadas:', JSON.stringify(respostas, null, 2));

    // Gerar resposta personalizada com OpenAI
    console.log('🤖 Gerando resposta IA...');
    const respostaIA = await gerarRecomendacaoIA(respostas);
    console.log('✅ Resposta IA gerada, tamanho:', respostaIA.length);

    // Preparar dados para inserção
    const dadosParaInserir = {
      nome: dados_pessoais.nome,
      email: dados_pessoais.email,
      empresa: dados_pessoais.empresa || null,
      segmento: etapa1.segmento,
      porte_empresa: etapa1.porte_empresa,
      respostas: respostas,
      resposta_ia: respostaIA,
      endereco_ip: request.headers.get('x-forwarded-for') || 
                   request.headers.get('x-real-ip') || 
                   'unknown',
      navegador: request.headers.get('user-agent') || 'unknown'
    };
    
    console.log('💾 Dados para inserir no Supabase:', JSON.stringify(dadosParaInserir, null, 2));

    // Salvar no Supabase
    console.log('🗄️ Salvando no Supabase...');
    const { data, error } = await supabase
      .from('formularios_sdr')
      .insert(dadosParaInserir)
      .select()
      .single();

    if (error) {
      console.error('❌ Erro ao salvar no Supabase:', error);
      console.error('❌ Detalhes do erro:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      return json({ error: `Erro ao salvar dados: ${error.message}` }, { status: 500 });
    }
    
    console.log('✅ Dados salvos com sucesso:', data?.id);

    return json({ 
      success: true, 
      id: data.id,
      message: 'Formulário processado com sucesso'
    });

  } catch (error) {
    console.error('Erro ao processar formulário:', error);
    return json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
};

async function gerarRecomendacaoIA(respostas: any): Promise<string> {
  const prompt = construirPrompt(respostas);
  
  try {
    // Verificar se temos a chave da OpenAI configurada
    const openaiKey = process.env.OPENAI_API_KEY;
    
    if (!openaiKey) {
      console.warn('OPENAI_API_KEY não configurada, usando resposta simulada');
      try {
        return gerarRespostaSimulada(respostas);
      } catch (error) {
        console.error('❌ Erro na resposta simulada:', error);
        throw error;
      }
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `Você é um especialista em vendas e automação comercial. Sua tarefa é analisar as respostas de um questionário sobre SDR (Sales Development Representative) e fornecer recomendações personalizadas e práticas.

IMPORTANTE:
- Seja específico e prático nas recomendações
- Use exemplos concretos de scripts e abordagens
- Organize a resposta em seções claras
- Foque em métodos comprovados para WhatsApp Business
- Inclua justificativas técnicas para cada recomendação`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 2000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || gerarRespostaSimulada(respostas);

  } catch (error) {
    console.error('Erro ao chamar OpenAI:', error);
    return gerarRespostaSimulada(respostas);
  }
}

function construirPrompt(respostas: any): string {
  const { etapa1, etapa2, etapa3, etapa4 } = respostas;
  
  return `Analise este perfil de empresa e forneça recomendações personalizadas para um agente SDR via WhatsApp:

**PERFIL DA EMPRESA:**
- Segmento: ${etapa1.segmento}
- Porte: ${etapa1.porte_empresa}
- Valor médio: ${etapa1.valor_medio}

**PERFIL DOS CLIENTES:**
- Comportamento: ${etapa2.perfil_cliente}
- Motivação: ${etapa2.motivacao_cliente}
- Processo de decisão: ${etapa2.processo_decisao}

**CONTEXTO DE VENDAS:**
- Maior desafio: ${etapa3.maior_desafio}
- Origem dos clientes: ${etapa3.origem_clientes}
- Urgência: ${etapa3.urgencia_necessidade}

**OBJETIVOS:**
- Objetivo do SDR: ${etapa4.objetivo_sdr}
- Tom desejado: ${etapa4.tom_comunicacao}

Forneça uma análise completa com:

1. **MÉTODO PRINCIPAL RECOMENDADO** (e justificativa)
2. **MÉTODOS COMPLEMENTARES** (2 opções adicionais)
3. **ESTRUTURA DE ABORDAGEM** (fluxo de conversa detalhado)
4. **SCRIPTS SUGERIDOS** (exemplos práticos para WhatsApp)
5. **TRATAMENTO DE OBJEÇÕES** (principais objeções e como lidar)
6. **MÉTRICAS DE ACOMPANHAMENTO** (KPIs importantes)

Seja específico, prático e use exemplos reais de mensagens.`;
}

function gerarRespostaSimulada(respostas: any): string {
  const { etapa1, etapa2, etapa3, etapa4 } = respostas;
  
  // Função para formatar arrays em strings legíveis
  const formatarArray = (arr: any) => {
    if (!arr) return 'não especificado';
    if (typeof arr === 'string') return arr.replace('-', ' ');
    if (Array.isArray(arr)) return arr.map(item => item.replace('-', ' ')).join(', ');
    return String(arr).replace('-', ' ');
  };
  
  // Função para obter primeiro item de array ou string
  const obterPrimeiro = (value: any) => {
    if (!value) return 'não especificado';
    if (Array.isArray(value)) return value[0] || 'não especificado';
    return value;
  };
  
  // Lógica básica para gerar recomendações baseadas nas respostas
  let metodoRecomendado = '';
  let justificativa = '';
  
  const primeiroObjetivo = obterPrimeiro(etapa4.objetivo_sdr);
  const primeiroDesafio = obterPrimeiro(etapa3.maior_desafio);
  
  // Determinar método principal baseado no perfil
  if (etapa2.perfil_cliente === 'sabem-o-que-querem' && primeiroObjetivo === 'agendar-consultas') {
    metodoRecomendado = 'Método Direto de Agendamento';
    justificativa = 'Seus clientes já sabem o que querem, então o foco deve ser agilizar o agendamento.';
  } else if (etapa2.perfil_cliente === 'precisam-educacao' && primeiroDesafio === 'educar-produto') {
    metodoRecomendado = 'Método Educativo Progressivo';
    justificativa = 'Clientes precisam ser educados, então o SDR deve nutrir com conteúdo educativo.';
  } else if (primeiroDesafio === 'qualificar-leads') {
    metodoRecomendado = 'Método de Qualificação BANT';
    justificativa = 'Foco na qualificação é essencial para otimizar o tempo de vendas.';
  } else {
    metodoRecomendado = 'Método Consultivo Adaptativo';
    justificativa = 'Abordagem flexível que se adapta ao perfil específico do cliente.';
  }

  return `# 🎯 RECOMENDAÇÕES PERSONALIZADAS PARA SEU AGENTE SDR

## 1. MÉTODO PRINCIPAL RECOMENDADO

**${metodoRecomendado}**

${justificativa}

**Por que esta abordagem funciona para seu perfil:**
- Segmento ${formatarArray(etapa1.segmento)} normalmente responde bem a ${formatarArray(etapa4.tom_comunicacao)}
- Clientes que ${formatarArray(etapa2.perfil_cliente)} precisam de abordagem específica
- Considerando que os principais desafios são: ${formatarArray(etapa3.maior_desafio)}

## 2. MÉTODOS COMPLEMENTARES

### Método A: Approach por Valor
- Foque no ROI e benefícios tangíveis
- Use cases de sucesso do seu segmento
- Destaque a urgência quando apropriado

### Método B: Social Proof
- Testimoniais de clientes similares
- Casos de estudo específicos do segmento
- Estatísticas e resultados comprovados

## 3. ESTRUTURA DE ABORDAGEM SUGERIDA

### Primeira Mensagem (Abertura):
"Olá! Sou [Nome] da [Empresa]. Ajudo empresas do setor ${etapa1.segmento.replace('-', '/')} a [benefício específico]. Posso te mostrar como [resultado específico] em apenas 15 minutos?"

### Segunda Mensagem (Qualificação):
"Para personalizar melhor nossa conversa, você atual​mente [desafio identificado no formulário]?"

### Terceira Mensagem (Agendamento):
"Baseado no que você me contou, tenho algumas estratégias que podem te ajudar. Que tal conversarmos [dia/horário] para eu te mostrar?"

## 4. SCRIPTS ESPECÍFICOS PARA WHATSAPP

### Para Clientes que ${formatarArray(etapa2.perfil_cliente)}:
"Entendo que você ${formatarArray(etapa2.motivacao_cliente)}. Temos uma solução específica para isso. Posso te mostrar como funciona?"

### Para Tratar Objeções de ${formatarArray(etapa3.maior_desafio)}:
"Entendo sua preocupação. Na verdade, isso é exatamente o que nossos clientes mais relatam. Deixe-me te mostrar como [empresa similar] resolveu isso..."

## 5. TRATAMENTO DE OBJEÇÕES PRINCIPAIS

### "Não tenho tempo agora"
"Entendo perfeitamente. Por isso mesmo nossa conversa é rápida - apenas 15 minutos. Quando seria melhor para você: manhã ou tarde?"

### "Já temos uma solução"
"Que bom! Como está funcionando? Sempre gosto de entender o que funciona no mercado. Posso compartilhar algumas otimizações que têm dado resultado?"

### "Preciso pensar"
"Claro! Para te ajudar a pensar melhor, posso te enviar um material específico sobre ${etapa1.segmento}. Vai te dar uma visão mais clara."

## 6. MÉTRICAS DE ACOMPANHAMENTO

### KPIs Principais:
- Taxa de resposta da primeira mensagem
- Taxa de agendamento
- Taxa de comparecimento 
- Tempo médio de resposta

### Metas Sugeridas:
- Taxa de resposta: 25-35%
- Taxa de agendamento: 15-25%
- Taxa de comparecimento: 70-80%

## 7. PRÓXIMOS PASSOS

1. **Teste os scripts** por 1 semana
2. **Analise as métricas** e ajuste conforme necessário
3. **Documente as objeções** mais comuns
4. **Otimize baseado nos resultados**

---

**💡 DICA EXTRA:** Considerando que seus clientes vêm principalmente de ${formatarArray(etapa3.origem_clientes)}, certifique-se de mencionar isso na abordagem para criar conexão imediata.

**🚀 Quer implementar essas estratégias com automação completa? Agende uma consulta gratuita com nossa equipe!**`;
}

// Não exportar como default para evitar ser tratado como página
export default null;