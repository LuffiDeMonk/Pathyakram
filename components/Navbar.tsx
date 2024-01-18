'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MobileNavigation from './MobileNavigation'
import BarIcon from './icons/BarIcon'
import { Navlinks } from '@/constant'




export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className={`sticky top-0 z-10 w-full py-4 px-2 transition-colors duration-300 bg-green-600 text-white shadow-xl`}>
            <section className='max-w-screen-lg mx-auto flex items-center justify-between outline-none focus:outline-none'>
                <Link href='/'>
                    <h1 className="text-2xl font-bold">Pathyakrama</h1>
                </Link>

                {/* navlnks for desktop menu */}
                <ul className='hidden md:flex items-center gap-10'>
                    {
                        Navlinks.map((item) => (
                            <Link href={item.link} key={item.id}>
                                <li className='text-md'>{item.name}</li>
                            </Link>
                        ))
                    }
                </ul>

                {/* hamburger icon for mobile devices */}
                <button onClick={() => setOpen(true)} className='outline-none focus:outline-none md:hidden'>
                    <BarIcon />
                </button>

                {/* mobile menu */}
                <MobileNavigation open={open} setOpen={setOpen} />

            </section>
        </nav>
    )
}
