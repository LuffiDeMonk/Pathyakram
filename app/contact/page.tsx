import type { Metadata } from 'next'
import ContactWrapper from '../../components/contact/ContactWrapper'
import Banner from '@/components/Banner'

export const metadata:Metadata = {
    title:'Pathyakrama | Contact',
    description: "This page allows user to connect with us to provide necessary changes in the application which would result in better user experience"
}

export default function page() {
    return (
        <>
            <Banner isMainpage={false} />
            <ContactWrapper />
        </>
    )
}
