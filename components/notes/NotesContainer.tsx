'use client'

import React, { useState } from 'react'
import Container from '../Container'
import ViewIcon from '../icons/ViewIcon'
import { Transition, Dialog } from '@headlessui/react'
import ReactPDF from '../React-PDF'

export default function NotesContainer() {

    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <Container>
            <>
                <h1 className='text-xl font-semibold text-green-500'>Notes</h1>
                <div className="flex flex-col gap-2 my-6 overflow-y-auto">
                    {
                        Array(1).fill(0).map((_, idx) => (
                            <div className='bg-green-600 flex items-center justify-between p-6' key={idx}>
                                <h1 className='text-white font-semibold text-lg'>Notes name written by XYZ</h1>
                                <button onClick={openModal}>
                                    <ViewIcon />
                                </button>
                            </div>
                        ))
                    }
                    <Transition appear show={isOpen} as={React.Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={React.Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={React.Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                            <ReactPDF />
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
            </>
        </Container>
    )
}
