import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type UniversityData = {
    name: string;
    location: string;
    established_year: number;
    affiliation: string;
    id: string;
}



export default function Slide({ slide }: { slide: UniversityData }) {
    return (
        <Link href={`university/${slide.name}`} className='p-2 border-2 border-green-600 w-full flex gap-5'>
            <Image src='/TUlogo.svg' width={50} height={50} alt='logo' className="object-contain" />
            <div className="flex flex-col justify-center">
                <h1 className='text-md font-bold text-green-700 line-clamp-1'>{slide.name}</h1>
                <p className='text-sm text-green-700'>{slide.location}</p>
            </div>
        </Link>
    )
}
