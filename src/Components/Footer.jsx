import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="column">
          <h4>Company name</h4>
          <p>
            Here you can use row and columns to organize your footer content.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="column">
          <h4>Products</h4>
          <a href="/">
            Angular
          </a>
          <a href="/">
            React
          </a>
          <a href="/">
            Vue
          </a>
          <a href="/">
            Laravel
          </a>
        </div>
        <div className="column">
          <h4>Useful links</h4>
          <a href="/">
            Pricing
          </a>
          <a href="/">
            Settings
          </a>
          <a href="/">
            Orders
          </a>
          <a href="/">
            Help
          </a>
        </div>
        <div className="column">
          <h4>Contact</h4>
          <a href="/">
            New York, NY 10012, US
          </a>
          <a href="/">
            info@example.com
          </a>
          <a href="/">
            + 01 234 567 88
          </a>
          <a href="/">
            + 01 234 567 88
          </a>
        </div>
      </div>
        <div className="rights">
          <p>&copy; 2021 all rights reserved</p>
        </div>
    </footer>
  );
};

export default Footer;