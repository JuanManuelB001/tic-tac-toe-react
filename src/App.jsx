import { useEffect, useState } from "react";

import "./App.css";
import { Link } from "react-router-dom";
import { Board } from "./components/Board";
import { Marcador } from "./components/Marcador";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const [score, setScore] = useState({ x: 0, o: 0 });
  const [gameOver, setGameOver] = useState(false);
  let currentSquares = history[currentMove];

  function handlePlay(nexSquares) {
    const nexHistory = [...history.slice(0, currentMove + 1), nexSquares];
    setHistory(nexHistory);
    setCurrentMove(nexHistory.length - 1);
  }

  const reiniciarJuego = () => {
    setHistory([Array(9).fill(null)]);
    setGameOver(false);
    setCurrentMove(0);
  };
  const borrarJuego = ()=>{
    reiniciarJuego();
    setScore({x:0, o:0});
  }
  function handleWin(winner) {
    if (gameOver) return; // evita sumar varias veces

    setScore((prev) => ({
      ...prev,
      [winner.toLowerCase()]: prev[winner.toLowerCase()] + 1,
    }));

    setGameOver(true);
  }

  return (
    <div className="game">
      <Marcador props={score} />
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onplay={handlePlay}
          onWinner={handleWin}
        />
      </div>
      <div className="menu-juego">
        <Link to="/history" state={{ history, currentMove }}>
        <button>Ir a historial</button>
      </Link>
      <button onClick={() => reiniciarJuego()}>Jugar Otra Vez</button>
      <button onClick={() => borrarJuego()}>Reiniciar</button>
      </div>
    </div>
  );
}

export default App;
