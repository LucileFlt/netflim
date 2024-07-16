import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link to="/" className={styles.navLink}>Accueil</Link></li>
        <li className={styles.navItem}><Link to="/watchlist" className={styles.navLink}>À voir</Link></li>
        <li className={styles.navItem}><Link to="/favorites" className={styles.navLink}>Favoris</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
