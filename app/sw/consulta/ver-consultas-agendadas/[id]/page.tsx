"use client"

import { use } from "react"
import { useState } from "react"
import BoxPacienteSelecionado from "@/app/components/boxes/BoxPacienteSelecionado"
import BoxAgendadas from "@/app/components/boxes/BoxAgendadas"

export type Paciente = {
    nome: string
    nomeCompleto: string
    cpf: string
    rg: string
    celular: string
    telefone: string
    email: string
    idade: string
    data: string
    foto: string
    id?: number
}

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
    id: 2,
}))

interface Props {
    params: Promise<{ id: string }>
}

export default function DetalheAgendada({ params }: Props) {
    const { id } = use(params)
    const [pacienteSelecionado, setPacienteSelecionado] = useState<Paciente | null>(
        pacientesMock.find((p) => p.cpf === id) ?? null
    )

    return (
        <div className="bg-gray-200 h-full w-full">
            <div className="flex gap-4 p-4">
                <BoxAgendadas
                    abaAtiva="Agendadas"
                    onSelecionarPaciente={setPacienteSelecionado}
                    pacienteSelecionado={pacienteSelecionado}
                />
                <BoxPacienteSelecionado paciente={pacienteSelecionado} />
            </div>
        </div>
    )
}
