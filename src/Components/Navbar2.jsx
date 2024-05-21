import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar2.css";

function Navbar2() {
  return (
    <div className="container mt-3">
      <div className="d-flex gap-4 fw-semibold ">
        <NavLink to="About " className="text-decoration-none line">
          About
        </NavLink>
        <NavLink to="Project " className="text-decoration-none line">
          Project
        </NavLink>
        <NavLink to="Resume " className="text-decoration-none line">
          Resume
        </NavLink>
        <NavLink to="Contact " className="text-decoration-none line">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar2;
