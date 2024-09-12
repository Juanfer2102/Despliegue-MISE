import { useState } from 'react'
import Input3 from "../../inputs/input3/input3.jsx";
import { ProgressCircleHero } from "../../inputs/porcentaje/porcentaje.jsx";

export const Formseditporc = () => {

    const [values, setValues] = useState({
        porcentaje1: "",
        nporcentaje1: "",
        porcentaje2: "",
        nporcentaje2: "",
        porcentaje3: "",
        nporcentaje3: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleForm = (event) => {
        event.preventDefault();
        console.log("Inputs value:", values); // Mostrar los valores de los inputs en la consola
    };


    return (
        <>
            
            <form onSubmit={handleForm} className="bg-greyBlack gap-8 flex flex-col p-8 w-[75.5rem] rounded-md max-h-[28rem] overflow-y-auto custom-scrollbar">
                <div className="flex flex-row gap-[25rem]">
                    <div className='flex flex-col gap-[8rem]'>
                        <Input3 name={"porcentaje1"} value={values.porcentaje1} onChange={handleInputChange} width="w-80" widthInput="w-[18rem]" DataType="Nombre" inputPlaceholder="No Desarrollado" inputType="text" />
                        <Input3 name={"nporcentaje1"} value={values.nporcentaje1} onChange={handleInputChange} width="w-80" widthInput="w-[18rem]" DataType="Porcentaje de Desarrollo" inputPlaceholder="25%" inputType="number" />
                    </div>
                    <div className='text-white'>
                        <ProgressCircleHero text={values.porcentaje1} value={values.nporcentaje1} />
                    </div>
                </div>
                <div className="flex flex-row gap-[25rem]">
                    <div className='flex flex-col gap-[8rem]'>
                        <Input3 name={"porcentaje2"} value={values.porcentaje2} onChange={handleInputChange} width="w-80" widthInput="w-[18rem]" DataType="Nombre" inputPlaceholder="No Desarrollado" inputType="text" />
                        <Input3 name={"nporcentaje2"} value={values.nporcentaje2} onChange={handleInputChange} width="w-80" widthInput="w-[18rem]" DataType="Porcentaje de Desarrollo" inputPlaceholder="25%" inputType="number" />
                    </div>
                    <div className='text-white'>
                        <ProgressCircleHero text={values.porcentaje2} value={values.nporcentaje2} />
                    </div>
                </div>
                <div className="flex flex-col gap-[25rem]">
                    <div className='flex flex-col gap-[8rem]'>
                        <Input3 name={"porcentaje3"} value={values.porcentaje3} onChange={handleInputChange} width="w-80" widthInput="w-[18rem]" DataType="Nombre" inputPlaceholder="No Desarrollado" inputType="text" />
                        <Input3 name={"nporcentaje3"} value={values.nporcentaje3} onChange={handleInputChange} width="w-80" widthInput="w-[18rem]" DataType="Porcentaje de Desarrollo" inputPlaceholder="25%" inputType="number" />
                    </div>
                    
                </div>
                <div>
                    <button
                        className="bg-principalGreen rounded-md text-white text-center font-semibold cursor-pointer w-[6rem] h-10 p-2"
                        type="submit"
                    >
                        <p>Guardar</p>
                    </button>
                </div>
            </form>
        </>
    )
}
