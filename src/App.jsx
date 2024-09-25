import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchCountry from './pages/SearchCountry';

import './scss/main.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Header /><Home /></>,
  },
  {
    path: '/search-country',
    element: <><Header /><SearchCountry /></>,
  }
]);

function App() {
  
  return (
    
    <>
      <RouterProvider router={ router } />
      <Footer />
    </>
  )
}

export default App
