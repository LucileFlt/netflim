<<<<<<< Updated upstream
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Grand-Carousel/style.module.css'; // Importer les styles depuis Grand-Carousel.module.css
import { getLatestMovies } from '../../API/note-api';


// Importing custom arrow assets
import prevArrow from '../../assets/right-chevron_dore.png';
import nextArrow from '../../assets/left-chevron_dore.png';


const GrandCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? movies.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === movies.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prevButton} onClick={handlePrev}><img src={nextArrow} alt="Next" /></button>
      <div className={styles.carouselInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie-detail/${movie.id}`} className={styles.carouselItem}>
            <img
              src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
              alt={movie.title}
              className={styles.carouselImage}
            />
            <div className={styles.carouselCaption}>
              <h5 className={styles.carouselTitle}>{movie.title}</h5>
            </div>
          </Link>
        ))}
      </div>
      <button className={styles.nextButton} onClick={handleNext}><img src={prevArrow} alt="Previous" /></button>
    </div>
  );
};

export default GrandCarousel;



>>>>>>> Stashed changes
