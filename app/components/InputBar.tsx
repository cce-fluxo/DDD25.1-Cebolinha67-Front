import { useState } from "react"

interface InputBarProps {
  type?: string
  placeholder?: string
  onSubmit?: (value: string) => void
}

export default function InputBar({ type = "text", placeholder = "Digite...", onSubmit }: InputBarProps) {
  const [value, setValue] = useState("")

  const handleSubmit = () => {
    if (!value.trim()) return
    onSubmit?.(value)
    setValue("")
  }

  return (
    <div className="border border-gray-300 rounded-lg px-4 py-2 text-zinc-800 ">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm text-zinc-800 placeholder:text-zinc-400 outline-none"
      />
    </div>
  )
}