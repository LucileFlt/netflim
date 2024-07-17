// src/pages/HomePage.jsx

import React from 'react';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  return (
    <div className="home-page">
      <main>
        <MovieList />
      </main>
    </div>
  );
};

export default HomePage;
