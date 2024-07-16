import React from 'react';
import Navbar from './Navbar';
import SearchBar from './Search-Bar';
import UserAvatar from './User-Avatar';
import styles from './style.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Navbar />
        <SearchBar />
      </div>
      <UserAvatar />
    </header>
  );
};

export default Header;
