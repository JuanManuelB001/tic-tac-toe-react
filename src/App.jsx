import { useEffect, useState } from "react";

import "./App.css";
import { Link } from "react-router-dom";
import { Board } from "./components/Board";
import { Marcador } from "./components/Marcador";
import { TicTacToeAI } from "./components/TicTacToeAi";
function App({ticAi}) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const [score, setScore] = useState(() => {
  try {
    const saved = localStorage.getItem("data");
    // Si existe y no es "undefined", parsealo. Si no, usa el default.
    return saved ? JSON.parse(saved) : { x: 0, o: 0 };
  } catch (error) {
    return { x: 0, o: 0 };
  }
});
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
  if (gameOver || !winner) return; 

  setScore((prev) => {
    // Si por alguna razón prev es null, lo inicializamos aquí
    const currentScore = prev || { x: 0, o: 0 };
    const key = winner.toLowerCase();

    return {
      ...currentScore,
      [key]: (currentScore[key] || 0) + 1,
    };
  });

  setGameOver(true);
}

  // ACTUALIZAR LOCALSTORAGE
  useEffect(()=>{
    localStorage.setItem("data", JSON.stringify(score));
  }, [score])

  return (
    <div className="slide-left">
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
        {ticAi &&
          <TicTacToeAI 
          xIsNext={xIsNext} 
          squares={currentSquares} 
          onPlay={handlePlay} 
          gameOver={gameOver} 
        />
        }
        <Link to="/history" state={{ history, currentMove }}>
        <button>Ir a historial</button>
      </Link>
      <button onClick={() => reiniciarJuego()}>Jugar Otra Vez</button>
      <button onClick={() => borrarJuego()}>Reiniciar</button>
      </div>
    </div>
    </div>
  );
}

export default App;
