"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputBox from "./InputBox";
import BotaoEntrar from "./BotaoEntrar";
import ToggleLogin from "./ToggleLogin";
import EsqueciSenha from "./EsqueciSenha";
import { useAuth } from "@/app/context/AuthContext";

export function CaixaLogin() {
  const router = useRouter()
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [senha_usuario, setSenha] = useState("")
  const [erro, setErro] = useState("")
  
  async function handleLogin() {
    setErro("")
    try {
      await login(email, senha_usuario)
      router.push("/sw/home")
    } catch {
      setErro("E-mail ou senha inválidos.")
    }
  }

  return (
    <div className="absolute flex w-145.75 h-176.75 flex-col items-center gap-2.5 px-6 py-19.25 rounded-xl bg-white z-20">
      <div className="flex w-145.75 flex-col items-center gap-15">
        <h1 className="text-center text-[24px] font-extrabold text-black font-sans">
          Seja bem-vindo!
        </h1>
        <div className="flex w-112.5 flex-col items-center gap-6.75">
          <div className="flex flex-col items-start gap-4.5 self-stretch">
            <InputBox placeholder="E-mail" tipo="email" value={email} onChange={setEmail} />
            <InputBox placeholder="Senha" tipo="password" value={senha_usuario} onChange={setSenha} />
          </div>
          {erro && <p className="text-red-500 text-sm">{erro}</p>}
          <div className="flex justify-between items-center self-stretch">
            <ToggleLogin />
            <EsqueciSenha />
          </div>
        </div>
        <div className="flex w-57.5 flex-col items-start gap-4.5">
          <BotaoEntrar texto="Entrar" cheio={true} onClick={handleLogin} />
          <BotaoEntrar texto="Cadastrar" cheio={false} onClick={() => router.push("/auth/cadastro")} />
        </div>
      </div>
    </div>
  );
}

// passo 5: adicionado um estado para email e senha , conectando o botão "Entrar" à função de login. O token é salvo no localStorage e redireciona para sw/home 