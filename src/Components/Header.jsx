import React from "react";
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import "../styles/header.css";

const Header = () => {
  return (
    <nav>
      <h2>ProXInfotech</h2>
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
