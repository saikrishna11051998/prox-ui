import React from "react";
import "../styles/home.css";
// import banner from '../assets/images/banner-bg.png'
import img_1 from "../assets/Images/img-1.png";
import img_2 from "../assets/Images/img-2.png";
import img_3 from "../assets/Images/img-3.png";
import img_4 from "../assets/Images/img-4.png";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <div className="banner_section">
        <div className="heading">
          <h1>Best Naukri search Here</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search Job" />
            <button>Subscribe</button>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alterationThere are many variations of
            passages of Lorem Ipsum available, but the majority have suffered
            alteration
          </p>
          <div className="discover">
            <a href="/">Discover More</a>
          </div>
        </div>
      </div>


      {/* Features */}
      <div id="service">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={img_1} alt="" />
            </div>
            <div className="col-md-6">
              <h2>Marketing jobs</h2>
              <p>
                A marketing analyst or growth marketer specializes in distilling
                and studying a company's data and presenting their findings
                internally to inform a company's marketing strategy. Let's say,
                for example, that you work at Walmart and your team has been
                tasked with launching a new blog for customers
              </p>
              <button className="apply-btn">
                <a href="/">Apply now</a>
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row reverse">
            <div className="col-md-6">
              <img src={img_2} alt="" />
            </div>
            <div className="col-md-6">
              <h2>Industrial jobs</h2>
              <p>
                Industrial jobs focus on the production of industrial goods
                through the manufacturing process. This involves moving raw
                materials to a factory, creating the goods, storing the finished
                products in a warehouse, and shipping the products to customers
              </p>
              <button className="apply-btn">
                <a href="/">Apply now</a>
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={img_3} alt="" />
            </div>
            <div className="col-md-6">
              <h2>Corporate jobs</h2>
              <p>
                Corporate jobs are positions within a corporate organization.
                This typically means an employee position within a larger
                company, organization or corporation, which can sometimes be
                composed of several branches in different regions or global
                locations
              </p>
              <button className="apply-btn">
                <a href="/">Apply now</a>
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row reverse">
            <div className="col-md-6">
              <img src={img_4} alt="" />
            </div>
            <div className="col-md-6">
              <h2>Government jobs</h2>
              <p>
                The meaning of a government job or a Sarkari Naukri is a job
                offered by a government. In addition, the government pays the
                salary and other benefits to its employee. A state or central
                government servant works for the state and is answerable to the
                government
              </p>
              <button className="apply-btn">
                <a href="/">Apply now</a>
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* SubFooter */}
      <div className="sub-footer">
        <div className="container">
          <h2>Subscribe Now</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
          <div className="subscribe-bar">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;