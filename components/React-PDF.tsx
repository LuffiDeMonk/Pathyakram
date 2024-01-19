'use client'


import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export default function ReactPDF() {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    function changePage(offSet: number) {
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }

    function changePageBack() {
        changePage(-1)
    }

    function changePageNext() {
        changePage(+1)
    }
    return (
        <div className="max-w-screen-lg mx-auto bg-green-400">
            <Document
                loading={<div className='text-center h-full flex items-center justify-center'><p>Loading</p></div>}
                file={{
                    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
                }}
                onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
                <p>{pageNumber} / {numPages}</p>
            </Document>
            <button onClick={changePageNext} hidden={pageNumber >= numPages}>Next Page</button>
            <button onClick={changePageBack} hidden={pageNumber <= 1}>Prev Page</button>
        </div>
    )
}
