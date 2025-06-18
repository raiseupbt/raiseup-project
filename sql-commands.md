# 🔧 SQL Commands para Supabase

## **Execute estes comandos no SQL Editor do Supabase:**

### 1. **Desabilitar RLS temporariamente (opcional):**
```sql
ALTER TABLE usuarios DISABLE ROW LEVEL SECURITY;
```

### 2. **Criar usuários diretamente:**
```sql
-- Deletar se já existirem
DELETE FROM usuarios WHERE email IN ('taua@raiseup.com.br', 'admin@raiseup.com.br');

-- Inserir usuário Taua
INSERT INTO usuarios (email, senha_hash, nome, ativo) 
VALUES (
  'taua@raiseup.com.br', 
  '$2b$10$5p/Mk.OLr7AANg5SOZ7XFepfv5NVo9MBPlwiTGjbjbjP9gaSbfLGy', 
  'Taua Santos', 
  true
);

-- Inserir usuário Admin
INSERT INTO usuarios (email, senha_hash, nome, ativo) 
VALUES (
  'admin@raiseup.com.br', 
  '$2b$10$d0f4xy7v90PoFWRMJofSMumyko9p9yYRAbiorcIAXWYEeEEHdZe2e', 
  'Administrador RaiseUp', 
  true
);
```

### 3. **Verificar usuários criados:**
```sql
SELECT id, email, nome, ativo, criado_em FROM usuarios;
```

### 4. **Reabilitar RLS (recomendado):**
```sql
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
```

### 5. **Criar política RLS para admin (opcional):**
```sql
-- Política para permitir admins acessarem tudo
CREATE POLICY "Admins podem tudo" ON usuarios
FOR ALL USING (
  auth.jwt() ->> 'email' IN ('admin@raiseup.com.br', 'taua@raiseup.com.br')
);
```

---

## **📋 Credenciais dos usuários:**

- **Taua**: `taua@raiseup.com.br` / `colossopel`
- **Admin**: `admin@raiseup.com.br` / `admin123`

---

## **🔧 Para Google Analytics:**

Adicione essas 3 variáveis no EasyPanel:

```bash
GOOGLE_PROJECT_ID=raiseup-454322
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----
[sua chave privada completa aqui]
-----END PRIVATE KEY-----
GOOGLE_CLIENT_EMAIL=raiseup-analytics@raiseup-454322.iam.gserviceaccount.com
```