import axios from 'axios'

// Instância centralizada do axios com a URL base do backend
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // http://localhost:3100
})

// Interceptor de REQUEST: injeta o token JWT em toda requisição autenticada
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Interceptor de RESPONSE: extrai a mensagem de erro do backend de forma padronizada
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const mensagem =
      error.response?.data?.message ?? error.message ?? 'Erro desconhecido'
    return Promise.reject(new Error(mensagem))
  }
)

export default api

// ─── Tipos ────────────────────────────────────────────────────────────────────

export interface CriarUsuarioPayload {
  no_usuario: string
  email_usuario: string
  senha_usuario: string
  cpf: string
  nu_celular: string
  genero: 'Masculino' | 'Feminino' | 'Outros' | 'NaoInformado'
  data_nascimento: string
}

// ─── Funções de API ───────────────────────────────────────────────────────────

export async function login(email: string, senha_usuario: string) {
  const { data } = await api.post<{ access_token: string }>('/auth/login', {
    email: email,
    senha_usuario: senha_usuario,
  })
  return data
}

export async function criarUsuario(payload: CriarUsuarioPayload) {
  const { data } = await api.post('/usuarios/criar', payload)
  return data
}

export interface Usuario {
  id: number
  no_usuario: string
  email_usuario: string
  cpf: string
  nu_celular: string
  genero: 'Masculino' | 'Feminino' | 'Outros' | 'NaoInformado'
  data_nascimento: string
}

export async function getMe(id: number): Promise<Usuario> {
  const { data } = await api.get<Usuario>(`/usuarios/unico/${id}`)
  return data
}
