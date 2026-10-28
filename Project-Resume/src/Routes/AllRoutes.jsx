import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar';
import Home from '../Pages/Home'
import About from '../Pages/About'
import Experience from '../Pages/Experience';

export const AllRoutes = () => {
  return (
    <>
    <Navbar/>
      <Routes><Route path='/' element={<Home/>}/></Routes>
      <Routes><Route path='/about' element={<About/>}/></Routes>
      <Routes><Route path='/exp' element={<Experience/>}/></Routes>
    </>
  )
}

export default AllRoutes
