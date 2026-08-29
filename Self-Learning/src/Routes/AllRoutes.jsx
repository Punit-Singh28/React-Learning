import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import UseEffect from "../Pages/UseEffect";
import {Login} from "../Pages/Login";
import {Singup} from "../Pages/Singup";
import Error from "../Pages/Error";
import {Form} from "../Components/Form";
import {Greeting} from "../Pages/Greeting"

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/effect" element={<UseEffect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/greet" element={<Greeting />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
