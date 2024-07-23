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
        <h2>Profil</h2>
        <img src={profileImage} alt="Profile" className={styles.profileImage} />
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Pseudo"
            value={pseudo}
            onChange={handlePseudoChange}
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Adresse mail"
            value={email}
            onChange={handleEmailChange}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Modifier son mdp"
            value={password}
            onChange={handlePasswordChange}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>Connexion</button>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;
