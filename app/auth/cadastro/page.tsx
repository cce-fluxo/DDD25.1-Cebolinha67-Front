"use client"
import { useState } from "react"
import CadastroBox from '../../components/boxes/CadastroBox'
import HeaderSignOut from '../../components/headers/HeaderSignOut'
import InputBar from '../../components/inputs/InputBar'
import BackgroundSignOut from '../../components/backgrounds/BackgroundSignOut'
import VoltarContinuarButton from '../../components/buttons/VoltarContinuarButton'

export default function Cadastro() {
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [data, setData] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [celular, setCelular] = useState("")

  const todosPreenchidos = nome && sobrenome && data && email && cpf && celular

  return (
    <div className="min-h-screen w-full">
      <HeaderSignOut />
      <BackgroundSignOut>
        <CadastroBox>
          <div className='flex flex-col gap-4'>
            <InputBar type='text' placeholder='Nome' value={nome} onChange={setNome} />
            <InputBar type='text' placeholder='Sobrenome' value={sobrenome} onChange={setSobrenome} />
            <InputBar type="date" placeholder='Dia / Mês / Ano' value={data} onChange={setData} />
            <InputBar type='email' placeholder='E-mail' value={email} onChange={setEmail} />
            <InputBar type="number" placeholder='CPF' value={cpf} onChange={setCpf} />
            <InputBar type='number' placeholder='Número de Celular' value={celular} onChange={setCelular} />
          </div>
          <VoltarContinuarButton habilitado={!!todosPreenchidos} />
        </CadastroBox>
      </BackgroundSignOut>
    </div>
  )
}