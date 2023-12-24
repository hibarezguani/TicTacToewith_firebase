import React from 'react';
import Header from '../components/header';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen"> 
      <Header />
      <h1 className="text-3xl font-bold mb-4 text-blue-500 text-center">À propos du jeu Tic Tac Toe</h1>
      <p className="text-lg text-black mb-6 text-center">
        Le jeu Tic Tac Toe, également connu sous le nom de "Morpion", est un jeu de plateau classique pour deux joueurs. Les joueurs posent tour à tour un rond ou une croix dans une grille de 3 cases par 3. Le but du jeu est d'obtenir un alignement de trois de ses signes (ronds ou croix) en ligne, en colonne ou en diagonale. C'est un jeu de stratégie simple mais amusant, adapté à tous les âges.
      </p>
    </div>
  );
};

export default AboutPage;