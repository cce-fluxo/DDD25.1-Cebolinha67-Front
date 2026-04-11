"use client"

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { useState } from 'react'
import { Paciente } from '@/app/sw/consulta/ver-consultas-realizadas/page'
import { useRouter } from 'next/navigation'

const opcoes = ["Todas", "Última semana", "Último mês", "Último ano"]

// Dados do paciente
const pacientesMock: Paciente[] = [...Array(8)].map((_, i) => ({
    nome: "Mariana Baroni",
    nomeCompleto: "Mariana Baroni da Silva Pereira",
    cpf: "000.000.000-00",
    rg: "00.000.000-0",
    celular: "(21) 98910-3621",
    telefone: "-",
    email: "marianabaroni@gmail.com",
    idade: "22 anos",
    data: "22/09/2024",
    foto: "/elipse.png",
    id: i,
}))

interface Props {
    abaAtiva?: string
    onSelecionarPaciente: (paciente: Paciente) => void
    pacienteSelecionado: Paciente | null
}

export default function BoxRealizadasAgendadas({
    abaAtiva = "Realizadas",
    onSelecionarPaciente,
    pacienteSelecionado,
}: Props) {
    const [aberto, setAberto] = useState(false)
    const [selecionado, setSelecionado] = useState("Todas")
    const route = useRouter()
    return (
        <div className="w-[28%] shrink-0">
            <div className="p-4">
                <div className="flex flex-col h-fit gap-8 p-4 bg-white rounded-2xl">

                    {/* Abas */}
                    <div className="flex flex-row justify-center items-center gap-2 md:gap-4 mb-4 pb-4 border-b border-gray-400">
                        <button onClick={() => route.push("/sw/consulta/ver-consultas-realizadas")} className="text-purple-700 font-bold cursor-pointer">
                            Realizadas
                        </button>
                        <button  onClick={()=> route.push("/sw/consulta/ver-consultas-agendadas")} className="text-gray-400 font-medium cursor-pointer">
                            Agendadas
                        </button>
                    </div>

                    {/* Dropdown */}
                    <div className="relative -mt-10">
                        <div
                            className="flex justify-between items-center max-w-[16.5vh] border border-gray-600 rounded-full px-4 py-0.5 text-sm cursor-pointer"
                            onClick={() => setAberto(!aberto)}
                        >
                            <span className="text-gray-500 font-medium">{selecionado}</span>
                            <span>{aberto ? "▲" : "▼"}</span>
                        </div>

                        {aberto && (
                            <div className="absolute top-8 left-0 bg-white border border-gray-200 rounded-xl shadow-md z-10 w-40">
                                {opcoes.map((opcao) => (
                                    <div
                                        key={opcao}
                                        className="px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer first:rounded-t-xl last:rounded-b-xl"
                                        onClick={() => { setSelecionado(opcao); setAberto(false) }}
                                    >
                                        {opcao}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Cards dos pacientes */}
                    <SimpleBar style={{ maxHeight: '71.5vh', maxWidth: '50vh' }} className="-mt-5">
                        <div className="flex flex-col gap-2.5 pr-4 mr-3">
                            {pacientesMock.map((paciente, i) => {
                                const estaSelecionado = pacienteSelecionado?.nome === paciente.nome && pacienteSelecionado?.data === paciente.data

                                return (
                                    <div
                                        key={i}
                                        onClick={() => {
                                            onSelecionarPaciente(paciente)
                                            route.push(`/sw/consulta/ver-consultas-realizadas/${i}`)
                                        }}
                                        
                                        className={`flex flex-col py-4 pr-4 pl-2 gap-2 self-stretch border rounded-2xl cursor-pointer transition-all
                                            ${estaSelecionado 
                                                ? "border-indigo-400 bg-indigo-50 shadow-sm"
                                                : "border-gray-200 bg-white hover:border-indigo-200 hover:bg-indigo-50/40"
                                            }`}
                                    >
                                        <div className="flex items-center gap-4 ml-[10vh]">
                                            <img src={paciente.foto} className="w-9 h-9 rounded-full object-cover border border-indigo-400" />
                                            <span className="text-sm font-medium text-gray-800">{paciente.nome}</span>
                                        </div>
                                        <div className="flex gap-4 items-center justify-center">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[10px] text-gray-400">Número</span>
                                                <span className="text-xs font-medium">{paciente.celular}</span>
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[10px] text-gray-400">Data</span>
                                                <span className="text-xs font-medium">{paciente.data}</span>
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[10px] text-gray-400">Idade</span>
                                                <span className="text-xs font-medium">{paciente.idade}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </SimpleBar>

                </div>
            </div>
        </div>
    )
}

