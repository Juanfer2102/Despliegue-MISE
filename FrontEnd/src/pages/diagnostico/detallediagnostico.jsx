/**
 * Detallediagnosticof.jsx
 * 
 * Componente que permite evaluar una empresa y registrar un diagnóstico inicial basado en las calificaciones y sueños seleccionados.
 * Utiliza los datos obtenidos a través de las API para mostrar la evaluación y permite seleccionar y registrar los sueños del módulo.
 * 
 * Componentes utilizados:
 * - LayoutDashboard: Componente de diseño que envuelve la página de evaluación en un diseño de panel de control.
 * 
 * Hooks utilizados:
 * - useState: Para manejar el estado local del componente.
 * - useEffect: Para obtener los datos de la empresa y las calificaciones bajas desde el backend.
 * - useParams: Para obtener parámetros de la URL, en este caso, el NIT de la empresa.
 * - useNavigate: Para redirigir al usuario después de registrar el diagnóstico.
 * 
 * Funcionalidad:
 * - Obtiene y muestra información de la empresa y calificaciones bajas desde las API.
 * - Permite la selección y deselección de sueños para cada módulo.
 * - Envía los datos seleccionados al backend para registrar el diagnóstico.
 * 
 * Estilos:
 * - Usa Tailwind CSS para la disposición y el diseño. La página se estructura en una vista de panel de control con estilos específicos para la tabla de calificaciones, la selección de sueños y los temas asociados.
 * - El diseño incluye una tabla para mostrar calificaciones bajas y secciones para los sueños y temas relacionados con cada módulo.
 * - Los botones y elementos interactivos tienen estilos personalizados con efectos de transición para mejorar la experiencia del usuario.
 * 
 * Estructura del componente:
 * - useState para manejar el estado de la empresa, calificaciones bajas, y sueños seleccionados.
 * - useEffect para realizar fetch de datos de la empresa y calificaciones bajas basadas en el NIT proporcionado en la URL.
 * - Función handleSelectSueño para seleccionar o deseleccionar sueños.
 * - Función registrarDiagnostico para enviar los datos de sueños seleccionados al backend.
 * - Función renderTabla para mostrar las calificaciones bajas en una tabla.
 * - Renderiza la interfaz de usuario con una sección de introducción, módulos de evaluación, temas asignados, y sueños del módulo.
 * 
 * Puntos clave:
 * - Se obtiene la información de la empresa y calificaciones bajas mediante fetch desde las API.
 * - La selección de sueños se maneja con un estado local que permite al usuario seleccionar y deseleccionar sueños específicos.
 * - Los datos de diagnóstico se envían al backend en formato JSON cuando se hace clic en el botón "Registrar Diagnóstico".
 * - La interfaz se ajusta automáticamente para mostrar los datos de manera clara y ordenada, utilizando las clases de Tailwind CSS para un diseño responsivo.
 */

import React, { useState, useEffect } from "react";
import LayoutDashboard from '../../layouts/LayoutDashboard';
import { useParams, useNavigate } from 'react-router-dom';

const EvaluacionEmpresa = () => {
    const { nit } = useParams();
    const [empresa, setEmpresa] = useState({});
    const [calificacionesBajas, setCalificacionesBajas] = useState([]);
    const [sueñosSeleccionados, setSueñosSeleccionados] = useState({});
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    const navigate = useNavigate();

    const [fechas, setFechas] = useState({});

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

    const handleFechaChange = (temaId, tipo, valor) => {
        setFechas(prevFechas => ({
            ...prevFechas,
            [temaId]: {
                ...prevFechas[temaId],
                [tipo]: valor,
            }
        }));
    };
    
    

    const handleSelectSueño = (id_modulo, sueñoSeleccionado) => {
        setSueñosSeleccionados(prevState => {
            const seleccionados = prevState[id_modulo] || [];
            if (seleccionados.includes(sueñoSeleccionado)) {
                return {
                    ...prevState,
                    [id_modulo]: seleccionados.filter(sueño => sueño !== sueñoSeleccionado)
                };
            } else {
                return {
                    ...prevState,
                    [id_modulo]: [...seleccionados, sueñoSeleccionado]
                };
            }
        });
    };

    const registrarDiagnostico = async () => {
        const data = {
            nit: nit,
            sueños: Object.entries(sueñosSeleccionados).map(([id_modulo, sueños]) => ({
                id_modulo,
                sueños
            })),
            fechasTemas: Object.entries(fechas).map(([temaId, { fechaInicio, fechaFin }]) => ({
                temaId,
                fechaInicio,
                fechaFin
            })),
        };
    
        // Validar si todas las fechas están completas
        const fechasIncompletas = data.fechasTemas.some(({ fechaInicio, fechaFin }) => !fechaInicio || !fechaFin);
        if (fechasIncompletas) {
            console.error("Las fechas de inicio y fin son requeridas para todos los temas.");
            return;
        }
    
        try {
            const response = await fetch('http://localhost:8000/api/v2/registrar-diagnostico/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            console.log('Datos a enviar:', data);
    
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error en la respuesta de la API:', errorData);
                throw new Error(errorData.error || 'Error al registrar el diagnóstico');
            }
    
            console.log('Diagnóstico registrado con éxito:', await response.json());
            navigate(`/dashboard-emp/${nit}`)
        } catch (error) {
            console.error('Error al registrar el diagnóstico:', error);
        }
    };
    
    

    const renderTabla = (preguntas = []) => (
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
                                </div>
                                <div className="px-6 flex flex-col p-4">
                                    <div>
                                        <p className='font-bold text-xl'>Introducción</p>
                                        <p className='p-6 text-justify'>
                                            A través del servicio de acompañamiento del Modelo Integral de Servicios Empresariales (MISE), en su dimensión de FORTALECIMIENTO dirigido a empresas, ofrecido por la Cámara de Comercio de Palmira (CCP), se presenta el diagnóstico realizado para la empresa <span className="font-bold underline">{empresa.nombre_empresa}</span>.

                                            Este diagnóstico refleja las necesidades puntuales y metas empresariales acordadas, las cuales serán evidenciadas en el progreso de esta página. El MISE implementado por la CCP incluye fases clave como la identificación de necesidades, la focalización, la definición de una ruta de servicios, la oferta de un portafolio integral, y el seguimiento continuo a las empresas beneficiadas. Todo esto tiene como objetivo garantizar un mayor impacto en el crecimiento de las empresas de Palmira, Pradera, Florida y Candelaria.
                                        </p>
                                    </div>
                                    <div className="p-6">
                                        <h1 className="text-3xl font-bold ">Diagnóstico de la Empresa: {empresa.nombre_empresa}</h1>

                                        {/* Evaluación dinámica de módulos */}
                                        {calificacionesBajas.map(modulo => (
                                            <div key={modulo.id_modulo} className="pt-14">
                                                <div className="flex justify-between">
                                                    <h2 className="text-2xl font-bold">Modulo: {modulo.nombre}</h2>
                                                    <p className="text-lg">{modulo.criterio}</p>
                                                </div>
                                                {renderTabla(modulo.preguntas || [])}

                                                <div className="pt-14 flex flex-col gap-8 w-full">
                                                    <div className="temas">
                                                        <h2 className="text-2xl font-bold mb-4">Temas asignados</h2>
                                                        <div className="flex flex-wrap gap-8">
                                                            {modulo.preguntas.map(pregunta => {
                                                                if (!pregunta.tema || pregunta.tema.length === 0) return null; // Verifica si hay temas

                                                                return (
                                                                    <div key={pregunta.id_pregunta} className="flex flex-1 flex-col gap-4 xl:min-w-[500px] lg:min-w-[45rem] p-4 border-t border-gray-200 rounded-md shadow-md">
                                                                        <h3 className="text-xl font-bold">{pregunta.descripcion_pregunta}</h3>

                                                                        <div className="grid grid-cols-1 gap-4">
                                                                            {/* Mostrar temas relacionados */}
                                                                            {pregunta.tema?.map(tema => ( // Manejar tema undefined
                                                                                <div key={tema.id_tema} className="p-4 border border-gray-300 rounded-md shadow-sm gap-2 flex flex-col">
                                                                                    <h4 className="text-lg font-semibold">{tema.titulo_formacion}</h4>
                                                                                    <p><strong>Sesión:</strong> {tema.num_sesion}</p>
                                                                                    <p><strong>Objetivo:</strong> {tema.objetivo}</p>
                                                                                    <p><strong>Alcance:</strong> {tema.alcance}</p>
                                                                                    <p><strong>Contenido:</strong> {tema.contenido}</p>
                                                                                    <p><strong>Conferencista:</strong> {tema.conferencista}</p>
                                                                                    <p><strong>Ubicación:</strong> {tema.ubicacion}</p>

                                                                                    {/* Input para la fecha de inicio y fin */}
                                                                                    <div className="flex justify-around">
                                                                                        <label htmlFor={`fechaInicio-${modulo.id_modulo}`}>Fecha de Inicio:</label>
                                                                                        <input
                                                                                            className="bg-transparent px-2 border border-grey rounded-md"
                                                                                            type="date"
                                                                                            id={`fechaInicio-${tema.id_tema}`}
                                                                                            onChange={(e) => handleFechaChange(tema.id_tema, 'fechaInicio', e.target.value)} // Cambiado aquí
                                                                                        />

                                                                                        <label htmlFor={`fechaFin-${tema.id_tema}`}>Fecha de Fin:</label>
                                                                                        <input
                                                                                            className="bg-transparent px-2 border border-grey rounded-md"
                                                                                            type="date"
                                                                                            id={`fechaFin-${tema.id_tema}`}
                                                                                            onChange={(e) => handleFechaChange(tema.id_tema, 'fechaFin', e.target.value)} // Cambiado aquí
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
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
                                                                        className={`mt-4 p-2 bg-${sueñosSeleccionados[modulo.id_modulo]?.includes(sueño.sueño) ? 'principalGreen' : 'bg-transparent border border-white'} text-white rounded`}
                                                                        onClick={() => handleSelectSueño(modulo.id_modulo, sueño.sueño)}
                                                                    >
                                                                        {sueñosSeleccionados[modulo.id_modulo]?.includes(sueño.sueño) ? 'Deseleccionar' : 'Seleccionar este sueño'}
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {sueñosSeleccionados[modulo.id_modulo] && (
                                                            <div className="mt-4">
                                                                <p className="text-lg">Sueños seleccionados:</p>
                                                                <ul>
                                                                    {sueñosSeleccionados[modulo.id_modulo].map((sueño, index) => (
                                                                        <li key={index} className="text-lg">{sueño}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div> {/* Aquí se cierra el div principal */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-center pt-10">
                                        <button onClick={registrarDiagnostico} className="bg-principalGreen text-white py-2 px-4 rounded">Registrar Diagnóstico</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutDashboard >
    );
};

export default EvaluacionEmpresa;
