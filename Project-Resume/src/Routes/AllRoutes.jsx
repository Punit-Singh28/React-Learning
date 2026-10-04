import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar';
import Home from '../Pages/Home'
import About from '../Pages/About'

export const AllRoutes = () => {
  return (
    <>
    <Navbar/>
      <Routes><Route path='/' element={<Home/>}/></Routes>
      <Routes><Route path='/about' element={<About/>}/></Routes>
    </>
  )
}

export default AllRoutes
