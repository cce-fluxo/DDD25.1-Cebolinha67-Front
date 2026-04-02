import CadastroBox from '../../components/CadastroBox';
import HeaderSignOut from '../../components/HeaderSignOut';
import InputBar from '../../components/InputBar';
import BackgroundSignOut from '../../components/BackgroundSignOut';
import VoltarContinuarButton from '../../components/VoltarContinuarButton';

export default function Cadastro() {
  return (
    <div className="min-h-screen w-full">
      <HeaderSignOut />
      <BackgroundSignOut>
        <CadastroBox>
          <div className='flex flex-col gap-4'>
            <InputBar type='text' placeholder='Nome' />
            <InputBar type='text' placeholder='Sobrenome' />
            <InputBar type="date" placeholder='Dia / Mês / Ano' />
            <InputBar type='email' placeholder='E-mail' />
            <InputBar type="number" placeholder='CPF' />
            <InputBar type='number' placeholder='Número de Celular' />
          </div>
          <VoltarContinuarButton />
        </CadastroBox>
      </BackgroundSignOut>
    </div>
  )
}