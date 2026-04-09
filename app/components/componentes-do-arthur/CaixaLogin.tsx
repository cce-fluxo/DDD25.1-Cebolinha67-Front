"use client"
import { useRouter } from "next/navigation";
import InputBox from "./InputBox";
import BotaoEntrar from "./BotaoEntrar";
import ToggleLogin from "./ToggleLogin";
import EsqueciSenha from "./EsqueciSenha";

export function CaixaLogin() {
  const router = useRouter()
  return (
    <div className="absolute flex w-145.75 h-176.75 flex-col items-center gap-2.5 px-6 py-19.25 rounded-xl bg-white z-20">
      <div className="flex w-145.75 flex-col items-center gap-15">
        <h1 className="text-center text-[24px] font-extrabold text-black font-(family-name:--font-lato)">
          Seja bem-vindo!
        </h1>
        <div className="flex w-112.5 flex-col items-center gap-6.75">
          <div className="flex flex-col items-start gap-4.5 self-stretch">
            <InputBox placeholder="E-mail" tipo="email" />
            <InputBox placeholder="Senha" tipo="password" />
          </div>
          <div className="flex justify-between items-center self-stretch">
            <ToggleLogin />
            <EsqueciSenha />
          </div>
        </div>
        <div className="flex w-57.5 flex-col items-start gap-4.5">
          <BotaoEntrar texto="Entrar" cheio={true} />
          <BotaoEntrar texto="Cadastrar" cheio={false} onClick={() => router.push("/auth/cadastro")} />
        </div>
      </div>
    </div>
  );
}