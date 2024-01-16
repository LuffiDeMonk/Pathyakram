import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

type UniversityProps = {
    name: string;
    location: string;
    established_year: number;
    affiliation: string;
}

export default function UniversityCard({ university }: { university: UniversityProps }) {
    return (
        <Link href={`/university/${university.name}`} className='p-2 border-2 border-green-600 w-full flex gap-2 h-24'>
            <Image src='/TUlogo.svg' width={50} height={50} alt='logo' className="object-contain" />
            <div className="flex flex-col justify-center">
                <h1 className='text-md font-bold text-green-700'>{university.name}</h1>
                <p className='text-sm text-green-700'>{university.location}</p>
            </div>
        </Link>
    )
}
