# 🚀 Deploy RaiseUp no EasyPanel

## 📋 Pré-requisitos

1. **VPS com EasyPanel instalado** ✅
2. **Domínio da Hostinger** (apontando para IP da VPS)
3. **Credenciais do Supabase**
4. **Credenciais do Google Analytics**

---

## 🎯 Passo a Passo - Deploy via EasyPanel

### **1. Preparar Repositório**
```bash
# No seu computador local
cd raiseup-project
git add .
git commit -m "🐳 Configuração Docker para EasyPanel"
git push origin main
```

### **2. Acessar EasyPanel**
1. Abra o EasyPanel na sua VPS
2. Vá em **"Create Project"**
3. Escolha **"GitHub"** ou **"Git Repository"**

### **3. Configurar Projeto**
**Nome do Projeto**: `raiseup-platform`
**Repository URL**: URL do seu repositório GitHub
**Branch**: `main`
**Build Command**: `npm run build`
**Start Command**: `npm start`

### **4. Configurar Variáveis de Ambiente**
No EasyPanel, adicione estas variáveis:

```env
NODE_ENV=production
SUPABASE_URL=sua_url_do_supabase
SUPABASE_ANON_KEY=sua_chave_publica_supabase
SESSION_SECRET=uma_chave_secreta_forte_aqui
GA4_PROPERTY_ID=seu_property_id_analytics
```

### **5. Configurar Porta e Domínio**
- **Porta Interna**: `3000`
- **Domínio**: Seu domínio da Hostinger
- **SSL**: Ativar certificado automático

### **6. Deploy**
1. Clique em **"Deploy"**
2. Aguarde o build terminar
3. Teste o acesso pelo domínio

---

## 🌐 Configurar Domínio Hostinger

### **DNS Settings na Hostinger**
1. Acesse o painel da Hostinger
2. Vá em **"DNS Zone"**
3. Configure:

```dns
Type: A
Name: @
Points to: IP_DA_SUA_VPS
TTL: 3600

Type: A  
Name: www
Points to: IP_DA_SUA_VPS
TTL: 3600
```

### **Aguardar Propagação**
- Tempo: 24-48 horas
- Teste: `nslookup seudominio.com`

---

## 🔐 Configurar SSL no EasyPanel

1. **SSL Automático**: EasyPanel gerencia via Let's Encrypt
2. **Forçar HTTPS**: Ativar redirecionamento
3. **Verificar**: Certificado válido em 5-10 minutos

---

## 📊 Monitoramento

### **Logs da Aplicação**
```bash
# No EasyPanel
- Aba "Logs" do projeto
- Monitorar erros de startup
- Verificar conexões com Supabase
```

### **Health Check**
```bash
# Teste manual
curl https://seudominio.com/
curl https://seudominio.com/contato
```

---

## 🛠️ Troubleshooting

### **Erro: Aplicação não inicia**
```bash
# Verificar logs no EasyPanel
# Comum: variáveis de ambiente incorretas
```

### **Erro: Banco de dados**
```bash
# Verificar SUPABASE_URL e SUPABASE_ANON_KEY
# Testar conexão no painel do Supabase
```

### **Erro: Build falha**
```bash
# Verificar se todas dependências estão no package.json
# Node.js versão 18+ necessária
```

---

## 🚀 Comandos de Deploy Rápido

### **Atualizar Aplicação**
```bash
# Local
git add .
git commit -m "🔄 Atualização do site"
git push origin main

# EasyPanel fará redeploy automático
```

### **Rollback**
```bash
# No EasyPanel
1. Ir em "Deployments"
2. Selecionar versão anterior
3. Clicar em "Redeploy"
```

---

## ✅ Checklist Final

- [ ] Repositório atualizado no GitHub
- [ ] Projeto criado no EasyPanel
- [ ] Variáveis de ambiente configuradas
- [ ] DNS da Hostinger apontando para VPS
- [ ] SSL ativado e funcionando
- [ ] Site acessível pelo domínio
- [ ] Formulário de contato testado
- [ ] Admin panel funcionando
- [ ] Google Analytics coletando dados

---

## 📞 Próximos Passos

1. **Backup Automático**: Configurar backup da aplicação
2. **Monitoramento**: Alertas de uptime
3. **Performance**: CDN para assets estáticos
4. **Analytics**: Configurar Google Analytics no domínio final

---

**🎉 Deploy Completo!**
Sua aplicação RaiseUp estará rodando com funcionalidades completas na sua VPS através do EasyPanel.