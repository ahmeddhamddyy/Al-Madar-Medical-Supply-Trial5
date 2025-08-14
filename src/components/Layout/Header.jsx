import React from "react";
import { FaClock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import almadarLogo from "../../assets/General/Almadar Logo-01.png";
import "./Header.css"; // Ensure this is imported

export default function Header() {
  const navLinks = ["Partners", "Products", "Our Story"];

  return (
    <header className="header-container sticky-top">
      {/* Top Info Bar with Diagonal Design */}
      <div className="header-top d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left Side: Working Hours */}
          <div className="info-left">
            <FaClock className="me-2" />
            <span>Sun-Thur : 8.00 AM - 4.30 PM</span>
          </div>
          {/* Right Side: Contact Info */}
          <div className="info-right d-flex gap-4">
            <a href="mailto:info@almadarmed.com" className="d-flex align-items-center">
              <FaEnvelope className="me-2" />
              info@almadarmed.com
            </a>
            <a href="tel:+966114644118" className="d-flex align-items-center">
              <FaPhoneAlt className="me-2" />
              +966(11)4644118
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#home">
            <img src={almadarLogo} alt="AlMadar Logo" style={{ height: "50px" }} />
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link active" href="#home">Home</a>
              </li>
              {navLinks.map((link) => (
                <li key={link} className="nav-item">
                  <a className="nav-link" href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link}
                  </a>
                </li>
              ))}
              {/* Dropdown for "Our Team" */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Team
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Management</a></li>
                  <li><a className="dropdown-item" href="#">Sales</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Careers</a></li>
                </ul>
              </li>
            </ul>
            {/* External Platform Button */}
            <a href="#" className="btn btn-primary fw-bold ms-lg-3">
              External Platform
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}