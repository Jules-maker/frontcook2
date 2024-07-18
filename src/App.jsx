import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Front/Header/Header';
import Footer from './components/Front/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Outlet /> {/* Outlet pour afficher les routes enfants */}
      <Footer />
    </>
  );
}

export default App;
