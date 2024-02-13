'use client';

import DocViewer, { PDFRenderer } from "@cyntler/react-doc-viewer";

import React from 'react'

type Props = {}

export default function CyntlerPdf({ }: Props) {
    const doc = [
        { uri: "https://firebasestorage.googleapis.com/v0/b/blog-app-a6529.appspot.com/o/pdf%2Fsample.pdf?alt=media&token=fd694272-e5c7-4080-8d66-f08849bdf246" }
    ]
    return (
        <div className="overflow-scroll no-scrollbar">
            <DocViewer
                prefetchMethod="GET"
                documents={doc}
                initialActiveDocument={doc[1]}
                pluginRenderers={[PDFRenderer]}
            />
        </div>
    )
}