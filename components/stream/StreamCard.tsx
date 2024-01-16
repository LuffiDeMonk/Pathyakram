'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function StreamCard({ stream }: { stream: string }) {
    const path = usePathname();
    return (
        <Link href={`${path}/${stream}`} className='px-2 py-6 bg-green-600'>
            <h2 className='text-xl font-semibold text-white text-center'>{stream}</h2>
        </Link>
    )
}
