import * as Yup from 'yup'

const schema = Yup.object({
    nome: Yup.string().required("Nome é obrigatório e deve conter apenas letras"),
    sobrenome: Yup.string().required("Sobrenome é obrigatório e deve conter apenas letras"),
    


})