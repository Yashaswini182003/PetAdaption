import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import AddPet from './pages/AddPet'
import PetDetails from './pages/PetDetails'
import PetList from './pages/PetList'

const App = () => {
  return (
    <div>

        <Navbar></Navbar>
        
        <Routes>

            {/* path should be same as in file Navbar */}
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/add-pet" element={<AddPet/>}></Route>
            <Route path="/pets/:id" element={<PetDetails/>}></Route>
            <Route path="/pet" element={<PetList/>}></Route>
            
        </Routes>
      
    </div>
  )
}

export default App
