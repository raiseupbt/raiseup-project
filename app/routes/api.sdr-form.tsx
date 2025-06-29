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
    
    // Verificar consentimento LGPD
    if (!etapa4?.lgpd_consent) {
      console.error('❌ Consentimento LGPD não fornecido');
      return json({ error: 'É necessário concordar com o armazenamento dos dados para prosseguir' }, { status: 400 });
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
    let respostaIA;
    try {
      respostaIA = await gerarRecomendacaoIA(respostas);
      console.log('✅ Resposta IA gerada, tamanho:', respostaIA.length);
    } catch (iaError: any) {
      console.error('❌ Erro na geração de IA:', iaError.message);
      return json({ 
        error: iaError.message || 'Erro no serviço de IA. Tente novamente mais tarde.',
        errorType: 'ia_error'
      }, { status: 503 }); // Service Unavailable
    }

    // Preparar dados para inserção
    const dadosParaInserir = {
      nome: dados_pessoais.nome,
      email: dados_pessoais.email,
      empresa: dados_pessoais.empresa || null,
      segmento: etapa1.segmento,
      porte_empresa: etapa1.porte_empresa,
      respostas: {
        ...respostas,
        lgpd_consent: etapa4.lgpd_consent // Store consent in respostas JSON
      },
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
  
  // Verificar se temos a chave da OpenAI configurada
  const openaiKey = process.env.OPENAI_API_KEY;
  
  if (!openaiKey) {
    console.error('❌ OPENAI_API_KEY não configurada');
    throw new Error('Serviço de IA temporariamente indisponível. Nossa equipe foi notificada e está trabalhando para resolver a questão. Tente novamente em alguns minutos.');
  }

  try {
    console.log('🤖 Chamando OpenAI API...');
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
- Inclua justificativas técnicas para cada recomendação
- Use markdown para formatação (# ## ### para títulos)
- Mantenha um tom profissional mas acessível`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 2500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('❌ OpenAI API error:', response.status, errorData);
      
      if (response.status === 429) {
        throw new Error('Nosso serviço de IA está com muitas solicitações no momento. Aguarde alguns minutos e tente novamente.');
      } else if (response.status === 401) {
        throw new Error('Erro de autenticação com o serviço de IA. Nossa equipe foi notificada.');
      } else if (response.status >= 500) {
        throw new Error('O serviço de IA está temporariamente indisponível. Tente novamente em alguns minutos.');
      } else {
        throw new Error('Erro temporário no serviço de IA. Tente novamente em alguns instantes.');
      }
    }

    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('❌ Resposta inválida da OpenAI:', data);
      throw new Error('Resposta inválida do serviço de IA. Tente novamente.');
    }

    const content = data.choices[0].message.content;
    console.log('✅ Resposta OpenAI recebida com sucesso');
    return content;

  } catch (error: any) {
    console.error('❌ Erro ao chamar OpenAI:', error);
    
    // Se é um erro que já tem uma mensagem amigável, usar ela
    if (error.message && error.message.includes('serviço de IA')) {
      throw error;
    }
    
    // Para outros erros, usar mensagem genérica
    throw new Error('Estamos enfrentando instabilidade em nosso serviço de IA. Tente novamente em alguns minutos ou entre em contato conosco se o problema persistir.');
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


// Não exportar como default para evitar ser tratado como página
export default null;