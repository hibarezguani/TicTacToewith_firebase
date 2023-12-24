import React, { useState } from 'react';
import { navigate } from 'gatsby';
import firebase from '../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInSuccess, setSignInSuccess] = useState(null); // Ajout de l'état pour gérer le succès de la connexion

  const handleSignIn = async () => {
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Utilisateur connecté avec succès:', userCredential.user);
      setSignInSuccess(true); // Mettre à jour l'état pour indiquer la réussite de la connexion
      navigate('/');
    } catch (error) {
      console.error('Erreur lors de la connexion:', error.message);
      setSignInSuccess(false); // Mettre à jour l'état pour indiquer l'échec de la connexion
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4">Sign In</h2>
        {signInSuccess === false && ( // Affichage du message d'erreur en cas d'échec de connexion
          <p className="text-red-500 mb-4">Erreur lors de la connexion. Veuillez réessayer.</p>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
