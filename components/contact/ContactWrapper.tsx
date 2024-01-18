import Image from 'next/image'
import React from 'react'
import ContactForm from './ContactForm'

export default function ContactWrapper() {
    return (
        <div className=" max-w-screen-lg mx-auto my-5 px-3 lg:px-0">
            <p className='text-md mb-4 text-center'>Have questions or feedback? We would love to hear from you! Contact us below. Your input is crucial as we continually improve the Pathyakrama experience. Thank you for being part of our educational community!</p>
            <div className='grid gap-3 grid-cols-1 lg:grid-cols-2 lg:items-center'>
                <ContactForm />
                <Image width={500} height={300} alt='Contact Us' src='/Contact.png' className='hidden lg:block' />
            </div>
        </div>
    )
}
