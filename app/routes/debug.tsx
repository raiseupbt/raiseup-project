// Página de debug completamente isolada - sem usar root.tsx
export default function Debug() {
  return (
    <html>
      <head>
        <title>Debug - RaiseUp</title>
        <meta charSet="utf-8" />
      </head>
      <body style={{ margin: 0, padding: 20, fontFamily: 'Arial', backgroundColor: '#0a0f1c', color: 'white' }}>
        <h1 style={{ color: '#0ea5e9' }}>🔧 Página de Debug</h1>
        <p>Se você vê esta mensagem, o Remix está funcionando sem usar o root.tsx</p>
        <div style={{ background: '#1a202c', padding: '20px', marginTop: '20px', borderRadius: '8px' }}>
          <h2>Informações:</h2>
          <ul>
            <li>✅ Remix SSR funcionando</li>
            <li>✅ CSS inline funcionando</li>
            <li>✅ Rota isolada funcionando</li>
          </ul>
        </div>
        <p style={{ marginTop: '20px' }}>
          <a href="/" style={{ color: '#0ea5e9' }}>Voltar para Home</a>
        </p>
      </body>
    </html>
  );
}