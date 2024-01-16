import React from 'react'
import SemesterCard from './SemesterCard'



export default function SemesterContainer({ slug }: { slug: string[] }) {
    return (
        <>
            <h1 className='text-xl font-semibold text-green-500'>Semesters</h1>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-8">
                {
                    Array(8).fill(0).map((_, idx) => (
                        <React.Fragment key={idx} >
                            <SemesterCard semesterCount={idx} slug={slug} />
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}
