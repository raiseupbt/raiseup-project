import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "RaiseUp - Automações com IA para Transformação Digital" },
    { name: "description", content: "RaiseUp oferece automações com IA humanizada" }
  ];
};

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
        RaiseUp - Transformação Digital
      </h1>
      
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Automatize processos mantendo o toque humano
      </p>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "20px",
        marginTop: "40px" 
      }}>
        <div style={{ 
          background: "#1a202c", 
          padding: "20px", 
          borderRadius: "8px",
          border: "1px solid #334155"
        }}>
          <h3 style={{ color: "#0ea5e9" }}>🤖 Agentes Conversacionais</h3>
          <p>Atendimento 24/7 personalizado</p>
        </div>
        
        <div style={{ 
          background: "#1a202c", 
          padding: "20px", 
          borderRadius: "8px",
          border: "1px solid #334155"
        }}>
          <h3 style={{ color: "#8b5cf6" }}>📱 Agentes de Mídias Sociais</h3>
          <p>Gestão automatizada de redes sociais</p>
        </div>
        
        <div style={{ 
          background: "#1a202c", 
          padding: "20px", 
          borderRadius: "8px",
          border: "1px solid #334155"
        }}>
          <h3 style={{ color: "#f59e0b" }}>⚙️ Agentes de Produtividade</h3>
          <p>Automação de processos internos</p>
        </div>
      </div>
      
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <a 
          href="/contato" 
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
            color: "white",
            padding: "15px 30px",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold"
          }}
        >
          Entre em Contato
        </a>
      </div>
    </div>
  );
}