import * as Yup from 'yup'

export const schema = Yup.object({
    nome: Yup.string().matches(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras").required("Nome é obrigatório e deve conter apenas letras"),
    sobrenome: Yup.string().matches(/^[a-zA-ZÀ-ÿ\s]+$/, "Sobrenome deve conter apenas letras").required("Sobrenome é obrigatório e deve conter apenas letras"),
    data: Yup.date().required("Data precisa ser válida"),
    email: Yup.string().email("O email precisa seguir o seguinte formato : Nome@example.com ").required("O email precisa seguir o seguinte formato : Nome@example.com "),
    cpf: Yup.string().length(11, "O CPF precisa ser um número e possuir 11 dígitos. Não use traços ou espaços").required("O CPF precisa ser um número e possuir 11 dígitos. Não use traços ou espaços"),
    numero_de_celular : Yup.string().length(11, "O número de celular não pode ter espaços, traços ou parênteses possuir 11 dígitos contando com o DDD").required("O número de celular não pode ter espaços, traços ou parênteses possuir 11 dígitos contando com o DDD")
})

// o matches esquisitão ali é pra garantir que só sejam aceitas letras no nome 