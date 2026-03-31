"use client"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import HeaderSignOut from '../components/HeaderSignOut'

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
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-400 to-purple-800">

            <HeaderSignOut></HeaderSignOut>

            {/* Form centralizado */}
            <div className='flex justify-center py-12'>
                <div className="bg-white rounded-xl px-8 py-12 w-96 flex flex-col gap-3">
                    <div className="flex justify-center items-center font-bold">
                        <p>Crie sua nova conta</p>
                    </div>

                    <input type="text" placeholder="Nome"
                    {...formik.getFieldProps('nome')}
                    className="border border-gray-300 rounded-lg px-4 py-2"/>
                    {formik.touched.nome && formik.errors.nome}

                    <input type="text" placeholder="Sobrenome"
                    {...formik.getFieldProps('sobrenome')}
                    className="border border-gray-300 rounded-lg px-4 py-2"/>
                    {formik.touched.sobrenome && formik.errors.sobrenome}

                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-500">Data</label>
                        <input type="date"
                        {...formik.getFieldProps('data')}
                        className="border border-gray-300 rounded-lg px-4 py-2"/>
                    </div>
                    {formik.touched.data && <p>{formik.errors.data}</p>}

                    <input type="text" placeholder="Email"
                    {...formik.getFieldProps('email')}
                    className="border border-gray-300 rounded-lg px-4 py-2"/>
                    {formik.touched.email && formik.errors.email}

                    <input type="text" placeholder="CPF"
                    {...formik.getFieldProps('cpf')}
                    className="border border-gray-300 rounded-lg px-4 py-2"/>
                    {formik.touched.cpf && formik.errors.cpf}

                    <input type="number" placeholder="Numero de Celular"
                    {...formik.getFieldProps('numero_de_celular')}
                    className="border border-gray-300 rounded-lg px-4 py-2"/>
                    {formik.touched.numero_de_celular && formik.errors.numero_de_celular}

                    <div id="botoes-do-final" className="flex flex-row gap-15 mt-1">
                        <button className="ml-9 bg-purple-200 rounded-lg px-7 py-1">Voltar</button>
                        <button className='bg-blue-700 rounded-lg px-9 py-1 mr-5 text-white'>Continuar</button>
                    </div>
                </div>
            </div>

        </div>
    )
}