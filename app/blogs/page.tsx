import type { Metadata } from 'next'
import Banner from '@/components/Banner'
import BlogWrapper from '@/components/blogs/BlogWrapper'
import React from 'react'

export const metadata: Metadata = {
    title: "Pathyakrama | Blogs",
    description: "This page contains all the blogs related to educational notices and other information"
}

export default function page() {
    return (
        <>
            <Banner isMainpage={false} />
            <BlogWrapper />
        </>
    )
}
