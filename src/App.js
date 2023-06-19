import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './styles/App.css';

/* React Bootstrap CSS */
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;