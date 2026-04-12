"use client" 

// Necessário para o ajuste de tamanho de placholder para o textarea
import { useRef } from "react";
import BotaoEntrar from "@/app/components/BotaoEntrar";

export default function HomePage() {
  return <main className="flex justify-center pt-8">
    <div className="bg-white flex w-184 h-172.75 px-6 py-4.5 flex-col items-center gap-5.5 self-stretch border-2 border-[#696969] rounded-lg">
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
      <div className="flex w-[calc(100%+3rem)] border-t-2 border-[#696969] -mx-6 -mb-6 px-6 items-center justify-between h-20.5 rounded-b-lg self-stretch">
        <div className="gap-3 flex items-center bg-amber-700"> 
          <button className="bg-amber-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <mask id="mask0_7341_1622" style={{ maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_7341_1622)">
              <path d="M2 24V20H22V24H2ZM5.5 17L10.75 3H13.25L18.5 17H16.1L14.85 13.4H9.2L7.9 17H5.5ZM9.9 11.4H14.1L12.05 5.6H11.95L9.9 11.4Z" fill="#343434"/>
              </g>
            </svg>
          </button>
          <button className="bg-amber-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <mask id="mask0_7341_1625" style={{ maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_7341_1625)">
                <path d="M5 19V16.5H9L12 7.5H8V5H18V7.5H14.5L11.5 16.5H15V19H5Z" fill="#343434"/>
              </g>
            </svg>
          </button> 
          <button className="bg-amber-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <mask id="mask0_7341_1628" style={{ maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_7341_1628)">
                <path d="M6.7998 19V5H12.3248C13.4081 5 14.4081 5.33333 15.3248 6C16.2415 6.66667 16.6998 7.59167 16.6998 8.775C16.6998 9.625 16.5081 10.2792 16.1248 10.7375C15.7415 11.1958 15.3831 11.525 15.0498 11.725C15.4665 11.9083 15.929 12.25 16.4373 12.75C16.9456 13.25 17.1998 14 17.1998 15C17.1998 16.4833 16.6581 17.5208 15.5748 18.1125C14.4915 18.7042 13.4748 19 12.5248 19H6.7998ZM9.82481 16.2H12.4248C13.2248 16.2 13.7123 15.9958 13.8873 15.5875C14.0623 15.1792 14.1498 14.8833 14.1498 14.7C14.1498 14.5167 14.0623 14.2208 13.8873 13.8125C13.7123 13.4042 13.1998 13.2 12.3498 13.2H9.82481V16.2ZM9.82481 10.5H12.1498C12.6998 10.5 13.0998 10.3583 13.3498 10.075C13.5998 9.79167 13.7248 9.475 13.7248 9.125C13.7248 8.725 13.5831 8.4 13.2998 8.15C13.0165 7.9 12.6498 7.775 12.1998 7.775H9.82481V10.5Z" fill="#343434"/>
              </g>
            </svg>
          </button>   
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13.5 9C13.9167 9 14.2708 8.85417 14.5625 8.5625C14.8542 8.27083 15 7.91667 15 7.5C15 7.08333 14.8542 6.72917 14.5625 6.4375C14.2708 6.14583 13.9167 6 13.5 6C13.0833 6 12.7292 6.14583 12.4375 6.4375C12.1458 6.72917 12 7.08333 12 7.5C12 7.91667 12.1458 8.27083 12.4375 8.5625C12.7292 8.85417 13.0833 9 13.5 9ZM6.5 9C6.91667 9 7.27083 8.85417 7.5625 8.5625C7.85417 8.27083 8 7.91667 8 7.5C8 7.08333 7.85417 6.72917 7.5625 6.4375C7.27083 6.14583 6.91667 6 6.5 6C6.08333 6 5.72917 6.14583 5.4375 6.4375C5.14583 6.72917 5 7.08333 5 7.5C5 7.91667 5.14583 8.27083 5.4375 8.5625C5.72917 8.85417 6.08333 9 6.5 9ZM10 15.5C11.1333 15.5 12.1625 15.1792 13.0875 14.5375C14.0125 13.8958 14.6833 13.05 15.1 12H4.9C5.31667 13.05 5.9875 13.8958 6.9125 14.5375C7.8375 15.1792 8.86667 15.5 10 15.5ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#343434"/>
            </svg>
          </button>
        </div>
        <div className="w-31">
        <BotaoEntrar texto="Enviar" cheio={true} ></BotaoEntrar>
        </div>  
      </div>
    </div>
  </main>;
}
