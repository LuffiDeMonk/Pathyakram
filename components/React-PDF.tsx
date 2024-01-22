'use client'


import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import ArrowRight from './icons/ArrowRight';
import ArrowLeft from './icons/ArrowLeft';
import PDFLoading from './PDFLoading';
import PDFError from './PDFError';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export default function ReactPDF() {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(false)

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
        <>
            {/* hide the control buttons while the pdf is loading for the first time */}
            {loading && <div className="flex items-center justify-between my-6">
                <button disabled={pageNumber <= 1} onClick={changePageBack} className='p-2 bg-green-600 text-white font-semibold rounded-full flex items-center justify-center'>
                    <ArrowLeft />
                </button>
                <div>
                    {`${pageNumber} of ${numPages}`}
                </div>
                <button disabled={pageNumber >= numPages} onClick={changePageNext} className='p-2 bg-green-600 text-white font-semibold rounded-full flex items-center justify-center'>
                    <ArrowRight />
                </button>
            </div>}
            <div className="border border-black lg:h-[45rem] overflow-scroll no-scrollbar">
                <Document
                    onLoadProgress={() => setLoading(true)}
                    loading={<PDFLoading />}
                    error={<PDFError />}
                    file='/sample.pdf'
                    onLoadSuccess={onDocumentLoadSuccess}>
                    <Page
                        loading={<PDFLoading />}
                        scale={1.5}
                        pageNumber={pageNumber}
                        renderTextLayer={false}
                        renderAnnotationLayer={false} />
                </Document>
            </div>
        </>
    )
}
