'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import BannerSearchInput from './BannerSearchInput'

type Props = {
    isMainpage: boolean
}

export default function Banner({ isMainpage }: Props) {
    const path = usePathname()
    return (
        <section
            className="h-[70vh] bg-cover relative"
            style={{
                backgroundImage: 'url(/Banner.jpg)'
            }}>

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* search container */}
            {isMainpage ?
                (<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex gap-5 flex-col items-center">
                    <h1 className='text-2xl md:text-4xl text-center text-white font-semibold'>What Are You Looking For?</h1>
                    <p className='text-center text-white w-full text-xs sm:text-base md:w-[30rem] lg:w-[35rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni optio molestias iusto, obcaecati tempora rem, .</p>
                    <BannerSearchInput />
                </div>) :
                (<div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full">
                    <h1 className='text-2xl md:text-6xl text-center text-white font-semibold capitalize'>{path.split('/')[1]}</h1>
                </div>
                )}

        </section>
    )
}
