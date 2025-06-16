const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para CORS (caso necessário)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para landing pages
app.get('/agentes-conversacionais', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'agentes-conversacionais.html'));
});

app.get('/agentes-midias-sociais', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'agentes-midias-sociais.html'));
});

app.get('/agentes-produtividade', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'agentes-produtividade.html'));
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`
🚀 Servidor RaiseUp rodando!
🌐 URL Local: http://localhost:${PORT}
🌐 URL Rede: http://0.0.0.0:${PORT}
📁 Servindo arquivos de: ${path.join(__dirname, 'public')}

✨ Site RaiseUp - Automações com IA Humanizada
`);
});

// Tratamento de erros
process.on('uncaughtException', (err) => {
    console.error('❌ Erro não capturado:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Rejeição não tratada em:', promise, 'razão:', reason);
});