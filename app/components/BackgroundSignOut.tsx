export default function BackgroundSignOut({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#d4d5f0]">
      <div className="absolute w-[140%] h-75 rounded bg-[#9ea0ffd8] -top-5 " />
      <div className="absolute w-[140%] h-75 rounded bg-[#b6b9ff] -bottom-5 " />
      <img src="/Motta.png" alt="Motta" className="absolute bottom-25 left-0 h-70 "></img>

      <div className="relative z-10">
        {children}
      </div>
    </main>
  )
}