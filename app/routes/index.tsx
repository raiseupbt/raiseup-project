export default function IndexAlternative() {
  return (
    <div style={{ 
      padding: "20px", 
      color: "black", 
      backgroundColor: "white",
      minHeight: "100vh"
    }}>
      <h1>🚀 Rota Alternativa (index.tsx)</h1>
      <p>Testando se o problema é especificamente com _index.tsx</p>
      
      <div style={{ marginTop: "20px" }}>
        <a href="/test" style={{ marginRight: "10px", color: "blue" }}>Test</a>
        <a href="/home" style={{ marginRight: "10px", color: "blue" }}>Home</a>
        <a href="/debug" style={{ color: "blue" }}>Debug</a>
      </div>
    </div>
  );
}