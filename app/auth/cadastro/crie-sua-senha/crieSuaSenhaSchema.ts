import * as Yup from 'yup'

export const schemaSenha = Yup.object(
    {
    senha: Yup.string().length(8, "A senha deve ser de no mínimo : 8 caracteres").required("A senha deve ser de no mínimo : 8 caracteres"),
    confirme_sua_senha : Yup.string()
    .oneOf([Yup.ref("senha")], "As senhas não coincidem")
    .required("Confirme sua senha")
    }

    // usar dessa maneira ai pra comparar senhas usando o formik

)