import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import './Sidebar.css'


const Sidebar = () => {

    return (

        <ul className="sd-settings navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/home">
                <div className="sidebar-brand-icon">
                    <i className="fas fa-desktop"></i>
                </div>
                <div className="sidebar-brand-text mx-3">LOGO UDEC</div>
            </Link>


            <hr className="sidebar-divider my-0 " />


            <li className="nav-item">
                <NavLink to="/home" className="nav-link" >
                    <i className="fas fa-fw fa-house-user"></i>
                    <span>Inicio</span>
                </NavLink>
            </li>

            <hr className="sidebar-divider" />


            <li className="nav-item">
                <NavLink to="/usuario" className="nav-link" >
                    <i className="fas fa-fw fa-users"></i>
                    <span>Usuarios</span>
                </NavLink>
            </li>




            <li className="nav-item">
                <NavLink to="/proveedor" className="nav-link" >
                    <i className="fas fa-fw fa-briefcase"></i>
                    <span>Proveedores</span>
                </NavLink>
            </li>



            <li className="nav-item">
                <NavLink to="/cliente" className="nav-link" >
                    <i className="fas fa-fw fa-user-alt"></i>
                    <span>Clientes</span>
                </NavLink>
            </li>


            <li className="nav-item">
                <NavLink to="/producto" className="nav-link" >
                    <i className="fas fa-fw fa-user-check"></i>
                    <span>Productos</span>
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/entrada" className="nav-link" >
                    <i className="fas fa-box"></i>
                    <span>Entradas</span>
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/salida" className="nav-link" >
                    <i className="fas fa-wallet"></i>
                    <span>Salidas</span>
                </NavLink>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

            

        </ul>
    )
}

export default Sidebar;