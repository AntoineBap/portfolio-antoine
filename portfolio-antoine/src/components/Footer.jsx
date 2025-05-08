import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
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
    </footer>
  );
};

export default Footer;
