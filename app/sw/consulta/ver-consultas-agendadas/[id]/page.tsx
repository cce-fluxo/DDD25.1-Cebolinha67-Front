"use client"

import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import ConsultaCard from "@/app/components/consulta/ConsultaCard"

type Consulta = {
    id: string
    nome: string
    numero: string
    data: string
    idade: number
    fotoUrl: string
}

export default function VerConsultasRealizadas() {
    const router = useRouter()
    const pathname = usePathname()
    const [consultas, setConsultas] = useState<Consulta[]>([])

    const linkClass = (rota: string) =>
        pathname.startsWith(rota)
            ? "text-indigo-700 font-bold px-4 py-2 rounded-lg cursor-pointer"
            : "cursor-pointer px-4 py-2 rounded-lg cursor-pointer text-gray-700"

    
    // parte de integração com back

    useEffect(() => {
        async function fetchConsultas() {
            const res = await fetch('/consultas/ver-consulta') // colocar meu endpoint de consultas aqui, ele não realmente diferencia no back entre consulta marcada e agendada, eh foda
            const data = await res.json()
            setConsultas(data)
        }fetchConsultas()
    }, [])

    return (
        <div className="flex h-screen w-full gap-[6vh]">
            <div className="flex w-[25%] h-[80%] flex-col gap-[3vh] bg-white border border-gray-300 rounded-2xl mt-[4vh] ml-[4vh] p-4">
                {/* botões */}
                <div className="flex flex-row gap-[3vh] -ml-[1vh] justify-center mt-[2vh] items-center">
                    <button
                        className={linkClass("/sw/consulta/ver-consultas-agendadas")}
                        onClick={() => router.push("/sw/consulta/ver-consultas-agendadas")}
                    >
                        Agendadas
                    </button>
                    <button
                        className={linkClass("/sw/consulta/ver-consultas-realizadas")}
                        onClick={() => router.push("/sw/consulta/ver-consultas-realizadas")}
                    >
                        Realizadas
                    </button>
                </div>

                <div className="bg-gray-300 h-px w-full"></div>

                {/* dropdown */}
                <select
                    className="w-[50%] rounded-xl border border-gray-700 cursor-pointer p-2 text-gray-500"
                    onChange={(e) => console.log(e.target.value)}
                >
                    <option>Todas</option>
                </select>

                {/* lista de cards, que vão servir também como botões */}
                <div className="flex flex-col gap-3 overflow-y-auto">
                <button onClick={()=> router.push(`/sw/consulta/ver-consultas-agendadas/[id]`)}>
                    {consultas.map((consulta) => (
                        <ConsultaCard
                            key={consulta.id}
                            nome={consulta.nome}
                            numero={consulta.numero}
                            data={consulta.data}
                            idade={consulta.idade}
                            fotoUrl={consulta.fotoUrl}
                        />
                    ))}
                    </button>
                </div>
            </div>

            {/* agora fazer aquele retângulo grandão do lado, que nesse caso vai ser o sorriso de vc não selecionou nenhum paciente ainda */}

            <div className="flex w-[120vh] mt-[4vh] h-[80vh] px-52 justify-center items-center border border-solid border-gray-300 rounded-2xl bg-white">

                
            </div>
        </div>
    )
}