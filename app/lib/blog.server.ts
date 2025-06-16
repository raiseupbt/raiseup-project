import { supabase } from './supabase.server';
import { JSDOM } from 'jsdom';
import DOMPurify from 'isomorphic-dompurify';

// Configurar DOMPurify para ambiente Node.js
const window = new JSDOM('').window;
const purify = DOMPurify(window as any);

export type Artigo = {
  id: string;
  titulo: string;
  slug: string;
  resumo: string;
  conteudo: string;
  tags: string[];
  data_publicacao: string;
  tempo_leitura: string;
  destaque: boolean;
  ativo: boolean;
  autor: string;
  imagem_url?: string;
  meta_description?: string;
  meta_keywords?: string;
  visualizacoes: number;
  criado_em: string;
  atualizado_em: string;
};

export async function listarArtigos(): Promise<Artigo[]> {
  const { data, error } = await supabase
    .from('artigos')
    .select('*')
    .eq('ativo', true)
    .order('data_publicacao', { ascending: false });

  if (error) {
    console.error('Erro ao buscar artigos:', error);
    throw new Error('Erro ao buscar artigos');
  }

  return data || [];
}

export async function buscarArtigoPorSlug(slug: string): Promise<Artigo | null> {
  const { data, error } = await supabase
    .from('artigos')
    .select('*')
    .eq('slug', slug)
    .eq('ativo', true)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null; // Artigo não encontrado
    }
    console.error('Erro ao buscar artigo:', error);
    throw new Error('Erro ao buscar artigo');
  }

  return data;
}

// Função para sanitizar conteúdo HTML
export function sanitizeHtml(html: string): string {
  if (!html) return '';
  
  // Configurações de segurança do DOMPurify
  const config = {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'u', 'b', 'i', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li', 'blockquote', 'pre', 'code', 'a', 'img', 'table', 'thead',
      'tbody', 'tr', 'th', 'td', 'hr', 'div', 'span'
    ],
    ALLOWED_ATTR: ['href', 'title', 'alt', 'src', 'target', 'rel', 'class'],
    ALLOW_DATA_ATTR: false,
    FORBID_SCRIPT: true,
    FORBID_TAGS: ['script', 'object', 'embed', 'link', 'style', 'iframe', 'frame'],
    FORBID_ATTR: ['onclick', 'onload', 'onerror', 'onmouseover', 'onfocus', 'onblur']
  };
  
  return purify.sanitize(html, config);
}

export async function incrementarVisualizacoes(slug: string): Promise<void> {
  // Validar e sanitizar o slug
  if (!slug || typeof slug !== 'string') {
    throw new Error('Slug inválido');
  }
  
  // Validar formato do slug (apenas letras, números, hífens e underscores)
  const slugRegex = /^[a-z0-9\-_]+$/i;
  if (!slugRegex.test(slug)) {
    throw new Error('Slug contém caracteres inválidos');
  }
  
  // Limitar tamanho do slug
  if (slug.length > 200) {
    throw new Error('Slug muito longo');
  }

  const { error } = await supabase.rpc('incrementar_visualizacoes_artigo', {
    artigo_slug: slug.toLowerCase().trim()
  });

  if (error) {
    console.error('Erro ao incrementar visualizações:', error);
    // Não lança erro para não quebrar a página
  }
}

export async function buscarArtigosDestaque(): Promise<Artigo[]> {
  const { data, error } = await supabase
    .from('artigos')
    .select('*')
    .eq('ativo', true)
    .eq('destaque', true)
    .order('data_publicacao', { ascending: false })
    .limit(1);

  if (error) {
    console.error('Erro ao buscar artigos em destaque:', error);
    return [];
  }

  return data || [];
}

export async function buscarArtigosRegulares(): Promise<Artigo[]> {
  const { data, error } = await supabase
    .from('artigos')
    .select('*')
    .eq('ativo', true)
    .eq('destaque', false)
    .order('data_publicacao', { ascending: false });

  if (error) {
    console.error('Erro ao buscar artigos regulares:', error);
    return [];
  }

  return data || [];
}