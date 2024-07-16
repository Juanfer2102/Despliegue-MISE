import React from "react";

export const visualizer = (resultprop) => {
  return (
    <>
    {console.log(typeResult)}
      <div>
        {resultprop.map((typeResult) => (
          <div key={typeResult.id_rol}>
            <h1>{typeResult.id_rol}</h1>
            <p>{typeResult.descripcion}</p>
          </div>
        ))}
      </div>
    </>
  );
};
