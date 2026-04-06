"use client" 
// Necessário para o ajuste de tamanho de placholder para o textarea


export default function HomePage() {
  return <main className="flex justify-center pt-8">
    <div className="bg-white flex w-184 h-170.75 px-6 py-4.5 flex-col items-center gap-5.5 self-stretch border-2 border-[#696969] rounded-lg">
      {/* Filtro de postagem */}
      <div className="flex items-center justify-center self-strech gap-7.5 h-14.75 w-full">
        <button className="pt-4.75 pb-4.75 pl-23 pr-23 border-0 rounded-lg text-[#5754DE] bg-[#E1E0FF]">Postagem geral</button>
        <button className="pt-4.75 pb-4.75 pl-23 pr-23 border-0 rounded-lg bg-[#F2F2F2] text-[#696969]">Postagem individual</button>
      </div>
      {/* imagem, título e Mensagem */}
      <div className="flex flex-col w-full gap-3.5">
        {/* Upload de imagem */}
        <label className="bg-[#F2F2F2] flex flex-col justify-center items-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer">
          <input type="file" accept="image/*" className="hidden" />
          <p className="text-center font-lato text-4.5 font-bold text-[#696969]">
            Fazer upload de imagem
          </p>
          <p className="text-center font-lato text-4.5 font-semibold text-[#696969]">
            (720 x 200)
          </p>
        </label>
        {/* Título */}
        <div className="flex w-full border-2 border-[#B5B5B5] rounded-lg h-13 pl-5 pr-5 items-center bg-[#F2F2F2] ">
          <input type="text" placeholder="Título" className="w-full font-lato text-4.5 text-[#B5B5B5]" />
        </div>
        {/* Mensagem */}
        <textarea
          placeholder="Mensagem"
          // Começa com 5 linha e aumenta comforme o input do usuário
          rows={8} 
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = target.scrollHeight + "px";
          }}
          className="w-full pt-3.5 pb-3.5 pl-5 pr-5 border-2 border-[#B5B5B5] rounded-lg bg-[#F2F2F2] font-lato text-[18px] text-[#B5B5B5] outline-none resize-none overflow-hidden"
        />
      </div>
      {/* Footer */}
      <div className="flex w-[calc(100%+3rem)] border-t-2 border-[#696969] -mx-6 px-6">
        Teste
      </div>
    </div>
  </main>;
}
