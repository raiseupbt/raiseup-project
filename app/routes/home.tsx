export default function Home() {
  return (
    <div style={{ 
      padding: "20px", 
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#0a0f1c",
      color: "#ffffff",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "#0ea5e9", marginBottom: "20px" }}>
        🏠 Página Home (Não Raiz)
      </h1>
      
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Esta é a MESMA página simples, mas acessível via /home em vez de /
      </p>
      
      <div style={{ 
        background: "#1a202c", 
        padding: "20px", 
        borderRadius: "8px",
        marginBottom: "30px"
      }}>
        <h2>Teste de Hipótese:</h2>
        <p>Se esta página funcionar, o problema é específico da rota raiz (/)</p>
        <p>Se esta página também falhar, o problema é no componente</p>
      </div>
      
      <div>
        <a 
          href="/" 
          style={{
            display: "inline-block",
            background: "#0ea5e9",
            color: "white",
            padding: "10px 20px",
            textDecoration: "none",
            borderRadius: "5px",
            marginRight: "10px"
          }}
        >
          Tentar Homepage
        </a>
        
        <a 
          href="/debug" 
          style={{
            display: "inline-block",
            background: "#8b5cf6",
            color: "white",
            padding: "10px 20px",
            textDecoration: "none",
            borderRadius: "5px"
          }}
        >
          Ir para Debug
        </a>
      </div>
    </div>
  );
}