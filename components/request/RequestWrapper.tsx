'use client'

import Image from 'next/image'
import { Listbox, Transition } from '@headlessui/react'
import React, { useMemo, useState } from 'react'
import ChevronDownIcon from '../icons/ChevronDownIcon'

import { universities, streams, subjects } from '@/constant'

type UniversityStream = {
    universityName: string,
    universityId: number,
    streams: string[]
}

export default function RequestWrapper() {
    const [selectUniversity, setSelectUniversity] = useState('')
    const [selectStream, setSelectStream] = useState('')
    const [selectSubject, setSelectSubject] = useState('')

    let filteredStream: UniversityStream[] | [] = useMemo(() => {
        return streams.filter(item => item.universityName.toLowerCase() === selectUniversity.toLowerCase())
    }, [selectUniversity])



    return (
        <section className='max-w-screen-lg mx-auto my-5 px-3 lg:px-0'>
            <p className='text-md mb-4 text-center'>Empower your education! Request the subjects you are passionate about. Customize your learning journey with Pathyakrama by suggesting the subjects that inspire you</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <Image src='/request.png' width={400} height={300} alt='Request image' className='hidden lg:block object-contain' />
                <form className="col-span-1 flex flex-col gap-4 my-6">
                    <div className='space-y-1'>
                        <label className='text-sm font-semibold'>Enter your name</label>
                        <input type='text' name='name' placeholder='Enter your name' className='w-full py-3 px-5 rounded-full outline-none focus:outline-none border border-gray-300' />
                    </div>
                    {/* select university input starts */}
                    <div className='space-y-1'>
                        <label className='text-sm font-semibold'>Enter your university</label>
                        <Listbox name='university' value={selectUniversity} onChange={setSelectUniversity}>
                            <div className="relative">
                                <Listbox.Button className="w-full py-3 px-5 rounded-full outline-none focus:outline-none border border-gray-300 flex items-center justify-between relative">
                                    {selectUniversity === "" ? <p className='text-gray-400'>Select your university</p> : <p>{selectUniversity}</p>}
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
                                            <Listbox.Option className={({ active }) => `py-3 px-5 cursor-pointer ${active ? "bg-green-300 text-white" : "text-black"}`} value={item.name} key={idx}>{item.name}</Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>
                    {/* select university input ends */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <label className='text-sm font-semibold'>Enter your stream</label>
                            <Listbox name='university' value={selectStream} onChange={setSelectStream}>
                                <div className="relative">
                                    <Listbox.Button className="w-full py-3 px-5 rounded-full outline-none focus:outline-none border border-gray-300 flex items-center justify-between relative">
                                        {selectStream === "" ? <p className='text-gray-400'>Select your stream</p> : <p>{selectStream}</p>}
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
                                            {filteredStream && filteredStream[0]?.streams.map((item, idx) => (
                                                <Listbox.Option className={({ active }) => `py-3 px-5 cursor-pointer ${active ? "bg-green-300 text-white" : "text-black"}`} value={item} key={idx}>{item}</Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                        <div className="space-y-1">
                            <label className='text-sm font-semibold'>Enter your subject</label>
                            <input type='text' name='name' placeholder='Enter your subject' className='w-full py-3 px-5 rounded-full outline-none focus:outline-none border border-gray-300' />
                        </div>
                    </div>
                    <button className='bg-green-500 text-white text-xl font-semibold p-3 rounded-full'>Submit</button>
                </form>
            </div>
        </section>
    )
}
