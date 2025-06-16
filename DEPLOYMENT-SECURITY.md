# 🔒 Guia de Deploy Seguro - RaiseUp

## ✅ Correções de Segurança Implementadas

### Vulnerabilidades Críticas Corrigidas:
- ✅ **Credenciais hardcoded removidas**
- ✅ **Vulnerabilidade XSS no blog corrigida** (sanitização HTML)
- ✅ **SQL Injection prevenido** (validação de entrada)
- ✅ **Session secrets seguros** implementados
- ✅ **Headers de segurança** adicionados
- ✅ **Arquivos sensíveis removidos**

## 🚀 Instruções de Deploy na Vercel

### 1. Preparação do Ambiente

#### A. Variáveis de Ambiente Obrigatórias:
```bash
# Supabase (use suas credenciais de produção)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here

# Session Secret (CRÍTICO - gere um valor único)
SESSION_SECRET=your-super-secure-session-secret-here

# Google Analytics
GOOGLE_ANALYTICS_PROPERTY_ID=your-property-id

# Environment
NODE_ENV=production
```

#### B. Gerar Session Secret Seguro:
```bash
# Execute um destes comandos para gerar um secret forte:
openssl rand -base64 32
# ou
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 2. Deploy na Vercel

#### A. Via CLI:
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login na Vercel
vercel login

# Deploy
vercel --prod
```

#### B. Via GitHub (Recomendado):
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente no dashboard da Vercel
3. Deploy automático a cada push

### 3. Configuração Pós-Deploy

#### A. Configurar Admin User:
1. Execute o script SQL de produção no Supabase:
```sql
-- Gere uma senha forte primeiro:
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('SUA_SENHA_FORTE', 12));"

-- Use o hash gerado no script setup-admin-production.sql
```

#### B. Verificar Segurança:
- [ ] Testar login apenas com credenciais do banco
- [ ] Verificar headers de segurança: https://securityheaders.com/
- [ ] Testar sanitização XSS no blog
- [ ] Verificar HTTPS ativo

### 4. Monitoramento

#### A. Configure alertas para:
- Tentativas de login falhadas
- Erros de aplicação
- Performance

#### B. Logs de Segurança:
- Monitor no Vercel Functions
- Configure Google Analytics para monitorar atividade

## 🛡️ Checklist de Segurança Pós-Deploy

### Verificações Críticas:
- [ ] **Todas as variáveis de ambiente configuradas**
- [ ] **Session secret único e forte**
- [ ] **Admin user criado com senha forte**
- [ ] **HTTPS funcionando**
- [ ] **Headers de segurança ativos**
- [ ] **Nenhum arquivo sensível no repositório**
- [ ] **Backup do banco configurado**

### Testes de Segurança:
- [ ] **Login admin funcionando apenas com credenciais do banco**
- [ ] **XSS blocked no blog** (teste: `<script>alert('xss')</script>`)
- [ ] **SQL injection blocked** (teste com caracteres especiais no slug)
- [ ] **Rate limiting funcionando**

## ⚠️ Importantes Pós-Deploy

### 1. Alterar Credenciais:
- ✅ Senha admin alterada
- ✅ Chaves Supabase rotacionadas (se necessário)
- ✅ Google Analytics configurado com novas credenciais

### 2. Monitoramento Contínuo:
- Configure alertas de segurança
- Monitor logs regularmente
- Atualize dependências mensalmente

### 3. Backup e Recovery:
- Configure backup automático do Supabase
- Teste procedure de recovery
- Documente plano de contingência

## 📞 Suporte

Em caso de problemas:
1. Verifique logs na Vercel
2. Teste variáveis de ambiente
3. Verifique conexão com Supabase
4. Consulte este documento

---

**Status de Segurança: 🟢 SEGURO PARA PRODUÇÃO**

Todas as vulnerabilidades críticas foram corrigidas e o sistema está pronto para deploy em produção.