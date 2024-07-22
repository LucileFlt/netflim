// src/components/MovieInfo/MovieInfo.jsx
import React from 'react';
import styles from '../../pages/Movie-Detail-page/style.module.css';

const MovieInfo = ({ movie }) => {
  return (
    <div className={styles.movieDetails}>
      <div className={styles.movieTitle}>{movie.title}</div>
      <div className={styles.movieInfo}><strong>Date de sortie :</strong> {movie.release_date}</div>
      <div className={styles.movieInfo}><strong>Note moyenne :</strong> {movie.vote_average}</div>
      <div className={styles.movieInfo}><strong>Genres :</strong> {movie.genres.map(genre => genre.name).join(', ')}</div>
      <div className={styles.movieOverview}><strong>Synopsis :</strong> {movie.overview}</div>
    </div>
  );
};

export default MovieInfo;
