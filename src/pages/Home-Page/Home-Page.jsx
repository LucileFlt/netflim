import React from 'react';
import GrandCarousel from '../../components/Grand-Carousel/Grand-Carousel';
import PetitCarousel from '../../components/Petit-Carousel/Petit-Carousel';
import Carousel2023 from '../../components/Carousel2023/Carousel2023';
import styles from './style.module.css'; // Assurez-vous d'importer correctement le fichier CSS module


function App() {
  return (

    <div className={styles.homePage}> {/* Utilisation de la classe CSS du module */}
      <main>
        <GrandCarousel />
        <PetitCarousel />
        <Carousel2023 />
        {/* Autres composants ou sections de votre application */}

      </main>
    </div>
  );
}




export default App;


