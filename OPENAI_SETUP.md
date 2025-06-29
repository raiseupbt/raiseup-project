# 🤖 Configuração OpenAI para Formulário SDR

## Variável de Ambiente Necessária

Para que o formulário SDR gere respostas personalizadas com IA real, adicione a seguinte variável ao seu arquivo `.env`:

```bash
# OpenAI API Configuration
OPENAI_API_KEY=sk...
```

## Como Obter a Chave da OpenAI

1. Acesse [https://platform.openai.com/](https://platform.openai.com/)
2. Faça login ou crie uma conta
3. Vá para "API Keys" no menu
4. Clique em "Create new secret key"
5. Copie a chave e adicione ao `.env`

## Comportamento Sem a Chave

- **Com a chave**: Usa GPT-4o-mini para gerar recomendações personalizadas reais
- **Sem a chave**: Usa uma resposta simulada inteligente baseada nas respostas do usuário

## Modelo Utilizado

- **Modelo**: GPT-4o-mini (otimizado para custo-benefício)
- **Tokens máximos**: 2000
- **Temperatura**: 0.7 (balanceado entre criatividade e precisão)

## Prompt Personalizado

O sistema gera um prompt específico baseado em:
- Segmento da empresa
- Porte da empresa  
- Perfil dos clientes
- Contexto de vendas
- Objetivos do SDR

## Estrutura da Resposta

A IA retorna recomendações organizadas em:

1. **Método Principal Recomendado** + justificativa
2. **Métodos Complementares** (2 opções)
3. **Estrutura de Abordagem** (fluxo detalhado)
4. **Scripts Sugeridos** (exemplos práticos)
5. **Tratamento de Objeções** (principais resistências)
6. **Métricas de Acompanhamento** (KPIs importantes)

## Custos Estimados

- **Por formulário**: ~$0.01-0.02 USD (GPT-4o-mini)
- **100 formulários/mês**: ~$1-2 USD
- **Prompt + resposta**: ~1,500-2,500 tokens total

## Fallback Inteligente

Mesmo sem a API da OpenAI, o sistema oferece:
- ✅ Análise das respostas do usuário
- ✅ Recomendações baseadas em lógica de negócio
- ✅ Scripts e estruturas práticas
- ✅ Experiência completa para o usuário

---

**📌 Nota**: O formulário funciona perfeitamente mesmo sem a chave da OpenAI, oferecendo uma experiência valiosa através do sistema de fallback inteligente.