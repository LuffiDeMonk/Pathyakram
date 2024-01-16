import React from 'react'
import StreamCard from './StreamCard'
import { streams } from '@/constant'
import Error from '../Warning'

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

export default async function StreamContainer({ universityName }: { universityName: string[] }) {
    // const streamData: StreamData[] = await getStreamData(universityName[0])
    // if (streamData.length === 0) {
    //     return <h2>No data</h2>
    // }
    console.log(universityName[0].replaceAll("%20", ' '))

    let filteredData = streams.filter((item) => item.universityName.toLowerCase() === universityName[0].replaceAll("%20", " ").toLowerCase())


    if (filteredData.length === 0) {
        return (
            <Error />
        )
    }

    return (
        <>
            <div className='flex flex-col gap-3 md:gap-0 md:flex-row md:items-center md:justify-between'>
                <h1 className='text-xl font-semibold text-green-500'>Streams</h1>
                <form>
                    <input type="text" placeholder='Search for available courses' className='px-5 py-2 rounded-full w-full md:w-80 border-2 border-gray-300 outline-none focus:outline-none' />
                </form>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-8">
                {
                    filteredData[0]?.streams.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <StreamCard stream={item} />
                        </React.Fragment>
                    ))
                }

            </div>
        </>
    )
}
