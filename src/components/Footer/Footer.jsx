import React from 'react';
import NavBarFooter from '../NavBarFooter/NavBarFooter';
import Reseaux from '../Reseaux/Reseaux';
import styles from './style.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <NavBarFooter />
      <div className={styles.footerinfos}>
        <h3>
          Vous êtes en bonne compagnie !
        </h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </h4>
        <Reseaux />
      </div>
      <p>© Netflim, 2024</p>
    </footer>
  );
}

export default Footer;
