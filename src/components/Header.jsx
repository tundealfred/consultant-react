import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#hero" className="logo">
          ConsultPro
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
