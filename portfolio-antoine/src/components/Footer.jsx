import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="name footer-item">Antoine Baptista Martini</div>
        <ul className="footer-links footer-item">
          <li className="works">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Réalisations
            </NavLink>
          </li>
          <li className="about">
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
        <div className="footer-item copyright">© Antoine Baptista</div>
      </div>
    </div>
  );
};

export default Footer;
