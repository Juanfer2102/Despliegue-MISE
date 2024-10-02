import { Textarea } from '@tremor/react';
import './csstextarea.css';

/**
 * Componente para mostrar un área de texto con etiquetas y estilos personalizados.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.DataType - El texto de la etiqueta para el área de texto.
 * @param {string} props.width - Clases de Tailwind CSS para el ancho del contenedor de la etiqueta.
 * @param {string} props.widthInput - Clases de Tailwind CSS para el ancho del área de texto.
 * @param {string} props.height - Clases de Tailwind CSS para la altura del área de texto.
 * @param {string} [props.name] - Nombre del área de texto.
 * @param {string} [props.value] - Valor del área de texto.
 * @param {Function} [props.onChange] - Función de callback que se llama cuando el valor del área de texto cambia.
 * @returns {JSX.Element} - Un área de texto con una etiqueta y estilos personalizados.
 */
export const TextareaHero = ({DataType, width, widthInput, height, name, value, onChange}) => (
  
  <div class="text-textBg items-center text-start content-center flex flex-row">
    <div class={width}>
        <p class="font-semibold">{DataType}</p>
    </div>
    <div>
        <Textarea name={name} value={value} onChange={onChange} placeholder="Escribe aqui..." className={`${widthInput} ${height} mx-auto max-w-xs rounded-md hover:bg-transparent focus:border-white focus:border-solid border-solid border-2 border-white text-white bg-transparent overflow-y-auto custom-scrollbar`} />
    </div>
    
</div>
);
