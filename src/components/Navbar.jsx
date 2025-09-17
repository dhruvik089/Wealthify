import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo and Brand */}
          <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
            <div className="navbar-logo">
              <div className="logo-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="8" fill="url(#logoGradient)"/>
                  <path d="M8 12L16 8L24 12V20L16 24L8 20V12Z" fill="white" fillOpacity="0.9"/>
                  <path d="M12 16L16 12L20 16L16 20L12 16Z" fill="white"/>
                  <defs>
                    <linearGradient id="logoGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0ea5e9"/>
                      <stop offset="1" stopColor="#22c55e"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="brand-text">
                <span className="brand-name">Wealthify</span>
                <span className="brand-tagline">Trading</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="desktop-menu">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/about" 
                  className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/join-us" 
                  className={`nav-link ${isActive('/join-us') ? 'active' : ''}`}
                >
                  Join Us
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/contact" 
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-menu">
            <li className="mobile-nav-item">
              <Link 
                to="/" 
                className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">🏠</span>
                Home
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link 
                to="/about" 
                className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">ℹ️</span>
                About Us
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link 
                to="/join-us" 
                className={`mobile-nav-link ${isActive('/join-us') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">🤝</span>
                Join Us
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link 
                to="/contact" 
                className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">📞</span>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
