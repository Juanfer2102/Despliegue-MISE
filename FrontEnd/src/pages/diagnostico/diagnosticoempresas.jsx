import React, { useState, useEffect } from "react";
import LayoutDashboard from '../../layouts/LayoutDashboard';
import { useParams } from 'react-router-dom';
import BackButton from "../../components/inputs/goback/BackButton";

const EvaluacionEmpresaNuevas = () => {
    const { nit } = useParams();
    const [empresa, setEmpresa] = useState({});
    const [calificacionesBajas, setCalificacionesBajas] = useState([]);
    const [temasAsignados, setTemasAsignados] = useState([]);
    const [suenosAsignados, setSuenosAsignados] = useState([]);

    useEffect(() => {
        // Obtener información de la empresa
        fetch(`https://despliegue-mise.onrender.com/api/v2/empresas/${nit}/`)
            .then(response => response.json())
            .then(data => {
                setEmpresa(data);
            });
    }, [nit]);

    useEffect(() => {
        // Obtener calificaciones bajas
        fetch(`https://despliegue-mise.onrender.com/api/v2/modulos/calificaciones-bajas/${nit}/`)
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
        <LayoutDashboard title="Evaluación de Empresa">
            <main className="flex flex-row w-full bg-greyBlack h-screen text-white">
                <div className="flex flex-col w-full h-full">
                    <div className="flex content-center justify-end h-20 w-full" />
                    <div className="bg-greyBg flex flex-col h-full w-full px-6 pt-6 overflow-auto">
                        <div className="gap-8 flex flex-col px-8 w-full h-full rounded-md">
                            <BackButton text={`Evaluación Inicial de ${empresa.nombre_empresa || 'Cargando...'}`} />
                            <div className="rounded-xl flex flex-col gap-6 h-full py-6">
                                <div className="px-6 flex flex-col p-4 gap-8">
                                    <div>
                                        <h1 className="text-3xl font-bold">Calificaciones Bajas</h1>
                                        {renderTabla(calificacionesBajas)}
                                    </div>
                                    <div>
                                        <h1 className="text-3xl font-bold">Temas Asignados</h1>
                                        {temasAsignados.map(tema => (
                                            <div key={tema.id_tema} className="p-4 border-b border-gray-200">
                                                <h3 className="text-xl font-bold">{tema.titulo_formacion}</h3>
                                                <p><strong>Descripción:</strong> {tema.contenido}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="h-2"></div>
                                    <div>
                                        <h1 className="text-3xl font-bold">Sueños Asignados</h1>
                                        {suenosAsignados.map((sueno, index) => (
                                            <div key={index} className="p-4 border-b border-gray-200">
                                                <h3 className="text-xl font-bold">Sueño: {sueno.sueño}</h3>
                                                <p><strong>Nivel:</strong> {sueno.nivel}</p>
                                                <p><strong>Descripción:</strong> {sueno.medicion}</p>
                                            </div>
                                        ))}
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

export default EvaluacionEmpresaNuevas;
