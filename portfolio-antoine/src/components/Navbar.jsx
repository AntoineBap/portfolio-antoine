import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="name navbar-item">
          Antoine Baptista Martini
        </div>
        <ul className="nav-links navbar-item">
          <li className="works">
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
            Réalisations 
            </NavLink>
          </li>
          <li className="about">
            <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
              À propos
            </NavLink>
          </li>
          <li className="contact">
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;