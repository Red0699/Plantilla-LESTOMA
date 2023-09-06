import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import './Sidebar.css'


const Sidebar = () => {

    return (

        <nav className="sd-settings navbar-nav sidebar sidebar-dark navbar-expand-xs fixed-left" id="accordionSidebar">

        <div>

            <Link className="sidenav-header d-flex align-items-center justify-content-center" to="/home">
                <a className=" navbar-brand" href="javascript:void(0)">
                    <img src="/img/Logo2_UDEC.png" alt="Logo" style={{ width: '350px', height: '120px' }} className='navbar-brand-img' />
                </a>
            </Link>

            <hr className="sidebar-divider my-0 " />


            <li className="nav-item active">
                <NavLink to="/home" className="nav-link" >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </NavLink>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />

            {/* Heading */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/*Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <NavLink className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Componentes</span>
                </NavLink>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <NavLink className="collapse-item" to="/buttons">Buttons</NavLink>
                        <NavLink className="collapse-item" to="/card">Cards</NavLink>
                    </div>
                </div>
            </li>

            {/* Nav Item - Tables */}
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilidades</span>
                </a>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />

            {/* Heading */}
            <div className="sidebar-heading">
                Addons
            </div>

            {/* Nav Item - Páginas Collapse Menu */}
            <li className="nav-item">
                <NavLink className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Páginas</span>
                </NavLink>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <NavLink className="collapse-item" to="/login">Login</NavLink>
                        <NavLink className="collapse-item" to="/registro">Registro</NavLink>
                        <NavLink className="collapse-item" to="#">Forgot Password</NavLink>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <NavLink className="collapse-item" to="#">404 Page</NavLink>
                    </div>
                </div>
            </li>

            {/* Nav Item - Charts */}
            <li className="nav-item">
                <NavLink className="nav-link" to="#">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span>
                </NavLink>
            </li>

            {/* Nav Item - Tables */}
            <li className="nav-item">
                <NavLink className="nav-link" to="/table">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span>
                </NavLink>
            </li>


            <hr className="sidebar-divider d-none d-md-block" />

            {/*Sidebar Toggler (Sidebar) 
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            */}

            </div>
        </nav>
    )
}

export default Sidebar;