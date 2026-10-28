import React from "react";
import '../App.css';
import { NavLink } from "react-router-dom";
import AllRoutes from "./../Routes/AllRoutes";
export const Navbar = () => {
  const Navigation = [
    { path: "/", element: "home" },
    { path: "/about", element: "about" },
    { path: "/exp", element: "exp" },
  ];

  return (
    <>
      {/* Navigation syntac :
        {Navigation?.map(()=>())} */}

      <div className="navbar-css">
        <img src="https://in.pinterest.com/urvirdhingra/death-note-wallpapers/"/>
        {Navigation?.map((el) => (
          <NavLink key={el.path} to={el.path} style={{color:'whitesmoke'}}>
            {el.element}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navbar;
