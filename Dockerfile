# Dockerfile para RaiseUp - Remix App
FROM node:18-alpine

# Instalar dependências do sistema
RUN apk add --no-cache libc6-compat

# Criar diretório da aplicação
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências (incluindo dev para build)
RUN npm install

# Copiar código da aplicação
COPY . .

# Compilar a aplicação
RUN npm run build

# Remover devDependencies após build (otimização)
RUN npm prune --production

# Expor a porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]