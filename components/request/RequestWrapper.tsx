'use client'

import Image from 'next/image'
import { Listbox, Transition } from '@headlessui/react'
import React, { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import ChevronDownIcon from '../icons/ChevronDownIcon'

import { universities, streams, semesters } from '@/constant'

type UniversityStream = {
    universityName: string,
    universityId: number,
    streams: string[]
}

type TRequestSchema = z.infer<typeof RequestSchema>


const RequestSchema = z.object({
    subject: z.string().min(1, "Please enter your subject name"),
    university: z.string().min(1, "Please select your university").nullable(),
    stream: z.string().min(1, "Please select your stream").nullable(),
    semester: z.string().min(1, "Please select your semester").nullable()
})

export default function RequestWrapper() {
    const { register, handleSubmit, formState: { errors, touchedFields }, reset } = useForm<TRequestSchema>({
        resolver: zodResolver(RequestSchema)
    })

    const onSubmit = (data: TRequestSchema) => {
        reset()
    }


    return (
        <section className='max-w-screen-lg mx-auto my-5 px-3 lg:px-0'>
            <p className='text-md mb-4 text-center'>Empower your education! Request the subjects you are passionate about. Customize your learning journey with Pathyakrama by suggesting the subjects that inspire you</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
                <Image src='/request.png' width={400} height={300} alt='Request image' className='hidden lg:block object-contain' />
                <form className="col-span-1 flex flex-col gap-4 my-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-1'>
                        <input type='text' {...register("subject")} placeholder='Enter your subject' className='w-full py-3 px-5 rounded-full outline-none focus:outline-none border border-gray-300' />
                        {errors.subject && touchedFields.subject && <p className='text-sm text-red-500'>{errors.subject.message}</p>}
                    </div>
                    {/* select university input starts */}
                    <div>
                        <div className='space-y-1 relative'>
                            <select className='w-full py-3 px-5 rounded-full outline-none focus:outline-none border border-gray-300 appearance-none' {...register('university')}>
                                <option value="" defaultValue={""}>Select your university</option>
                                {
                                    universities.map(item => (
                                        <option value={item.name} key={item.established_year}>{item.name}</option>
                                    ))
                                }
                            </select>
                            <div className='pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-gray-700'>
                                <ChevronDownIcon />
                            </div>
                        </div>
                        {errors.university && touchedFields.university && <p className='text-sm text-red-500'>{errors.university.message}</p>}
                    </div>
                    {/* select university input ends */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <input className='w-full py-3 px-5 rounded-full outline-none focus:outline-none border border-gray-300 appearance-none' {...register('stream')} placeholder='Enter your stream' />

                            {errors.stream && touchedFields.stream && <p className='text-sm text-red-500'>{errors.stream.message}</p>}
                        </div>
                        <div>
                            <div className="space-y-1 relative">
                                <select className='w-full py-3 px-5 rounded-full outline-none focus:outline-none border border-gray-300 appearance-none' {...register('semester')}>
                                    <option value='' defaultValue={''}>Select your semester</option>
                                    {semesters.map((item, idx) => (
                                        <option value={item} key={item.toLowerCase()}>{item}</option>
                                    ))}
                                </select>
                                <div className='pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-gray-700'>
                                    <ChevronDownIcon />
                                </div>
                            </div>
                            {errors.semester && touchedFields.semester && <p className='relative text-sm text-red-500'>{errors.semester.message}</p>
                            }
                        </div>
                    </div>

                    <button className='bg-green-500 text-white text-xl font-semibold p-3 rounded-full'>Submit</button>
                </form>
            </div>
        </section>
    )
}
