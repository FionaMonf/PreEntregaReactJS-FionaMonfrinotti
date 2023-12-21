import React, { cloneElement } from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Logo from "./imagenes/logo.png"
import ItemListContainer from './components/ItemListContainer' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <img src={Logo} alt="" style={{weight:50, width:50}}/>
    <h1 style={{color: "red", textAlign:'center'}}>Monfri's E-Commerce</h1>
  
    <NavBar />
    <ItemListContainer greeting={'Bienvenidos'}/>
    
  </React.StrictMode>,
)
