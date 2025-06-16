// Validação e sanitização de dados
export function validarEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validarTelefone(telefone: string): boolean {
  // Remove todos os caracteres não numéricos
  const telefoneLimpo = telefone.replace(/\D/g, '');
  
  // Verifica se tem 10 ou 11 dígitos (telefone brasileiro)
  return telefoneLimpo.length >= 10 && telefoneLimpo.length <= 11;
}

export function sanitizarTexto(texto: string): string {
  return texto
    .trim()
    .replace(/[<>]/g, '') // Remove caracteres HTML básicos
    .slice(0, 1000); // Limita o tamanho
}

export function formatarTelefone(telefone: string): string {
  const telefoneLimpo = telefone.replace(/\D/g, '');
  
  if (telefoneLimpo.length === 11) {
    return telefoneLimpo.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (telefoneLimpo.length === 10) {
    return telefoneLimpo.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  
  return telefone;
}

export function extrairNumerosTelefone(telefone: string): string {
  return telefone.replace(/\D/g, '');
}

export function validarAreaInteresse(area: string): boolean {
  const areasValidas = ['conversacional', 'midias-sociais', 'produtividade', 'todos', 'outro'];
  return areasValidas.includes(area);
}

export type ErroValidacao = {
  campo: string;
  mensagem: string;
};

export function validarFormularioContato(dados: any): ErroValidacao[] {
  const erros: ErroValidacao[] = [];

  // Validar nome
  if (!dados.nome || dados.nome.trim().length < 2) {
    erros.push({ campo: 'nome', mensagem: 'Nome deve ter pelo menos 2 caracteres' });
  }

  // Validar email
  if (!dados.email || !validarEmail(dados.email)) {
    erros.push({ campo: 'email', mensagem: 'Email inválido' });
  }

  // Validar telefone
  if (!dados.telefone || !validarTelefone(dados.telefone)) {
    erros.push({ campo: 'telefone', mensagem: 'Telefone inválido' });
  }

  // Validar área de interesse
  if (!dados.area_interesse || !validarAreaInteresse(dados.area_interesse)) {
    erros.push({ campo: 'area_interesse', mensagem: 'Área de interesse inválida' });
  }

  // Validar mensagem (opcional, mas se preenchida deve ter pelo menos 10 caracteres)
  if (dados.mensagem && dados.mensagem.trim().length > 0 && dados.mensagem.trim().length < 10) {
    erros.push({ campo: 'mensagem', mensagem: 'Mensagem deve ter pelo menos 10 caracteres' });
  }

  return erros;
}