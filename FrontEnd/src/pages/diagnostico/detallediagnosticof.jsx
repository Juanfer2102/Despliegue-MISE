/**
 * DetalleDiagnosticof.jsx
 * 
 * Componente que muestra el diagnóstico final de una empresa basado en los datos de calificaciones bajas, temas asignados y sueños del módulo.
 * Permite ver el diagnóstico final y descargar un archivo PDF con la información detallada.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Componente de diseño que envuelve la página de detalle en un diseño de panel de control.
 * - DownloadPDFButton: Componente para descargar un archivo PDF con el diagnóstico.
 * 
 * Hooks utilizados:
 * - useState: Para manejar el estado local del componente.
 * - useEffect: Para obtener los datos de la empresa y las calificaciones bajas desde el backend.
 * - useParams: Para obtener parámetros de la URL, en este caso, el NIT de la empresa.
 * 
 * Funcionalidad:
 * - Obtiene y muestra información de la empresa y calificaciones bajas desde las API.
 * - Permite la selección de un sueño del módulo y muestra el sueño seleccionado.
 * - Descarga un archivo PDF con el diagnóstico final de la empresa.
 * 
 * Estilos:
 * - Usa Tailwind CSS para la disposición y el diseño. La página se estructura en una vista de panel de control con estilos específicos para la tabla de calificaciones, la selección de sueños y los temas asignados.
 * - El diseño incluye una tabla para mostrar calificaciones bajas y secciones para los temas y sueños del módulo.
 * - Los botones y elementos interactivos tienen estilos personalizados con efectos de transición para mejorar la experiencia del usuario.
 * 
 * Estructura del componente:
 * - useState para manejar el estado de la empresa, calificaciones bajas y sueños seleccionados.
 * - useEffect para realizar fetch de datos de la empresa y calificaciones bajas basadas en el NIT proporcionado en la URL.
 * - Función handleSelectSueño para seleccionar un sueño para el módulo.
 * - Función renderTabla para mostrar las calificaciones bajas en una tabla.
 * - Renderiza la interfaz de usuario con una sección de introducción, módulos de evaluación, temas asignados, y sueños del módulo.
 * 
 * Puntos clave:
 * - Se obtiene la información de la empresa y calificaciones bajas mediante fetch desde las API.
 * - La selección de sueños se maneja con un estado local que permite al usuario seleccionar un sueño específico.
 * - La interfaz se ajusta automáticamente para mostrar los datos de manera clara y ordenada, utilizando las clases de Tailwind CSS para un diseño responsivo.
 * - El botón de descarga de PDF permite obtener un archivo con la información detallada del diagnóstico.
 */



import React, { useState, useEffect } from "react";
import LayoutDashboard from '../../layouts/LayoutDashboard';
import DownloadPDFButton from "../../components/inputs/botones/botonpdf";
import { useParams } from 'react-router-dom';

const DetalleDiagnosticof = () => {
    const { nit } = useParams();
    const [empresa, setEmpresa] = useState({});
    const [calificacionesBajas, setCalificacionesBajas] = useState([]);
    const [sueñosSeleccionados, setSueñosSeleccionados] = useState({}); // Estado para manejar los sueños seleccionados

    useEffect(() => {
        // Obtener información de la empresa
        fetch(`http://localhost:8000/api/v2/empresas/${nit}/`)
            .then(response => response.json())
            .then(data => {
                setEmpresa(data);
            });
    }, [nit]);

    useEffect(() => {
        // Obtener calificaciones bajas
        fetch(`http://localhost:8000/api/v2/calificaciones-bajas/empresa/${nit}/`)
            .then(response => response.json())
            .then(data => {
                setCalificacionesBajas(data);
            });
    }, [nit]);

    // Manejar la selección de un sueño
    const handleSelectSueño = (id_modulo, sueñoSeleccionado) => {
        setSueñosSeleccionados(prevState => ({
            ...prevState,
            [id_modulo]: sueñoSeleccionado
        }));
    };

    // Renderiza las calificaciones bajas en una tabla
    const renderTabla = (preguntas) => (
        <div className="flex flex-col mt-6 bg-greyBg rounded-md">
            <div className="flex bg-greyBlack text-white font-semibold">
                <div className="flex-1 p-5 text-left">Pregunta</div>
                <div className="flex-1 p-5 text-center">Calificación</div>
                <div className="flex-1 p-5 text-center">Criterio</div>
            </div>
            {preguntas.map((item, index) => (
                <div key={index} className="flex border-t border-white">
                    <div className="flex-1 p-5 text-left">{item.descripcion_pregunta}</div>
                    <div className="flex-1 p-5 text-center">{item.calificacion}</div>
                    <div className="flex-1 p-5 text-center">{item.criterio}</div>
                </div>
            ))}
        </div>
    );

    return (
        <LayoutDashboard>
            <main className="flex flex-row w-full bg-greyBlack h-screen text-white">
                <div className="flex flex-col w-full h-full">
                    <div className="flex content-center justify-end h-20 w-full" />
                    <div className="bg-greyBg flex flex-col h-full w-full px-6 pt-6 overflow-auto">
                        <div className="gap-8 flex flex-col px-8 w-full h-full rounded-md">
                            <div className="rounded-xl flex flex-col gap-6 h-full py-6">
                                <div className="flex justify-between pr-10">
                                    <p className='text-2xl font-bold'>Diagnóstico Inicial Empresarial {empresa.nombre_empresa}</p>
                                    <DownloadPDFButton pdfType={"final"} filename="ACTA_FINAL_MISE.pdf" />
                                </div>
                                <div className="px-6">
                                    <div>
                                        <p className='font-bold text-xl'>Introducción</p>
                                        <p className='p-6 text-justify'>
                                            Por medio del servicio de acompañamiento del Modelo Integral de Servicios Empresariales (MISE), en su dimensión de FORTALECIMIENTO (dirigido a empresas), que le ofrece la Cámara de Comercio de Palmira (CCP), se presenta el diagnóstico final realizado para la empresa <span className="font-bold underline">{empresa.nombre_empresa}</span>.

                                            Este diagnóstico detalla las modificaciones del proceso, el cumplimiento de sueños, diagnóstico de salida de sus resultados en el programa y observaciones o recomendaciones.
                                        </p>
                                    </div>
                                    <div className="p-6">
                                        <h1 className="text-3xl font-bold ">Diagnóstico Final de la Empresa: {empresa.nombre_empresa}</h1>

                                        {/* Evaluación dinámica de módulos */}
                                        {calificacionesBajas.map(modulo => (
                                            <div key={modulo.id_modulo} className="pt-14">
                                                <div className="flex justify-between">
                                                    <h2 className="text-2xl font-bold">Modulo: {modulo.nombre}</h2>
                                                    <p className="text-lg">{modulo.criterio}</p>
                                                </div>
                                                {renderTabla(modulo.preguntas)}

                                                {/* Mostrar información de los temas relacionados con el módulo */}
                                                <div className="pt-14 flex flex-col gap-8 w-full">
                                                    <div className="temas">
                                                        <h2 className="text-2xl font-bold mb-4">Temas asignados</h2>
                                                        <div className="flex flex-wrap gap-8">
                                                            {modulo.preguntas.map(pregunta => {
                                                                const tema = pregunta.tema; // Directamente accede al tema desde la pregunta
                                                                if (!tema) return null;

                                                                return (
                                                                    <div key={pregunta.id_pregunta} className="flex-1 min-w-[300px] p-4 border-t border-gray-200 rounded-md shadow-md">
                                                                        <h3 className="text-xl font-bold">{tema.titulo_formacion}</h3>
                                                                        <p><strong>Módulo:</strong> {modulo.nombre}</p>
                                                                        <p><strong>Sesión:</strong> {tema.num_sesion}</p>
                                                                        <p><strong>Objetivo:</strong> {tema.objetivo}</p>
                                                                        <p><strong>Alcance:</strong> {tema.alcance}</p>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>

                                                    {/* Mostrar los sueños del módulo */}
                                                    <div className="suenos pt-10">
                                                        <h2 className="text-2xl font-bold mb-4">Sueños del módulo</h2>
                                                        <div className="flex flex-wrap gap-8">
                                                            {modulo.suenos.map((sueño, index) => (
                                                                <div key={index} className="flex-1 min-w-[300px] p-4 border-t border-gray-200 rounded-md shadow-md">
                                                                    <h3 className="text-xl font-bold">Sueño {index + 1}</h3>
                                                                    <p><strong>Nivel:</strong> {sueño.nivel}</p>
                                                                    <p><strong>Sueño:</strong> {sueño.sueño}</p>
                                                                    <p><strong>Medición:</strong> {sueño.medicion}</p>
                                                                    <p><strong>Fortalecimiento:</strong> {sueño.fortalecimiento}</p>
                                                                    <p><strong>Evidencia:</strong> {sueño.evidencia}</p>
                                                                    <button
                                                                        className={`mt-4 p-2 bg-${sueñosSeleccionados[modulo.id_modulo] === sueño.sueño ? 'green-500' : 'blue-500'} text-white rounded`}
                                                                        onClick={() => handleSelectSueño(modulo.id_modulo, sueño.sueño)}
                                                                    >
                                                                        Seleccionar este sueño
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {sueñosSeleccionados[modulo.id_modulo] && (
                                                            <p className="mt-4 text-lg">Sueño seleccionado: {sueñosSeleccionados[modulo.id_modulo]}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {/* Conclusiones */}
                                        <div className="pt-14 flex gap-8">
                                            <div className="">
                                                <h2 className="text-2xl font-bold">Conclusiones</h2>
                                                <p className='text-justify'>
                                                    Después de finalizada la ruta de servicios y el cumplimiento de sueños se realiza junto con el beneficiado el diagnóstico de cierre de brechas donde se evidencia el avance en su nivel de fortalecimiento empresarial.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutDashboard>
    );
}

export default DetalleDiagnosticof;