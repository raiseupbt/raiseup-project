import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

let supabase: any;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('=== ERRO SUPABASE ===');
  console.error('SUPABASE_URL:', supabaseUrl ? '✅ Configurada' : '❌ NÃO CONFIGURADA');
  console.error('SUPABASE_ANON_KEY:', supabaseAnonKey ? '✅ Configurada' : '❌ NÃO CONFIGURADA');
  console.error('USANDO CLIENTE MOCK - DADOS REAIS NÃO FUNCIONARÃO');
  
  // Criar cliente mock para não quebrar o build
  supabase = {
    from: () => ({
      select: () => Promise.resolve({ data: [], error: { message: 'Supabase não configurado' } }),
      insert: () => Promise.resolve({ data: null, error: { message: 'Supabase não configurado' } }),
      update: () => Promise.resolve({ data: null, error: { message: 'Supabase não configurado' } })
    })
  };
} else {
  console.log('=== SUPABASE CONECTADO ===');
  console.log('URL:', supabaseUrl);
  console.log('Chave configurada:', supabaseAnonKey ? 'Sim' : 'Não');
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

export type FormularioSDRData = {
  nome: string;
  email: string;
  empresa?: string;
  segmento: 'saude-clinicas' | 'beleza-estetica' | 'tecnologia-software' | 'consultoria-servicos' | 'varejo-ecommerce' | 'educacao' | 'outro';
  porte_empresa: 'pequena' | 'media' | 'grande';
  respostas: {
    etapa1: {
      segmento: string;
      porte_empresa: string;
      valor_medio: string;
    };
    etapa2: {
      perfil_cliente: string;
      motivacao_cliente: string;
      processo_decisao: string;
    };
    etapa3: {
      maior_desafio: string;
      origem_clientes: string;
      urgencia_necessidade: string;
    };
    etapa4: {
      objetivo_sdr: string;
      tom_comunicacao: string;
    };
  };
  resposta_ia: string;
  endereco_ip?: string;
  navegador?: string;
};