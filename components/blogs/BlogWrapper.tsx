import React from 'react'
import NewsCard from '../NewsCard'

export default function BlogWrapper() {
    return (
        <div className=" max-w-screen-lg mx-auto my-5 px-3 lg:px-0">
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    )
}
