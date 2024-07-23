import React, { useState } from 'react';
import styles from './style.module.css';
import { searchMovies } from '../../API/note-api'; // Importer la fonction de recherche depuis note-api.js

const SearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState(''); // État pour stocker la requête de recherche

  const handleSearch = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (query.trim()) { // Vérifie si la requête n'est pas vide
      const results = await searchMovies(query); // Appelle la fonction de recherche
      onSearchResults(results); // Passe les résultats de la recherche au composant parent
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.searchInput}
        placeholder="Rechercher un film..."
      />
      <button onSubmit={handleSearch} className={styles.searchButton}>Rechercher</button>
    </div>
  );
};

export default SearchBar; // Exporter le composant pour utilisation dans d'autres fichiers