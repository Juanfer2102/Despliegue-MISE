/**
 * DownloadPDFButton.jsx
 * 
 * Componente de botón que permite descargar documentos PDF. La descarga se basa en el tipo de PDF especificado
 * y en el parámetro `nit` obtenido de la URL. Los tipos de PDF disponibles son "inicial" y "final".
 * 
 * Props:
 * - filename (string): Nombre del archivo PDF a descargar (aunque en el código actual no se usa, podría ser útil para futuras modificaciones).
 * - pdfType (string): Tipo de PDF a descargar, puede ser "inicial" o "final".
 * 
 * Funcionalidad:
 * - Utiliza el hook `useParams` de `react-router-dom` para obtener el parámetro `nit` de la URL.
 * - Dependiendo del valor de `pdfType`, realiza una solicitud GET a la API para obtener el PDF correspondiente.
 * - Al recibir el PDF, crea un enlace de descarga dinámico y simula un clic para iniciar la descarga del archivo.
 * - Los archivos PDF se descargan con nombres basados en el parámetro `nit` y el tipo de PDF.
 * 
 * Métodos:
 * - `downloadPDF`: Función que solicita el PDF inicial desde la API y lo descarga.
 * - `downloadPDF_final`: Función que solicita el PDF final desde la API y lo descarga.
 * - `handleDownload`: Función que decide qué tipo de PDF descargar basado en el valor de `pdfType`.
 * 
 * Estilos:
 * - El botón tiene un estilo personalizado utilizando Tailwind CSS, con colores y efectos de hover para proporcionar una interfaz de usuario atractiva.
 * 
 * Requisitos:
 * - `react-router-dom` para obtener los parámetros de la URL.
 * - `fetch` para realizar solicitudes a la API.
 */

import React from 'react';
import { useParams } from 'react-router-dom';

const DownloadPDFButton = ({ filename, pdfType, tipo }) => {
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
        <button onClick={handleDownload} className='bg-principalGreen  hover:bg-white rounded-md text-white hover:text-principalGreen text-center font-semibold cursor-pointer w-max h-max p-2'>
            Descargar Acta {tipo}
        </button>
    );
};

export default DownloadPDFButton;
