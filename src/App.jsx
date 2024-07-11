import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Front/Header/Header';
import Footer from './components/Front/Footer/Footer';

function App() {
  // const [count, setCount] = useState(0)
  //flex: 1 => on prend tout l'espace disponible, le footer reste en bas et le header en haut
  return (
    <>
      <Header />
      <div className='flex-1'>
        <Outlet /> {/* Outlet est un composant de react-router-dom qui permet d'afficher les composants enfants de la route courante, un autre approche est { children } avec App({ children }) */}
      </div>
      <Footer />
    </>
  );
}

export default App;
