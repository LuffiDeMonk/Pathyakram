import React from 'react'
import Container from '../../components/Container'
import PDFViewer from '@/components/PDFViewer'

export default function page() {
    return (
        <Container>
            <>
                <h1 className='text-xl font-semibold text-green-500 mb-4'>Syllabus</h1>
                <PDFViewer />
                {/* <ReactPDF /> */}
            </>
        </Container>
    )
}
