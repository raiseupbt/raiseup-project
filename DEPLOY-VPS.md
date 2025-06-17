# 🚀 Guia de Deploy na VPS - RaiseUp

## 📋 Pré-requisitos na VPS

### 1. Sistema Operacional
- Ubuntu 20.04+ ou similar
- Acesso root ou sudo

### 2. Instalar Node.js 18+
```bash
# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js via NodeSource
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar instalação
node --version
npm --version
```

### 3. Instalar PM2 (Process Manager)
```bash
sudo npm install -g pm2
```

### 4. Instalar Nginx
```bash
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

### 5. Instalar Git
```bash
sudo apt install git -y
```

## 🛠️ Setup Inicial

### 1. Clonar Repositório
```bash
# Ir para diretório de aplicações
cd /var/www

# Clonar projeto (substitua pela URL do seu repo)
sudo git clone https://github.com/raiseupbt/raiseup-project.git
sudo chown -R $USER:$USER raiseup-project
cd raiseup-project
```

### 2. Configurar Variáveis de Ambiente
```bash
# Criar arquivo .env
nano .env

# Adicionar as variáveis:
SUPABASE_URL=sua_url_supabase
SUPABASE_ANON_KEY=sua_chave_supabase
SESSION_SECRET=sua_chave_session_super_secreta
GA4_PROPERTY_ID=seu_id_ga4
NODE_ENV=production
```

### 3. Instalar Dependências e Build
```bash
npm install
npm run build
```

## 🚀 Deploy com PM2

### 1. Iniciar Aplicação
```bash
pm2 start ecosystem.config.js
```

### 2. Salvar Configuração
```bash
pm2 save
pm2 startup
# Executar o comando que aparecer na tela
```

### 3. Verificar Status
```bash
pm2 list
pm2 show raiseup-website
pm2 logs raiseup-website
```

## 🌐 Configurar Nginx

### 1. Copiar Configuração
```bash
# Copiar arquivo de configuração
sudo cp nginx.conf /etc/nginx/sites-available/raiseup

# Editar com seu domínio
sudo nano /etc/nginx/sites-available/raiseup
# Substituir 'seudominio.com.br' pelo seu domínio real

# Ativar site
sudo ln -s /etc/nginx/sites-available/raiseup /etc/nginx/sites-enabled/

# Remover site padrão
sudo rm /etc/nginx/sites-enabled/default

# Testar configuração
sudo nginx -t

# Recarregar Nginx
sudo systemctl reload nginx
```

### 2. Configurar SSL com Let's Encrypt
```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obter certificado (substitua pelo seu domínio)
sudo certbot --nginx -d seudominio.com.br -d www.seudominio.com.br

# Testar renovação automática
sudo certbot renew --dry-run
```

## 🔄 Deploy Automatizado

### Usar o Script de Deploy
```bash
# Dar permissão ao script
chmod +x deploy.sh

# Executar deploy
./deploy.sh
```

### Deploy Manual
```bash
# Atualizar código
git pull origin main

# Instalar dependências
npm install

# Build
npm run build

# Recarregar PM2
pm2 reload raiseup-website
```

## 📊 Monitoramento

### Comandos PM2 Úteis
```bash
# Ver logs em tempo real
pm2 logs raiseup-website --lines 50

# Monitorar recursos
pm2 monit

# Reiniciar aplicação
pm2 restart raiseup-website

# Parar aplicação
pm2 stop raiseup-website

# Ver informações detalhadas
pm2 show raiseup-website
```

### Logs do Nginx
```bash
# Logs de acesso
sudo tail -f /var/log/nginx/raiseup_access.log

# Logs de erro
sudo tail -f /var/log/nginx/raiseup_error.log
```

## 🔧 Troubleshooting

### Problema: Aplicação não inicia
```bash
# Verificar logs
pm2 logs raiseup-website

# Verificar se a porta 3000 está livre
sudo netstat -tlnp | grep :3000

# Verificar variáveis de ambiente
pm2 show raiseup-website
```

### Problema: Nginx 502 Bad Gateway
```bash
# Verificar se aplicação está rodando
pm2 list

# Verificar logs do Nginx
sudo tail -f /var/log/nginx/raiseup_error.log

# Testar conexão local
curl http://localhost:3000
```

### Problema: SSL não funciona
```bash
# Verificar certificados
sudo certbot certificates

# Renovar certificados
sudo certbot renew

# Verificar configuração SSL
sudo nginx -t
```

## 📈 Performance e Segurança

### Configurar Firewall
```bash
# Ativar UFW
sudo ufw enable

# Permitir SSH, HTTP e HTTPS
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'

# Verificar status
sudo ufw status
```

### Backup Automático
```bash
# Criar script de backup
nano backup.sh

#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf /backup/raiseup_$DATE.tar.gz /var/www/raiseup-project

# Agendar no crontab
crontab -e
# Adicionar: 0 2 * * * /var/www/raiseup-project/backup.sh
```

## 💰 Custos Estimados VPS

### Provedor Nacional (Hostinger, UOLHost)
- **2GB RAM, 1 CPU**: R$ 15-25/mês
- **4GB RAM, 2 CPU**: R$ 25-40/mês

### Provedor Internacional (DigitalOcean, Linode)
- **2GB RAM, 1 CPU**: $12-15/mês (~R$ 60-75)
- **4GB RAM, 2 CPU**: $20-25/mês (~R$ 100-125)

## ✅ Checklist Final

- [ ] Node.js 18+ instalado
- [ ] PM2 instalado globalmente
- [ ] Nginx instalado e configurado
- [ ] Repositório clonado
- [ ] Variáveis de ambiente configuradas
- [ ] Build realizado com sucesso
- [ ] Aplicação rodando no PM2
- [ ] Nginx proxy configurado
- [ ] SSL configurado com Let's Encrypt
- [ ] Firewall configurado
- [ ] Backup automatizado
- [ ] Domínio apontando para VPS

---

**🎉 Sua aplicação RaiseUp estará rodando em produção!**

Para suporte, verifique os logs com `pm2 logs raiseup-website`