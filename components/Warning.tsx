import React from 'react'
import ErrorIcon from './icons/ErrorIcon'

export default function Error({ height }: { height?: string }) {
    return (
        <div className={`${height ? height : "h-[40vh]"} flex flex-col items-center justify-center gap-2`}>
            <ErrorIcon />
            <h1 className='text-lg font-semibold text-gray-400'>Oops ! No data found </h1>
        </div>
    )
}
