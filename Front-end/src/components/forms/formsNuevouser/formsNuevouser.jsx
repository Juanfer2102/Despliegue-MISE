// import React, {useState} from 'react'
// import InputComponent from '../../inputs/input3';

// export const FormsNuevouser = () => {

//     // Estado para almacenar los valores de los inputs
//     const [values, setValues] = useState({
//         nombres: "",
//         apellidos: "",
//         programa: "",
//         prefijo: "",
//         correo: "",
//         celular: "",
//         contrasena: "",
//     });

//     // Función para manejar cambios en los inputs y selectores
//     const handleInputChange = (name, value) => {
//         setValues({
//             ...values,
//             [name]: value,
//         });

//     }
    
//     return (
//         <div
//             class="flex flex-col text-textBg w-full pl-3 font-semibold gap-5 py-5 overflow-y-visible"
//         >
//             <InputComponent
//                 width="w-44"
//                 widthInput="w-full"
//                 DataType="Nombre"
//                 inputPlaceholder="Nombre"
//                 inputType="text"
//                 height="h-12"
//                 additionalClass="w-full"
//                 onChange={handleInputChange}
//                 name="nombres"
//             />
//             <InputComponent
//                 width="w-44"
//                 widthInput="w-full"
//                 DataType="Apellido"
//                 inputPlaceholder="Apellido"
//                 inputType="text"
//                 height="h-12"
//                 additionalClass="w-full"
//                 onChange={handleInputChange}
//                 name="apellidos"
//             />
//             <InputComponent
//                 width="w-44"
//                 widthInput="w-full"
//                 DataType="Email"
//                 inputPlaceholder="Correo Electronico"
//                 inputType="email"
//                 height="h-12"
//                 additionalClass=""
//                 onChange={handleInputChange}
//                 name="correo"
//             />
//             <div class="flex flex-row gap-5">
//                 <InputComponent
//                     width="w-44"
//                     widthInput="w-full"
//                     DataType="Celular"
//                     inputPlaceholder="Prefijo"
//                     inputType="number"
//                     height="h-12"
//                     additionalClass=""
//                     onChange={handleInputChange}
//                     name="prefijo"
//                 />
//                 <InputComponent
//                     width="w-4"
//                     widthInput="w-full"
//                     DataType=""
//                     inputPlaceholder="Numero Celular"
//                     inputType="number"
//                     height="h-12"
//                     additionalClass=""
//                     onChange={handleInputChange}
//                     name="celular"
//                 />
//             </div>
//             <InputComponent
//                 width="w-44"
//                 widthInput="w-full"
//                 DataType="Contraseña"
//                 inputPlaceholder="*********"
//                 inputType="password"
//                 height="h-12"
//                 additionalClass=""
//                 onChange={handleInputChange}
//                 name="contrasena"
//             />
//         </div>
//     )
// }


// export default FormsNuevouser;

import React, { useState } from 'react';
import InputComponent from '../../inputs/input3';
import Boton from '../../inputs/boton.jsx';

export const FormsNuevouser = () => {
    const [values, setValues] = useState({
        nombres: "",
        apellidos: "",
        prefijo: "",
        correo: "",
        celular: "",
        contrasena: "",
    });

    const handleInputChange = (name, value) => {
        setValues({
            ...values,
            [name]: value,
        });
    };


    return (
        <form className="flex flex-col text-textBg w-full pl-3 font-semibold gap-5 py-4 overflow-y-visible">
            <InputComponent
                width="w-44"
                widthInput="w-full"
                DataType="Nombre"
                inputPlaceholder="Nombre"
                inputType="text"
                height="h-12"
                additionalClass="w-full"
                onChange={handleInputChange}
                name="nombres"
            />
            <InputComponent
                width="w-44"
                widthInput="w-full"
                DataType="Apellido"
                inputPlaceholder="Apellido"
                inputType="text"
                height="h-12"
                additionalClass="w-full"
                onChange={handleInputChange}
                name="apellidos"
            />
            <InputComponent
                width="w-44"
                widthInput="w-full"
                DataType="Email"
                inputPlaceholder="Correo Electronico"
                inputType="email"
                height="h-12"
                additionalClass=""
                onChange={handleInputChange}
                name="correo"
            />
            <div className="flex flex-row gap-5">
                <InputComponent
                    width="w-44"
                    widthInput="w-full"
                    DataType="Celular"
                    inputPlaceholder="Prefijo"
                    inputType="number"
                    height="h-12"
                    additionalClass=""
                    onChange={handleInputChange}
                    name="prefijo"
                />
                <InputComponent
                    width="w-4"
                    widthInput="w-full"
                    DataType=""
                    inputPlaceholder="Numero Celular"
                    inputType="number"
                    height="h-12"
                    additionalClass=""
                    onChange={handleInputChange}
                    name="celular"
                />
            </div>
            <InputComponent
                width="w-44"
                widthInput="w-full"
                DataType="Contraseña"
                inputPlaceholder="*********"
                inputType="password"
                height="h-12"
                additionalClass=""
                onChange={handleInputChange}
                name="contrasena"
            />
            <div>
             <Boton type="submit" />
            </div>
            
        </form>
    );
};

export default FormsNuevouser;

