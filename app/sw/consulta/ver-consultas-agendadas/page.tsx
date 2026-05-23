"use client"

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
}

export default function VerConsultasAgendadas() {
    const [pacienteSelecionado, setPacienteSelecionado] = useState<Paciente | null>(null)

    return (
        <div className="bg-gray-200 min-h-screen w-full">
            <div className="flex gap-4 p-4">
                <BoxAgendadas
                    abaAtiva="Realizadas"
                    onSelecionarPaciente={setPacienteSelecionado}
                    pacienteSelecionado={pacienteSelecionado}></BoxAgendadas>
                <BoxPacienteSelecionado paciente={pacienteSelecionado} />
            </div>
        </div>
    )
}