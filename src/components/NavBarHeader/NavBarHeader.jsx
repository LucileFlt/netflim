// src/components/NavBarHeader/NavBarHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const NavBarHeader = () => {
  return (
    <nav className={styles.navbarheader}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link to="/" className={styles.navLink}>Accueil</Link></li>
        <li className={styles.navItem}><Link to="/movie-detail" className={styles.navLink}>Détail</Link></li> {/* Nouveau lien vers la page de détail */}
        <li className={styles.navItem}><Link to="/watchlist" className={styles.navLink}>À voir</Link></li>
        <li className={styles.navItem}><Link to="/favorites" className={styles.navLink}>Favoris</Link></li>
      </ul>
    </nav>
  );
};

export default NavBarHeader;
