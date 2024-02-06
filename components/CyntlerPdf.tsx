'use client';

import DocViewer, { PDFRenderer } from "@cyntler/react-doc-viewer";

import React from 'react'

type Props = {}

export default function CyntlerPdf({ }: Props) {
    const doc = [
        { uri: "https://firebasestorage.googleapis.com/v0/b/blog-app-a6529.appspot.com/o/images?alt=media&token=0c5b2746-34c5-4571-83a5-2e2304252987" }
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