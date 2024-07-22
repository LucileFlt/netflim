import React from 'react';
import avatar from '../../assets/avatar.png';
import styles from './style.module.css';

const UserAvatar = () => {
  return (
    <div className={styles.userAvatar}>
      <img src={avatar} alt="User Avatar" className={styles.avatarImage} />
    </div>
  );
};

export default UserAvatar;
