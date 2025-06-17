#!/bin/bash

# Script de deploy para VPS
echo "🚀 Iniciando deploy do RaiseUp..."

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para log
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}"
    exit 1
}

warn() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    error "package.json não encontrado. Execute o script no diretório raiz do projeto."
fi

# Atualizar código do repositório
log "Atualizando código do repositório..."
git pull origin main || error "Falha ao fazer pull do repositório"

# Instalar dependências
log "Instalando dependências..."
npm install || error "Falha ao instalar dependências"

# Fazer build da aplicação
log "Fazendo build da aplicação..."
npm run build || error "Falha no build da aplicação"

# Verificar se PM2 está instalado
if ! command -v pm2 &> /dev/null; then
    warn "PM2 não está instalado. Instalando globalmente..."
    npm install -g pm2 || error "Falha ao instalar PM2"
fi

# Recarregar aplicação com PM2
log "Recarregando aplicação com PM2..."
if pm2 list | grep -q "raiseup-website"; then
    pm2 reload ecosystem.config.js || error "Falha ao recarregar aplicação"
    log "Aplicação recarregada com sucesso!"
else
    pm2 start ecosystem.config.js || error "Falha ao iniciar aplicação"
    log "Aplicação iniciada com sucesso!"
fi

# Salvar configuração do PM2
pm2 save

# Mostrar status
log "Status da aplicação:"
pm2 show raiseup-website

log "✅ Deploy concluído com sucesso!"
log "🌐 Aplicação rodando na porta 3000"
log "📊 Use 'pm2 monit' para monitorar a aplicação"