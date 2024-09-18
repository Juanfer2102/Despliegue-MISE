import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TarjetasTema = () => {
    const [temas, setTemas] = useState([]);
    const { nit } = useParams();

    useEffect(() => {
        // Obtener temas desde el endpoint
        fetch(`http://localhost:8000/api/v2/calificaciones-bajas/empresa/${nit}/`)
            .then(response => response.json())
            .then(data => {
                // Extraer los temas de los datos de la respuesta
                const extraidos = data.flatMap(calificacion => 
                    calificacion.preguntas.map(pregunta => pregunta.tema)
                );
                setTemas(extraidos);
            });
    }, [nit]);

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

    return (
        <div className="bg-greyBlack rounded-xl p-4 text-white w-max h-max">
            <div className='flex flex-row justify-between'>
                <h2 className="text-2xl font-bold mb-4">Procesos en los que se encuentra la empresa</h2>
                <div className='flex flex-row gap-5'>
                    <a href={`/diagnostico/empresa/${nit}`}>
                        <button className="p-2 text-sm tracking-wide transition-colors duration-200 bg-transparent border rounded-lg hover:bg-principalGreen hover:text-white hover:border-principalGreen border-white">
                            Diagnostico Final
                        </button>
                    </a>
                    <a href={`/diagnostico/empresa/${nit}`}>
                        <button className="p-2 text-sm tracking-wide transition-colors duration-200 bg-transparent border rounded-lg hover:bg-principalGreen hover:text-white hover:border-principalGreen border-white">
                            Ver Diagnostico Inicial
                        </button>
                    </a>
                </div>
            </div>
            <div className="temas flex gap-8 p-4 border-t border-white max-w-[70rem] overflow-x-auto" style={styles.customScrollbar}>
                {/*
                {temas.map((tema, index) => (
                    <div key={index} className="flex-shrink-0 w-64 bg-darkGrey p-4 rounded-lg gap-8">
                        <h3 className="text-xl font-bold">{tema.num_sesion}</h3>
                        <p><strong>Módulo:</strong> {tema.nombre}</p>
                        <p><strong>Sesión:</strong> {tema.num_sesion}</p>
                        <p><strong>Objetivo:</strong> {tema.objetivo}</p>
                        <p><strong>Alcance:</strong> {tema.alcance}</p>
                        <p><strong>Contenido:</strong> {tema.contenido}</p>
                        <p><strong>Conferencista:</strong> {tema.conferencista}</p>
                        <p><strong>Fecha:</strong> {tema.fecha}</p>
                        <p><strong>Horario:</strong> {tema.horario}</p>
                        <p><strong>Ubicación:</strong> {tema.ubicacion}</p>
                    </div>
                ))}*/}
            </div>
        </div>
    );
}

export default TarjetasTema;
