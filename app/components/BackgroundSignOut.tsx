import React from 'react'

export default function BackgroundSignOut({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex w-screen h-screen items-center justify-center bg-indigo-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-434 0 2250 900" 
        fill="none"
        className="absolute top-10 z-0 w-640 h-300 " // pra mudar o quanto a onda se extende, muda, muda aqui 
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1773.35 237.778C1171.6 839.523 182.195 853.973 -434 237.778L-196.222 0C286.694 482.916 1063.18 472.391 1535.57 0L1773.35 237.778Z"
          fill="#E1E0FF"
        />
      </svg>

      <img src="/Motta.png" alt="Motta" className="absolute bottom-30 left-0 h-70 z-0" />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        {children}
      </div>
    </main>
  )
}