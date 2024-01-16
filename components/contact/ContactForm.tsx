'use client'

import React from 'react'

const initialState = {
    email: '',
    name: '',
    message: ''
}

export default function ContactForm() {
    return (
        <div className='col-span-1'>
            <form className="flex flex-col gap-4 my-6">
                <div className='space-y-1'>
                    <label className='text-sm font-semibold'>Enter your name</label>
                    <input type='text' name='name' placeholder='Enter your name' className='w-full py-3 px-5 rounded-full outline-none focus:outline-none border border-gray-300' />
                </div>
                <div className='space-y-1'>
                    <label className='text-sm font-semibold'>Enter your email</label>
                    <input type='text' name='email' placeholder='Enter your email' className='w-full py-3 px-5 rounded-full outline-none focus:outline-none border border-gray-300' />
                </div>
                <div className='space-y-1'>
                    <label className='text-sm font-semibold'>Enter your message</label>
                    <textarea name='message' placeholder='Enter your message' rows={5} className='w-full rounded-lg p-3 outline-none focus:outline-none border border-gray-300' />
                </div>
                <button className='bg-green-500 text-white text-xl font-semibold p-3 rounded-full'>Submit</button>
            </form>
        </div>
    )
}
