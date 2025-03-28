import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/eDonate.png"; // Ensure logo is in assets

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={logo} alt="eDonate Logo" className="logo-img" />
        <a href="/" className="logo-title">eDonate</a>
      </div>
      <ul className="nav-links">
        <li><a href="/home">DONATE</a></li>
        <li><a href="/contact">CONTACT</a></li>
        <li><a href="/about">ABOUT US</a></li>
        <li><a href="/projects">PROJECTS</a></li>
      </ul>
      <div className="auth-buttons">
        <a href="/login" className="login-btn">LOGIN</a>
        <a href="/register" className="signup-btn">SIGN UP</a>
      </div>
    </nav>
  );
};

export default Navbar;
