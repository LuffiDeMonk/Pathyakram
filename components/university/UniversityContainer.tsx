'use client'

import React from 'react'
import UniversityCard from './UniversityCard'
import { universities } from '@/constant';
import Error from '../Warning';
import SearchInput from '../SearchInput';

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

export default function UniversityContainer({ search }: { search: string }) {
    // const data: UniversityData[] = await getUniversityData();
    let filteredUniversity = universities.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <div className='flex flex-col gap-3 md:gap-0 md:flex-row md:items-center md:justify-between'>
                <h1 className='text-xl font-semibold text-green-500'>University</h1>
                <SearchInput />
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
