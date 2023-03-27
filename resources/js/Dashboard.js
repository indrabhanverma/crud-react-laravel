import React from 'react';
// import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Link} from "react-router-dom";

function Dashboard() {
    return (
 
        <div className="container-scroller">
        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <router-link className="navbar-brand brand-logo" to="/" ><img src="assets/images/logo.svg" alt="logo" /></router-link>
         
         
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-stretch">
            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
              <span className="mdi mdi-menu"></span>
            </button>
            <div className="search-field d-none d-xl-block">
              <form className="d-flex align-items-center h-100" action="#">
                <div className="input-group">
                  <div className="input-group-prepend bg-transparent">
                    <i className="input-group-text border-0 mdi mdi-magnify"></i>
                  </div>
             
                </div>
              </form>
            </div>
            <ul className="navbar-nav navbar-nav-right">
             
           
              <li className="nav-item nav-profile dropdown">
                <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                  <div className="nav-profile-img">
                                </div>
                  <div className="nav-profile-text">
                    <p className="mb-1 text-black">Admin</p>
                  </div>
                </a>
                <div className="dropdown-menu navbar-dropdown dropdown-menu-right p-0 border-0 font-size-sm" aria-labelledby="profileDropdown" data-x-placement="bottom-end">
                  <div className="p-3 text-center bg-primary">
                   
                  </div>
                  <div className="p-2">               
                    
                    <a className="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#">
                      <span>Profile</span>
                      <span className="p-0">
                        <span className="badge badge-success">1</span>
                        <i className="mdi mdi-account-outline ml-1"></i>
                      </span>
                    </a>
                   
                    <div role="separator" className="dropdown-divider"></div>
                    <h5 className="dropdown-header text-uppercase  pl-2 text-dark mt-2">Actions</h5>
                  
                    <a className="dropdown-item py-1 d-flex align-items-center justify-content-between" href="/logout">
                      <span>Log Out</span>
                      <i className="mdi mdi-logout ml-1"></i>
                    </a>
                  </div>
                </div>
              </li>
          
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span className="mdi mdi-menu"></span>
            </button>
          </div>
        </nav>
        <div className="container-fluid page-body-wrapper" >
      
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
           
              <li className="nav-item">
                <router-link exact-active-className="active" to="/" className="nav-item nav-link">
               
                  <span className="icon-bg"><i className="mdi mdi-cube menu-icon"></i></span>
                  <span className="menu-title">Dashboard</span>
                </router-link>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                  <span className="icon-bg"><i className="mdi mdi-crosshairs-gps menu-icon"></i></span>
                  <span className="menu-title">Category</span>
                  <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="ui-basic">
                  <ul className="nav flex-column sub-menu">
                
                    <li className="nav-item"> <Router> <Link to="/productlist">Product List </Link></Router> 
</li>
                    
                  </ul>
                </div>
                <div className="collapse" id="ui-basic">
                  <ul className="nav flex-column sub-menu">
                
                    <li className="nav-item"><router-link exact-active-className="active" to="/subcategoryList" className="nav-item nav-link">Subcategory</router-link></li>
                    
                  </ul>
                </div>
              </li>
          
              <li className="nav-item sidebar-user-actions">
                <div className="sidebar-user-menu">
                  <a href="/logout" className="nav-link"><i className="mdi mdi-logout menu-icon"></i>
                    <span className="menu-title">Log Out</span></a>
                </div>
              </li>
            </ul>
          </nav>
        
          <div className="main-panel">
            <div className="content-wrapper">
              
              <router-view></router-view>
              
            </div>
       
           
            <footer className="footer">
              <div className="footer-inner-wraper">
                <div className="d-sm-flex justify-content-center justify-content-sm-between">
               
                </div>
              </div>
            </footer>
          
          </div>
      
        </div>
  </div>
   
 
  

    );
}
   
export default Dashboard;
   
// if (document.getElementById('app')) {
//     ReactDOM.render(<Dashboard />, document.getElementById('app'));
// }

