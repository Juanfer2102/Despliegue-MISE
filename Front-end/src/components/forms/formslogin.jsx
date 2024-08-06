import { useState } from "react";
import InputText from "../inputs/InputText.astro";




const Form = () => {
    console.log("Form component rendered");

    const [values, setValues] = useState({
        correo: "",
        contraseña: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log("Input change:", name, value);
    };

    const handleForm = (event) => {
        event.preventDefault();
        console.log(values);
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
        console.log("Show Password:", !showPassword);
    };


    return (
        <>
            <form onSubmit={handleForm} class="form flex flex-col gap-6">
                <input className="h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white " type="email" value={values.correo} name="correo" placeholder="Ingrese su correo..." autoComplete="off" onChange={handleInputChange} />
                <input className="h-full w-full rounded-lg caret-white bg-transparent text-white peer border p-5 font-sans text-lg font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white " type={showPassword ? "text" : "password"} value={values.contraseña} name="contraseña" placeholder="Ingrese su contraseña..." onChange={handleInputChange} />

                <div class="flex h-8 gap-2 items-center justify-center">
                    <input
                        class="border border-solid checked:bg-principalGreen border-principalGreen h-full w-8"
                        type="checkbox"
                        name="showpassword"
                        id="3"
                        checked={showPassword}
                        onChange={toggleShowPassword}
                    />
                    <p class="text-xl">Mostrar contraseña</p>
                </div>
                <div class="flex justify-center">
                    <button
                        id="login-button"
                        class="bg-principalGreen px-6 py-2 font-bold text-2xl rounded-lg"
                        type="submit"
                        onClick={(event) => {
                            event.preventDefault();
                            handleForm(event);
                          }}
                    >
                        Iniciar sesión
                    </button>
                </div>
            </form>
        </>

    );

};

export default Form;