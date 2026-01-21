import { Square } from "./Square";

export function BoardView({ square }) {
  return (
    <div className="board">
      {square.map((value, i) => (
        <Square key={i} value={value} nClick={null}>
          {" "}
        </Square>
      ))}
    </div>
  );
}
