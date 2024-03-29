'use client'

import React, { useMemo, useState } from 'react'
import StreamCard from './StreamCard'
import { streams } from '@/constant'
import Error from '../Warning'
import SearchInput from '../SearchInput'

type StreamData = {

    universityId: number,
    universityName: string,
    streams: string[],

}

// const getStreamData = async (universityName: string, filter?: string) => {
//     const response = await fetch(`https://jsonkeeper.com/b/YITK/universityStreams?universityName=${universityName}`);
//     if (!response.ok) {
//         throw new Error('No data found for the university')
//     }
//     return response.json()
// }

export default function StreamContainer({ universityName, searchParams }: { universityName: string[], searchParams: string }) {
    // const streamData: StreamData[] = await getStreamData(universityName[0])
    // if (streamData.length === 0) {
    //     return <h2>No data</h2>
    // }

    let filteredData = streams.filter((item) => item.universityName.toLowerCase() === universityName[0].replaceAll("%20", " ").toLowerCase())


    let filteredCourses = filteredData[0].streams.filter(item => item.toLowerCase().includes(searchParams.toLowerCase()))


    return (
        <>
            <div className='flex flex-col gap-3 md:gap-0 md:flex-row md:items-center md:justify-between'>
                <h1 className='text-xl font-semibold text-green-500'>Faculty</h1>
                <SearchInput />
            </div>
            <div className="min-h-[60vh]">
                {filteredCourses.length !== 0 ? (<>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-8">
                        {
                            filteredCourses.map((item, idx) => (
                                <React.Fragment key={idx}>
                                    <StreamCard stream={item} />
                                </React.Fragment>
                            ))
                        }

                    </div>
                </>) : (<Error height='h-[60vh]' />)}

            </div>
        </>
    )
}
