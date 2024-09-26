import React, { useState, useEffect } from "react";
import LayoutDashboard from '../../layouts/LayoutDashboard';
import { useParams } from 'react-router-dom';
import DownloadPDFButton from "../../components/inputs/botones/botonpdf";
import TarjetasTemaFinal from "../../components/tarjetasdashboard/tarjetasTemaFinal";
import TablaPreguntas from "../../components/tablas/tablaempregunta";

const EvaluacionEmpresaNuevasf = () => {
    const { nit } = useParams();
    const [empresa, setEmpresa] = useState({});
    const [calificacionesBajas, setCalificacionesBajas] = useState([]);
    const [calificaciones, setCalificaciones] = useState([]);
    const [postulante, setPostulante] = useState([]);
    const [temasAsignados, setTemasAsignados] = useState([]);
    const [suenosAsignados, setSuenosAsignados] = useState([]);

    useEffect(() => {
        if (nit) {
            fetch(`http://localhost:8000/api/v2/postulante/num/${nit}/`)
                .then(response => response.json())
                .then(data => setPostulante(data))
                .catch(error => console.error("Error fetching postulante:", error));
        }
    }, [nit]);

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
        fetch(`http://localhost:8000/api/v2/modulos/calificaciones-bajas/${nit}/`)
            .then(response => response.json())
            .then(data => {
                setCalificacionesBajas(data);

                // Mapear temas y sueños
                const nuevosTemas = [];
                const nuevosSuenos = [];

                data.forEach(modulo => {
                    // Extraer temas
                    modulo.preguntas.forEach(pregunta => {
                        if (pregunta.tema) {
                            nuevosTemas.push(...pregunta.tema);
                        }
                    });

                    // Extraer sueños
                    if (modulo.suenos) {
                        nuevosSuenos.push(...modulo.suenos);
                    }
                });

                setTemasAsignados(nuevosTemas);
                setSuenosAsignados(nuevosSuenos);
            });
    }, [nit]);

    // Método para renderizar la tabla de calificaciones bajas
    const renderTabla = () => (
        <div className="flex flex-col mt-6 bg-greyBg rounded-md">
            <div className="flex bg-greyBlack text-white font-semibold">
                <div className="flex-1 p-5 text-left">Pregunta</div>
                <div className="flex-1 p-5 text-center">Calificación</div>
                <div className="flex-1 p-5 text-center">Criterio</div>
            </div>
            {calificacionesBajas.map((modulo) =>
                modulo.preguntas.map((item, index) => (
                    <div key={item.id} className="flex border-t border-white">
                        <div className="flex-1 p-5 text-left">{item.descripcion_pregunta}</div>
                        <div className="flex-1 p-5 text-center">{item.calificacion}</div>
                        <div className="flex-1 p-5 text-center">{item.criterio}</div>
                    </div>
                ))
            )}
        </div>
    );

    return (
        <LayoutDashboard title="Dashboard">
            <main className="bg-greyBg w-full h-screen overflow-x-hidden">
                <div className="flex flex-col w-full h-full">
                    <div className="bg-greyBlack xl:h-20 lg:h-20 w-full"></div>
                    <div className="bg-greyBg flex flex-col py-2 xl:gap-5 lg:gap-5 gap-4 w-full xl:h-full px-4 lg:px-12 xl:px-12 pt-4 xl:pt-6">
                        <div className="flex flex-row-reverse justify-between items-center pt-5">
                            <DownloadPDFButton tipo={"Final"} pdfType={"Final"} />
                            <div className="w-[60rem]">
                                <p className='font-bold text-white text-xl'>Introducción</p>
                                <p className='p-6 text-white text-justify'>
                                    Por medio del servicio de acompañamiento del Modelo Integral de Servicios Empresariales (MISE), en su dimensión de FORTALECIMIENTO (dirigido a empresas), que le ofrece la Cámara de Comercio de Palmira (CCP), se presenta el diagnóstico final realizado para la empresa <span className="font-bold underline">{empresa.nombre_empresa}</span>.

                                    Este diagnóstico final detalla las modificaciones del proceso, el cumplimiento de sueños, diagnóstico final de sus resultados en el programa y observaciones o recomendaciones.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col xl:flex-col lg:w-full lg:flex-col xl:gap-[2rem] lg:gap-[3rem] gap-10">
                            <div className="flex flex-col h-max lg:flex-row gap-5 w-full xl:w-full lg:w-full">
                                <TarjetasTemaFinal nit={nit} />
                            </div>
                        </div>
                        <div className="flex flex-col xl:flex-row lg:flex-row gap-8 max-md:pb-2 xl:pb-2 lg:pb-2 xl:justify-between h-full">
                            <TablaPreguntas calificaciones={calificaciones} />
                        </div>
                        <div className="flex xl:flex-row lg:flex-row flex-col xl:gap-[5rem] lg:gap-[5rem]">
                            <div className="w-full">
                                <h1 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white p-3">Informacion Postulante</h1>
                                <div className="bg-greyBlack p-3 sm:p-5 rounded-xl mb-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <div>
                                                <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Nombre</h2>
                                                <p className="text-principalGreen font-semibold">{postulante.nombres_postulante}</p>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Celular</h2>
                                                <p className="text-principalGreen font-semibold">{postulante.celular}</p>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Correo</h2>
                                                <p className="text-principalGreen font-semibold">{postulante.correo}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Municipio</h2>
                                                <p className="text-principalGreen font-semibold">{postulante.municipio}</p>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Tipo de Documento</h2>
                                                <p className="text-principalGreen font-semibold">{postulante.tipo_documento}</p>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">No. Documento</h2>
                                                <p className="text-principalGreen font-semibold">{postulante.no_documento}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <h1 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white p-3">Informacion Empresa</h1>
                                <div className="bg-greyBlack p-3 sm:p-5 rounded-xl mb-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <div>
                                                <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Razon Social</h2>
                                                <p className="text-principalGreen font-semibold">{empresa.razon_social}</p>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Nit</h2>
                                                <p className="text-principalGreen font-semibold">{empresa.nit}</p>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Fecha Inicio</h2>
                                                <p className="text-principalGreen font-semibold">{empresa.fecha_creacion}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Representante Legal</h2>
                                                <p className="text-principalGreen font-semibold">{postulante.nombres_postulante} {postulante.apellidos_postulante}</p>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Telefono</h2>
                                                <p className="text-principalGreen font-semibold">{empresa.celular}</p>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Email</h2>
                                                <p className="text-principalGreen font-semibold">{empresa.correo}</p>
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
};

export default EvaluacionEmpresaNuevasf;
