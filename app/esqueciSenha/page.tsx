"use client"

import { useRouter } from "next/navigation";
import BotaoEntrar from "../components/BotaoEntrar";
import BotaoVoltar from "../components/BotaoVoltar";
import HeaderLogin from "../components/HeaderLogin";
import InputBox from "../components/InputBox";

export default function EsqueciMinhaSenha(){
    const router = useRouter();

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
                <InputBox placeholder="E-mail" tipo="email" />
            </div>
            <div className="flex w-57.5 flex-col items-start gap-4.5">
                <BotaoEntrar texto="Continuar" cheio={true} onClick={() => router.push("/esqueciSenha2")} />
                <BotaoVoltar onClick={() => router.push("..")}/>
            </div>

        </div>
    </div>
    )
}