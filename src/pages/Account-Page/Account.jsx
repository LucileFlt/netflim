import React, { useState } from 'react';
import styles from './style.module.css';
import profileImage from '../../assets/avatar.png'; // Assurez-vous d'avoir l'image de profil

const AccountPage = () => {
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePseudoChange = (event) => setPseudo(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoute ici la logique de connexion (appel API, validation, etc.)
    console.log('Pseudo:', pseudo);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.container}>
      <h1>Paramètres du compte</h1>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h2>Mika</h2>
          <img src={profileImage} alt="Profile" className={styles.profileImage} />
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Mika"
            value={pseudo}
            onChange={handlePseudoChange}
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Mika.mike@gmail.com"
            value={email}
            onChange={handleEmailChange}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="*******"
            value={password}
            onChange={handlePasswordChange}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>Déconnexion</button>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;
