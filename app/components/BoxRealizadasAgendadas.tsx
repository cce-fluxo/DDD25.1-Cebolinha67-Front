export default function BoxRealizadasAgendadas(){
    return(
        <div className="w-[22.5%] shrink-0"> 
            <div className="p-4">
                <div className="flex flex-col h-fit gap-8 p-4 bg-white rounded-2xl">

                    {/*parte de cima */}
                    <div className="flex justify-center items-center gap-15 mb-4 pb-4 border-b border-gray-400">
                        <button className="text-indigo-700 font-bold">Realizadas</button>
                        <button className="text-gray-400 font-medium">Agendadas</button>
                    </div>

                    {/*dropdown bar*/}

                    <div className="flex justify-between items-center max-w-50 border border-gray-600 rounded-full px-4 py-1.5 -mt-10 text-sm">
                        <span className="text-gray-500 font-medium">Todas</span>
                        <span>▼</span>
                    </div>

                   {/* caixas dos pacientes */} 

                    <div className=" -mt-5 max-h-[71.5vh] overflow-y-auto scrollbar scrollbar-thumb-indigo-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                        <div className="flex flex-col gap-2.5">
                            <div className="flex p-5 min-h-31 justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400"></div>
                            <div className="flex p-5 min-h-31 justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400"></div>
                            <div className="flex p-5 min-h-31 justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400"></div>
                            <div className="flex p-5 min-h-31 justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400"></div>
                            <div className="flex p-5 min-h-31 justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white border-gray-400 rounded-2xl"></div>
                            <div className="flex p-5 min-h-31 justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400"></div>
                            <div className="flex p-5 min-h-31 justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white border-gray-400 rounded-2xl"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}