import React from "react";
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/Images/logo.png'

import "../styles/header.css";

const Header = () => {
  return (
    <nav>
      <img src={logo} alt="ProXInfotech" />
      <div className="navbar">
        <Link to="/">Home</Link>
        <HashLink to="#service">Service</HashLink>
        <Link to="/">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
