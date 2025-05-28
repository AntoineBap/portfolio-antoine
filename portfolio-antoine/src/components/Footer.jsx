import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="name footer-item">Antoine Baptista Martini</div>
        <div className="copyrights footer-item">© Antoine Baptista</div>
      </div>
    </footer>
  );
};

export default Footer;
