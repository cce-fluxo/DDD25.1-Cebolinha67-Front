"use client"
interface InputBarProps {
  type?: string
  placeholder?: string
  value: string
  name?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onBlur: React.FocusEventHandler<HTMLInputElement>
}

export default function InputBar({ type = "", placeholder = "", value, name, onChange,onBlur }: InputBarProps) {
  return (
    <div className="flex w-full px-3.5 py-2.5 justify-between items-center rounded-[10px] border-[1.5px] border-[#B5B5B5]">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm text-zinc-800 placeholder:text-zinc-400 outline-none"
      />
    </div>
  )
}