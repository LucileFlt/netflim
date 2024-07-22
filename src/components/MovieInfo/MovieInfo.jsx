// src/components/MovieInfo/MovieInfo.jsx
import React, { useEffect, useState } from 'react';
import { getLatestMovies, getMovieDetails } from '../../API/note-api';
import styles from '../../pages/Movie-Detail-page/style.module.css'; // Import du nouveau fichier CSS module spécifique à Movie-Detail-page

const MovieInfo = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestMovie = async () => {
      try {
        const movies = await getLatestMovies();
        if (movies.length > 0) {
          const movieId = movies[0].id; // Sélectionner le premier film par défaut
          const movieDetails = await getMovieDetails(movieId);
          setSelectedMovie(movieDetails);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestMovie();
  }, []);

  const handleMovieClick = async (movieId) => {
    try {
      const movieDetails = await getMovieDetails(movieId);
      setSelectedMovie(movieDetails);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <div className={styles.loading}>Chargement...</div>; // Utilisation du style CSS module
  if (error) return <div className={styles.error}>Erreur : {error}</div>; // Utilisation du style CSS module

  return (
    <div className={styles.movieDetailPage}>
      {selectedMovie && (
        <div className={styles.movieContainer}>
          <div className={styles.hero}>
            {selectedMovie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
                className={styles.heroImage}
              />
            ) : (
              <p>Aucune image disponible</p>
            )}
          </div>
          <div className={styles.movieDetails}>
            <h1 className={styles.movieTitle}>{`${selectedMovie.title} (${selectedMovie.release_date ? selectedMovie.release_date.slice(0, 4) : '-'})`}</h1>
            <p className={styles.movieDirector}><strong>Réalisateur :</strong> {selectedMovie.director}</p>
            <p className={styles.movieInfo}><strong>Date de sortie :</strong> {selectedMovie.release_date}</p>
            <p className={styles.movieInfo}><strong>Note moyenne :</strong> {selectedMovie.vote_average}</p>
            <p className={styles.movieInfo}><strong>Genres :</strong> {selectedMovie.genres.map(genre => genre.name).join(', ')}</p>
            <p className={styles.movieInfo}><strong>Durée :</strong> {selectedMovie.runtime} minutes</p>
            <p className={styles.movieOverview}><strong>Synopsis :</strong> {selectedMovie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieInfo;