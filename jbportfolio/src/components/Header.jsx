import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
     <NavLink to="/">
        <img src={logo} alt="" />
     </NavLink>
     <Navbar/>
    </header>
  )
}

export default Header
