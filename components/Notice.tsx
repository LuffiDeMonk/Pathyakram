import Image from 'next/image'
import React from 'react'
import NewsCard from './NewsCard'

export default function Notice() {
    return (
        <div className='max-w-screen-lg mx-auto mt-10 pb-6 px-3 lg:px-0'>
            <h1 className='text-xl font-semibold text-green-500 mb-4'>Recent Blogs</h1>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    )
}
