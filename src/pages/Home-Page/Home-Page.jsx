// src/pages/HomePage.jsx

import React from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Header from '../../components/Header/Header';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header/>
      <main>
        <MovieList />
      </main>
    </div>
  );
};

export default HomePage;
