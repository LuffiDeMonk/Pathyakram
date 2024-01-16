import React from 'react'
import ContactWrapper from '../../components/contact/ContactWrapper'
import Banner from '@/components/Banner'


export default function page() {
    return (
        <>
            <Banner isMainpage={false} />
            <ContactWrapper />
        </>
    )
}
