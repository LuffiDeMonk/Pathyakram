import React from 'react'
import UniversityCard from './UniversityCard'
import { type } from 'os';

const getUniversityData = async () => {
    const response = await fetch('http://localhost:8000/universities');
    if (!response.ok) {
        throw new Error('Data not found')
    }
    return response.json()
}

type UniversityData = {
    name: string;
    location: string;
    established_year: number;
    affiliation: string;
    id: string;
}

export default async function UniversityContainer() {
    const data: UniversityData[] = await getUniversityData();
    return (
        <>
            <h1 className='text-xl font-semibold text-green-500'>University</h1>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-8">
                {
                    data.map((item) => (
                        <React.Fragment key={item.id}>
                            <UniversityCard university={item} />
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}
