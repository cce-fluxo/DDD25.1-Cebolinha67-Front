"use client"

import { useRouter } from "next/navigation";
import { api } from "../../service/esqueciSenhaService";
import BotaoEntrar from "../components/componentes-do-arthur/BotaoEntrar";
import BotaoVoltar from "../components/BotaoVoltar";
import HeaderLogin from "../components/componentes-do-arthur/HeaderLogin";
import InputBox from "../components/componentes-do-arthur/InputBox";
import { useState } from "react";
import PopUp from "../components/popups/popUpMensagem";

export default function EsqueciMinhaSenha(){
    const router = useRouter();
    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");
    const [reenvioStatus, setReenvioStatus] = useState<"idle" | "enviando" | "ok" | "erro">("idle");
    const [showPopup, setShowPopup] = useState(false);

    async function handleReenviar() {
        const email = sessionStorage.getItem("reset_email"); //pega email salvo na tela anterior, se tiver
        if (!email) {
            setReenvioStatus("erro");
            return;
        }

        setReenvioStatus("enviando");
        try {
            await api.post(`/auth/esqueceu-senha`, { email_usuario: email });
            setReenvioStatus("ok");
            setShowPopup(true);
        } catch {
            setReenvioStatus("erro");
        }
    }

    async function handleContinuar() {
        if (!token.trim()) {
            setErro("Por favor, insira o código recebido por e-mail.");
            return;
        }

        setErro("");
        setLoading(true);

        try {
            await api.post(`/auth/validar-token`, { token });

            sessionStorage.setItem("reset_token", token);

            router.push("/esqueciSenha3");
        } catch (error: any) {
            const mensagem =
                error?.response?.data?.message || "Código inválido ou expirado. Tente novamente.";
            setErro(mensagem);
        } finally {
            setLoading(false);
        }
    }

    return (
    <div className="flex flex-col h-full w-full gap-18 items-center">
        <HeaderLogin />
        <PopUp título="Código reenviado" isVisible={reenvioStatus === "ok"} toggleModal={() => setReenvioStatus("idle")} >
        </PopUp>
        <div className="flex w-145.75 h-124.75 flex-col items-center gap-14.5 rounded-xl bg-white border-72 border-white">
            {/*Conteúdo da box*/}
            <div className="flex flex-row gap-2 text-16">
                <div className="text-black font-bold ">Insira o</div>
                <div className="text-[#5754DE] font-bold">código </div>
                <div className="font-bold">que enviamos por e-mail</div>
            </div>
            <div className="w-full flex flex-col items-baseline justify-center text-[#5754DE] gap-2.5">
                <InputBox
                    placeholder="Código"
                    tipo="string"
                    value={token}
                    onChange={setToken}
                />
                {erro && (
                    <span className="text-red-500 text-sm">{erro}</span>
                )}
                
                <button
                    onClick={handleReenviar}
                    disabled={reenvioStatus === "enviando"}
                    className="text-[#5754DE] underline text-sm cursor-pointer disabled:opacity-50"
                >
                    {reenvioStatus === "enviando" ? "Reenviando..." : "Reenviar código"}
                </button>
                {reenvioStatus === "ok" && (
                    <span className="text-green-600 text-sm">Código reenviado com sucesso!</span>
                )}
                {reenvioStatus === "erro" && (
                    <span className="text-red-500 text-sm">Falha ao reenviar. Tente novamente.</span>
                )}
            </div>
            <div className="flex w-57.5 flex-col items-start gap-4.5">
                <BotaoEntrar texto={loading ? "Verificando..." : "Continuar"} onClick={handleContinuar} cheio={true} />
                <BotaoVoltar onClick={() => router.push("./esqueciSenha")}/>
            </div>

        </div>
    </div>
    )
}
