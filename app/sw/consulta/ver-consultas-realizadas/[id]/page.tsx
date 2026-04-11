"use client"

import { use, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import BoxPacienteSelecionado from "@/app/components/boxes/BoxPacienteSelecionado"
import BoxRealizadasAgendadas from "@/app/components/boxes/BoxRealizadasAgendadas"
import { Paciente } from "@/app/sw/consulta/ver-consultas-realizadas/page"

// Mock temporário — substituir pela chamada à API
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
    params: Promise<{ id: string }>
}

export default function DetalhePaciente({ params }: Props) {
    const { id } = use(params)
    const router = useRouter()

    const pacienteEncontrado = pacientesMock.find((p) => String(p.id) === id) ?? null

    const [pacienteSelecionado, setPacienteSelecionado] = useState<Paciente | null>(pacienteEncontrado)

    useEffect(() => {
        if (!pacienteEncontrado) {
            router.replace("/sw/consulta/ver-consultas-realizadas")
        }
    }, [pacienteEncontrado, router])

    // Enquanto redireciona (paciente não encontrado), não renderiza nada
    if (!pacienteSelecionado) return null

    return (
        <div className="bg-gray-200 h-full w-full">
            <div className="flex gap-4 p-4">
                <BoxRealizadasAgendadas
                    abaAtiva="Realizadas"
                    onSelecionarPaciente={setPacienteSelecionado}
                    pacienteSelecionado={pacienteSelecionado}
                />
                <BoxPacienteSelecionado paciente={pacienteSelecionado} />
            </div>
        </div>
    )
}