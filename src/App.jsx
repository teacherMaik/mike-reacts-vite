import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/HEader';
import Footer from './components/Footer';
import Countries from './pages/Countries';
import Game42 from './pages/Game42';

import './scss/main.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Header /><Countries /></>,
  },
  {
    path: '/Game42',
    element: <><Header /><Game42 /></>,
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
