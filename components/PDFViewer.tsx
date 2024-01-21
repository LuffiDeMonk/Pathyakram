'use client'

import React from 'react'
import { Worker, Viewer, SpecialZoomLevel, ScrollMode } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';

export default function PDFViewer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const getFilePluginInstance = getFilePlugin()
    const scrollModePluginInstance = scrollModePlugin();
    const fullScreenPluginInstance = fullScreenPlugin()
    scrollModePluginInstance.switchScrollMode(ScrollMode.Page)
    return (
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
            <div className="h-screen overflow-x-hidden overflow-y-auto mb-6">
                <Viewer fileUrl='/sample.pdf' plugins={[defaultLayoutPluginInstance, getFilePluginInstance, scrollModePluginInstance, fullScreenPluginInstance]} defaultScale={SpecialZoomLevel.PageWidth} />
            </div>
        </Worker>
    )
}
