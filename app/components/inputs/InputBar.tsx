"use client"
interface InputBarProps {
  type?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

export default function InputBar({ type = "", placeholder = "", value, onChange }: InputBarProps) {
  return (
    <div className="flex w-full px-3.5 py-2.5 justify-between items-center rounded-[10px] border-[1.5px] border-[#B5B5B5]">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm text-zinc-800 placeholder:text-zinc-400 outline-none"
      />
    </div>
  )
}