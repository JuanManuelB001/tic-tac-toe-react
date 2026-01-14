import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { keys } from 'man/lib/objects';
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

  function jumpTo(nexMove){
    setCurrentMove(nexMove);
  }

  const moves = history.map((squares, move)=>{
    let description
    if(move >0){
      description= "Go to Move # ", move;
    }
    else{
      description= "Go to gate Start";
    }
    return (
      <li key={move}>
        <button onClick={()=> jumpTo(move)}>
          {description}
        </button>
      </li>
    )
  });

  return (
   <div className="game">
    <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onplay={handlePlay}/>
    </div>
    <div className="game-info">
      <ol>
        {moves}
      </ol>
    </div>
   </div>
  )
}

export default App;
