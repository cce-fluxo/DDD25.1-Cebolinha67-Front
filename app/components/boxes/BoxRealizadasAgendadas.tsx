"use client"

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export default function BoxRealizadasAgendadas(){
    return(
        <div className="w-[22.5%] shrink-0"> 
            <div className="p-4">
                <div className="flex flex-col h-fit gap-8 p-4 bg-white rounded-2xl">

                    {/* parte de cima da sidebar */}
                    <div className="flex flex-row justify-center items-center gap-2 md:gap-4 mb-4 pb-4 border-b border-gray-400">
                        <button className="text-sm md:text-base text-indigo-700 font-bold">Realizadas</button>
                        <button className="text-sm md:text-base text-gray-400 font-medium">Agendadas</button>
                    </div>

                    {/* dropdown bar */}
                    <div className="flex justify-between items-center max-w-28 border border-gray-600 rounded-full px-4 py-0.5 -mt-10 text-sm">
                        <span className="text-gray-500 font-medium">Todas</span>
                        <span>▼</span>
                    </div>

                    {/* caixas dos pacientes */}
                    <SimpleBar 
                        style={{ maxHeight: '71.5vh' }} 
                        className="-mt-5"
                    >
                        {/* card do figma */}
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