import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";

import "../styles/header.css";

const Header = () => {
  //   const redirectPage  = (name) =>{
  // history.push(`/${name}`)
  //   }

  return (
    <nav>
      <img src={logo} alt="Proxinfotech Private Limited" />
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/service">Service</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
