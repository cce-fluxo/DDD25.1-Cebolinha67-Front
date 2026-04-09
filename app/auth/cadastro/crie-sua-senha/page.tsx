"use client"

import BackgroundSignOut from "@/app/components/backgrounds/BackgroundSignOut";
import CriarContaCancelarButton from "@/app/components/buttons/CriarContaCancelarButton";
import CrieSuaSenhaBox from "@/app/components/boxes/CrieSuaSenhaBox";
import HeaderSignOut from "@/app/components/headers/HeaderSignOut";
import InputBar from "@/app/components/inputs/InputBar";
import { useState } from "react";

export default function CrieSuaSenha(){

    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")

    const senhasBatem = senha && confirmarSenha && senha === confirmarSenha
    return (
        <div>
            <HeaderSignOut></HeaderSignOut>
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
                    <InputBar type="password" placeholder="Senha" value={senha} onChange={setSenha} />
                    <InputBar type="password" placeholder="Confirme sua senha" value={confirmarSenha} onChange={setConfirmarSenha} />

                    <CriarContaCancelarButton habilitado={false}></CriarContaCancelarButton>
                    </div>
                    </CrieSuaSenhaBox>
                    </div>
            </BackgroundSignOut>
        </div>
    )
} // lembrar que eu fiz esse endpoint novo, vou ter que mudar coisas no back 