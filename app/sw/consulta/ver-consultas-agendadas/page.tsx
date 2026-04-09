"use client"

import { useState } from "react"
import BoxPacienteSelecionado from "@/app/components/boxes/BoxPacienteSelecionado"
import BoxRealizadasAgendadas from "@/app/components/boxes/BoxRealizadasAgendadas"

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

export default function VerConsultasRealizadas() {
    const [pacienteSelecionado, setPacienteSelecionado] = useState<Paciente | null>(null)

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