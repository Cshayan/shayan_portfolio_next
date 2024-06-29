import Modal from 'react-modal';
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

Modal.setAppElement('#__next'); // For accessibility

interface IPdfViewer {
    isOpen: boolean;
    onRequestClose: () => void;
    pdfUrl: string;
}

const PdfViewer = ({ isOpen, onRequestClose, pdfUrl }: IPdfViewer) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="PDF Viewer"
            style={{
                content: {
                    width: '80%',
                    height: '80%',
                    margin: 'auto',
                },
            }}
        >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} defaultScale={SpecialZoomLevel.ActualSize} />
            </Worker>
        </Modal>
    );
};

export default PdfViewer;
