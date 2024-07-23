// src/components/NavBarHeader/NavBarHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const NavBarHeader = () => {
  return (
    <nav className={styles.navbarheader}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link to="/" className={styles.navLink}>Accueil</Link></li>
        <li className={styles.navItem}><Link to="/watchlist" className={styles.navLink}>À voir</Link></li>
        <li className={styles.navItem}><Link to="/favorites" className={styles.navLink}>Favoris</Link></li>
        <li className={styles.navItem}><Link to="/acount" className={styles.navLink}>Compte</Link></li>
      </ul>
    </nav>
  );
};

export default NavBarHeader;