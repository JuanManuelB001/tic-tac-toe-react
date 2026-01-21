

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HistorialGame } from "../pages/HistorialGame";
import { Player_1 } from "../components/Player_1";
import App from "../App";
import { Menu } from "../components/Menu";
export function Routers(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Menu/>}  />
                <Route path="/history" element={<HistorialGame/>} />
                <Route path="/2-player" element={<App/>} />
                <Route path="/1-player" element={<Player_1/>} />
            </Routes>
        </Router>
    );
}