export default function Index() {
  return (
    <div style={{ 
      padding: "20px", 
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#0a0f1c",
      color: "#ffffff",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "#0ea5e9", marginBottom: "20px" }}>
        🎯 Homepage Simplificada - RaiseUp
      </h1>
      
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Esta é uma versão simplificada da homepage para teste
      </p>
      
      <div style={{ 
        background: "#1a202c", 
        padding: "20px", 
        borderRadius: "8px",
        marginBottom: "30px"
      }}>
        <h2>Status do Sistema:</h2>
        <ul>
          <li>✅ Remix funcionando</li>
          <li>✅ Rota _index funcionando</li>
          <li>✅ Meta tags funcionando</li>
          <li>✅ CSS inline funcionando</li>
        </ul>
      </div>
      
      <div>
        <a 
          href="/test" 
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
          Ir para Test
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