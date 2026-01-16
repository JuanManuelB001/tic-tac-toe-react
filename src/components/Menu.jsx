import { Link } from "react-router-dom";
import "./menu.css";

export function Menu() {
  return (
    <div className="menu-container slide-in">
      <div className="menu">
        <h2>Menu del Juego</h2>
        
        <p className="p-menu">
          <Link to={'/2-player'}>
          2-player</Link>
        </p>
        
      </div>
    </div>
  );
}
