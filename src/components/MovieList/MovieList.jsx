// src/components/MovieList.jsx

import React, { useEffect, useState } from 'react';
import { getLatestMovies } from '../../API/note-api';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const latestMovies = await getLatestMovies();
        setMovies(latestMovies);
        setMovies(latestMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div>
      <h1>Derniers Films</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {movies.map((movie) => (
          <li key={movie.id} style={{ marginBottom: '20px' }}>
            <h2>{movie.title}</h2>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '200px', height: '300px' }}
              />
            ) : (
              <p>Aucune image disponible</p>
            )}
            <p><strong>Date de sortie :</strong> {movie.release_date}</p>
            <p><strong>Note moyenne :</strong> {movie.vote_average}</p>
            <p><strong>Description :</strong> {movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
