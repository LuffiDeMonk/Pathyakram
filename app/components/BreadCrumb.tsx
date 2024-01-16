'use client'
import React from 'react'
import useSWR from 'swr'
import { usePathname } from 'next/navigation'
import ChevronDoubleIcon from './icons/ChevronDoubleIcon'
import Image from 'next/image'

const getUniversityDetails = async (params: string) => {
    const response = await fetch(`http://localhost:8000${params}`);
    if (!response.ok) {
        throw new Error('Error while fetching logo')
    }
    return response.json()
}


export default function BreadCrumb() {
    const path = usePathname()
    const universityName = path.split('/')[2]

    const { data, isLoading } = useSWR(`/universities?name=${universityName}`, getUniversityDetails, {
        refreshWhenHidden: false,
    })

    if (isLoading) {
        return <div className="h-24"></div>
    }

    if (data?.length === 0 || !data) {
        return <div className='mb-6'></div>
    }

    return (
        <div className='mb-6 flex items-center flex-wrap gap-3'>

            {
                data?.length !== 0 &&
                (
                    <div className='border-2 border-green-600 p-2 flex gap-1'>
                        <Image src='/TUlogo.svg' width={50} height={50} className='object-contain' alt='logo' />
                        <div className="flex flex-col justify-center">
                            <h1 className='text-md font-bold text-green-700'>{data[0].name}</h1>
                            <p className='text-sm text-green-700'>{data[0].location}</p>
                        </div>
                    </div>
                )
            }
            {
                path.split("/").slice(3, path.split('/').length).map((item) => (
                    <React.Fragment key={item}>
                        <ChevronDoubleIcon />
                        <p className='text-sm font-semibold text-green-600 capitalize'>{item.replaceAll("%20", " ")}</p>
                    </React.Fragment>
                ))
            }
        </div>
    )
}
