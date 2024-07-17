import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './style.module.css';

const NavBarFooter = () => {
  return (
    <nav className={styles.navbarfooter}>
      <ul className={styles.navList}>
        {/* <li className={styles.navItem}><Link to="/RGPD" className={styles.navLink}>RGPD</Link></li>
        <li className={styles.navItem}><Link to="/Mentions-Legales" className={styles.navLink}>Mentions Légales</Link></li>
        <li className={styles.navItem}><Link to="/Politique-de-confidentialite" className={styles.navLink}>Politiques de confidentioalité</Link></li> */}
      </ul>
    </nav>
  );
};

export default NavBarFooter;
