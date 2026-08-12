import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const data = [
    { path: "/", element: "home" },
    { path: "/about", element: "about" },
    { path: "/effect", element: "effect" },
    { path: "/login", element: "login" },
    { path: "/signup", element: "signup" },
    {path:"/greet", element: "greeting"}
  ];

  return (
    <>
      <div className="nav" style={{ display: "flex", textDecoration: "none" }}>
        {data?.map((el) => (
          <NavLink
            key={el.path}
            className="link"
            to={el.path}
            style={({ isActive }) =>
              isActive
                ? {
                    background: "tomato",
                    fontSize: "16px",
                    padding: "0.2rem",
                  }
                : { background: "transparent" }
            }
          >
            {el.element}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navbar;
