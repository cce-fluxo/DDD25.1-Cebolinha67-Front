"use client"
import { useFormik } from "formik";
import * as Yup from 'yup'

export default function Cadastro(){
    const formik = useFormik({
        initialValues:{
            nome:'',
            sobrenome:'',
            data:"",
            email:"",
            cpf:"",
            numero_de_celular:''
        },
        validationSchema: Yup.object({
            nome: Yup.string().required('Nome inválido'),
            sobrenome: Yup.string().required('Este campo é obrigatório'),
            data: Yup.date().required("Este campo é obrigatório"),
            email : Yup.string().email().required("Email obrigatório"),
            cpf: Yup.number().required("CPF obrigatório"),
            numero_de_celular: Yup.number().required("Numero de telefone obrigatório")
        }),

        onSubmit: (values)=>{
            console.log(values)
        }
    })
    return(
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-400 to-purple-800">

            <header>
                <div className="h-20 bg-white"></div>
            </header>
            <div className="bg-white rounded-xl px-8 py-12 w-96 flex flex-col gap-3">
                <div className="flex justify-center items-center font-bold">
                    <p>Crie sua nova conta</p>
                </div>
            <input
            type="text"
            placeholder="Nome"
            {...formik.getFieldProps('nome')}
            className="">
            </input>
            {formik.touched.nome && formik.errors.nome}

            <input
            type="text"
            placeholder="Sobrenome"
            {...formik.getFieldProps('sobrenome')}
            className="">
            </input>
            {formik.touched.sobrenome && formik.errors.sobrenome}

            <input
            type="date"
            placeholder="Ano / Mes / Dia"
            {...formik.getFieldProps('data')}
            className="">
            </input>
            {formik.touched.data && formik.errors.data}

            <input
            type="text"
            placeholder="Email"
            {...formik.getFieldProps('email')}
            className="">
            </input>
            {formik.touched.email && formik.errors.email}

            <input
            type="text"
            placeholder="CPF"
            {...formik.getFieldProps('cpf')}
            className="">
            </input>
            {formik.touched.cpf && formik.errors.cpf}

            <input
            type="number"
            placeholder="Numero de Celular"
            {...formik.getFieldProps('numero_de_celular')}
            className="">
            </input>
            {formik.touched.numero_de_celular && formik.errors.numero_de_celular}

            <div id="botoes-do-final" className="flex flex-row gap-15 mt-10">
                <div className="bg-purple-200 justify-center">
                <button className="ml-9">Voltar</button>
                </div>
                <div className="bg-blue-900 justify-center">
                <button >Continuar</button>
                </div>
            </div>
            </div>
        </div>
    )
}