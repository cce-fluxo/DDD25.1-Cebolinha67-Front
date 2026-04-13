"use client"

import {useFormik} from 'formik'
import { useRouter } from 'next/navigation'
import {schema} from './cadastroSchema'
import InputBar from '@/app/components/inputs/InputBar'
import VoltarContinuarButton from '@/app/components/buttons/VoltarContinuarButton'
import BackgroundSignOut from "@/app/components/backgrounds/BackgroundSignOut";
import HeaderSignOut from "@/app/components/headers-use-as-da-home-nao-essas/HeaderSignOut";
import CadastroBox from '@/app/components/boxes/CadastroBox'

export default function Cadastro(){
  const router = useRouter()

  const formik = useFormik({
    initialValues:{
      nome:"",
      sobrenome: "",
      data:"",
      email: "",
      cpf: "",
      numero_de_celular: "",
    },
    validationSchema: schema, // aqui ele vai ver se a galera que eu colocar bate com os atributos do meu yup schema
    onSubmit: (values) =>{
      sessionStorage.setItem("cadastro_dados" , JSON.stringify({
        no_usuario: `${values.nome} ${values.sobrenome}`,
        email_usuario: values.email,
        cpf: values.cpf,
        nu_celular : values.numero_de_celular,
        data_nascimento: values.data,
      }))
      router.push("/auth/cadastro/crie-sua-senha")
    }
  })
    return(
      <div>
        <HeaderSignOut />
        <BackgroundSignOut>
          <CadastroBox>
            <div className='flex flex-col gap-4'>
      <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
        <InputBar name="nome" placeholder='Nome' value={formik.values.nome} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.nome && formik.errors.nome && <span className="text-red-500 text-xs">{formik.errors.nome}</span>}

        <InputBar name='sobrenome' placeholder='Sobrenome' value={formik.values.sobrenome} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.sobrenome && formik.errors.sobrenome && <span className="text-red-500 text-xs">{formik.errors.sobrenome}</span>}

        <InputBar type="date" placeholder='dia/mes/ano' name='data' value={formik.values.data} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.data && formik.errors.data && <span className="text-red-500 text-xs">{formik.errors.data}</span>}

        <InputBar name='email' placeholder='Email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.email && formik.errors.email && <span className="text-red-500 text-xs">{formik.errors.email}</span>}

        <InputBar name='cpf' placeholder='CPF' value={formik.values.cpf} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.cpf && formik.errors.cpf && <span className="text-red-500 text-xs">{formik.errors.cpf}</span>}

        <InputBar name='numero_de_celular' placeholder='Número de celular' value={formik.values.numero_de_celular} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.numero_de_celular && formik.errors.numero_de_celular && <span className="text-red-500 text-xs">{formik.errors.numero_de_celular}</span>}
      </form>
      </div>
      <VoltarContinuarButton habilitado={formik.isValid && formik.dirty} onContinuar={() => formik.submitForm()}></VoltarContinuarButton>
      
      </CadastroBox>

      </BackgroundSignOut>
      </div>
    )
}