import CadastroBox from '../components/CadastroBox';
import HeaderSignOut from '../components/HeaderSignOut';
import InputBar from '../components/InputBar';
import BackgroundSignOut from '../components/BackgroundSignOut';

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
                
                </CadastroBox>
            </BackgroundSignOut>


        </div>
    )
}