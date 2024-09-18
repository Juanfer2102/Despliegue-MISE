import React from 'react';
import { useParams } from 'react-router-dom';

const DownloadPDFButton = ({ filename, pdfType }) => {
    // Obtener el NIT desde los parámetros de la URL usando useParams
    const { nit } = useParams();

    // Función para descargar el PDF inicial
    const downloadPDF = async () => {
        const response = await fetch(`http://localhost:8000/api/v2/generar-pdf/${nit}/`, {
            method: 'GET',
        });

        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${nit}_acta_inicial_mise.pdf`);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } else {
            console.error('Error descargando el PDF inicial');
        }
    };

    // Función para descargar el PDF final
    const downloadPDF_final = async () => {
        const response = await fetch(`http://localhost:8000/api/v2/generar-pdf-final/${nit}/`, {
            method: 'GET',
        });

        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${nit}_acta_final_mise.pdf`);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } else {
            console.error('Error descargando el PDF final');
        }
    };

    // Función de descarga condicional
    const handleDownload = () => {
        if (pdfType === 'final') {
            downloadPDF_final();
        } else {
            downloadPDF();
        }
    };

    return (
        <button onClick={handleDownload} className='bg-principalGreen hover:bg-white rounded-md text-white hover:text-principalGreen text-center font-semibold cursor-pointer w-auto h-10 p-2'>
            Descargar Acta Inicial / Final
        </button>
    );
};

export default DownloadPDFButton;
