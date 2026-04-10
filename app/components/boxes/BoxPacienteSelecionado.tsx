"use client"

import { Paciente } from "@/app/sw/consulta/ver-consultas-realizadas/page"
import { useRouter } from "next/navigation"


interface Props {
    paciente: Paciente | null
}

export default function BoxPacienteSelecionado({ paciente }: Props) {

    const router = useRouter()
    if (!paciente) {
        return (
            <div className="flex-1 w-[80%] h-[91vh] mt-4 bg-white rounded-2xl flex items-center justify-center flex-col gap-2">
                <img src="/sorriso.png" alt="sorriso" className="max-w-[40%]" />
                <p className="font-medium text-gray-600">Você ainda não selecionou nenhum paciente...</p>
            </div>
        )
    }

    return (
        <div className="flex-1 h-[91vh] mt-4 bg-white rounded-2xl overflow-hidden flex">

            {/* Coluna esquerda — dados pessoais */}
            <div className="flex flex-col flex-1 p-7 border-r border-gray-400 gap-6 overflow-y-auto mt-[3vh]">
                {/* Avatar + nome */}
                <div className="flex items-center gap-4">   
                    <img
                        src={paciente.foto}
                        className="w-16 h-16 rounded-full object-cover border-2 border-indigo-300"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">{paciente.nome}</h2>
                </div>

                <hr className="border-gray-400" />

                {/* Campos */}
                <div className="flex flex-col gap-5">
                    <Campo label="Nome completo" valor={paciente.nomeCompleto} />
                    <div className="flex gap-8">
                        <Campo label="CPF" valor={paciente.cpf} />
                        <Campo label="RG" valor={paciente.rg} />
                    </div>
                    <div className="flex gap-8">
                        <Campo label="Número de celular" valor={paciente.celular} />
                        <Campo label="Número de telefone" valor={paciente.telefone} />
                    </div>
                    <Campo label="E-mail" valor={paciente.email} />
                    <Campo label="Idade" valor={paciente.idade} />
                </div>

                {/* Botão enviar mensagem */}
                <div className="flex justify-center">
                <button onClick={() => router.push("/sw/postagem") } className=" justify-center items-center w-[20vh] -ml-[12vh] bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium py-3 rounded-xl transition-colors">
                    Enviar mensagem
                </button>
                </div>
            </div>

            {/* Coluna direita — informações da consulta 
            
            se eu quiser mudar todo mundo junto pra direita mudar a pct do width logo na primeira div

            */}
            <div className="flex flex-col w-[55%] shrink-0 p-8 gap-6 overflow-y-auto mt-[3vh]">
                <h3 className="text-indigo-600 font-semibold text-base">Informações da consulta</h3>

                <div className="flex flex-col gap-4">
                    <Campo label="Profissional" valor="Dr. Letícia Yumi" />
                    <div className="flex gap-8">
                        <Campo label="Data" valor="23/09/2024" />
                        <Campo label="Hora" valor="9:00" />
                    </div>
                    <Campo label="Consulta" valor="Particular" />
                </div>

                <hr className="border-gray-100" />

                <div className="flex flex-col gap-4">
                    <Campo label="Descrição do paciente" valor="descricao" />
                    <Campo label="Tipo da Consulta" valor="Peridontia" />
                </div>

                <hr className="border-gray-400" />

                <div className="flex flex-col gap-3">
                    <h3 className="text-indigo-600 font-semibold text-base">Documentos</h3>
                    <div className="flex gap-3 flex-wrap">
                        <BotaoDoc icone="🏥" label="Atestado" />
                        <BotaoDoc icone="⬇️" label="Baixar laudo médico" />
                        <BotaoDoc icone="✏️" label="Editar" destaque />
                    </div>
                </div>
            </div>

        </div>
    )
}

function Campo({ label, valor }: { label: string; valor: string }) {
    return (
        <div className="flex flex-col gap-0.5">
            <span className="text-xs text-gray-400">{label}</span>
            <span className="text-sm font-medium text-gray-800">{valor}</span>
        </div>
    )
}

function BotaoDoc({ icone, label, destaque }: { icone: string; label: string; destaque?: boolean }) {
    return (
        <button className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-sm font-medium transition-colors
            ${destaque
                ? "border-indigo-300 text-indigo-600 hover:bg-indigo-50"
                : "border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}>
            <span>{icone}</span>
            {label}
        </button>
    )
}   