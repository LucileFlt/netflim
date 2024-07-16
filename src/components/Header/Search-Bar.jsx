import React, { useState } from 'react';
import styles from './style.module.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Logique de recherche à implémenter
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchBar}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Rechercher..." 
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>🔍</button>
    </form>
  );
};

export default SearchBar;
