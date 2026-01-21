import { Link } from "react-router-dom";
import "./menu.css";

export function Menu() {
  return (
    <div className="menu-container slide-in">
      <div className="menu">
        <h2>Menu del Juego</h2>
        <p className="option-menu">
          <Link to={'/1-player'}className="player-2 option-menu" >
          1-player</Link>
        </p>

        <p className="option-menu">
          <Link to={'/2-player'}className="player-2 option-menu" >
          2-player</Link>
        </p>
        
      </div>
    </div>
  );
}
