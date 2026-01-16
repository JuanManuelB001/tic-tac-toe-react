import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BoardView } from "../components/BoardView";
import "./historialGame.css";

export function HistorialGame() {
  const location = useLocation();
  const {history =[], currentMove: initialMove = 0 }= location.state|| {}; // si no hay, usa []
  const [currentMove, setCurrentMove] = useState(initialMove)
  console.log(history);
  function jumpTo(nexMove) {
    setCurrentMove(nexMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      (description = "Go to Move # "), move;
    } else {
      description = "Go to gate Start";
    }
    return (
      <li key={move} >
        <button  className="description" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div>
  <h2>
    {history.length <=1? "No hay historial guardado": "Historial de jugadas"}
  </h2>
       <div>
          <BoardView square={history[currentMove]|| Array(9).fill(null)} ></BoardView>
       </div>
      <div className="game-info">
        <ol className="lista-description">{moves}</ol>
      </div>
    </div>
  );
}
