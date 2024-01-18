'use client'

import React, { useRef } from 'react'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const ContactSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    name: z.string().min(1, "Please enter your full name"),
    message: z.string().min(5, "Please type the message you want to send")
})

type TContactSchema = z.infer<typeof ContactSchema>


export default function ContactForm() {
    const { register, handleSubmit, formState: { errors, touchedFields }, reset, } = useForm<TContactSchema>({
        resolver: zodResolver(ContactSchema)
    })

    const onSubmit = (data: TContactSchema) => {
        console.log(data)
        reset()
    }


    return (
        <div className='col-span-1'>
            <form className="flex flex-col gap-4 my-6" onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-0.5'>
                    <input type='text' placeholder='Enter your name' className='w-full py-3 px-5 rounded-full outline-none focus:outline-none border border-gray-300' {...register('name')} />
                    {errors.name && touchedFields.name && <p className='text-sm text-red-600'>{errors.name.message}</p>}
                </div>
                <div className='space-y-0.5'>
                    <input type='text' placeholder='Enter your email' className='w-full py-3 px-5 rounded-full outline-none focus:outline-none border border-gray-300' {...register("email")} />
                    {errors.email && touchedFields.email && <p className='text-sm text-red-600'>{errors.email.message}</p>}
                </div>
                <div className='space-y-0.5'>
                    <textarea placeholder='Enter your message' rows={5} className='w-full rounded-lg p-3 outline-none focus:outline-none border border-gray-300' {...register('message')} />
                    {errors.message && touchedFields.message && <p className='text-sm text-red-600'>{errors.message.message}</p>}

                </div>
                <button className='bg-green-500 text-white text-xl font-semibold p-3 rounded-full'>Submit</button>
            </form>
        </div>
    )
}
