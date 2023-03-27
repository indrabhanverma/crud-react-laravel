import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Front/Home";


function FrontMain() {
    return (
        <Router>
            <Routes>
            <Route exact path="/"  element={<Home/>} />
              
            </Routes>
        </Router>
    );
}
   
export default FrontMain;
   
if (document.getElementById('front')) {
    ReactDOM.render(<FrontMain />, document.getElementById('front'));
}

