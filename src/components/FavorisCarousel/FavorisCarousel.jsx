import React, { useState, useEffect, useCallback } from 'react';
import styles from '../../components/FavorisCarousel/style.module.css'; // Réutiliser le même style

// Importing custom arrow assets
import prevArrow from '../../assets/left-chevron_dore.png';
import nextArrow from '../../assets/right-chevron_dore.png';

// Importing like and watchlist button assets
import likeEmpty from '../../assets/like_dore.png';
import likeFilled from '../../assets/like_dore_full.png';
import watchlistEmpty from '../../assets/enregistrer_dore.png';
import watchlistFilled from '../../assets/enregistrer_dore_full.png';

const FavorisCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem('watchlist')) || []);

  const fetchFavoriteMovies = useCallback(async () => {
    try {
      // Assuming you have an API function that can fetch movie details by IDs
      const movieDetails = await Promise.all(
        favorites.map(async (movieId) => {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2f05454c51016e523956f153c3115390`);
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des détails du film');
          }
          const data = await response.json();
          return data;
        })
      );
      setMovies(movieDetails);
    } catch (error) {
      console.error('Error fetching favorite movies:', error);
    }
  }, [favorites]);

  useEffect(() => {
    fetchFavoriteMovies();
  }, [fetchFavoriteMovies]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

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
      <h2 className={styles.carouselTitle}>Mes Favoris</h2>
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

export default FavorisCarousel;

