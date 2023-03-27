import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Admin Components
import ProjectList from "./components/admin/pages/ProjectList";
import ProjectCreate from "./components/admin/pages/ProjectCreate";
import ProjectEdit from "./components/admin/pages/ProjectEdit";
import ProjectShow from "./components/admin/pages/ProjectShow";
import ProductCreate from "./components/admin/product/create";
import ProductEdit from "./components/admin/product/edit";
import Productlist from "./components/admin/product/list";  

function Path() {
    return (
        <Router>
            <Routes>


        Front Routes



           // Admin Routes
                <Route exact path="/"  element={<ProjectList/>} />
                <Route path="/create"  element={<ProjectCreate/>} />
                <Route path="/edit/:id"  element={<ProjectEdit/>} />
                <Route path="/show/:id"  element={<ProjectShow/>} />
                <Route path="/productcreate"  element={<ProductCreate/>} />
                <Route path="/productedit/:id"  element={<ProductEdit/>} />
                <Route path="/productlist"  element={<Productlist/>} />
            </Routes>
        </Router>
    );
}
   
export default Path;

if (document.getElementById('app')) {
    ReactDOM.render(<Path />, document.getElementById('app'));
}
