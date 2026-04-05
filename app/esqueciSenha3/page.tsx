"use client"

import BotaoEntrar from "../components/BotaoEntrar";
import BotaoVoltar from "../components/BotaoVoltar";
import HeaderLogin from "../components/HeaderLogin";
import InputBox from "../components/InputBox";

export default function EsqueciMinhaSenha(){
    return (
    <div className="flex flex-col h-full w-full gap-18 items-center">
        <HeaderLogin />
        <div className="flex w-145.75 h-124.75 flex-col items-center gap-14.5 rounded-xl bg-white border-72 border-white">
            {/*Conteúdo da box*/}
            <div className="flex flex-row gap-2 text-16">
                <div className="text-black font-bold ">Insira a sua </div>
                <div className="text-[#5754DE] font-bold">nova senha </div>
            </div>
            <div className="w-full flex flex-col items-baseline justify-center gap-2.5">
                <InputBox placeholder="Nova Senha" tipo="password" />
                <InputBox placeholder="Confirmar Senha" tipo="password" />
            </div>
            <div className="flex w-57.5 flex-col items-start gap-4.5">
                <BotaoEntrar texto="Continuar" cheio={true} />
                <BotaoVoltar/>
            </div>

        </div>
    </div>
    )
}