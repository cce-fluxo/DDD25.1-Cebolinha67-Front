const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function login(email: string, senha: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email_usuario: email, senha_usuario: senha }),
  })
  if (!res.ok) throw new Error('Credenciais inválidas')
  return res.json() as Promise<{ access_token: string }>
}

export interface CriarUsuarioPayload {
  no_usuario: string
  email_usuario: string
  senha_usuario: string
  cpf: string
  nu_celular: string
  genero: 'Masculino' | 'Feminino' | 'Outros' | 'NaoInformado'
  data_nascimento: string
}

export async function criarUsuario(payload: CriarUsuarioPayload) {
  const res = await fetch(`${API_URL}/usuarios/criar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const erro = await res.json().catch(() => ({}))
    throw new Error(erro?.message ?? 'Erro ao criar conta')
  }
  return res.json()
}


// passo 3 da integração: criado um arquivo que centraliza o login e o criar usuario. Todas as chamadas HTTP vão ficar aqui

