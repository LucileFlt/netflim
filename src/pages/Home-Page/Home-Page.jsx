// src/App.jsx

import React from 'react';
import GrandCarousel from '../../components/Grand-Carousel/Grand-Carousel'; // Assurez-vous d'importer correctement le composant

function App() {
  return (
    <div className="App">
      <main>
        <h2>Dernieres Sortie</h2>
        <GrandCarousel />
        {/* Autres composants ou sections de votre application */}
      </main>
    </div>
  );
}

export default App;

