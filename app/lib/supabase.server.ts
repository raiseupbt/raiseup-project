import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

let supabase: any;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Variáveis de ambiente do Supabase não configuradas');
  // Criar cliente mock para não quebrar o build
  supabase = {
    from: () => ({
      select: () => Promise.resolve({ data: [], error: null }),
      insert: () => Promise.resolve({ data: null, error: null })
    })
  };
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };

export type ContatoData = {
  nome: string;
  email: string;
  telefone: string;
  empresa?: string;
  area_interesse: 'conversacional' | 'midias-sociais' | 'produtividade' | 'todos' | 'outro';
  mensagem: string;
  endereco_ip?: string;
  navegador?: string;
};