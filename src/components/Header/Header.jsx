import React from 'react';
import { Link } from 'react-router-dom';
import NavBarHeader from '../NavBarHeader/NavBarHeader';
import SearchBar from '../Search-Bar/Search-Bar';
import UserAvatar from '../User-Avatar/User-Avatar';
import Logo from '../../assets/logo popcorn.png';
import styles from './style.module.css';

const Header = ({ onSearchResults }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="Netflim Logo" className={styles.logoImage} />
        </Link>
        <p className={styles.pheader}>Netflim</p>
      </div>
      <NavBarHeader />
      <SearchBar onSearchResults={onSearchResults} /> {/* Passer la fonction onSearchResults */}
      <UserAvatar />
    </header>
  );
};

export default Header;
