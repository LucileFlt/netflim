// src/components/MovieInfo/MovieInfo.jsx
import React from 'react';
import styles from '../../pages/Movie-Detail-page/style.module.css'; // Import du nouveau fichier CSS module spécifique à Movie-Detail-page

const MovieInfo = ({ movie }) => { // Utiliser les props pour obtenir les détails du film
  if (!movie) return null;

  return (
    <div className={styles.movieDetailPage}>
      <div className={styles.movieContainer}>
        <div className={styles.hero}>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className={styles.heroImage}
            />
          ) : (
            <p>Aucune image disponible</p>
          )}
        </div>
        <div className={styles.movieDetails}>
          <h1 className={styles.movieTitle}>{`${movie.title} (${movie.release_date ? movie.release_date.slice(0, 4) : '-'})`}</h1>
          <p className={styles.movieDirector}><strong>Réalisateur :</strong> {movie.director}</p>
          <p className={styles.movieInfo}><strong>Date de sortie :</strong> {movie.release_date}</p>
          <p className={styles.movieInfo}><strong>Note moyenne :</strong> {movie.vote_average}</p>
          <p className={styles.movieInfo}><strong>Genres :</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
          <p className={styles.movieInfo}><strong>Durée :</strong> {movie.runtime} minutes</p>
          <p className={styles.movieOverview}><strong>Synopsis :</strong> {movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
