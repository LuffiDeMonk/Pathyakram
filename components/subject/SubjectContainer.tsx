import React from 'react'
import SubjectCard from './SubjectCard'
import { subjects } from '@/constant';
import Error from '../Warning';

// const getSubject = async (stream: string) => {
//     const response = await fetch(`http://localhost:8000/subjects?stream=${stream}`)
//     if (!response.ok) {
//         throw new Error('No data found')
//     }
//     return response.json()
// }

interface ResponseType {
    stream: string;
    semesterSubject: [
        {
            semesterNumber: number,
            subjects: string[]
        }
    ]
}

export default async function SubjectContainer({ slug }: { slug: string[] }) {
    // const data: ResponseType[] = await getSubject(slug[1])
    const semesterIndex = parseInt(slug[2])

    let data = subjects.filter(item => item.stream === slug[1])


    if (data.length === 0) {
        return (
            <Error />
        )
    }

    return (
        <>
            <h1 className='text-xl font-semibold text-green-500'>Subjects</h1>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-8">
                {
                    data[0].semesterSubject[semesterIndex].subjects.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <SubjectCard subject={item} />
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}
