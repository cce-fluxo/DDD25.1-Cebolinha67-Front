"use client"

import BackgroundSignOut from "@/app/components/backgrounds/BackgroundSignOut";
import CriarContaCancelarButton from "@/app/components/buttons/CriarContaCancelarButton";
import CrieSuaSenhaBox from "@/app/components/boxes/CrieSuaSenhaBox";
import HeaderSignOut from "@/app/components/headers-use-as-da-home-nao-essas/HeaderSignOut";
import InputBar from "@/app/components/inputs/InputBar";
import { useRouter } from "next/navigation";
import { criarUsuario } from "@/lib/api";
import { useFormik } from "formik";
import { schemaSenha } from "./crieSuaSenhaSchema";
import { useAuth } from "@/app/context/AuthContext";
import { useState } from "react";
import PopUp from "@/app/components/popups/popupContaCriada";

export default function CrieSuaSenha(){
    const [popUpIsOpen, setpopUpIsOpen] = useState(false)
    const router = useRouter()
    const { login } = useAuth()
    const [erroCadastro, setErroCadastro] = useState<string | null>(null)

    const formik = useFormik({
      initialValues:{
        senha:"",
        confirme_sua_senha: "",
      }, validationSchema: schemaSenha,
      onSubmit: async (values) => {
        const raw = sessionStorage.getItem("cadastro_dados")
        if (!raw) {
          router.push("/auth/cadastro")
          return
        }
        const dadosSalvos = JSON.parse(raw)

        try {
          await criarUsuario({
            ...dadosSalvos,
            senha_usuario: values.senha,
            genero: "NaoInformado",
          })

          await login(dadosSalvos.email_usuario, values.senha)

          sessionStorage.removeItem("cadastro_dados")
          setpopUpIsOpen(true)
          setTimeout(()=> {
            router.push("/sw/home")
          },3000)
                } catch (error: any) {
          setErroCadastro(error.message)
        }
      }
    })

// coloquei o set timeout pro popup só aparecer por um tempo específico na tela, EU COLOQUEI MAIS PRA TESTAR, LEMBRAR DISSO DEPOIS 

    return(
        <div>
            <HeaderSignOut></HeaderSignOut>
            <BackgroundSignOut>
                <CrieSuaSenhaBox>
                    <div className="flex flex-row gap-1 justify-center items-center">
                        <p className="font-bold text-black">Crie sua</p>
                        <p className="font-bold text-indigo-600">senha</p>
                    </div>
                    <div className="mt-7.5">
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 -mt-8">
                        <InputBar name="senha" placeholder="Senha" value={formik.values.senha} onChange={formik.handleChange} onBlur={formik.handleBlur}></InputBar>
                        {formik.touched.senha && formik.errors.senha && <span className="text-red-500 text-xs">{formik.errors.senha}</span>}

                        <InputBar name="confirme_sua_senha" placeholder="Confirme sua senha" value={formik.values.confirme_sua_senha} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.confirme_sua_senha && formik.errors.confirme_sua_senha && <span className="text-red-500 text-xs">{formik.errors.confirme_sua_senha}</span>}

                    </form>
                    {erroCadastro && <span className="text-red-500 text-xs">{erroCadastro}</span>}
                    </div>

                    <CriarContaCancelarButton habilitado={formik.isValid && formik.dirty} onCriarConta={() => formik.submitForm()}></CriarContaCancelarButton>
                </CrieSuaSenhaBox>
                <div className="flex items-center justify-center">
              <PopUp título="Conta criada com sucesso. Seja bem vindo!" BotaoTexto="" onPressBotao={() => null} isVisible={popUpIsOpen} toggleModal={()=> "sim"} children></PopUp> {/* continuar o popup */ }
              </div>
            </BackgroundSignOut>
        </div>
    )
}