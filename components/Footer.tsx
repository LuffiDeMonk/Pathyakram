import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Navlinks } from '@/constant'

export default function Footer() {
    return (
        <section className='bg-gray-100 pt-20 pb-4'>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto px-3 lg:px-0">
                <div>
                    <h1 className='text-2xl sm:text-4xl font-extrabold'>Pathyakrama</h1>
                    <p className='text-sm mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam adipisci obcaecati dolores eos, ?</p>
                </div>
                {/* links */}
                <div>
                    <h2 className='text-3xl font-extrabold mb-3'>Important Links</h2>
                    <ul className='flex flex-col gap-2 text-lg'>
                        {
                            Navlinks.map((item) => (
                                <Link href={item.link} key={item.id}>
                                    {item.name}
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                {/* social icons */}
                <div>
                    <h2 className='text-3xl font-extrabold mb-3'>Social</h2>
                    <div className="flex items-center gap-4">
                        <Image src='/facebook.svg' width={30} height={30} alt='facebook' />
                        <Image src='/instagram.svg' width={30} height={30} alt='instagram' />
                        <Image src='/twitter.svg' width={30} height={30} alt='twitter' />
                    </div>
                </div>
            </div>
            <div className="mt-7 text-xs text-center font-light">Pathyakarma &#169; {new Date().getFullYear()}</div>
        </section>
    )
}
