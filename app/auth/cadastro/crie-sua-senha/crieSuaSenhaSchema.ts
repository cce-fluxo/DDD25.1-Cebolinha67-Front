import * as Yup from 'yup'

export const schema = Yup.object(
    {
    senha: Yup.string().required("A senha deve ser de, no mínimo : 8 caracteres")
    }

)