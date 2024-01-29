import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Navlinks } from '@/constant'

export default function Footer() {
    return (
        <section className='bg-gray-50 pt-20 pb-4 text-green-600'>
            <div className="max-w-screen-lg mx-auto flex flex-wrap justify-between gap-10 px-3 lg:px-0">
                <div className='max-w-72'>
                    <h1 className='text-2xl sm:text-4xl font-extrabold text-green-600'>Pathyakrama</h1>
                    <p className='text-sm mt-3 text-green-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam adipisci obcaecati dolores eos, ?</p>
                </div>
                {/* links */}
                <div>
                    <h2 className='text-3xl font-extrabold mb-3'>Important Links</h2>
                    <ul className='flex flex-col gap-2 text-sm'>
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
                        <Image src='/facebook.svg' width={30} height={20} alt='facebook' />
                        <Image src='/instagram.svg' width={30} height={20} alt='instagram' />
                        <Image src='/twitter.svg' width={30} height={20} alt='twitter' />
                    </div>
                </div>
                {/* blog images */}
                <div className="flex flex-col gap-2">
                    <h2 className='text-3xl font-extrabold mb-3'>Blogs</h2>
                    <div className="flex gap-2 flex-wrap max-w-40">
                        <Image src='/Banner.jpg' width={50} height={50} alt="blog" />
                        <Image src='/Banner.jpg' width={50} height={50} alt="blog" />
                        <Image src='/Banner.jpg' width={50} height={50} alt="blog" />
                        <Image src='/Banner.jpg' width={50} height={50} alt="blog" />
                    </div>
                </div>
            </div>
            <div className="mt-7 text-xs text-center font-light">Pathyakarma &#169; {new Date().getFullYear()}</div>
        </section>
    )
}
