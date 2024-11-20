import React from "react";
import "../../styles/TituloTexto.css";

export const TituloTexto = ({ title, text }) => {
  return (
    <div className="TituloTexto">
      <h2 className="text-title">{title}</h2>
      <p className="text-body">{text}</p>
    </div>
  );
};