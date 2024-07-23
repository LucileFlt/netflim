import React, { useState } from 'react';
import styles from './style.module.css';

const AccountPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoute ici la logique de connexion (appel API, validation, etc.)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.container}>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Se connecter</button>
      </form>
    </div>
  );
};

export default AccountPage;
