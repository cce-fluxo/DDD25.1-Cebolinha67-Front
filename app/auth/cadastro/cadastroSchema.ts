import * as Yup from 'yup'

export const schema = Yup.object({
    nome: Yup.string().required("Nome é obrigatório e deve conter apenas letras"),
    sobrenome: Yup.string().required("Sobrenome é obrigatório e deve conter apenas letras"),
    data: Yup.date().required("Data precisa ser válida"),
    email: Yup.string().email().required("O email precisa seguir o seguinte formato : Nome@example.com "),
    cpf: Yup.string().length(11).required("O CPF precisa ser um número e possuir 11 dígitos. Não use traços ou espaços"),
    numero_de_celular : Yup.number().required("O número de celular não pode ter espaços ou traços")
})