import type { Metadata } from 'next'
import NotesContainer from '@/components/notes/NotesContainer'

export const metadata: Metadata = {
    title: "Pathyakrama | Notes",
    description: "This page contains the list of notes related to a particular subject"
}

export default function page() {
    return (
        <>
            <NotesContainer />
        </>
    )
}
