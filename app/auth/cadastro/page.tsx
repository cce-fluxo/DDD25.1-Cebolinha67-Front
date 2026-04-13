"use client"

import {useFormik} from 'formik'
import { useRouter } from 'next/navigation'
import {schema} from './cadastroSchema'
import InputBar from '@/app/components/inputs/InputBar'
import VoltarContinuarButton from '@/app/components/buttons/VoltarContinuarButton'

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
      <form onSubmit={formik.handleSubmit}>
        <InputBar name="nome" value={formik.values.nome} onChange={formik.handleChange}/>
        {formik.errors.nome && <span>{formik.errors.nome}</span>}

        <InputBar name='sobrenome' value={formik.values.sobrenome} onChange={formik.handleChange} />
        {formik.errors.sobrenome && <span>{formik.errors.sobrenome}</span>}

        <InputBar type="date" name='data' value={formik.values.data} onChange={formik.handleChange}/>
        {formik.errors.data && <span>{formik.errors.data}</span>}

        <InputBar name='email' value={formik.values.email} onChange={formik.handleChange} />
        {formik.errors.email && <span>{formik.errors.email}</span>}

        <InputBar name='cpf' value={formik.values.cpf} onChange={formik.handleChange}></InputBar>
        {formik.errors.cpf && <span>{formik.errors.cpf}</span>}

        <InputBar name='numero_de_celular' value={formik.values.numero_de_celular} onChange={formik.handleChange}/>
        {formik.errors.numero_de_celular && <span>{formik.errors.numero_de_celular}</span>}
      </form>
      <VoltarContinuarButton habilitado={formik.isValid && formik.dirty} onContinuar={() => formik.submitForm()}></VoltarContinuarButton>
      </div>

    )
}