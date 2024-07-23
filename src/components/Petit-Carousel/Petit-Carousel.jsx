import React, { useState, useEffect } from 'react';
import { getLatestMovies } from '../../API/note-api'; // Assurez-vous d'utiliser la bonne fonction pour obtenir les derniers films
import { Link } from 'react-router-dom'; // Importer Link depuis react-router-dom
import styles from './style.module.css';

// Importing custom arrow assets
import prevArrow from '../../assets/left-chevron_dore.png';
import nextArrow from '../../assets/right-chevron_dore.png';

// Importing like and watchlist button assets
import likeEmpty from '../../assets/like_dore.png';
import likeFilled from '../../assets/like_dore_full.png';
import watchlistEmpty from '../../assets/enregistrer_dore.png';
import watchlistFilled from '../../assets/enregistrer_dore_full.png';

const PetitCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetchLatestMovies(); // Modifiez cette ligne pour appeler la nouvelle fonction
  }, []);

  const fetchLatestMovies = async () => {
    try {
      const latestMovies = await getLatestMovies();
      setMovies(latestMovies);
      
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handleLikeClick = (movie) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(movie.id)) {
        return prevFavorites.filter(id => id !== movie.id);
      } else {
        return [...prevFavorites, movie.id];
      }
    });
  };

  const isFavorite = (movieId) => favorites.includes(movieId);

  const handleWatchlistClick = (movie) => {
    setWatchlist((prevWatchlist) => {
      if (prevWatchlist.includes(movie.id)) {
        return prevWatchlist.filter(id => id !== movie.id);
      } else {
        return [...prevWatchlist, movie.id];
      }
    });
  };

  const isInWatchlist = (movieId) => watchlist.includes(movieId);

  const visibleMovies = movies.slice(currentIndex, currentIndex + 5);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className={styles.carouselContainer}>
      <h2>Derniers films mis en ligne</h2>
      <div className={styles.carouselWrapper}>
        <button className={styles.prevButton} onClick={handlePrevClick}>
          <img src={prevArrow} alt="Previous" />
        </button>
        <div className={styles.carousel}>
          {visibleMovies.map(movie => (
            <div key={movie.id} className={styles.carouselItem}>
              <img 
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                alt={movie.title} 
                className={styles.carouselImage} 
              />
              <div className={styles.movieDetailsCard}>
                <h3>{movie.title}</h3>
                <p>{truncateText(movie.overview, 80)}</p>
                <p>Note: {movie.vote_average}</p>
                <a href={`/movie-detail-page/${movie.id}`} className={styles.detailsLink}>
                  Voir les détails
                </a>
                <div className={styles.buttonContainer}>
                  <button className={styles.likeButton} onClick={() => handleLikeClick(movie)}>
                    <img 
                      src={isFavorite(movie.id) ? likeFilled : likeEmpty} 
                      alt="Like" 
                    />
                  </button>
                  <button className={styles.watchlistButton} onClick={() => handleWatchlistClick(movie)}>
                    <img 
                      src={isInWatchlist(movie.id) ? watchlistFilled : watchlistEmpty} 
                      alt="Watchlist" 
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.nextButton} onClick={handleNextClick}>
          <img src={nextArrow} alt="Next" />
        </button>
      </div>
    </div>
  );
};


export default PetitCarousel;

