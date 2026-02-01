import { useEffect } from "react";

export function TicTacToeAI({ xIsNext, squares, onPlay, gameOver }) {
  useEffect(() => {
    // Solo actúa si es el turno de 'O' (IA) y el juego no ha terminado
    if (!xIsNext && !gameOver) {
      const timer = setTimeout(() => {
        makeBestMove();
      }, 600); // Retraso para que parezca que piensa

      return () => clearTimeout(timer);
    }
  }, [xIsNext, gameOver, squares]);

  function makeBestMove() {
    const currentPlayer = "O";
    const nextSquares = squares.slice();

    // 1. Obtener posiciones actuales de la IA
    const playerPositions = nextSquares
      .map((value, index) => (value === currentPlayer ? index : null))
      .filter((v) => v !== null);

    // 2. Aplicar regla de eliminación (si ya tiene 3 fichas)
    if (playerPositions.length === 3) {
      const oldestPosition = playerPositions[0]; // Aquí puedes usar [0] para la más antigua o Random
      nextSquares[oldestPosition] = null;
    }

    // 3. Decidir dónde poner la nueva ficha
    // Por ahora, buscará una casilla vacía aleatoria
    const availableSquares = nextSquares
      .map((val, idx) => (val === null ? idx : null))
      .filter((val) => val !== null);

    if (availableSquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableSquares.length);
      const move = availableSquares[randomIndex];
      
      nextSquares[move] = currentPlayer;
      onPlay(nextSquares); // Enviamos el nuevo tablero de vuelta a App.js
    }
  }

  return null; // Este componente no renderiza HTML
}