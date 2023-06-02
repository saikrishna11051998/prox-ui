import React from 'react';
 import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';


// import Services from './Components/Services';
// import About from './Components/About';
// import Contact from './Components/Contact';
import './App.css';

const App = () => {
  return (
   <>
       <Header /> 
     <Home/>
    
    </>
  );
}

export default App;
