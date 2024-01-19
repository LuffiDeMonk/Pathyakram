'use client'

import React, { useMemo, useState } from 'react'
import UniversityCard from './UniversityCard'
import { universities } from '@/constant';
import Error from '../Warning';

// const getUniversityData = async () => {
//     const response = await fetch('https://jsonkeeper.com/b/YITK/universities');
//     if (!response.ok) {
//         throw new Error('Data not found')
//     }
//     return response.json()
// }

type UniversityData = {
    name: string;
    location: string;
    established_year: number;
    affiliation: string;
}

export default function UniversityContainer() {
    // const data: UniversityData[] = await getUniversityData();
    const [search, setSearch] = useState('')
    let filteredUniversity = useMemo(() => universities.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())), [search])

    return (
        <>
            <div className='flex flex-col gap-3 md:gap-0 md:flex-row md:items-center md:justify-between'>
                <h1 className='text-xl font-semibold text-green-500'>University</h1>
                <input onChange={e => setSearch(e.target.value)} type="text" placeholder='Search for available university' className='px-5 py-2 rounded-full w-full md:w-80 border-2 border-gray-300 outline-none focus:outline-none' />
            </div>
            <div className='min-h-[60vh]'>
                {
                    filteredUniversity.length === 0 ? <Error height='h-[60vh]' /> : (
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-32">
                            {
                                filteredUniversity.map((item) => (
                                    <React.Fragment key={item.established_year}>
                                        <UniversityCard university={item} />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    )
                }
            </div>

        </>
    )
}
