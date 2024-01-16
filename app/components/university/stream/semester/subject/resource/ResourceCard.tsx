'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function ResourceCard({ title, link }: { title: string, link: string }) {
    const path = usePathname();
    return (
        <Link href={`/syllabus
        `} className='px-2 py-6 bg-green-600'>
            <h2 className='text-xl font-semibold text-white text-center'>{title}</h2>
        </Link>
    )
}
