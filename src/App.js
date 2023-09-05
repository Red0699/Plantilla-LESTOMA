import { Navigate, Outlet } from 'react-router-dom'
import React, { useContext } from 'react'
import Sidebar from './components/layouts/navbars/Sidebar';
import Navbar from './components/layouts/navbars/Navbar';

function App() {

  return (
    <>
      <Sidebar/>

      <div id="content-wrapper" className="">

        <div id='content'>

          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
          </button>

          <Navbar/>


          <div className="container-fluid">
          
            <Outlet />
            
          </div>

        </div>



      </div>
    </>
  )

}

export default App
