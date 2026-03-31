export default function BackgroundSignOut({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#d4d5f0]">
      <div className="absolute w-[140%] h-75 rounded-[50%] bg-[#4245e7af] -bottom-25 left-[-20%]" />
      <div className="absolute w-[140%] h-75 rounded-[50%] bg-[#7e82e9] -bottom-5 left-[-20%]" />
      <img src="/Motta.png" alt="Motta" className="absolute bottom-30 left-0 h-70 "></img>

      <div className="relative z-10">
        {children}
      </div>
    </main>
  )
}