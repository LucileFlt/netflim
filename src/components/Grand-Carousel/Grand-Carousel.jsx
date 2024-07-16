// src/components/Grand-Carousel/GrandCarousel.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import styles from './style.module.css'; // Import du CSS module

const GrandCarousel = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = '2f05454c51016e523956f153c3115390';
  const baseUrl = 'https://api.themoviedb.org/3';
  const fetchUrl = `${baseUrl}/movie/popular?api_key=${apiKey}&language=fr-FR`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data from TMDB', error);
      }
    };
    fetchMovies();
  }, [fetchUrl]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.grandCarousel}>
      <Slider {...settings}>
        {movies.map(movie => (
          <div key={movie.id} className={styles.carouselSlide}>
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
              alt={movie.title} 
              className={styles.carouselImage}
            />
            <div className={styles.carouselCaption}>
              <h3>{movie.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GrandCarousel;
