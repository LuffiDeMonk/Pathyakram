import type { Metadata } from 'next'
import Banner from '@/components/Banner'
import RequestWrapper from '@/components/request/RequestWrapper'

export const metadata: Metadata = {
    title: 'Pathyakrama | Request',
    description: 'This page allows a user to request for a particular educational resource like notes, question bank or syllabus'
}

export default function page() {
    return (
        <>
            <Banner isMainpage={false} />
            <RequestWrapper />
        </>
    )
}
