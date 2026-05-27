"use client"

import Image from "next/image"

type ConsultaCardProps = {
    nome: string
    numero: string
    data: string
    idade: number
    fotoUrl: string
}

export default function ConsultaCard({ nome, numero, data, idade, fotoUrl }: ConsultaCardProps) {
    return (
        <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-2xl bg-white shadow-sm w-full">
            {/* topo: foto + nome */}
            <div className="flex flex-row items-center gap-3">
                <Image
                    src={fotoUrl}
                    alt={nome}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                />
                <span className="font-semibold text-gray-900">{nome}</span>
            </div>

            {/* linha de baixo: número, data, idade */}
            <div className="flex flex-row justify-between px-2">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Número</span>
                    <span className="text-sm font-semibold text-gray-900">{numero}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Data</span>
                    <span className="text-sm font-semibold text-gray-900">{data}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Idade</span>
                    <span className="text-sm font-semibold text-gray-900">{idade} anos</span>
                </div>
            </div>
        </div>
    )
}