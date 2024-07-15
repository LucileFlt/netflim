// src/components/Navbar.js
import React from 'react';
import './navbar.css';  // Importer les styles
import logo from '../../assets/logo popcorn.png';  // Importer le logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Netfilm Logo" className="logo" />
          <span className="site-name">Netfilm</span>
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/watch">À voir</a></li>
        <li><a href="/favorites">Favoris</a></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
