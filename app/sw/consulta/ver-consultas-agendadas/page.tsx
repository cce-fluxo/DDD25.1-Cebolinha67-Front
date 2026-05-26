"use client"

import { useState } from "react"
import BoxPacienteSelecionado from "@/app/components/boxes/BoxPacienteSelecionado"
import BoxAgendadas from "@/app/components/boxes/BoxAgendadas"
import { Usuario } from '@/lib/api'


export type Paciente = {
    id:any
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
    const [dentistaSelecionado, setDentistaSelecionado] = useState<Usuario | null>(null)


    return (
        <div className="bg-gray-200 min-h-screen w-full">
            <div className="flex gap-4 p-4">
                <BoxAgendadas
                    abaAtiva="Realizadas"
                    onSelecionarPaciente={setPacienteSelecionado}
                    pacienteSelecionado={pacienteSelecionado}></BoxAgendadas>
                <BoxPacienteSelecionado dentista={dentistaSelecionado} paciente={pacienteSelecionado} />
            </div>
        </div>
    )
}