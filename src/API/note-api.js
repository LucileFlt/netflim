// src/api.js

const API_KEY = '2f05454c51016e523956f153c3115390';  // Remplacez 'votre_api_key' par votre vraie clé API TMDB
const BASE_URL = 'https://api.themoviedb.org/3';

// Exemple de requête pour obtenir les films populaires
export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des films populaires');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Requête pour obtenir les 20 derniers films mis en ligne
export const getLatestMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des derniers films');
    }
    const data = await response.json();
    return data.results.slice(0, 20); // Retourne les 20 premiers films
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Ajoutez d'autres requêtes selon vos besoins
export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des détails du film');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

