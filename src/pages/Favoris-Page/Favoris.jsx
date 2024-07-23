import React, { useState, useEffect } from 'react';
import { getMovieDetails } from '../../API/note-api';
import styles from './style.module.css';

const Favoris = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    loadFavoriteMovies();
  }, []);

  const loadFavoriteMovies = async () => {
    const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteMoviesData = await Promise.all(favoriteIds.map(id => getMovieDetails(id)));
    setFavoriteMovies(favoriteMoviesData);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageTitle}>Favoris</h2>
      <div className={styles.moviesGrid}>
        {favoriteMovies.map(movie => (
          <div key={movie.id} className={styles.movieCard}>
            <img 
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
              alt={movie.title} 
              className={styles.movieImage} 
            />
            <div className={styles.movieDetails}>
              <h3 className={styles.movieTitle}>{movie.title}</h3>
              <p className={styles.movieOverview}>{truncateText(movie.overview, 80)}</p>
              <p className={styles.movieRating}>Note: {movie.vote_average}</p>
              <a href={`/movie-detail-page/${movie.id}`} className={styles.detailsLink}>Voir les détails</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoris;
