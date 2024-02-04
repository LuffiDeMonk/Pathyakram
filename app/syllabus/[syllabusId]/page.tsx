import type { Metadata } from 'next'
import Container from '../../../components/Container'
import PDFViewer from '@/components/PDFViewer'
import ReactPDF from '@/components/React-PDF'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
    title: 'Pathyakrama | Syllabus',
    description: 'This page gives you information regarding the syllabus of a particular subject selected by the user'
}

export default function page() {
    return (
        <>
            <Navbar />
            <Container>
                <div className='mb-12'>
                    <h1 className='text-xl font-semibold text-green-500 mb-4'>Syllabus</h1>
                    <ReactPDF />
                </div>
            </Container>
        </>
    )
}
