import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "re"

import { createCompany } from "../../api/pruebas.api";

export function FormCreateRol() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {

    const res = await createCompany(data);
    console.log(res);

  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          placeholder="id_rol"
          {...register("id_rol", { required: true })}
          className="border-solid border-2 border-black"
        />
        {errors.id_rol && <span>Este Campo es requerido</span>}
        <textarea
          rows={3}
          placeholder="descripcion"
          {...register("descripcion", { required: true })}
          className="border-solid border-2 border-black"
        ></textarea>
        {errors.descripcion && <span>Este Campo es requerido</span>}
        <button className="bg-principalGreen p-5">Save</button>
      </form>
    </div>
  );
}
