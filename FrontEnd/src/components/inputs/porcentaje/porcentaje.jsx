import { ProgressCircle } from '@tremor/react';
import PropTypes from 'prop-types';

/**
 * Componente que muestra un círculo de progreso con un texto descriptivo.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {number} props.value - El valor del progreso, que se muestra dentro del círculo.
 * @param {string} props.text - Texto descriptivo que aparece encima del círculo de progreso.
 * @param {string} props.width - Clase CSS para definir el ancho del contenedor.
 *
 * @returns {JSX.Element} - Un elemento que representa un círculo de progreso con texto.
 */
export const ProgressCircleHero = ({ value, text, width }) => (
  <div className={`${width} mx-auto grid grid-cols-1 gap-12 border-2 p-5 rounded-xl border-white relative`}>
    <p className='text-center'>{text}</p>
    <div className="flex justify-center relative">
      <ProgressCircle value={value} csize="xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm font-bold">{value}</p>
        </div>
      </ProgressCircle>
    </div>
  </div>
);

ProgressCircleHero.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
};
