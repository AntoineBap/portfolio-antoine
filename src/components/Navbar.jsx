import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-item name">
          <NavLink to="/home">
            Antoine Baptista Martini
          </NavLink>
        </div>
        <ul className="navbar-item">
          <li className="works">
            <NavLink 
              to="/home"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Réalisations
            </NavLink>
          </li>
          <li className="works">
            <NavLink 
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              À propos
            </NavLink>
          </li>
          <li className="contact">
            <NavLink 
              to="/contact" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
