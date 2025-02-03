import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>

      <nav>

          <Link to="/" > Home </Link>
          <Link to="/add-pet" > Add Pet </Link>
          

      </nav>

    </div>
  )
}

export default Navbar
