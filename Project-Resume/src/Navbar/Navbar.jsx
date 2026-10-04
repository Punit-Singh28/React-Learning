import React from "react";
import '../App.css';
import { NavLink } from "react-router-dom";
import AllRoutes from "./../Routes/AllRoutes";
export const Navbar = () => {
  const Navigation = [
    { path: "/", element: "home" },
    { path: "/about", element: "about" },
  ];

  return (
    <>
      {/* Navigation syntac :
        {Navigation?.map(()=>())} */}

      <div className="navbar-css">
        {Navigation?.map((el) => (
          <NavLink key={el.path} to={el.path}>
            {el.element}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navbar;
