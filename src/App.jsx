// import { useState } from 'react'
// import './assets/css/App.scss';
import Header from './components/Front/Header/Header';
import Footer from './components/Front/Footer/Footer';
import SideBar from './components/Front/Sidebar/Sidebar';
import Articles from './components/Front/Articles/Articles';
import Evenements from './components/Front/Evenements/Evenements';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Molki from './pages/Molki';
import Login from './pages/Login/Login';
import HomePage from './pages/HomePage/HomePage';

function App() {
  // const [count, setCount] = useState(0)
  //flex: 1 => on prend tout l'espace disponible, le footer reste en bas et le header en haut
  return (
    <>
      <Router>
        <Header />
        <div className='flex-1'>
          <Routes>
            <Route path="/" element={
              <>
                <HomePage />
              </>
            } />

            <Route path='/molki' Component={Molki} />
            <Route path='/login' Component={Login} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
