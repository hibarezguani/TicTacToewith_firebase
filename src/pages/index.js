// src/pages/index.js (et src/pages/about.js)
import React from 'react';
import Header from '../components/header';

const HomePage = () => {
  return (
    <div >
       <Header /> {/* Incluez le composant d'en-tête ici */}
       <h1 className="text-4xl font-bold mb-4 text-blue-500 text-center">Bienvenue sur Mon Site !!</h1>
      <p className="text-lg text-gray-600 mb-6">C'est ma page d'accueil. Explorez les liens de navigation pour en savoir plus.</p>
      {/* Le contenu de votre page d'accueil */}
    </div>
      );
};


export default HomePage;

