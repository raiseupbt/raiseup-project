import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Variáveis de ambiente do Supabase não configuradas');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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