// modaltaller.jsx
import React from 'react';

/**
 * Componente que muestra un modal con un mensaje sobre un taller.
 *
 * @param {Object} props - Props del componente.
 * @param {string} props.texto - Texto que describe el taller.
 *
 * @returns {JSX.Element} - Un modal con un mensaje sobre el taller.
 */
export const modaltaller = ({ texto }) => {
  return (
    <div className="flex w-60 h-40 border border-principalGreen rounded-xl text-white justify-center items-center text-sm uppercase p-10 overflow-hidden hover:bg-principalGreen ease-in duration-150">
      <p className="text-center font-semibold">Taller: {texto}</p>
    </div>
  );
};
