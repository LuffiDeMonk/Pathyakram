'use client';

import DocViewer, { PDFRenderer } from "@cyntler/react-doc-viewer";

import React from 'react'

type Props = {}

export default function CyntlerPdf({ }: Props) {
    const doc = [
        { uri: "http://localhost:3000/sample.pdf" }
    ]
    return (
        <div className="overflow-scroll no-scrollbar">
            <DocViewer
                documents={doc}
                initialActiveDocument={doc[1]}
                pluginRenderers={[PDFRenderer]}
                className="bg-red-500"
            />
        </div>
    )
}