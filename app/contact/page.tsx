import React from 'react'
import Banner from '../components/Banner'
import ContactWrapper from '../components/contact/ContactWrapper'


export default function page() {
    return (
        <>
            <Banner isMainpage={false} />
            <ContactWrapper />
        </>
    )
}
