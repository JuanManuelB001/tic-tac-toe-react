import { useState } from 'react'

import './App.css'
import { Link } from "react-router-dom";
import { Board } from './components/Board';

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nexSquares){
    const nexHistory = [...history.slice(0, currentMove + 1), nexSquares];
    setHistory(nexHistory);
    setCurrentMove(nexHistory.length -1);

  }

  return (
   <div className="game">
    <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onplay={handlePlay}/>
    </div>
    <Link to="/history" state={{history, currentMove}}>
  <button>Ir a historial</button>
</Link>
   </div>
   
  )
}

export default App;
