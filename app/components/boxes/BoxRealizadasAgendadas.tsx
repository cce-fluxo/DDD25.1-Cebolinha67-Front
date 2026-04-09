"use client"

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { useState } from 'react'

const opcoes = ["Todas", "Última semana", "Último mês", "Último ano"]

export default function BoxRealizadasAgendadas({ abaAtiva = "Realizadas" }: { abaAtiva?: string }){

    const [aberto, setAberto] = useState(false)
    const [selecionado, setSelecionado] = useState("Todas")

    return(
        <div className="w-[22.5%] shrink-0"> 
            <div className="p-4">
                <div className="flex flex-col h-fit gap-8 p-4 bg-white rounded-2xl">

                    {/* parte de cima da sidebar */}
                    <div className="flex flex-row justify-center items-center gap-2 md:gap-4 mb-4 pb-4 border-b border-gray-400">
                        <button className={`text-sm md:text-base font-bold ${abaAtiva === "Realizadas" ? "text-indigo-700" : "text-gray-400"}`}>
                            Realizadas
                        </button>
                        <button className={`text-sm md:text-base font-bold ${abaAtiva === "Agendadas" ? "text-indigo-700" : "text-gray-400"}`}>
                            Agendadas
                        </button>
                    </div>

                    {/* dropdown */}
                    <div className="relative -mt-10">
                        <div 
                            className="flex justify-between items-center max-w-40 border border-gray-600 rounded-full px-4 py-0.5 text-sm cursor-pointer"
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

                    {/* caixas dos pacientes */}
                    <SimpleBar style={{ maxHeight: '71.5vh' }} className="-mt-5">
                        <div className="flex flex-col gap-2.5 pr-4 mr-3">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="flex flex-col p-4 gap-2 self-stretch border bg-white rounded-2xl border-gray-200">
                                    <div className="flex items-center gap-3">
                                        <img src="/elipse.png" className="w-9 h-9 rounded-full object-cover border border-indigo-400" />
                                        <span className="text-sm font-medium text-gray-800">Mariana Baroni</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[10px] text-gray-400">Número</span>
                                            <span className="text-xs font-medium">(21) 98910-3621</span>
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[10px] text-gray-400">Data</span>
                                            <span className="text-xs font-medium">22/09/2024</span>
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[10px] text-gray-400">Idade</span>
                                            <span className="text-xs font-medium">22 anos</span>
                                        </div>
                                    </div>
                                    {abaAtiva === "Agendadas" && (
                                        <button className="text-xs text-indigo-500 text-left mt-1">
                                            Enviar mensagem
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </SimpleBar>

                </div>
            </div>
        </div>
    )
}