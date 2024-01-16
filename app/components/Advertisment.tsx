import React from 'react'

export default function Advertisment() {
    return (
        <section className='max-w-screen-lg mx-auto py-10 px-3 lg:px-0 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div className='w-full bg-gray-400 text-white border-2 border-gray-400 min-h-48 flex flex-col items-center justify-center gap-3 shadow-xl'>
                <p className='text-5xl font-extrabold'>30+</p>
                <h3 className='text-xl font-semibold'>Universities</h3>
            </div>
            <div className='w-full bg-gray-400 text-white border-2 border-gray-400 min-h-48 flex flex-col items-center justify-center gap-3 shadow-xl'>
                <p className='text-5xl font-extrabold'>200+</p>
                <h3 className='text-xl font-semibold'>Syllabus</h3>
            </div>
            <div className='w-full bg-gray-400 text-white border-2 border-gray-400 min-h-48 flex flex-col items-center justify-center gap-3 shadow-xl'>
                <p className='text-5xl font-extrabold'>400+</p>
                <h3 className='text-xl font-semibold'>Notes</h3>
            </div>
            <div className='w-full bg-gray-400 text-white border-2 border-gray-400 min-h-48 flex flex-col items-center justify-center gap-3 shadow-xl'>
                <p className='text-5xl font-extrabold'>200+</p>
                <h3 className='text-xl font-semibold'>Old Questions</h3>
            </div>

        </section>
    )
}
