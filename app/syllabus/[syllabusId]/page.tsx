import React from 'react'
import Container from '../../../components/Container'
import PDFViewer from '@/components/PDFViewer'
import ReactPDF from '@/components/React-PDF'

export default function page() {
    return (
        <Container>
            <div className='mb-12'>
                <h1 className='text-xl font-semibold text-green-500 mb-4'>Syllabus</h1>
                <ReactPDF />
            </div>
        </Container>
    )
}
