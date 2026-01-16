import {  useState } from "react";
import "./marcador.css"

export function Marcador({props}) {
  
 return (
  <div className="marcador">
    <p className="letter-marcado">Marcador</p>

    <div className="puntos">
      <span className="punto-x">X: {props.x}</span>
      <span className="punto-o">O: {props.o}</span>
    </div>
  </div>
);

}
