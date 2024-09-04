import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
      <Link to="/"> <button  className='navbar-button'> About Me</button></Link>
      <Link to="/experiences"> <button  className='navbar-button'>Experiences</button></Link>
      <Link to="/recommended"> <button  className='navbar-button'>Recommended</button></Link>
    </div>
  )
}

export default Navbar