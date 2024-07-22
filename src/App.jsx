// src/App.jsx
import './style.module.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home-Page/Home-Page';
import AccountPage from './pages/Account-Page/Account';
import MovieDetailPage from './pages/Movie-Detail-page/Movie-Detail-Page';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/movie-detail/:id" element={<MovieDetailPage />} /> {/* Route avec un paramètre d'URL pour l'ID du film */}
      </Routes>
    </div>
  );
}

export default App;
