import React from 'react';

const DownloadPDFButton = ({ filename }) => {
  const downloadPDF = async () => {
    const response = await fetch('http://localhost:8000/api/v2/generar-pdf/', {
      method: 'GET',
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename || 'documento.pdf');
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <button onClick={downloadPDF}>
      Descargar PDF
    </button>
  );
};

export default DownloadPDFButton;
