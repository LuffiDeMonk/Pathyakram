import Image from 'next/image'
import React from 'react'
import ArrowRight from './icons/ArrowRight'

export default function PlayWithAi() {
    return (
        <div className='hidden max-w-screen-lg mx-auto lg:flex items-center justify-between my-5'>
            <div className="flex flex-col gap-2">
                <h1 className='text-2xl text-green-600 font-bold'>Predict the question with
                    <span className='uppercase ml-2 text-7xl'>ai</span>
                </h1>
                <div className="w-fit border border-green-500 rounded-full text-green-600 flex items-center gap-2 px-4 py-1 cursor-pointer">
                    <p className='text-md'>Try Now</p>
                </div>
            </div>
            <Image src='/robot-doing-peace-sign.png' width={250} height={250} alt='robot doing peace sign' />
        </div>
    )
}
