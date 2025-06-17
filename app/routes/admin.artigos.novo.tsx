import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData, useNavigation, Form, Link } from "@remix-run/react";
import { requireUser } from "~/lib/auth.server";
import { supabase } from "~/lib/supabase.server";


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await requireUser(request);
  return json({ user });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  await requireUser(request);
  
  const formData = await request.formData();
  const titulo = formData.get('titulo')?.toString();
  const conteudo = formData.get('conteudo')?.toString();
  const resumo = formData.get('resumo')?.toString();
  const slug = formData.get('slug')?.toString();
  const ativo = formData.get('ativo') === 'on';

  if (!titulo || !conteudo || !resumo || !slug) {
    return json({ 
      erro: 'Todos os campos são obrigatórios',
      values: { titulo, conteudo, resumo, slug, ativo }
    }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from('artigos')
      .insert({
        titulo,
        conteudo,
        resumo,
        slug,
        ativo,
        autor: 'Admin',
        visualizacoes: 0
      })
      .select()
      .single();

    if (error) {
      console.error('Erro ao criar artigo:', error);
      return json({ 
        erro: 'Erro ao criar artigo. Verifique se o slug não está duplicado.',
        values: { titulo, conteudo, resumo, slug, ativo }
      }, { status: 400 });
    }

    return redirect('/admin/artigos');
  } catch (error) {
    console.error('Erro ao criar artigo:', error);
    return json({ 
      erro: 'Erro interno. Tente novamente.',
      values: { titulo, conteudo, resumo, slug, ativo }
    }, { status: 500 });
  }
};

export default function NovoArtigo() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const values = actionData?.values || {};

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
              Novo Artigo
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

            {/* Status */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem',
              background: 'rgba(15, 23, 42, 0.5)',
              borderRadius: '8px',
              border: '1px solid rgba(51, 65, 85, 0.3)'
            }}>
              <input
                type="checkbox"
                name="ativo"
                id="ativo"
                defaultChecked={values.ativo !== false}
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
                    💾 Salvar Artigo
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