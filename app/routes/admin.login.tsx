import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData, useNavigation, Form } from "@remix-run/react";
import { useState } from "react";
import { login, getUser, createUserSession } from "~/lib/auth.server";


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await getUser(request);
  if (user) {
    return redirect('/admin');
  }
  return json({});
};

export const action = async ({ request }: ActionFunctionArgs) => {
  console.log('=== ACTION INICIADA ===');
  
  const formData = await request.formData();
  
  // Debug: ver todos os campos do formulário
  console.log('=== FORM DEBUG ===');
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
  
  const email = formData.get('email')?.toString();
  const senha = formData.get('senha')?.toString();

  console.log('Email extraído:', email);
  console.log('Senha extraída:', senha);

  if (!email || !senha) {
    console.log('Email ou senha não fornecidos');
    return json({ erro: 'Email e senha são obrigatórios' }, { status: 400 });
  }

  console.log('Chamando função login...');
  const user = await login(email, senha);
  console.log('Retorno da função login:', user);
  
  if (!user) {
    console.log('Login falhou - usuário não encontrado ou senha inválida');
    return json({ erro: 'Email ou senha inválidos' }, { status: 401 });
  }

  console.log('Login bem-sucedido para:', user.email);
  return createUserSession(user.id, '/admin');
};

export default function LoginAdmin() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const isSubmitting = navigation.state === "submitting";

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0f1c 0%, #1a202c 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>
      <div style={{
        background: 'rgba(26, 32, 44, 0.9)',
        padding: '3rem',
        borderRadius: '16px',
        border: '1px solid rgba(51, 65, 85, 0.3)',
        backdropFilter: 'blur(10px)',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#f8fafc',
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            <img src="/logo_raiseup.png" alt="RaiseUp Logo" style={{ height: '32px', marginRight: '8px', filter: 'brightness(0) invert(1)' }} />
            Admin
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            Área administrativa
          </p>
        </div>

        <Form method="post">
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

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#f8fafc',
              fontWeight: '500',
              fontSize: '0.9rem'
            }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: '#2d3748',
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#f8fafc',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#0ea5e9'}
              onBlur={(e) => e.target.style.borderColor = '#334155'}
              placeholder="admin@raiseup.com.br"
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#f8fafc',
              fontWeight: '500',
              fontSize: '0.9rem'
            }}>
              Senha
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="senha"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 3rem 0.75rem 1rem',
                  background: '#2d3748',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0ea5e9'}
                onBlur={(e) => e.target.style.borderColor = '#334155'}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  fontSize: '0.9rem'
                }}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '0.875rem',
              background: isSubmitting ? '#6b7280' : 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
                Entrando...
              </>
            ) : (
              <>
                🔐 Entrar
              </>
            )}
          </button>
        </Form>

        <div style={{
          marginTop: '2rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <p>Acesso restrito para administradores</p>
        </div>
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