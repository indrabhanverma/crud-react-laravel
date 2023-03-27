import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectList from "./admin/pages/ProjectList";
import ProjectCreate from "./admin/pages/ProjectCreate";
import ProjectEdit from "./admin/pages/ProjectEdit";
import ProjectShow from "./admin/pages/ProjectShow";

import ProductCreate from "./admin/product/create";
import ProductEdit from "./admin/product/edit";
import Productlist from "./admin/product/list";  

function Main() {
    return (
        <Router>
            <Routes>
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
   
export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
