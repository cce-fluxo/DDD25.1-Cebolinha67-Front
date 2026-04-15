"use client"

import { useRouter } from "next/navigation";
import { api } from "../../service/esqueciSenhaService";
import BotaoEntrar from "../components/componentes-do-arthur/BotaoEntrar";
import BotaoVoltar from "../components/BotaoVoltar";
import HeaderLogin from "../components/componentes-do-arthur/HeaderLogin";
import InputBox from "../components/componentes-do-arthur/InputBox";
import { useState } from "react";
import PopUp from "../components/popups/popUpEsqueciSenha";

export default function EsqueciMinhaSenha(){
    const router = useRouter();
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    async function handleContinuar() {
        if (!novaSenha.trim() || !confirmarSenha.trim()) {
            setErro("Por favor, preencha os dois campos.");
            return;
        }

        if (novaSenha !== confirmarSenha) {
            setErro("As senhas não coincidem.");
            return;
        }

        const token = sessionStorage.getItem("reset_token");
        if (!token) {
            setErro("Sessão expirada. Reinicie o processo de recuperação de senha.");
            return;
        }

        setErro("");
        setLoading(true);

        try {
            await api.post(`/auth/redefinir-senha`, {
                token,
                nova_senha: novaSenha,
            });

            sessionStorage.removeItem("reset_token");
            sessionStorage.removeItem("reset_email");

            setShowPopup(true);
            
        } catch (error: any) {
            const mensagem =
                error?.response?.data?.message || "Erro ao redefinir a senha. Tente novamente.";
            setErro(mensagem);
        } finally {
            setLoading(false);
        }
    }

    return (
    <div className="flex flex-col h-full w-full gap-18 items-center">
        <PopUp
            título="Senha redefinida com sucesso!"
            BotaoTexto="Voltar para login"
            onPressBotao={() => router.push("/login")}
            isVisible={showPopup}
            toggleModal={() => router.push("/login")}
        />
        <HeaderLogin />
        <div className="flex w-145.75 h-124.75 flex-col items-center gap-14.5 rounded-xl bg-white border-72 border-white">
            {/*Conteúdo da box*/}
            <div className="flex flex-row gap-2 text-16">
                <div className="text-black font-bold ">Insira a sua </div>
                <div className="text-[#5754DE] font-bold">nova senha </div>
            </div>
            <div className="w-full flex flex-col items-baseline justify-center gap-2.5">
                <InputBox
                    placeholder="Nova Senha"
                    tipo="password"
                    value={novaSenha}
                    onChange={setNovaSenha}
                />
                <InputBox
                    placeholder="Confirmar Senha"
                    tipo="password"
                    value={confirmarSenha}
                    onChange={setConfirmarSenha}
                />
                {erro && (
                    <span className="text-red-500 text-sm">{erro}</span>
                )}
            </div>
            <div className="flex w-57.5 flex-col items-start gap-4.5">
                <BotaoEntrar texto={loading ? "Salvando..." : "Continuar"} cheio={true} onClick={handleContinuar} />
                <BotaoVoltar onClick={() => router.push("./esqueciSenha2")}/>
            </div>

        </div>
    </div>
    )
}
