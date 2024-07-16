// src/pages/Home-Page/HomePage.jsx
import React from 'react';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to the Movie Streaming Site</h1>
      </header>
      <main>
        <MovieList />
      </main>
    </div>
  );
};

export default HomePage;
