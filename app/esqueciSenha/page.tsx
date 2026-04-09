"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";
import { api } from "../../service/esqueciSenhaService";
import BotaoEntrar from "../components/BotaoEntrar";
import BotaoVoltar from "../components/BotaoVoltar";
import HeaderLogin from "../components/HeaderLogin";
import InputBox from "../components/InputBox";

export default function EsqueciMinhaSenha(){
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");

    async function handleContinuar() {
        if (!email.trim()) {
            setErro("Por favor, insira seu e-mail.");
            return;
        }
 
        setErro("");
        setLoading(true);
 
        try {
            await api.post(`/auth/esqueceu-senha`, {
                email_usuario: email,
            });
 
            // Salva o email no sessionStorage para usar na tela 3 (opcional, para UX)
            sessionStorage.setItem("reset_email", email);
 
            router.push("/esqueciSenha2");
        } catch (error: any) {
            const mensagem =
                error?.response?.data?.message || "Erro ao enviar o e-mail. Tente novamente mais tarde.";
            setErro(mensagem);
        } finally {
            setLoading(false);
        }
    }

    return (
    <div className="flex flex-col h-full w-full gap-18 items-center">
        <HeaderLogin />
        <div className="flex w-145.75 h-124.75 flex-col items-center gap-20.5 rounded-xl bg-white border-72 border-white">
            {/*Conteúdo da box*/}
            <div className="flex flex-row gap-2">
                <div className="text-black font-bold ">Digite o </div>
                <div className="text-[#5754DE] font-bold">e-mail </div>
                <div className="font-bold">cadastrado</div>
            </div>
            <div className="w-full">
                <InputBox
                    placeholder="E-mail"
                    tipo="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                />
                {erro && (
                    <span className="text-red-500 text-sm text-center">{erro}</span>
                )}
            </div>
            <div className="flex w-57.5 flex-col items-start gap-4.5">
                <BotaoEntrar texto={loading ? "Enviando..." : "Continuar"} cheio={true} onClick={handleContinuar} />
                <BotaoVoltar onClick={() => router.push("..")}/>
            </div>

        </div>
    </div>
    )
}