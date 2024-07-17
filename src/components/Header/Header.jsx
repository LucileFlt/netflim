import React from 'react';
import NavBarHeader from '../NavBarHeader/NavBarHeader';
import SearchBar from '../Search-Bar/Search-Bar';
import UserAvatar from '../User-Avatar/User-Avatar';
import styles from './style.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="../../assets/logo-popcorn" alt="Netflim Logo" />
      </div>
      <NavBarHeader />
      <SearchBar />
      <UserAvatar />
    </header>
  );
};

export default Header;
