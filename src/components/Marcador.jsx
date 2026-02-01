import "./marcador.css";


export function Marcador({ props }) {
  
  
  const scoreX = props?.x ?? 0;
  const scoreO = props?.o ?? 0;

  return (
    <div className="marcador">
      <p className="letter-marcado">Marcador</p>
      <div className="puntos">
        <span className="punto-x">X: {scoreX}</span>
        <span className="punto-o">O: {scoreO}</span>
      </div>
    </div>
  );
}