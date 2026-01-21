import {  useEffect, useState } from "react";
import "./marcador.css"

export function Marcador({props}) {
  const [data, setData] = useState(()=>{
    const saved = localStorage.getItem("data");
    return saved ? JSON.stringify(saved): { x: 0, o: 2 };
  });


  useEffect(()=>{
    localStorage.setItem("data", JSON.stringify(props));

  },[props]);
 
 return (
  <div className="marcador">
    <p className="letter-marcado">Marcador</p>

    <div className="puntos">
      <span className="punto-x">X: {data.x}</span>
      <span className="punto-o">O: {data.o}</span>
    </div>
  </div>
);

}
