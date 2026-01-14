

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HistorialGame } from "../pages/HistorialGame";

import App from "../App";
export function Routers(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>}  />
                <Route path="/history" element={<HistorialGame/>} />
            </Routes>
        </Router>
    );
}