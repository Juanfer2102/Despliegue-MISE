import { Textarea } from '@tremor/react';
import './csstextarea.css';

export const TextareaHero = ({DataType, width, widthInput, height,}) => (
  
  <div class="text-textBg items-center text-start content-center flex flex-row">
    <div class={width}>
        <p class="font-semibold">{DataType}</p>
    </div>
    <div>
        <Textarea placeholder="Escribe aqui..." className=`${widthInput} ${height} mx-auto max-w-xs rounded-md hover:bg-transparent focus:border-white focus:border-solid border-solid border-2 border-white bg-transparent overflow-y-auto custom-scrollbar` />
    </div>
    
</div>
);