import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

function getAuthHeaders() {
  const token = localStorage.getItem("access_token");
  return { Authorization: `Bearer ${token}` };
}

export interface CreatePostagemIndividualDto {
  titulo: string;
  mensagem: string;
  dentista: number;
  pacientes: number[];
}

export async function criarPostagemGeral(data: FormData) {
  return api.post("/postagem/geral", data, {
    headers: getAuthHeaders(),
    // Não definir Content-Type: o browser seta automaticamente com o boundary correto
  });
}

export async function criarPostagemIndividual(data: CreatePostagemIndividualDto) {
  return api.post("/postagem/individual", data, {
    headers: getAuthHeaders(),
  });
}
