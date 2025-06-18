// Script para debug e criação de usuário admin
const bcrypt = require('bcryptjs');

console.log('=== DEBUG SUPABASE AUTHENTICATION ===');

// Verificar se as variáveis de ambiente estão configuradas
console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? '✅ Configurada' : '❌ NÃO CONFIGURADA');
console.log('SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? '✅ Configurada' : '❌ NÃO CONFIGURADA');

// Gerar hash da senha para o admin
async function gerarHashSenha() {
  const senhaAdmin = 'admin123';
  const hash1 = await bcrypt.hash(senhaAdmin, 10);
  const hash2 = await bcrypt.hash(senhaAdmin, 10);
  
  console.log('\n=== USUÁRIO ADMIN ===');
  console.log('Email: admin@raiseup.com.br');
  console.log('Senha: admin123');
  console.log('Hash 1:', hash1);
  console.log('Hash 2:', hash2);
  
  // Testar se o hash funciona
  const teste1 = await bcrypt.compare('admin123', hash1);
  const teste2 = await bcrypt.compare('admin123', hash2);
  console.log('Teste hash 1:', teste1 ? '✅ OK' : '❌ FALHOU');
  console.log('Teste hash 2:', teste2 ? '✅ OK' : '❌ FALHOU');
  
  console.log('\n=== SQL PARA INSERIR/ATUALIZAR USUÁRIO ===');
  console.log(`-- Primeiro, deletar se já existir:`);
  console.log(`DELETE FROM usuarios WHERE email = 'admin@raiseup.com.br';`);
  console.log(`-- Depois, inserir novo:`);
  console.log(`INSERT INTO usuarios (email, senha_hash, nome, ativo) VALUES ('admin@raiseup.com.br', '${hash1}', 'Administrador RaiseUp', true);`);
}

gerarHashSenha().catch(console.error);