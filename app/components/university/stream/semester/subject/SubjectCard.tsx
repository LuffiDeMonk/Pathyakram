'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SubjectCard({ subject }: { subject: string }) {
    const path = usePathname();
    return (
        <Link href={`${path}/${subject}`} className='px-2 py-6 bg-green-600'>
            <h2 className='text-xl font-semibold text-white text-center'>{subject}</h2>
        </Link>
    )
}
