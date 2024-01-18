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
    university: z.string().min(1, "Please select your university"),
    stream: z.string().min(1, "Please select your stream"),
    semester: z.string().min(1, "Please select your semester")
})

export default function RequestWrapper() {
    const { register, handleSubmit, watch, formState: { errors, touchedFields }, setValue } = useForm<TRequestSchema>({
        resolver: zodResolver(RequestSchema)
    })

    let university = watch('university')
    let stream = watch('stream')
    let semester = watch('semester')

    let filteredStream: UniversityStream[] | [] = useMemo(() => {
        return streams.filter(item => item.universityName.toLowerCase() === university?.toLowerCase())
    }, [university])

    const handleUniversityChange = (value: string) => {
        setValue('university', value)
    }
    const handleStreamChange = (value: string) => {
        setValue('stream', value)
    }
    const handleSemesterChange = (value: string) => {
        setValue('semester', value)
    }


    const onSubmit = (data: TRequestSchema) => {
        console.log(data)
    }

    console.log(errors)

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
                    <div className='space-y-1'>
                        <Listbox {...register("university")} onChange={handleUniversityChange}>
                            <div className="relative">
                                <Listbox.Button className="w-full py-3 px-5 rounded-full outline-none focus:outline-none border
                                 border-gray-300 flex items-center justify-between relative">
                                    {watch('university') === undefined ?
                                        <p className='text-gray-400'>Select your university</p>
                                        :
                                        <p>{university}</p>}
                                    <ChevronDownIcon />
                                </Listbox.Button>
                                <Transition
                                    as={React.Fragment}
                                    enter="transition ease-in duration-100"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options
                                        className='absolute top-10 left-0 z-10 mt-4 max-h-40 w-full overflow-auto rounded-xl bg-white py-1 text-base focus:outline-none sm:text-sm'
                                    >
                                        {universities.map((item, idx) => (
                                            <Listbox.Option className={({ active }) => `py-3 px-5 cursor-pointer ${active ? "bg-green-300 text-white" : "text-black"}`} value={item.name} key={idx}>{item?.name}</Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                        {errors.university && touchedFields.university && <p className='text-sm text-red-500'>{errors.university.message}</p>}
                    </div>
                    {/* select university input ends */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <Listbox {...register("stream")} onChange={handleStreamChange}>
                                <div className="relative">
                                    <Listbox.Button className="w-full py-3 px-5 rounded-full outline-none focus:outline-none border border-gray-300 flex items-center justify-between relative">
                                        {watch('stream') === undefined ? <p className='text-gray-400'>Select your stream</p> : <p className="truncate line-clamp-1 text-ellipsis">
                                            {stream}
                                        </p>}
                                        <ChevronDownIcon />
                                    </Listbox.Button>
                                    <Transition
                                        as={React.Fragment}
                                        enter="transition ease-in duration-100"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options
                                            className='absolute top-10 left-0 z-10 mt-4 max-h-40 w-full overflow-auto rounded-xl bg-white py-1 text-base focus:outline-none sm:text-sm'
                                        >
                                            {
                                                watch('university') === undefined &&
                                                <Listbox.Option
                                                    value=""
                                                    className="py-3 px-5 text-black"
                                                >
                                                    Please Select University First
                                                </Listbox.Option>
                                            }

                                            {filteredStream[0]?.streams.map((item, idx) => (
                                                <Listbox.Option className={({ active }) => `py-3 px-5 cursor-pointer ${active ? "bg-green-300 text-white" : "text-black"}`} value={item} key={idx}>{item}</Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                            {errors.stream && touchedFields.stream && <p className='text-sm text-red-500'>{errors.stream.message}</p>}
                        </div>
                        <div className="space-y-1">
                            <Listbox {...register("semester")} onChange={handleSemesterChange}>
                                <div className="relative">
                                    <Listbox.Button className="w-full py-3 px-5 rounded-full outline-none focus:outline-none border border-gray-300 flex items-center justify-between relative">
                                        {semester === undefined ? <p className='text-gray-400'>Select your semester</p> : <p className="truncate line-clamp-1 text-ellipsis">
                                            {semester}
                                        </p>}
                                        <ChevronDownIcon />
                                    </Listbox.Button>
                                    <Transition
                                        as={React.Fragment}
                                        enter="transition ease-in duration-100"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options
                                            className='absolute top-10 left-0 z-10 mt-4 max-h-40 w-full overflow-auto rounded-xl bg-white py-1 text-base focus:outline-none sm:text-sm'
                                        >

                                            {semesters.map((item, idx) => (
                                                <Listbox.Option className={({ active }) => `py-3 px-5 cursor-pointer ${active ? "bg-green-300 text-white" : "text-black"}`} value={item} key={idx}>{item}</Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                            {errors.semester && touchedFields.semester && <p className='text-sm text-red-500'>{errors.semester.message}</p>}
                        </div>
                    </div>

                    <button className='bg-green-500 text-white text-xl font-semibold p-3 rounded-full'>Submit</button>
                </form>
            </div>
        </section>
    )
}
