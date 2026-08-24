import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const data = [
    { path: "/", element: "home" },
    { path: "/signin", element: "signin" },
    { path: "/signup", element: "signup" },
  ];

  return (
    <>
      {/* <div style={{ display: "flex"}}>
        {data?.map((el) => {
          <NavLink key={el.path} to={el.path}>{el.element}</NavLink>;
        })}
      </div> */}

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
