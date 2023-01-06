import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/login" element={<Login/>}/>

    </Routes>

    
    </BrowserRouter>

    
    </>
  )
}

export default App