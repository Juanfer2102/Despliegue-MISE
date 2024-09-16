import React from 'react';
import LayoutDashboard from '../../layouts/LayoutDashboard';

const EvaluacionEmpresa = () => {

    const nombre_empresa = "Boteritos";

    // Datos de ejemplo para cada módulo
    const datosCapacidadesGerenciales = [
        {
            pregunta: '¿Cómo calificaría la planificación a mediano/largo plazo?',
            calificacion: '85',
            escala: 'Ampliamente Desarrollado o no aplica',
            descripcion: 'Sí utiliza herramientas como Trello, Notion, Project u otras'
        },
        {
            pregunta: '¿En qué medida se han definido y socializado las metas?',
            calificacion: '60',
            escala: 'Parcialmente Desarrollado',
            descripcion: 'Sí se han definido, pero no se han interiorizado/socializado a los colaboradores'
        },
        {
            pregunta: '¿Cuál es el estado de la planificación y seguimiento?',
            calificacion: '30',
            escala: 'No Desarrollado',
            descripcion: 'No se han definido. No hay planificación a mediano/largo plazo. Realiza todo en función del día a día'
        },
    ];

    const datosDesarrolloClientes = [
        {
            pregunta: '¿La empresa cuenta con un proceso para captar nuevos clientes?',
            calificacion: '75',
            escala: 'Parcialmente Desarrollado',
            descripcion: 'Tiene un proceso definido, pero es incipiente y no se aplica de forma consistente'
        },
        {
            pregunta: '¿La empresa hace seguimiento a sus prospectos?',
            calificacion: '80',
            escala: 'Ampliamente Desarrollado o no aplica',
            descripcion: 'Realiza seguimiento a los prospectos mediante un CRM y tiene procesos establecidos para gestionar estos seguimientos'
        },
        {
            pregunta: '¿La empresa tiene definida la propuesta de valor para captar nuevos clientes?',
            calificacion: '40',
            escala: 'No Desarrollado',
            descripcion: 'Tiene una propuesta de valor, pero no se aplica de manera efectiva para captar nuevos clientes'
        },
    ];

    const datosAdministracionFinanciera = [
        {
            pregunta: '¿La empresa lleva un control de sus costos y gastos?',
            calificacion: '90',
            escala: 'Ampliamente Desarrollado o no aplica',
            descripcion: 'Lleva un control riguroso y detallado de todos sus costos y gastos'
        },
        {
            pregunta: '¿La empresa tiene definida una estrategia de precios para sus productos o servicios?',
            calificacion: '45',
            escala: 'No Desarrollado',
            descripcion: 'Tiene una estrategia de precios, pero no se aplica de forma efectiva'
        },
        {
            pregunta: '¿La empresa tiene un presupuesto anual?',
            calificacion: '85',
            escala: 'Ampliamente Desarrollado o no aplica',
            descripcion: 'Tiene un presupuesto anual y lo utiliza de manera efectiva para la planificación financiera'
        },
    ];

    // Filtra los datos para mostrar solo los módulos no desarrollados
    const filtrarDatos = (datos) => {
        return datos.filter(item => parseInt(item.calificacion, 10) < 50 && item.escala === 'No Desarrollado');
    };

    // Renderiza la tabla para cada módulo con las preguntas y sus datos
    const renderTabla = (datos) => (
        <div className="flex flex-col mt-6 bg-greyBg rounded-md">
            <div className="flex bg-greyBlack text-white font-semibold">
                <div className="flex-1 p-5 text-left">Pregunta</div>
                <div className="flex-1 p-5 text-center">Calificación</div>
                <div className="flex-1 p-5 text-center">Escala</div>
                <div className="flex-1 p-5 text-center">Descripción</div>
            </div>
            {filtrarDatos(datos).map((item, index) => (
                <div key={index} className="flex border-t border-white">
                    <div className="flex-1 p-5 text-left">{item.pregunta}</div>
                    <div className="flex-1 p-5 text-center">{item.calificacion}</div>
                    <div className="flex-1 p-5 text-center">{item.escala}</div>
                    <div className="flex-1 p-5 text-center">{item.descripcion}</div>
                </div>
            ))}

        </div>
    );

    // Datos detallados para los talleres recomendados
    const recomendaciones = {
        CapacidadesGerenciales: [
            {
                tema: 'Planificación Estratégica',
                sesion: 1,
                objetivo: 'Desarrollar una planificación estratégica a mediano y largo plazo',
                alcance: 'Aplicable a empresas con estructura gerencial definida',
                contenido: 'Definición de metas, planificación estratégica, herramientas para seguimiento',
                facilitador: 'Dr. Juan Pérez',
                fecha: '2024-10-15',
                horario: '9:00 AM - 12:00 PM',
                ubicacion: 'Cámara de Comercio de Palmira, Sala A',
            },
            {
                tema: 'Gestión de Proyectos',
                sesion: 2,
                objetivo: 'Optimizar la gestión de proyectos dentro de la empresa',
                alcance: 'Empresas que utilicen herramientas de gestión de proyectos',
                contenido: 'Uso de Trello, Notion, MS Project para la gestión efectiva',
                facilitador: 'Ing. María López',
                fecha: '2024-10-20',
                horario: '2:00 PM - 5:00 PM',
                ubicacion: 'Cámara de Comercio de Palmira, Sala B',
            },
        ],
        DesarrolloClientes: [
            {
                tema: 'Captación de Clientes',
                sesion: 1,
                objetivo: 'Desarrollar procesos para la captación de nuevos clientes',
                alcance: 'Empresas en crecimiento con necesidad de expandir su mercado',
                contenido: 'Desarrollo de la propuesta de valor, canales de adquisición de clientes',
                facilitador: 'Lic. Carlos Gómez',
                fecha: '2024-11-01',
                horario: '10:00 AM - 1:00 PM',
                ubicacion: 'Cámara de Comercio de Palmira, Sala C',
            },
            {
                tema: 'Propuesta de Valor',
                sesion: 2,
                objetivo: 'Definir la propuesta de valor para captar nuevos clientes',
                alcance: 'Empresas que desean mejorar su presencia en el mercado',
                contenido: 'Diseño de la propuesta de valor, estrategias de marketing',
                facilitador: 'Lic. Ana Martínez',
                fecha: '2024-11-05',
                horario: '2:00 PM - 5:00 PM',
                ubicacion: 'Cámara de Comercio de Palmira, Sala D',
            },
        ],
        AdministracionFinanciera: [
            {
                tema: 'Control de Costos',
                sesion: 1,
                objetivo: 'Optimizar el control de costos y gastos en la empresa',
                alcance: 'Empresas que buscan mejorar su eficiencia financiera',
                contenido: 'Control de costos, análisis financiero, presupuestos',
                facilitador: 'Lic. Andrés Suárez',
                fecha: '2024-12-10',
                horario: '9:00 AM - 12:00 PM',
                ubicacion: 'Cámara de Comercio de Palmira, Sala E',
            },
            {
                tema: 'Estrategia de Precios',
                sesion: 2,
                objetivo: 'Desarrollar una estrategia de precios competitiva',
                alcance: 'Empresas que necesitan ajustar sus estrategias de precios',
                contenido: 'Estrategia de precios, análisis de mercado, fijación de precios',
                facilitador: 'Lic. Laura Sánchez',
                fecha: '2024-12-15',
                horario: '2:00 PM - 5:00 PM',
                ubicacion: 'Cámara de Comercio de Palmira, Sala F',
            },
        ],
    };

    // Renderiza la tabla de recomendaciones con todos los detalles
    const renderRecomendaciones = (modulo) => (
        <div className="flex flex-col gap-16 bg-greyBg rounded-md">
            <div className="">
                <div className="flex bg-greyBlack text-white font-semibold">
                    <div className="flex-1 p-3 text-left">Tema</div>
                    <div className="flex-1 p-3 text-center">N° de Sesión</div>
                    <div className="flex-1 p-3 text-center">Objetivo</div>
                    <div className="flex-1 p-3 text-center">Alcance</div>
                    <div className="flex-1 p-3 text-center">Contenido</div>
                    <div className="flex-1 p-3 text-center">Facilitador</div>
                    <div className="flex-1 p-3 text-center">Fecha</div>
                    <div className="flex-1 p-3 text-center">Horario</div>
                    <div className="flex-1 p-3 text-center">Ubicación</div>
                </div>
                {modulo.map((recomendacion, index) => (
                    <div key={index} className="flex">
                        <div className="flex-1 p-3 text-left">{recomendacion.tema}</div>
                        <div className="flex-1 p-3 text-center">{recomendacion.sesion}</div>
                        <div className="flex-1 p-3 text-center">{recomendacion.objetivo}</div>
                        <div className="flex-1 p-3 text-center">{recomendacion.alcance}</div>
                        <div className="flex-1 p-3 text-center">{recomendacion.contenido}</div>
                        <div className="flex-1 p-3 text-center">{recomendacion.facilitador}</div>
                        <div className="flex-1 p-3 text-center">{recomendacion.fecha}</div>
                        <div className="flex-1 p-3 text-center">{recomendacion.horario}</div>
                        <div className="flex-1 p-3 text-center">{recomendacion.ubicacion}</div>
                    </div>

                ))}
            </div>
            <div className='w-full bg-white h-1'></div>
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
                                    <p className='text-2xl font-bold'>Diagnóstico Inicial Empresarial {nombre_empresa}</p>
                                    <button className="p-2 text-sm tracking-wide transition-colors duration-200 bg-transparent border rounded-lg hover:bg-principalGreen hover:text-white hover:border-principalGreen border-white">
                                        Descargar Acta
                                    </button>
                                </div>
                                <div className="px-6">
                                    <div>
                                        <p className='font-bold text-xl'>Introducción</p>
                                        <p className='p-6 text-justify'>
                                            A través del servicio de acompañamiento del Modelo Integral de Servicios Empresariales (MISE), en su dimensión de FORTALECIMIENTO dirigido a empresas, ofrecido por la Cámara de Comercio de Palmira (CCP), se presenta el diagnóstico realizado para la empresa <span className="font-bold underline">{nombre_empresa}</span>.

                                            Este diagnóstico refleja las necesidades puntuales y metas empresariales acordadas, las cuales serán evidenciadas en el progreso de esta página. El MISE implementado por la CCP incluye fases clave como la identificación de necesidades, la focalización, la definición de una ruta de servicios, la oferta de un portafolio integral, y el seguimiento continuo a las empresas beneficiadas. Todo esto tiene como objetivo garantizar un mayor impacto en el crecimiento de las empresas de Palmira, Pradera, Florida y Candelaria.

                                            A medida que avance en esta página, podrá observar cómo estas metas se abordan y desarrollan en el diagnóstico empresarial de <span className="font-bold underline">{nombre_empresa}</span>.
                                        </p>
                                    </div>
                                    <div className="p-6">
                                        <h1 className="text-3xl font-bold ">Evaluación de la Empresa: {nombre_empresa}</h1>

                                        {/* Evaluación Capacidades Gerenciales */}
                                        <div className="pt-14">
                                            <h2 className="text-2xl font-bold ">Capacidades Gerenciales</h2>
                                            {renderTabla(datosCapacidadesGerenciales)}
                                            <div className="mt-6">
                                                <h3 className="text-xl font-bold pb-10">Talleres Recomendados</h3>
                                                {renderRecomendaciones(recomendaciones.CapacidadesGerenciales)}
                                            </div>
                                        </div>

                                        {/* Evaluación Desarrollo de Clientes */}
                                        <div className="pt-14">
                                            <h2 className="text-2xl font-bold ">Desarrollo de Clientes</h2>
                                            {renderTabla(datosDesarrolloClientes)}
                                            <div className="mt-6">
                                                <h3 className="text-xl font-bold pb-10">Talleres Recomendados</h3>
                                                {renderRecomendaciones(recomendaciones.DesarrolloClientes)}
                                            </div>
                                        </div>

                                        {/* Evaluación Administración Financiera */}
                                        <div className="pt-14">
                                            <h2 className="text-2xl font-bold ">Administración Financiera</h2>
                                            {renderTabla(datosAdministracionFinanciera)}
                                            <div className="mt-6">
                                                <h3 className="text-xl font-bold pb-10">Talleres Recomendados</h3>
                                                {renderRecomendaciones(recomendaciones.AdministracionFinanciera)}
                                            </div>
                                        </div>

                                        {/* Conclusiones */}
                                        <div className='p-8'>
                                            <p className='font-bold text-xl'>Conclusiones</p>
                                            <p className='p-6 text-justify'>
                                                La evaluación inicial de la empresa <span className='font-bold underline'>{nombre_empresa}</span> ha revelado áreas clave que requieren atención inmediata. Con la implementación de los talleres recomendados y el compromiso de la empresa en abordar estas deficiencias, se espera una mejora sustancial en su desempeño gerencial, desarrollo de clientes y administración financiera.
                                            </p>
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

export default EvaluacionEmpresa;
