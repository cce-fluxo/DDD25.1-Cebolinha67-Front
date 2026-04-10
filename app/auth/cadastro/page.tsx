"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import CadastroBox from '../../components/boxes/CadastroBox'
import HeaderSignOut from '../../components/headers-use-as-da-home-nao-essas/HeaderSignOut'
import InputBar from '../../components/inputs/InputBar'
import BackgroundSignOut from '../../components/backgrounds/BackgroundSignOut'
import VoltarContinuarButton from '../../components/buttons/VoltarContinuarButton'

type Genero = 'Masculino' | 'Feminino' | 'Outros' | 'NaoInformado'

export default function Cadastro() {
  const router = useRouter()
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [data, setData] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [celular, setCelular] = useState("")
  const [genero, setGenero] = useState<Genero | "">("")

  const todosPreenchidos = nome && sobrenome && data && email && cpf && celular && genero

  function handleContinuar() {
    sessionStorage.setItem("cadastro_dados", JSON.stringify({
      no_usuario: `${nome} ${sobrenome}`,
      email_usuario: email,
      cpf,
      nu_celular: celular,
      genero,
      data_nascimento: data,
    }))
    router.push("/auth/cadastro/crie-sua-senha")
  }

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
            <select
              value={genero}
              onChange={(e) => setGenero(e.target.value as Genero)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-700"
            >
              <option value="" disabled>Gênero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outros">Outros</option>
              <option value="NaoInformado">Prefiro não informar</option>
            </select>
          </div>
          <VoltarContinuarButton habilitado={!!todosPreenchidos} onContinuar={handleContinuar} />
        </CadastroBox>
      </BackgroundSignOut>
    </div>
  )
}


// passo 6: foi adicionado um campo de gênero, e quando clica em Continuar todos os dados são salvos no session storage antes de navegar até o próximo passo 