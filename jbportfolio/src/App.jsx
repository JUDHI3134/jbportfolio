import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
