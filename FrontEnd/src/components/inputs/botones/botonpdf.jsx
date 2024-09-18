import React from 'react';

const DownloadPDFButton = ({ filename, nit }) => {
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
            console.error('Error descargando el PDF');
        }
    };

    const downloadPDF_final = async () => {
        const response = await fetch(`http://localhost:8000/api/v2/generar-pdf-final/${nit}/`, {
            method: 'GET',
        });

        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${nit}_acta_final_mise.pdf`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    };

    return (
        <button onClick={downloadPDF_final} className='bg-principalGreen hover:bg-white rounded-md text-white hover:text-principalGreen text-center font-semibold cursor-pointer w-auto h-10 p-2'>
            Descargar PDF
        </button>
    );
};

export default DownloadPDFButton;
