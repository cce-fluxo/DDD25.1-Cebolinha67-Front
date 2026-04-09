"use client";

import { useState } from "react";

export default function ToggleLogin() {
  const [ativo, setAtivo] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => setAtivo(!ativo)}
        className={`relative flex h-9 w-16 items-center rounded-full border-2 transition
          ${ativo ? "border-[#5754DE] bg-[#5754DE]" : "border-[#5754DE] bg-white"}`}
      >
        <span
          className={`absolute h-6 w-6 rounded-full transition-all
            ${ativo ? "left-8.5 bg-white" : "left-1 bg-[#C7C6F5]"}`}
        />
      </button>

      <span className="text-center text-[15px] font-semibold text-black font-lato">
        Lembrar acesso
      </span>
    </div>
  );
}
