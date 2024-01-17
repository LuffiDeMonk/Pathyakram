'use client'

import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Navlinks } from '@/constant'


type Props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}



export default function MobileNavigation({ open, setOpen }: Props) {
    return (
        <Transition as={React.Fragment} show={open}>
            <Dialog as='div' onClose={() => setOpen(false)} open={open} className='fixed md:hidden inset-0 z-40'>
                <Transition.Child
                    as={React.Fragment}
                    enter="transition-opacity ease-linear duration-200"
                    enterFrom="opacity-50"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed md:hidden inset-0 bg-black opacity-50"></div>
                </Transition.Child>
                <Transition.Child
                    as={React.Fragment}
                    enter="transition ease-in-out duration-200 transform"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-200 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <Dialog.Panel as={React.Fragment}>
                        {/* main menu container */}
                        <div className="w-64 h-full bg-white fixed z-40 right-0 px-4">
                            <h1 className='text-3xl font-extrabold pt-6'>Pathyakrama</h1>
                            <div className='w-full mt-6 overflow-y-auto flex flex-col gap-4'>
                                {Navlinks.map((item) => (
                                    <Link href={item.link} className='text-lg' key={item.id}>{item.name}</Link>
                                ))}
                            </div>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}
