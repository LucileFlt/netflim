import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import { getMovieDetails } from '../../API/note-api';
import styles from './style.module.css';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(id);
        setSelectedMovie(movieDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className={styles.loading}>Chargement...</div>;
  if (error) return <div className={styles.error}>Erreur : {error}</div>;

  return (
    <div className={styles.movieDetailPage}>
      <div className={styles.movieContent}>
        <div className={styles.moviePoster}>
          {selectedMovie && (
            <img
              src={`https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              className={styles.moviePosterImage}
            />
          )}
        </div>
        {selectedMovie && (
          <div className={styles.movieDetails}>
            <MovieInfo movie={selectedMovie} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailPage;
