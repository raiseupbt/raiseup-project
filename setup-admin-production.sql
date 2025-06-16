-- Script para criar usuário admin em produção
-- IMPORTANTE: Execute este script APENAS em produção
-- ALTERE a senha para uma senha forte de sua escolha

-- 1. Primeiro, gere uma nova senha forte e crie o hash:
-- node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('SUA_SENHA_FORTE_AQUI', 12));"

-- 2. Substitua o hash abaixo pelo hash gerado
INSERT INTO usuarios (email, senha_hash, nome, ativo) 
VALUES (
  'admin@raiseup.com.br',
  -- Substitua este hash por um novo hash gerado com sua senha
  '$2b$12$SUBSTITUA_ESTE_HASH_POR_UM_NOVO_HASH',
  'Administrador',
  true
) ON CONFLICT (email) DO UPDATE SET
  senha_hash = EXCLUDED.senha_hash,
  ativo = true,
  atualizado_em = NOW();

-- Verificar se foi criado
SELECT id, email, nome, ativo, criado_em FROM usuarios WHERE email = 'admin@raiseup.com.br';

-- INSTRUÇÕES DE SEGURANÇA:
-- 1. Use uma senha forte (mínimo 12 caracteres, com letras, números e símbolos)
-- 2. Nunca use senhas padrão ou previsíveis
-- 3. Delete este arquivo após usar
-- 4. Considere implementar autenticação de dois fatores (2FA)