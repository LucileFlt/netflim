import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'; // Importer Link depuis react-router-dom
import { getPopularMovies } from '../../API/note-api';

const PetitCarousel = () => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null); // Référence pour accéder au slider

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext(); // Appel à la méthode slickNext() pour déplacer le carrousel vers la droite
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: false, // Désactiver les flèches par défaut
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <div>
      <h2>Films populaires</h2>
      <div className="carousel-container">
        <Slider ref={sliderRef} {...settings}>
          {movies.map(movie => (
            <Link key={movie.id} to={`/movie-detail/${movie.id}`} className="carousel-item">
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            </Link>
          ))}
        </Slider>
        <button className="next-button" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default PetitCarousel;