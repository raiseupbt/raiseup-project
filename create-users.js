// Script para criar usuários no Supabase
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');

async function criarUsuarios() {
  console.log('=== CRIAÇÃO DE USUÁRIOS SUPABASE ===');
  
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Variáveis de ambiente não configuradas');
    return;
  }
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  try {
    // Gerar hash para a senha "colossopel"
    const hashTaua = await bcrypt.hash('colossopel', 10);
    const hashAdmin = await bcrypt.hash('admin123', 10);
    
    console.log('Hashes gerados:');
    console.log('Taua hash:', hashTaua);
    console.log('Admin hash:', hashAdmin);
    
    // Criar usuário Taua
    console.log('\n=== CRIANDO USUÁRIO TAUA ===');
    const { data: tauaUser, error: tauaError } = await supabase
      .from('usuarios')
      .insert({
        email: 'taua@raiseup.com.br',
        senha_hash: hashTaua,
        nome: 'Taua Santos',
        ativo: true
      })
      .select()
      .single();
    
    if (tauaError) {
      console.error('❌ Erro ao criar usuário Taua:', tauaError);
    } else {
      console.log('✅ Usuário Taua criado:', tauaUser);
    }
    
    // Criar usuário Admin
    console.log('\n=== CRIANDO USUÁRIO ADMIN ===');
    const { data: adminUser, error: adminError } = await supabase
      .from('usuarios')
      .insert({
        email: 'admin@raiseup.com.br',
        senha_hash: hashAdmin,
        nome: 'Administrador RaiseUp',
        ativo: true
      })
      .select()
      .single();
    
    if (adminError) {
      console.error('❌ Erro ao criar usuário Admin:', adminError);
    } else {
      console.log('✅ Usuário Admin criado:', adminUser);
    }
    
    // Verificar usuários criados
    console.log('\n=== VERIFICANDO USUÁRIOS CRIADOS ===');
    const { data: allUsers, error: usersError } = await supabase
      .from('usuarios')
      .select('id, email, nome, ativo, criado_em');
    
    if (usersError) {
      console.error('❌ Erro ao listar usuários:', usersError);
    } else {
      console.log('✅ Usuários no banco:');
      allUsers.forEach(user => {
        console.log(`- ${user.nome} (${user.email}) - ID: ${user.id}`);
      });
    }
    
  } catch (error) {
    console.error('❌ Erro geral:', error);
  }
}

criarUsuarios().catch(console.error);