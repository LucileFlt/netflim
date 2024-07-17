// src/pages/HomePage.jsx

import React from 'react';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenue sur la Page d'Accueil</h1>
      <MovieList />
    </div>
  );
};

export default HomePage;
