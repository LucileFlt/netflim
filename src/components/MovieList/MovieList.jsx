// src/components/MovieList/MovieList.jsx
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = '2f05454c51016e523956f153c3115390';  // Remplacez par votre clé API
  const baseUrl = 'https://api.themoviedb.org/3';
  const fetchUrl = `${baseUrl}/movie/popular?api_key=${apiKey}&language=fr-FR`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data from TMDB', error);
      }
    };
    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className={styles.movieList}>
      {movies.map(movie => (
        <div key={movie.id} className={styles.movieItem}>
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
            className={styles.movieImage}
          />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
