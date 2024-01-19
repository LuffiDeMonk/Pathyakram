import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PageNotFound() {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center">
            <Image src="/not-found.svg" width={300} height={300} alt='404 page not found' className='w-[30rem] h-[30rem] object-contain' />
            <Link href='/' className='py-2 px-4 rounded-full bg-green-600 text-white mb-10'>Back to home</Link>
        </section>
    )
}
