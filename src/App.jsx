import { } from 'react'
import ReactDOM from 'react-dom';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import Produtos from './Produtos';
import Sobre from './Sobre'

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route exact path="/Produtos" element={<Produtos />} />
        <Route exact path="/Sobre" element={<Sobre />} />

      </Routes>
      <Footer/>
        
      </BrowserRouter>
    </>
  )
}

export default App
