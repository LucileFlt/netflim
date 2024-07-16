import React from 'react';
import avatar from '../../assets/avatar.png'; // Assurez-vous que l'image existe dans le chemin spécifié
import styles from './style.module.css';

const UserAvatar = () => {
  return (
    <div className={styles.userAvatar}>
      <img src={avatar} alt="User Avatar" className={styles.avatarImage} />
    </div>
  );
};

export default UserAvatar;
