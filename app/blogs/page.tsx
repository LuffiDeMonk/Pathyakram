import Banner from '@/components/Banner'
import BlogWrapper from '@/components/blogs/BlogWrapper'
import React from 'react'

export default function page() {
    return (
        <>
            <Banner isMainpage={false} />
            <BlogWrapper />
        </>
    )
}
