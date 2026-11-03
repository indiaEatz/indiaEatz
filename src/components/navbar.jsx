import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/images/logo.png"
          alt="IndiaEatZ Logo"
          className="logo-image"
        />
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-actions">
        <input type="text" placeholder=" Search delicious food..." className="search-bar" />

        <button className="cart-btn">🛒</button>
        <button className="login-btn">Login</button>

      </div>
    </nav>
  );
}

export default Navbar;
