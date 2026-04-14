import React from 'react'

export default function BackgroundSignOut({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-indigo-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-434 0 2250 900"
        fill="none"
        preserveAspectRatio="none"
        className="fixed top-[20%] z-0 w-full h-auto"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1773.35 237.778C1171.6 839.523 182.195 853.973 -434 237.778L-196.222 0C286.694 482.916 1063.18 472.391 1535.57 0L1773.35 237.778Z"
          fill="#E1E0FF"
        />z
      </svg>

      <img src="/Motta.png" alt="Motta" className="fixed bottom-0 left-0 h-40 md:h-56 lg:h-70 z-0" />

      <div className="relative z-10 flex items-center justify-center w-full py-10">
        {children}
      </div>
    </main>
  )
}