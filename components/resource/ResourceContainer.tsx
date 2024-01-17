import React from 'react'
import ResourceCard from './ResourceCard'


const ResourceLinks = [
    {
        id: 1,
        title: 'Syllabus',
        link: '/syllabus/syllabusId'
    },
    {
        id: 2,
        title: "Question Bank",
        link: '/question-bank/question-bank-id'
    },
    {
        id: 3,
        title: 'Notes',
        link: '/'
    }
]

export default function ResourceContainer() {
    return (
        <>
            <h1 className='text-xl font-semibold text-green-500'>Resources</h1>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2 mb-20">
                {
                    ResourceLinks.map((item) => (
                        <React.Fragment key={item.id}>
                            <ResourceCard title={item.title} link={item.link} />
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}
