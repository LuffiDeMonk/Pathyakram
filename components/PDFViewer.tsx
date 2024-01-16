'use client'

import React from 'react'
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function PDFViewer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const getFilePluginInstance = getFilePlugin()
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <div className="h-[70vh] overflow-x-hidden overflow-y-auto mb-6">
                <Viewer fileUrl='/sample.pdf' plugins={[defaultLayoutPluginInstance, getFilePluginInstance]} defaultScale={SpecialZoomLevel.PageFit} />
            </div>
        </Worker>
    )
}