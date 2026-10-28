import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
export const Navbar = () => {
  return (
    <div className="Navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">Login</NavLink>
      {/* <NavLink to="/*">Error</NavLink> */}
      {/* <NavLink to="/cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <span className="cart"></span>
      </NavLink> */}
    </div>
  );
};
