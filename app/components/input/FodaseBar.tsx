"use client"

import React from 'react'
import {Formik} from 'formik'
import { type } from 'node:os';

interface InputBarProps{
  type?: string
  placeholder?: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  error?: string
  touched?: boolean
}

export default function InputBar({
  type = "text",
  placeholder = "", 
  name,
  value,
  onChange,
  onBlur,
  error,
  touched

}: InputBarProps){
  const temErro = touched && error

  return(
    <div className='flex flex-col gap-1'>
  <div className={`flex w-full px-3.5 py-2.5 justify-between items-center rounded-[2.5vh] border-2 ${temErro ? "border-red-500" : "border-[#B5B5B5]"}`}>
    <input 
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    placeholder={placeholder}
    className='flex-1 bg-transparent text-sm text-zinc-800 placeholder:text-zinc-400 outline-none'>
    </input>
  </div>
  {temErro && (
    <span className='text-xs text-red-500 px-1'>{error}</span>
  )}
    </div>
  )
}