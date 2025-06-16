# 📊 Configuração do Google Analytics 4

Para integrar os dados reais do Google Analytics 4 no dashboard administrativo, siga estas etapas:

## 1. 🔧 Configurar o Google Analytics 4

### Passo 1: Criar uma Conta de Serviço
1. Acesse o [Google Cloud Console](https://console.cloud.google.com/)
2. Selecione ou crie um projeto
3. Vá para **APIs & Services** > **Credentials**
4. Clique em **Create Credentials** > **Service Account**
5. Dê um nome para a conta de serviço (ex: "raiseup-analytics")
6. Clique em **Create**

### Passo 2: Gerar Chave JSON
1. Na lista de contas de serviço, clique na conta criada
2. Vá para a aba **Keys**
3. Clique em **Add Key** > **Create New Key**
4. Selecione **JSON** e clique em **Create**
5. O arquivo JSON será baixado automaticamente

### Passo 3: Habilitar a API do Google Analytics
1. No Google Cloud Console, vá para **APIs & Services** > **Library**
2. Busque por "Google Analytics Data API"
3. Clique na API e depois em **Enable**

## 2. 📈 Configurar Acesso ao Google Analytics

### Passo 1: Obter o Property ID
1. Acesse o [Google Analytics](https://analytics.google.com/)
2. Selecione sua propriedade GA4
3. Vá para **Admin** (engrenagem no canto inferior esquerdo)
4. Em **Property**, clique em **Property Details**
5. Copie o **Property ID** (formato: 123456789)

### Passo 2: Adicionar Permissões
1. No Google Analytics, vá para **Admin** > **Property Access Management**
2. Clique em **+** para adicionar usuário
3. Cole o email da conta de serviço (encontrado no arquivo JSON, campo "client_email")
4. Selecione a permissão **Viewer** ou **Analyst**
5. Clique em **Add**

## 3. ⚙️ Configurar Variáveis de Ambiente

### Passo 1: Colocar o arquivo JSON
1. Coloque o arquivo JSON baixado em uma pasta segura do servidor
2. Exemplo: `/home/usuario/credentials/raiseup-analytics-key.json`

### Passo 2: Configurar .env
Adicione as seguintes variáveis no arquivo `.env`:

```bash
# Google Analytics 4 Configuration
GA4_PROPERTY_ID=123456789
GOOGLE_APPLICATION_CREDENTIALS=/path/to/your/service-account-key.json
```

**Exemplo real:**
```bash
GA4_PROPERTY_ID=398475629
GOOGLE_APPLICATION_CREDENTIALS=/home/usuario/credentials/raiseup-analytics-key.json
```

## 4. 🚀 Testar a Configuração

1. Reinicie o servidor: `npm run dev`
2. Acesse `/admin/analytics`
3. Se configurado corretamente, você verá dados reais do Google Analytics
4. Se houver erro, dados simulados serão exibidos como fallback

## 5. ⚠️ Troubleshooting

### Erro de Permissões
- Verifique se a conta de serviço foi adicionada ao Google Analytics
- Confirme se a API do Google Analytics Data está habilitada

### Erro de Arquivo não Encontrado
- Verifique se o caminho do arquivo JSON está correto
- Confirme se o arquivo tem as permissões corretas de leitura

### Erro de Property ID
- Verifique se o Property ID está correto (apenas números)
- Confirme se é uma propriedade GA4, não Universal Analytics

## 6. 📝 Dados Disponíveis

O sistema coleta automaticamente:
- **Métricas Gerais**: Sessões, usuários, visualizações, taxa de rejeição
- **Páginas Populares**: Top 6 páginas mais visitadas
- **Fontes de Tráfego**: Top 5 origens do tráfego
- **Dispositivos**: Desktop, Mobile, Tablet
- **Localizações**: Top 5 países

## 7. 🔒 Segurança

- **NUNCA** commite o arquivo JSON no Git
- Adicione `*.json` ao `.gitignore` se necessário
- Use permissões mínimas (Viewer) na conta de serviço
- Mantenha o arquivo JSON em local seguro com permissões restritas

---

💡 **Dica**: Se você não quiser configurar agora, o sistema continuará funcionando com dados simulados até que a configuração seja feita.