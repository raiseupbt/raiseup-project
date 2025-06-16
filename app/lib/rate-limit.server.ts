import { supabase } from './supabase.server';

const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5');
const WINDOW_MINUTES = parseInt(process.env.RATE_LIMIT_WINDOW_MINUTES || '60');

export async function verificarRateLimit(ip: string): Promise<{ permitir: boolean; mensagem?: string }> {
  try {
    const agora = new Date();
    const janela = new Date(agora.getTime() - (WINDOW_MINUTES * 60 * 1000));

    // Busca ou cria registro para o IP
    const { data: rateLimitData, error: selectError } = await supabase
      .from('rate_limit')
      .select('*')
      .eq('endereco_ip', ip)
      .single();

    if (selectError && selectError.code !== 'PGRST116') {
      // Erro que não seja "not found"
      console.error('Erro ao verificar rate limit:', selectError);
      return { permitir: true }; // Em caso de erro, permite a requisição
    }

    if (!rateLimitData) {
      // Primeiro acesso do IP
      const { error: insertError } = await supabase
        .from('rate_limit')
        .insert({
          endereco_ip: ip,
          contador: 1,
          primeira_tentativa: agora.toISOString(),
          ultima_tentativa: agora.toISOString()
        });

      if (insertError) {
        console.error('Erro ao criar rate limit:', insertError);
        return { permitir: true };
      }

      return { permitir: true };
    }

    const primeiraTentativa = new Date(rateLimitData.primeira_tentativa);
    
    // Se passou da janela de tempo, reset do contador
    if (primeiraTentativa < janela) {
      const { error: updateError } = await supabase
        .from('rate_limit')
        .update({
          contador: 1,
          primeira_tentativa: agora.toISOString(),
          ultima_tentativa: agora.toISOString()
        })
        .eq('endereco_ip', ip);

      if (updateError) {
        console.error('Erro ao resetar rate limit:', updateError);
        return { permitir: true };
      }

      return { permitir: true };
    }

    // Verifica se ultrapassou o limite
    if (rateLimitData.contador >= MAX_REQUESTS) {
      const tempoRestante = Math.ceil((primeiraTentativa.getTime() + (WINDOW_MINUTES * 60 * 1000) - agora.getTime()) / 60000);
      return { 
        permitir: false, 
        mensagem: `Muitas tentativas. Tente novamente em ${tempoRestante} minutos.` 
      };
    }

    // Incrementa contador
    const { error: updateError } = await supabase
      .from('rate_limit')
      .update({
        contador: rateLimitData.contador + 1,
        ultima_tentativa: agora.toISOString()
      })
      .eq('endereco_ip', ip);

    if (updateError) {
      console.error('Erro ao atualizar rate limit:', updateError);
      return { permitir: true };
    }

    return { permitir: true };

  } catch (error) {
    console.error('Erro no rate limit:', error);
    return { permitir: true }; // Em caso de erro, permite a requisição
  }
}