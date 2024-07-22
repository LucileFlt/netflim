// src/pages/Movie-Detail-page/MovieDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Importer useParams pour récupérer les paramètres d'URL
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import { getMovieDetails } from '../../API/note-api'; // Importer la fonction pour récupérer les détails du film
import styles from './style.module.css'; // Importer les styles CSS module

const MovieDetailPage = () => {
  const { id } = useParams(); // Récupérer l'ID du film depuis les paramètres d'URL
  const [selectedMovie, setSelectedMovie] = useState(null); // État pour stocker les détails du film
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(id); // Appel à votre fonction API pour récupérer les détails du film
        setSelectedMovie(movieDetails); // Mettre à jour l'état avec les détails du film
      } catch (error) {
        setError(error.message); // Gérer les erreurs en cas de problème lors de la récupération des détails du film
      } finally {
        setLoading(false); // Mettre fin au chargement une fois que l'opération est terminée
      }
    };

    fetchMovieDetails(); // Appeler la fonction pour récupérer les détails du film lors du montage du composant
  }, [id]); // Déclencher l'effet à chaque changement de l'ID du film

  if (loading) return <div className={styles.loading}>Chargement...</div>; // Afficher un message de chargement si les données sont en cours de récupération
  if (error) return <div className={styles.error}>Erreur : {error}</div>; // Afficher un message d'erreur en cas de problème lors de la récupération des données

  return (
    <div className={styles.movieDetailPage}> {/* Utilisation de la classe CSS du module */}
      <main>
        {selectedMovie && <MovieInfo movie={selectedMovie} />} {/* Passer les détails du film au composant MovieInfo si disponibles */}
        {/* Autres composants ou sections de votre application */}
      </main>
    </div>
  );
};

export default MovieDetailPage;