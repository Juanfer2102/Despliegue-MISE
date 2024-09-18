import React from 'react';
import { temasData } from '../../helpers/temasHelper';
import { useParams } from 'react-router-dom';

const TarjetasTema = () => {

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

    const { nit } = useParams();

    return (
        <div className="bg-greyBlack rounded-xl p-4 text-white">
            <div className='flex flex-row justify-between'>
                <h2 className="text-2xl font-bold mb-4">Procesos en los que se encuentra la empresa</h2>
                <div className='flex flex-row gap-5'>
                    <a href={`/diagnostico/empresa/101020203`}>
                        <button className="p-2 text-sm tracking-wide transition-colors duration-200 bg-transparent border rounded-lg hover:bg-principalGreen hover:text-white hover:border-principalGreen border-white">
                            Diagnostico Final
                        </button>
                    </a>
                    <a href={`/diagnostico/empresa/101020203`}>
                        <button className="p-2 text-sm tracking-wide transition-colors duration-200 bg-transparent border rounded-lg hover:bg-principalGreen hover:text-white hover:border-principalGreen border-white">
                            Ver Diagnostico Inicial
                        </button>
                    </a>
                </div>
            </div>
            <div className="temas flex gap-8 p-4 border-t border-white max-w-[70rem] overflow-x-auto" style={styles.customScrollbar}>
                {temasData.map((tema, index) => (
                    <div key={index} className="flex-shrink-0 w-64 bg-darkGrey p-4 rounded-lg gap-8">
                        <h3 className="text-xl font-bold">{tema.numero}</h3>
                        <p><strong>Módulo:</strong> {tema.modulo}</p>
                        <p><strong>Sesión:</strong> {tema.sesion}</p>
                        <p><strong>Objetivo:</strong> {tema.objetivo}</p>
                        <p><strong>Alcance:</strong> {tema.alcance}</p>
                        <p><strong>Contenido:</strong> {tema.contenido}</p>
                        <p><strong>Conferencista:</strong> {tema.conferencista}</p>
                        <p><strong>Fecha:</strong> {tema.fecha}</p>
                        <p><strong>Horario:</strong> {tema.horario}</p>
                        <p><strong>Ubicación:</strong> {tema.ubicacion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TarjetasTema;
