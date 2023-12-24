import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center py-4">
        <ul className="flex items-center">
          <li><Link to="/">Accueil</Link></li>
          <li className="ml-4"><Link to="/about">À propos</Link></li>
          <li className="ml-4"><Link to="/game">Jouer au Tic Tac Toe</Link></li>
        </ul>
        <ul className="flex items-center">
          <li className="ml-4"><Link to="/signin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Se connecter</Link></li>
          <li className="ml-4"><Link to="/signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">S'inscrire</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
