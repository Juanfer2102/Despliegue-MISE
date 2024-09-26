import React from "react";

// Estilos en JSX
const styles = {
    customScrollbar: {
        scrollbarWidth: '13px',
        scrollbarColor: '#888 #262b32',
    },
    customScrollbarTrack: {
        background: '#262b32',
        borderRadius: '12px',
    },
    customScrollbarThumb: {
        background: '#888',
        borderRadius: '10px',
    },
    customScrollbarThumbHover: {
        background: '#555',
    }
};

// Función para determinar el fondo de la fila
const getBackgroundColor = (calificacion, calificacion_final) => {
    if (calificacion_final < calificacion) return "bg-red bg-opacity-50"; // Fondo rojo opaco
    if (calificacion_final > calificacion) return "bg-secondaryGreen bg-opacity-50"; // Fondo verde opaco
    return ""; // Sin fondo
};

const TablaPreguntasf = ({ calificaciones = [] }) => {
    const preguntas = calificaciones.flatMap(modulo =>
        modulo.preguntas.map(pregunta => ({
            ...pregunta,
            nombre_modulo: modulo.nombre  // Agrega el nombre del módulo a cada pregunta
        }))
    );

    return (
        <div className="overflow-x-auto rounded-xl w-full h-full">
            <div className="w-full">
                <div className="flex flex-col min-w-full">
                    <div className="bg-greyBlack border-textBg rounded-t-xl text-white sticky top-0 z-10 flex">
                        <div className="flex-1 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Módulo</div>
                        <div className="flex-1 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Pregunta</div>
                        <div className="flex-1 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Calificación Inicial</div>
                        <div className="flex-1 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Calificación Final</div>
                    </div>
                    <div className="text-white max-h-[17rem] overflow-y-auto" style={styles.customScrollbar}>
                        {preguntas.map((pregunta, idx) => (
                            <div key={idx} className={`flex gap-3 py-4 border-r border-l border-b border-white ${getBackgroundColor(pregunta.calificacion, pregunta.calificacion_final)}`}>
                                <div className="flex-1 px-6 text-sm font-medium text-gray-900">{pregunta.nombre_modulo}</div>
                                <div className="flex-1 px-6 text-sm text-gray-500">{pregunta.descripcion}</div>
                                <div className="flex-1 px-6 text-sm text-gray-500">{pregunta.calificacion}</div>
                                <div className="flex-1 px-6 text-sm font-semibold">{pregunta.calificacion_final}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TablaPreguntasf;
