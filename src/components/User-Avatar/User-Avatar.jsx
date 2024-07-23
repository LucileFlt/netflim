import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/avatar.png';
import styles from './style.module.css';

const UserAvatar = () => {
  return (
    <div className={styles.userAvatar}>
      <Link to="/account">
        <img src={avatar} alt="User Avatar" className={styles.avatarImage} />
      </Link>
    </div>
  );
};

export default UserAvatar;
