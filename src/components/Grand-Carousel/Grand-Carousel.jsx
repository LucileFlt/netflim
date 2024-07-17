// src/components/Grand-Carousel.jsx

import React, { useState, useEffect } from 'react';
import styles from '../Grand-Carousel/style.module.css'; // Importer les styles depuis Grand-Carousel.module.css
import { getLatestMovies } from '../../API/note-api';

const GrandCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const latestMovies = await getLatestMovies();
        setMovies(latestMovies);
      } catch (error) {
        console.error('Error fetching latest movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.carouselItem}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
              className={styles.carouselImage}
            />
            <div className={styles.carouselCaption}>
              <h5 className={styles.carouselTitle}>{movie.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrandCarousel;


