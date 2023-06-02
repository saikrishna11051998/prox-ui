import React, { Component } from 'react';
import './Home.css';



const Home = () => {
  return (
   
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="logo" href=""></a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                   <a class="nav-link" href="index.html">HOME</a>
                </li>
                <li class="nav-item">
                   <a class="nav-link" href="search jobs.html">SEARCH JOBS</a>
                </li>
                <li class="nav-item">
                   <a class="nav-link" href="recurments.html">RECRUITERS</a>
                </li>
                <li class="nav-item">
                   <a class="nav-link" href="companies.html">COMPANIES</a>
                </li>
                <li class="nav-item">
                   <a class="nav-link" href="services.html">SERVICES</a>
                </li>
                <li class="nav-item">
                   <a class="nav-link" href="#">MORE</a>
                </li>
            </ul>
        </div>
         <div class="login_text"><a href="login.html">LOGIN HERE</a></div>
    </nav>
	
	<div class="banner_section layout_padding">
		<div class="container">
			<h1 class="best_taital">Best Naukri Search here</h1>
			<div class="box_main">
			    <input type="" class="email_bt" placeholder="Search Job" name=""/>
				<button class="subscribe_bt"><a href="#">Subscribe</a></button>
		    </div>
		    <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
		    <div class="bt_main">
		    	<div class="discover_bt"><a href="#">Discover More</a></div>
		    </div>
		</div>
	</div>
	
	<div class="marketing_section layout_padding">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6">
					<div class="job_section">
					    <h1 class="jobs_text">Marketing jobs</h1>
					    <p class="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
					    <div class="apply_bt"><a href="#">Apply now</a></div>
						<img src="C:\Users\saikr\OneDrive\Desktop\Prox-ui\proxInfotech_dashboard\public\assests\images\img-1.png"/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="image_1 padding_0"></div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="marketing_section layout_padding">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6">
					<div class="image_1 padding_0"></div>
				</div>
				<div class="col-md-6">
					<div class="job_section_2">
					    <h1 class="jobs_text">Industrial jobs</h1>
					    <p class="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
					    <div class="apply_bt"><a href="#">Apply now</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="marketing_section layout_padding">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6">
					<div class="job_section">
					    <h1 class="jobs_text">Corporate jobs</h1>
					    <p class="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
					    <div class="apply_bt"><a href="#">Apply now</a></div>
					</div>
				</div>
				<div class="col-md-6 padding_0">
					<div class="image_1"></div>
				</div>
			</div>
		</div>
	</div>

	<div class="marketing_section layout_padding">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6 padding_0">
					<div class="image_1"></div>
				</div>
				<div class="col-md-6">
					<div class="job_section_2">
					    <h1 class="jobs_text">Government jobs</h1>
					    <p class="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
					    <div class="apply_bt"><a href="#">Apply now</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="footer_section layout_padding">
		<div class="container">
			<h1 class="subscribr_text">Subscribe Now</h1>
			<p class="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have </p>
			<div class="box_main_2">
			    <textarea type="" class="email_bt_2" placeholder="Enter Your Email" name=""></textarea>
		    </div>
		    <button class="subscribe_bt_2"><a href="#">Subscribe</a></button>
		</div>
	</div>
	
	<div class="copyright_section">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<p class="copyright_text">Copyright 2020 All Right Reserved By.<a href="https://html.design"> Free  html Templates</a></p>
				</div>
				<div class="col-md-6">
					<p class="cookies_text">Cookies, Privacy and Terms</p>
				</div>
			</div>
		</div>
	</div>
    
    </>
      );
}

export default Home;
     