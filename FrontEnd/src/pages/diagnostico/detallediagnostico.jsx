import React, { useState, useEffect } from "react";
import LayoutDashboard from '../../layouts/LayoutDashboard';
import DownloadPDFButton from "../../components/inputs/botones/botonpdf";
import { useParams } from 'react-router-dom';
import GoBack from "../../components/inputs/goback/GoBack";
import { useNavigate } from "react-router-dom";

const EvaluacionEmpresa = () => {
    const { nit } = useParams();
    const [empresa, setEmpresa] = useState({});
    const [calificacionesBajas, setCalificacionesBajas] = useState([]);
    const [sueñosSeleccionados, setSueñosSeleccionados] = useState({}); // Estado para manejar los sueños seleccionados
    const navigate = useNavigate();
    

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

    // Registrar diagnóstico (enviar sueños seleccionados al backend)
    const registrarDiagnostico = () => {
        const data = {
            nit: nit,
            sueños: sueñosSeleccionados,
        };
    
        console.log("Datos enviados al backend:", data); // Verifica los datos aquí
    
        fetch('http://localhost:8000/api/v2/registrar-diagnostico/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(errData => {
                    console.error("Error en la respuesta del backend:", errData);
                    throw new Error("Error al registrar el diagnóstico");

                });
            }
            return response.json();
        })
        .then(result => {
            alert('Diagnóstico registrado con éxito');
            navigate(`/dashboard-emp/${nit}/`);
        })
        .catch(error => {
            console.error('Error al registrar el diagnóstico:', error);
        });
        
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
                                    <DownloadPDFButton filename="ACTA_FINAL_MISE.pdf" />
                                </div>
                                <div className="px-6">
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
                                                                        className={`mt-4 p-2 bg-${sueñosSeleccionados[modulo.id_modulo] === sueño.sueño ? 'principalGreen' : 'blue-500'} text-white rounded`}
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
                                                    Con base en los resultados obtenidos, se generarán estrategias y recomendaciones específicas para mejorar las áreas identificadas. Se prevé un seguimiento detallado para evaluar el progreso de la empresa en función de los objetivos planteados.
                                                </p>
                                            </div>
                                        </div>
                                        {/* Botón de registrar diagnóstico */}
                                        <button
                                            className="mt-4 p-2 bg-principalGreen text-white rounded"
                                            onClick={registrarDiagnostico}
                                        >
                                            Registrar Diagnóstico
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutDashboard>
    );
};

export default EvaluacionEmpresa;
