

//export default function PopUpMensagem() {
//    return (
//        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-7">
//            <div className='bg-white text-[#5754DE] gap-4 flex flex-col items-center justify-center rounded-lg p-7'>
//                <div className='text-2xl'>
//                    menasagem enviada com sucesso!
//                </div>
//            </div>
//        </div>
//    )
//}

'use client'

import React from 'react';

interface PopUpProps {
    título: string;
    isVisible: boolean;
    toggleModal: () => void;
    children?: React.ReactNode;
}

export default function PopUp({
    título,
    isVisible,
    toggleModal,
}: PopUpProps) {

    if (!isVisible) return null;

    return (
        <div 
            className="fixed inset-0 flex items-center justify-center bg-black/50 p-7"
            onClick={toggleModal}
        >
            <div className='bg-white text-[#5754DE] gap-4 flex flex-col items-center justify-center rounded-lg p-7'>
                <div className='text-2xl'>
                    {título}
                </div>
            </div>
        </div>
    )
}

