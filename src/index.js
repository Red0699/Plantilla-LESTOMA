import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

//Pages
import Dashboard from './components/pages/Ejemplos/Dashboard/Dashboard.js'
import ButtonsPage from './components/pages/Ejemplos/Buttons/ButtonsPage.js'
import Login from './components/pages/Auth/Login.js'
import Registro from './components/pages/Auth/Registro.js'
import TablesPage from './components/pages/Ejemplos/Tables/TablesPage.js'
import CardPage from './components/pages/Ejemplos/Cards/CardPage.js';

ReactDOM.createRoot(document.getElementById('wrapper')).render(

  <BrowserRouter>
    <Routes>

      <Route index path='/login' element={<Login />} />
      <Route path='/registro' element={<Registro />} />

      {/*Permite anidar rutas en base a una*/}
      <Route path='/' element={<App />}>

        {/*Rutas */}
        <Route index element={<Dashboard />} />
        <Route path='home' element={<Dashboard />} />
        <Route path='buttons' element={<ButtonsPage />} />
        <Route path='table' element={<TablesPage />} />
        <Route path='card' element={<CardPage />} />

      </Route>

    </Routes>
  </BrowserRouter>

);

