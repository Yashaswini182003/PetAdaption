import React from 'react'
import './HomePage.css'
import PetList from './PetList'

const HomePage = () => {
  return (
    <div className='home'>

        <h1 className='h1'> Welcome to Pet Heaven...</h1>
        <p style={{ fontSize: "1.5rem", textAlign: "center", marginBottom: "40px", color: "lightgrey" }}>
          Find your furry companion or give a home to pets in need. Explore available pets below.
        </p>
        <PetList/>      
    </div>
  )
}

export default HomePage
