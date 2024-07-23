import React, { useState, useEffect } from 'react';
import { getMovieDetails } from '../../API/note-api';
import styles from './style.module.css';

const Watchlist = () => {
  const [watchlistMovies, setWatchlistMovies] = useState([]);

  useEffect(() => {
    loadWatchlistMovies();
  }, []);

  const loadWatchlistMovies = async () => {
    const watchlistIds = JSON.parse(localStorage.getItem('watchlist')) || [];
    const watchlistMoviesData = await Promise.all(watchlistIds.map(id => getMovieDetails(id)));
    setWatchlistMovies(watchlistMoviesData);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageTitle}>Watchlist</h2>
      <div className={styles.moviesGrid}>
        {watchlistMovies.map(movie => (
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

export default Watchlist;


