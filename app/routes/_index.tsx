export default function Index() {
  return (
    <div style={{ 
      padding: "20px", 
      color: "black", 
      backgroundColor: "white",
      minHeight: "100vh"
    }}>
      <h1>🏠 Homepage Funcional</h1>
      <p>Se você vê esta mensagem, a rota raiz está funcionando!</p>
      
      <div style={{ marginTop: "20px" }}>
        <a href="/test" style={{ marginRight: "10px", color: "blue" }}>Test</a>
        <a href="/home" style={{ marginRight: "10px", color: "blue" }}>Home</a>
        <a href="/debug" style={{ color: "blue" }}>Debug</a>
      </div>
    </div>
  );
}