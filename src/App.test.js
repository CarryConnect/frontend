import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Test pour vérifier l'existence du lien "learn react"
test('renders learn react link', () => {
  render(<App />);  // Rendu du composant App
  const linkElement = screen.getByText(/learn react/i);  // Recherche du texte "learn react"
  expect(linkElement).toBeInTheDocument();  // Vérification que le lien est bien dans le document
});
