// import { useState } from 'react'
// import './assets/css/App.scss';
import './App.scss'
import Header from './components/Front/Header/Header';
import Footer from './components/Front/Footer/Footer';
import SideBar from './components/Front/Sidebar/Sidebar';
import Articles from './components/Front/Articles/Articles';
import Evenements from './components/Front/Evenements/Evenements';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Molki from './pages/Molki';
import HomePage from './pages/HomePage/HomePage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element = {
            <>
          <HomePage/>
          </>
        }/> 

          <Route path='/molki' Component={Molki} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
