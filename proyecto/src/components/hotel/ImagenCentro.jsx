import React from "react";
import "../../styles/imagencentro.css";

export const ImagenCentro = ({src}) => {
  return (
    <div className="imagen-centro">
      <img src={src}/>
    </div>
  );
};