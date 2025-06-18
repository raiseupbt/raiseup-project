// Script para debug e criação de usuário admin
const bcrypt = require('bcryptjs');

console.log('=== DEBUG SUPABASE AUTHENTICATION ===');

// Verificar se as variáveis de ambiente estão configuradas
console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? '✅ Configurada' : '❌ NÃO CONFIGURADA');
console.log('SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? '✅ Configurada' : '❌ NÃO CONFIGURADA');

// Gerar hash da senha para o admin
async function gerarHashSenha() {
  const senhaAdmin = 'admin123';
  const hash = await bcrypt.hash(senhaAdmin, 10);
  
  console.log('\n=== USUÁRIO ADMIN ===');
  console.log('Email: admin@raiseup.com.br');
  console.log('Senha: admin123');
  console.log('Hash da senha:', hash);
  
  console.log('\n=== SQL PARA INSERIR USUÁRIO ===');
  console.log(`INSERT INTO usuarios (email, senha_hash, nome, ativo) VALUES ('admin@raiseup.com.br', '${hash}', 'Administrador RaiseUp', true);`);
}

gerarHashSenha().catch(console.error);