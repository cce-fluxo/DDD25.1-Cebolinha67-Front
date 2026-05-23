"use client"

import { useRef, useState, useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BotaoEntrar from "@/app/components/componentes-do-arthur/BotaoEntrar";
import {
  criarPostagemGeral,
  criarPostagemIndividual,
} from "@/service/postagemService";
import PopUpMensagem from "@/app/components/popups/popUpMensagem";

type TipoPostagem = "geral" | "individual";

const CORES_TEXTO = [
  "#000000", "#343434", "#696969",
  "#FF0000", "#FF6600", "#FFCC00",
  "#00AA00", "#0055CC", "#5754DE",
  "#800080", "#FF69B4", "#FFFFFF",
];

export default function PostagemPage() {
  const [tipo, setTipo] = useState<TipoPostagem>("geral");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formik = useFormik({
    initialValues: {
      titulo: "",
      mensagem: "",
      pacientes: "",
    },
    validationSchema: Yup.object({
      titulo: Yup.string()
        .max(150, "Máximo de 150 caracteres")
        .required("Título é obrigatório"),
      mensagem: Yup.string().required("Mensagem é obrigatória"),
      pacientes: Yup.string().when([], {
        is: () => tipo === "individual",
        then: (schema) => schema.required("Informe ao menos um paciente"),
        otherwise: (schema) => schema.optional(),
      }),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitError("");
      setSubmitSuccess(false);

      try {
        // Token e ID do dentista armazenados no localStorage após o login
        const dentistaId = Number(localStorage.getItem("dentista_id"));

        if (tipo === "individual") {
          const pacienteIds = values.pacientes
            .split(",")
            .map((s) => parseInt(s.trim(), 10))
            .filter((n) => !isNaN(n));

          await criarPostagemIndividual({
            titulo: values.titulo,
            mensagem: values.mensagem,
            dentista: dentistaId,
            pacientes: pacienteIds,
          });
        } else {
          const formData = new FormData();
          formData.append("titulo", values.titulo);
          formData.append("mensagem", values.mensagem);
          formData.append("dentista", String(dentistaId));
          if (imageFile) {
            formData.append("imagem", imageFile);
          }

          await criarPostagemGeral(formData);
        }

        setSubmitSuccess(true);
        setShowPopUp(true);
        resetForm();
        if (editorRef.current) editorRef.current.innerHTML = "";
        setImagePreview(null);
        setImageFile(null);
        setTimeout(() => setSubmitSuccess(false), 3000);
      } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } } };
        setSubmitError(
          err.response?.data?.message ?? "Erro ao enviar postagem. Tente novamente."
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  const syncEditor = useCallback(() => {
    if (editorRef.current) {
      formik.setFieldValue("mensagem", editorRef.current.innerHTML);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const applyFormat = (command: string, value?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
    syncEditor();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleTipoChange = (novoTipo: TipoPostagem) => {
    setTipo(novoTipo);
    setImagePreview(null);
    setImageFile(null);
    formik.setFieldValue("pacientes", "");
    formik.setFieldTouched("pacientes", false);
  };

  return (
    <>
    <main className="flex justify-center pt-8 pb-8">
      <PopUpMensagem título="Mensagem enviada com sucesso!" isVisible={showPopUp} toggleModal={() => setShowPopUp(false)} />
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex w-184 flex-col items-center gap-5.5 border-2 border-[#696969] rounded-lg px-6 pt-4.5"
      >
        {/* Toggle tipo */}
        <div className="flex items-center justify-center gap-7.5 h-14.75 w-full">
          <button
            type="button"
            onClick={() => handleTipoChange("geral")}
            className={`pt-4.75 pb-4.75 pl-23 pr-23 border-0 rounded-lg transition-colors ${
              tipo === "geral"
                ? "text-[#5754DE] bg-[#E1E0FF]"
                : "bg-[#F2F2F2] text-[#696969]"
            }`}
          >
            Postagem geral
          </button>
          <button
            type="button"
            onClick={() => handleTipoChange("individual")}
            className={`pt-4.75 pb-4.75 pl-23 pr-23 border-0 rounded-lg transition-colors ${
              tipo === "individual"
                ? "text-[#5754DE] bg-[#E1E0FF]"
                : "bg-[#F2F2F2] text-[#696969]"
            }`}
          >
            Postagem individual
          </button>
        </div>

        <div className="flex flex-col w-full gap-3.5">
          {/* Upload de imagem — apenas para postagem geral */}
          {tipo === "geral" && (
            <label className="bg-[#F2F2F2] flex flex-col justify-center items-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer overflow-hidden">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview da imagem"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <p className="text-center font-lato text-4.5 font-bold text-[#696969]">
                    Fazer upload de imagem
                  </p>
                  <p className="text-center font-lato text-4.5 font-semibold text-[#696969]">
                    (720 x 200)
                  </p>
                </>
              )}
            </label>
          )}

          {/* Seleção de pacientes — apenas para postagem individual */}
          {tipo === "individual" && (
            <div className="flex flex-col gap-1">
              <div className="flex w-full border-2 border-[#B5B5B5] rounded-lg h-13 pl-5 pr-5 items-center bg-[#F2F2F2]">
                <input
                  type="text"
                  placeholder="IDs dos pacientes separados por vírgula (ex: 1, 2, 5)"
                  {...formik.getFieldProps("pacientes")}
                  className="w-full font-lato text-4.5 text-[#343434] placeholder:text-[#B5B5B5] bg-transparent outline-none"
                />
              </div>
              {formik.touched.pacientes && formik.errors.pacientes && (
                <p className="text-red-500 text-sm pl-1">
                  {formik.errors.pacientes}
                </p>
              )}
            </div>
          )}

          {/* Título */}
          <div className="flex flex-col gap-1">
            <div className="flex w-full border-2 border-[#B5B5B5] rounded-lg h-13 pl-5 pr-5 items-center bg-[#F2F2F2]">
              <input
                type="text"
                placeholder="Título"
                maxLength={150}
                {...formik.getFieldProps("titulo")}
                className="w-full font-lato text-4.5 text-[#343434] placeholder:text-[#B5B5B5] bg-transparent outline-none"
              />
            </div>
            {formik.touched.titulo && formik.errors.titulo && (
              <p className="text-red-500 text-sm pl-1">
                {formik.errors.titulo}
              </p>
            )}
          </div>

          {/* Editor de texto rico */}
          <div className="flex flex-col gap-1">
            <div
              ref={editorRef}
              contentEditable
              suppressContentEditableWarning
              onInput={syncEditor}
              onBlur={() => formik.setFieldTouched("mensagem", true)}
              data-placeholder="Mensagem"
              className="w-full min-h-48 pt-3.5 pb-3.5 pl-5 pr-5 border-2 border-[#B5B5B5] rounded-lg bg-[#F2F2F2] font-lato text-[18px] text-[#343434] outline-none overflow-hidden
                empty:before:content-[attr(data-placeholder)] empty:before:text-[#B5B5B5] empty:before:pointer-events-none"
            />
            {formik.touched.mensagem && formik.errors.mensagem && (
              <p className="text-red-500 text-sm pl-1">
                {formik.errors.mensagem}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex w-[calc(100%+3rem)] border-t-2 border-[#696969] -mx-6 px-6 items-center justify-between min-h-20.5 rounded-b-lg self-stretch py-3">
          {/* Botões de formatação */}
          <div className="flex gap-3 items-center relative">
            {/* Negrito */}
            <button
              type="button"
              onClick={() => applyFormat("bold")}
              title="Negrito"
              className="p-1.5 rounded hover:bg-[#E1E0FF] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <mask id="mask0_bold" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_bold)">
                  <path d="M6.7998 19V5H12.3248C13.4081 5 14.4081 5.33333 15.3248 6C16.2415 6.66667 16.6998 7.59167 16.6998 8.775C16.6998 9.625 16.5081 10.2792 16.1248 10.7375C15.7415 11.1958 15.3831 11.525 15.0498 11.725C15.4665 11.9083 15.929 12.25 16.4373 12.75C16.9456 13.25 17.1998 14 17.1998 15C17.1998 16.4833 16.6581 17.5208 15.5748 18.1125C14.4915 18.7042 13.4748 19 12.5248 19H6.7998ZM9.82481 16.2H12.4248C13.2248 16.2 13.7123 15.9958 13.8873 15.5875C14.0623 15.1792 14.1498 14.8833 14.1498 14.7C14.1498 14.5167 14.0623 14.2208 13.8873 13.8125C13.7123 13.4042 13.1998 13.2 12.3498 13.2H9.82481V16.2ZM9.82481 10.5H12.1498C12.6998 10.5 13.0998 10.3583 13.3498 10.075C13.5998 9.79167 13.7248 9.475 13.7248 9.125C13.7248 8.725 13.5831 8.4 13.2998 8.15C13.0165 7.9 12.6498 7.775 12.1998 7.775H9.82481V10.5Z" fill="#343434" />
                </g>
              </svg>
            </button>

            {/* Itálico */}
            <button
              type="button"
              onClick={() => applyFormat("italic")}
              title="Itálico"
              className="p-1.5 rounded hover:bg-[#E1E0FF] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <mask id="mask0_italic" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_italic)">
                  <path d="M5 19V16.5H9L12 7.5H8V5H18V7.5H14.5L11.5 16.5H15V19H5Z" fill="#343434" />
                </g>
              </svg>
            </button>

            {/* Sublinhado */}
            <button
              type="button"
              onClick={() => applyFormat("underline")}
              title="Sublinhado"
              className="p-1.5 rounded hover:bg-[#E1E0FF] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <mask id="mask0_underline" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_underline)">
                  <path d="M5 21V19H19V21H5ZM12 17C10.3167 17 8.89583 16.4375 7.7375 15.3125C6.57917 14.1875 6 12.8 6 11.15V3H8.5V11.15C8.5 12.1167 8.82917 12.9375 9.4875 13.6125C10.1458 14.2875 10.9833 14.625 12 14.625C13.0167 14.625 13.8542 14.2875 14.5125 13.6125C15.1708 12.9375 15.5 12.1167 15.5 11.15V3H18V11.15C18 12.8 17.4208 14.1875 16.2625 15.3125C15.1042 16.4375 13.6833 17 12 17Z" fill="#343434" />
                </g>
              </svg>
            </button>

            {/* Cor do texto */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowColorPicker((v) => !v)}
                title="Cor do texto"
                className="p-1.5 rounded hover:bg-[#E1E0FF] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <mask id="mask0_color" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_color)">
                    <path d="M2 24V20H22V24H2ZM5.5 17L10.75 3H13.25L18.5 17H16.1L14.85 13.4H9.2L7.9 17H5.5ZM9.9 11.4H14.1L12.05 5.6H11.95L9.9 11.4Z" fill="#343434" />
                  </g>
                </svg>
              </button>

              {showColorPicker && (
                <div className="absolute bottom-11 left-0 bg-white border border-[#B5B5B5] rounded-lg p-3 grid grid-cols-4 gap-3 shadow-lg z-20  w-44">
                  {CORES_TEXTO.map((cor) => (
                    <button
                      key={cor}
                      type="button"
                      onClick={() => {
                        applyFormat("foreColor", cor);
                        setShowColorPicker(false);
                      }}
                      title={cor}
                      className="w-7 h-7 rounded border border-gray-200 hover:scale-110 transition-transform"
                      style={{ backgroundColor: cor }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Feedback + botão enviar */}
          <div className="flex flex-col items-end gap-1">
            {submitError && (
              <p className="text-red-500 text-sm text-right max-w-48">{submitError}</p>
            )}
            {submitSuccess && (
              <p className="text-green-600 text-sm">Postagem enviada com sucesso!</p>
            )}
            <div className="w-31">
              <BotaoEntrar
                texto={formik.isSubmitting ? "Enviando..." : "Enviar"}
                cheio={true}
                onClick={() => formik.handleSubmit()}
              />
            </div>
          </div>
        </div>
      </form>
    </main>
    </>
  );
}
