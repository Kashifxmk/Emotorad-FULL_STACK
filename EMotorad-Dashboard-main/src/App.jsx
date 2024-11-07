import { useState } from 'react'
import './App.css'
import Login from './Components/Login/Login.jsx'
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Home from './Components/Home/Home.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/dashboard' element={<Home/>}/>
    
        
    </Routes>
  </BrowserRouter>
  )
}

export default App
