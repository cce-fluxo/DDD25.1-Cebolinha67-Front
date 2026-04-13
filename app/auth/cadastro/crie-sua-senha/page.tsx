"use client"

import BackgroundSignOut from "@/app/components/backgrounds/BackgroundSignOut";
import CriarContaCancelarButton from "@/app/components/buttons/CriarContaCancelarButton";
import CrieSuaSenhaBox from "@/app/components/boxes/CrieSuaSenhaBox";
import HeaderSignOut from "@/app/components/headers-use-as-da-home-nao-essas/HeaderSignOut";
import InputBar from "@/app/components/inputs/InputBar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { criarUsuario } from "@/lib/api";

export default function CrieSuaSenha() {
    const router = useRouter()
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")
    const [erro, setErro] = useState("")

    const senhasBatem = senha && confirmarSenha && senha === confirmarSenha

    async function handleCriarConta() {
        setErro("")
        const raw = sessionStorage.getItem("cadastro_dados")
        if (!raw) {
            setErro("Dados do cadastro não encontrados. Volte e preencha novamente.")
            return
        }
        const dados = JSON.parse(raw)
        try {
            await criarUsuario({ ...dados, senha_usuario: senha })
            sessionStorage.removeItem("cadastro_dados")
            router.push("/sw/home")
        } catch (e: unknown) {
            setErro(e instanceof Error ? e.message : "Erro ao criar conta.")
        }
    }

    return (
        <div>
            <HeaderSignOut />
            <BackgroundSignOut>
                <div>
                    <CrieSuaSenhaBox>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row justify-center items-center gap-1 mt-5">
                                <div className="">
                                    <p className="text-black font-bold -mt-8">Crie sua</p>
                                </div>
                                <div className="text-indigo-500 font-bold font-lato -mt-10">
                                    <p>senha</p>
                                </div>
                            </div>
                            <InputBar type="password" placeholder="Senha" value={senha} onBlur={} onChange={(e) => setSenha(e.target.value)} />
                            <InputBar type="password" placeholder="Confirme sua senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
                            {erro && <p className="text-red-500 text-sm text-center">{erro}</p>}
                            <CriarContaCancelarButton habilitado={!!senhasBatem} onCriarConta={handleCriarConta} />
                        </div>
                    </CrieSuaSenhaBox>
                </div>
            </BackgroundSignOut>
        </div>
    )
}


// faz o POST pra criação do usuário 