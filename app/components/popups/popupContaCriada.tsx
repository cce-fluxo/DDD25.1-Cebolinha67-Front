'use client'

import React from 'react';
import BotaoEntrar from '../componentes-do-arthur/BotaoEntrar';
import Image from 'next/image';

interface PopUpProps {
    título: string;
    BotaoTexto: string;
    onPressBotao: () => void;
    isVisible: boolean;
    toggleModal: () => void;
    children?: React.ReactNode;
}

export default function PopUp({
    título,
    BotaoTexto,
    onPressBotao,
    isVisible,
    toggleModal
}: PopUpProps) {

    if (!isVisible) return null;

    return (
        <div 
            className="fixed inset-0 flex items-center justify-center bg-black/50 p-7"
            onClick={toggleModal}
        >
            <div className='bg-white text-[#5754DE] gap-2 flex flex-col items-center justify-center rounded-lg p-4 h-auto'>
                <div className='text-2xl items-center justify-center'>
                 {título}
                 <Image src={"/popupMulherCheck.png"} alt='pop-up-mulher' width={80} height={80} className='mx-auto'></Image>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}