'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SemesterCard({ semesterCount, slug }: { semesterCount: number, slug?: string[] }) {
    const path = usePathname();
    return (
        <Link href={`${path}/${semesterCount + 1}`} className='px-2 py-6 bg-green-600'>
            <h2 className='text-xl font-semibold text-white text-center'>
                {semesterCount + 1 === 1 ? "1st Semester" : semesterCount + 1 === 2 ? "2nd Semester" : semesterCount + 1 === 3 ? "3rd Semester" : `${semesterCount + 1}th Semester`}
            </h2>
        </Link>
    )
}
