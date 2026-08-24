import React from "react";
import { Home } from "../Pages/Home";
import { Signin } from "./../Pages/Signin";
import { Signup } from "./../Pages/Signup";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
     
    </>
  );
};
