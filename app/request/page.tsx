import Banner from '@/components/Banner'
import RequestWrapper from '@/components/request/RequestWrapper'
import React from 'react'

export default function page() {
    return (
        <>
            <Banner isMainpage={false} />
            <RequestWrapper />
        </>
    )
}
