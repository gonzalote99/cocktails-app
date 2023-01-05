import * as React from 'react';

import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import CocktailByLetter from './pages/CocktailByLetter';
import CocktailsAlcholic from './pages/CocktailsAlcholic'
import CocktailDetail from './pages/CocktailDetail'
import Results from './components/Results'
import './style.css';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/"  element={<App />} />
    <Route path='/cocktalis-by-letter' element={<CocktailByLetter />} />
    <Route path='/cocktails-alcoholic' element={<CocktailsAlcholic />} />
    <Route path='/cocktail/:id' element={<CocktailDetail />} />
     <Route path='/search/:query' element={<Results />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();