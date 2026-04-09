"use client"

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { useState } from 'react'

const opcoes = ["Todas", "Última semana", "Último mês", "Último ano"]

export default function BoxRealizadasAgendadas(){

    const [aberto, setAberto] = useState(false)
    const [selecionado, setSelecionado] = useState("Todas")

    return(
        <div className="w-[22.5%] shrink-0"> 
            <div className="p-4">
                <div className="flex flex-col h-fit gap-8 p-4 bg-white rounded-2xl">

                    {/* parte de cima da sidebar */}
                    <div className="flex flex-row justify-center items-center gap-2 md:gap-4 mb-4 pb-4 border-b border-gray-400">
                        <button className="text-sm md:text-base text-indigo-700 font-bold">Realizadas</button>
                        <button className="text-sm md:text-base text-gray-400 font-medium">Agendadas</button>
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
                            <div className="flex p-0.5 min-h-20 w-full justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400">
                                <img src="/fotoSync.png" className="w-full h-auto object-cover" />
                            </div>
                            <div className="flex p-0.5 min-h-20 w-full justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400">
                                <img src="/fotoSync.png" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex p-0.5 min-h-20 w-full justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400">
                                <img src="/fotoSync.png" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex p-0.5 min-h-20 w-full justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400">
                                <img src="/fotoSync.png" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex p-0.5 min-h-20 w-full justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white border-gray-400 rounded-2xl">
                                <img src="/fotoSync.png" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex p-0.5 min-h-20 w-full justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400">
                                <img src="/fotoSync.png" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex p-0.5 min-h-20 justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400">
                                <img src="/fotoSync.png" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex p-0.5 min-h-20 justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400">
                                <img src="/fotoSync.png" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </SimpleBar>

                </div>
            </div>
        </div>
    )
}