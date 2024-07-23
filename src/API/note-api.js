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

export const getLatestScienceFictionMovies = async () => {
  try {
    // Récupérer l'ID du genre "Science Fiction" (878) depuis l'API TMDB
    const genreResponse = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    if (!genreResponse.ok) {
      throw new Error('Erreur lors de la récupération des genres de films');
    }
    const genreData = await genreResponse.json();
    const scienceFictionGenreId = genreData.genres.find(genre => genre.name === 'Science Fiction')?.id;

    if (!scienceFictionGenreId) {
      throw new Error('ID du genre "Science Fiction" introuvable');
    }

    // Requête pour obtenir les films de science-fiction en cours de diffusion
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${scienceFictionGenreId}&sort_by=release_date.desc`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des derniers films de science-fiction');
    }
    const data = await response.json();
    return data.results.slice(0, 20); // Retourne les 20 premiers films de science-fiction
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Fonction pour obtenir les films de 2023
export const getMovies2023 = async () => {
  try {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&year=2023`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des films de 2023');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};



