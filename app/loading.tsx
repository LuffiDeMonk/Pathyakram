import React from 'react'

export default function loading() {
    return (
        <div className='fixed inset-0 bg-white flex items-center justify-center'>
            <div className="w-10 h-10 rounded-full bg-green-300 animate-ping"></div>
        </div>
    )
}
