import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData, useLoaderData, useNavigation, Form, Link } from "@remix-run/react";
import { requireUser } from "~/lib/auth.server";
import { supabase } from "~/lib/supabase.server";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const user = await requireUser(request);
  const { id } = params;

  if (!id) {
    throw new Response("ID do artigo não informado", { status: 400 });
  }

  try {
    const { data: artigo, error } = await supabase
      .from('artigos')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !artigo) {
      throw new Response("Artigo não encontrado", { status: 404 });
    }

    return json({ user, artigo });
  } catch (error) {
    console.error('Erro ao carregar artigo:', error);
    throw new Response("Erro ao carregar artigo", { status: 500 });
  }
};

export const action = async ({ request, params }: ActionFunctionArgs) => {
  await requireUser(request);
  const { id } = params;
  
  if (!id) {
    throw new Response("ID do artigo não informado", { status: 400 });
  }

  const formData = await request.formData();
  const titulo = formData.get('titulo')?.toString();
  const conteudo = formData.get('conteudo')?.toString();
  const resumo = formData.get('resumo')?.toString();
  const slug = formData.get('slug')?.toString();
  const ativo = formData.get('ativo') === 'on';
  const destaque = formData.get('destaque') === 'on';
  const tagsString = formData.get('tags')?.toString();
  const metaDescription = formData.get('meta_description')?.toString();
  const metaKeywords = formData.get('meta_keywords')?.toString();
  const tempoLeitura = formData.get('tempo_leitura')?.toString();
  
  // Processar tags (converter string separada por vírgula em array)
  const tags = tagsString ? tagsString.split(',').map(tag => tag.trim()).filter(tag => tag) : [];

  if (!titulo || !conteudo || !resumo || !slug) {
    return json({ 
      erro: 'Todos os campos são obrigatórios',
      values: { titulo, conteudo, resumo, slug, ativo, destaque, tags: tagsString, meta_description: metaDescription, meta_keywords: metaKeywords, tempo_leitura: tempoLeitura }
    }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from('artigos')
      .update({
        titulo,
        conteudo,
        resumo,
        slug,
        ativo,
        destaque,
        tags,
        meta_description: metaDescription,
        meta_keywords: metaKeywords,
        tempo_leitura: tempoLeitura,
        atualizado_em: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Erro ao atualizar artigo:', error);
      return json({ 
        erro: 'Erro ao atualizar artigo. Verifique se o slug não está duplicado.',
        values: { titulo, conteudo, resumo, slug, ativo, destaque, tags: tagsString, meta_description: metaDescription, meta_keywords: metaKeywords, tempo_leitura: tempoLeitura }
      }, { status: 400 });
    }

    return redirect('/admin/artigos');
  } catch (error) {
    console.error('Erro ao atualizar artigo:', error);
    return json({ 
      erro: 'Erro interno. Tente novamente.',
      values: { titulo, conteudo, resumo, slug, ativo, destaque, tags: tagsString, meta_description: metaDescription, meta_keywords: metaKeywords, tempo_leitura: tempoLeitura }
    }, { status: 500 });
  }
};

export default function EditarArtigo() {
  const { user, artigo } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const values = actionData?.values || {
    titulo: artigo.titulo,
    conteudo: artigo.conteudo,
    resumo: artigo.resumo,
    slug: artigo.slug,
    ativo: artigo.ativo,
    destaque: artigo.destaque,
    tags: Array.isArray(artigo.tags) ? artigo.tags.join(', ') : '',
    meta_description: artigo.meta_description,
    meta_keywords: artigo.meta_keywords,
    tempo_leitura: artigo.tempo_leitura
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0f1c 0%, #1a202c 100%)',
      color: '#f8fafc',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>
      {/* Header */}
      <header style={{
        background: 'rgba(26, 32, 44, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(51, 65, 85, 0.3)',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/admin/artigos" style={{
              color: '#94a3b8',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'color 0.2s'
            }}>
              ← Voltar
            </Link>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}>
              Editar Artigo
            </h1>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <Form method="post" style={{
          background: 'rgba(26, 32, 44, 0.8)',
          backdropFilter: 'blur(20px)',
          padding: '2rem',
          borderRadius: '16px',
          border: '1px solid rgba(51, 65, 85, 0.3)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
        }}>
          {actionData?.erro && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#ef4444',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem'
            }}>
              ❌ {actionData.erro}
            </div>
          )}

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {/* Título */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#f8fafc',
                fontWeight: '600',
                fontSize: '0.9rem'
              }}>
                Título *
              </label>
              <input
                type="text"
                name="titulo"
                required
                defaultValue={values.titulo}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: 'rgba(45, 55, 72, 0.8)',
                  border: '1px solid rgba(51, 65, 85, 0.4)',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0ea5e9';
                  e.target.style.boxShadow = '0 0 0 3px rgba(14, 165, 233, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(51, 65, 85, 0.4)';
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="Ex: Como a IA pode revolucionar sua empresa"
              />
            </div>

            {/* Slug */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#f8fafc',
                fontWeight: '600',
                fontSize: '0.9rem'
              }}>
                Slug (URL) *
              </label>
              <input
                type="text"
                name="slug"
                required
                defaultValue={values.slug}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: 'rgba(45, 55, 72, 0.8)',
                  border: '1px solid rgba(51, 65, 85, 0.4)',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0ea5e9';
                  e.target.style.boxShadow = '0 0 0 3px rgba(14, 165, 233, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(51, 65, 85, 0.4)';
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="como-ia-pode-revolucionar-sua-empresa"
              />
              <p style={{ 
                color: '#94a3b8', 
                fontSize: '0.8rem', 
                margin: '0.5rem 0 0 0' 
              }}>
                Use apenas letras minúsculas, números e hífens. Ex: meu-artigo-incrivel
              </p>
            </div>

            {/* Resumo */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#f8fafc',
                fontWeight: '600',
                fontSize: '0.9rem'
              }}>
                Resumo *
              </label>
              <textarea
                name="resumo"
                required
                rows={3}
                defaultValue={values.resumo}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: 'rgba(45, 55, 72, 0.8)',
                  border: '1px solid rgba(51, 65, 85, 0.4)',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  minHeight: '80px'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0ea5e9';
                  e.target.style.boxShadow = '0 0 0 3px rgba(14, 165, 233, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(51, 65, 85, 0.4)';
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="Breve descrição do artigo para aparecer nas listagens..."
              />
            </div>

            {/* Conteúdo */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#f8fafc',
                fontWeight: '600',
                fontSize: '0.9rem'
              }}>
                Conteúdo (Markdown) *
              </label>
              <textarea
                name="conteudo"
                required
                rows={20}
                defaultValue={values.conteudo}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(45, 55, 72, 0.8)',
                  border: '1px solid rgba(51, 65, 85, 0.4)',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'all 0.2s',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  minHeight: '400px',
                  fontFamily: "'Fira Code', 'Monaco', 'Consolas', monospace",
                  lineHeight: '1.6'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0ea5e9';
                  e.target.style.boxShadow = '0 0 0 3px rgba(14, 165, 233, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(51, 65, 85, 0.4)';
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="# Título do Artigo

## Introdução

Seu conteúdo aqui em Markdown...

### Subtítulo

- Lista item 1
- Lista item 2

**Texto em negrito** e *texto em itálico*"
              />
              <p style={{ 
                color: '#94a3b8', 
                fontSize: '0.8rem', 
                margin: '0.5rem 0 0 0' 
              }}>
                Use Markdown para formatação. Suporte a títulos (##), listas, negrito (**texto**), itálico (*texto*), etc.
              </p>
            </div>

            {/* Tags */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#f8fafc',
                fontWeight: '600',
                fontSize: '0.9rem'
              }}>
                Tags
              </label>
              <input
                type="text"
                name="tags"
                defaultValue={values.tags}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: 'rgba(45, 55, 72, 0.8)',
                  border: '1px solid rgba(51, 65, 85, 0.4)',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0ea5e9';
                  e.target.style.boxShadow = '0 0 0 3px rgba(14, 165, 233, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(51, 65, 85, 0.4)';
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="IA, Automação, Tecnologia (separadas por vírgula)"
              />
              <p style={{ 
                color: '#94a3b8', 
                fontSize: '0.8rem', 
                margin: '0.5rem 0 0 0' 
              }}>
                Separe as tags com vírgulas. Ex: IA, Automação, Tecnologia
              </p>
            </div>

            {/* Tempo de Leitura */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#f8fafc',
                fontWeight: '600',
                fontSize: '0.9rem'
              }}>
                Tempo de Leitura
              </label>
              <input
                type="text"
                name="tempo_leitura"
                defaultValue={values.tempo_leitura}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: 'rgba(45, 55, 72, 0.8)',
                  border: '1px solid rgba(51, 65, 85, 0.4)',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0ea5e9';
                  e.target.style.boxShadow = '0 0 0 3px rgba(14, 165, 233, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(51, 65, 85, 0.4)';
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="5 min"
              />
            </div>

            {/* Meta Description */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#f8fafc',
                fontWeight: '600',
                fontSize: '0.9rem'
              }}>
                Meta Description (SEO)
              </label>
              <textarea
                name="meta_description"
                rows={2}
                defaultValue={values.meta_description}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: 'rgba(45, 55, 72, 0.8)',
                  border: '1px solid rgba(51, 65, 85, 0.4)',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  minHeight: '60px'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0ea5e9';
                  e.target.style.boxShadow = '0 0 0 3px rgba(14, 165, 233, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(51, 65, 85, 0.4)';
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="Breve descrição do artigo para mecanismos de busca (150-160 caracteres)"
              />
            </div>

            {/* Meta Keywords */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#f8fafc',
                fontWeight: '600',
                fontSize: '0.9rem'
              }}>
                Meta Keywords (SEO)
              </label>
              <input
                type="text"
                name="meta_keywords"
                defaultValue={values.meta_keywords}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: 'rgba(45, 55, 72, 0.8)',
                  border: '1px solid rgba(51, 65, 85, 0.4)',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0ea5e9';
                  e.target.style.boxShadow = '0 0 0 3px rgba(14, 165, 233, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(51, 65, 85, 0.4)';
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="palavras-chave, separadas, por vírgula"
              />
            </div>

            {/* Status e Destaque */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              padding: '1rem',
              background: 'rgba(15, 23, 42, 0.5)',
              borderRadius: '8px',
              border: '1px solid rgba(51, 65, 85, 0.3)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <input
                  type="checkbox"
                  name="ativo"
                  id="ativo"
                  defaultChecked={values.ativo}
                  style={{
                    width: '18px',
                    height: '18px',
                    accentColor: '#0ea5e9'
                  }}
                />
                <label htmlFor="ativo" style={{
                  color: '#f8fafc',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}>
                  Publicar artigo (ativo)
                </label>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <input
                  type="checkbox"
                  name="destaque"
                  id="destaque"
                  defaultChecked={values.destaque}
                  style={{
                    width: '18px',
                    height: '18px',
                    accentColor: '#f59e0b'
                  }}
                />
                <label htmlFor="destaque" style={{
                  color: '#f8fafc',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}>
                  Artigo em destaque
                </label>
              </div>
            </div>

            {/* Botões */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'flex-end',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(51, 65, 85, 0.3)'
            }}>
              <Link
                to="/admin/artigos"
                style={{
                  padding: '0.875rem 1.5rem',
                  background: 'rgba(107, 114, 128, 0.2)',
                  border: '1px solid rgba(107, 114, 128, 0.3)',
                  borderRadius: '8px',
                  color: '#d1d5db',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'all 0.2s',
                  display: 'inline-block'
                }}
              >
                Cancelar
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '0.875rem 1.5rem',
                  background: isSubmitting 
                    ? 'rgba(107, 114, 128, 0.5)' 
                    : 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '50%',
                      borderTopColor: 'white',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Salvando...
                  </>
                ) : (
                  <>
                    💾 Atualizar Artigo
                  </>
                )}
              </button>
            </div>
          </div>
        </Form>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `
      }} />
    </div>
  );
}