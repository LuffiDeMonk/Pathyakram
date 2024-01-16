import React from 'react'
import BreadCrumb from '../BreadCrumb'

export default function Container({ children }: { children: React.ReactElement }) {
    return (
        <div className='mt-3 max-w-screen-lg mx-auto px-3 md:px-0'>
            <BreadCrumb />
            {children}
        </div>
    )
}
