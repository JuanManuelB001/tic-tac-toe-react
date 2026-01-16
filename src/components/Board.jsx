import { useEffect } from "react";
import { Square } from "./Square";
import "./board.css";

export function Board({ xIsNext, squares, onplay, onWinner }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    const currentPlayer = xIsNext ? "X" : "O";

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // posiciones actuales del jugador en orden
    const playerPositions = squares
      .map((value, index) => (value === currentPlayer ? index : null))
      .filter((v) => v !== null);

    // si ya tiene 3 fichas, borrar la más antigua
    if (playerPositions.length === 3) {
      // BORRA UN NUMERO ALEATORIO
      let num = Math.floor(Math.random() * 3);
      console.log(num);
      const oldestPosition = playerPositions[num];
      nextSquares[oldestPosition] = null;
    }

    // colocar la nueva ficha
    nextSquares[i] = currentPlayer;
    onplay(nextSquares);
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }
  useEffect(() => {
    if (winner) {
      onWinner(winner);
    }
  }, [winner, onWinner]);
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((value, i) => (
          <Square key={i} value={value} onSquareClick={() => handleClick(i)} />
        ))}
        
      </div>
    </div>
  );
}
