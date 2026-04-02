import CadastroBox from '../../components/CadastroBox';
import HeaderSignOut from '../../components/HeaderSignOut';
import InputBar from '../../components/InputBar';
import BackgroundSignOut from '../../components/BackgroundSignOut';
import VoltarContinuarButton from '../../components/VoltarContinuarButton';

export default function Cadastro(){
    return (
        <div>
            {/*header do sorrisync */}
            <HeaderSignOut></HeaderSignOut>
            {/* background da pagina no geral */}
            <BackgroundSignOut>
                {/*a caixona mesmo do cadastro*/}
                <CadastroBox>
                {/* as coisas dentro da caixona do cadastro */}
                
                {/*coe victor, eu juro que esse monte de comentário não é o claude, é que eu sou muito lerdo com input*/}
                <div className='flex flex-col gap-4.5 mt-25'>
                {/*nome*/}
                <InputBar
                type='text'
                placeholder='Nome'
                >
                </InputBar>

                {/* sobrenome*/}
                <InputBar
                type='text'
                placeholder='Sobrenome'>
                </InputBar>

                {/*Data */}

                <InputBar
                type="date"
                placeholder='Dia           /         Mês         /      Ano'>
                </InputBar>

                {/*imei*/}

                <InputBar
                type='email'
                placeholder='E-mail'>
                </InputBar>

                <InputBar
                type="number"
                placeholder='CPF'></InputBar>

                <InputBar
                type='number'
                placeholder='Número de Celular'>
                </InputBar>
                </div>

                <VoltarContinuarButton></VoltarContinuarButton>

                </CadastroBox>
            </BackgroundSignOut>
        </div>
    )
}