import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { useState, useEffect } from 'react';
import AppContent from './components/AppContent';


function App() {

  const [activeMenu, setactiveMenu] = useState('owner')

  const [showScroolbtn, setshowScroolbtn] = useState(true);

  const fnSetActiveChange = (paramActive) =>{
    setactiveMenu(paramActive)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Smooth scrolling effect
    });
  };


  return (
    <div className="App">
        <HeaderComponent refActivemenuFn = {fnSetActiveChange} classActive = {activeMenu} />
        <AppContent propactiveMenu = {activeMenu} ownerActivefn = {fnSetActiveChange} />
        <FooterComponent />
         {/*<div id="preloader"></div>*/}

        
    </div>
  );
}

export default App;
