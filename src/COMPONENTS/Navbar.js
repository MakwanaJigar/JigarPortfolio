import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Project from './Project'
import Contact from './Contact';
import About from './About'
import Footer from './Footer';

const Navbar = () => {
  return (
    <>
      
        <nav className="navbar navbar-expand-lg sticky-top">
  <div className="container-fluid">
    <h1 className="navbar-brand text-light"><h1>MJ.</h1></h1>
    <button className="navbar-toggler bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link text-light" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" aria-current="page" href="#project" >Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" aria-current="page" href="#contact" >Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" aria-current="page" href="#about">AboutMe</a>
        </li>
      </ul>
      <div className="btn btn-outline-info">Contact me</div>
    </div>
   
  </div>
  

</nav>

    <Home/>
    <Project />
    <Contact />
    <About />
    <Footer />


    </>
  );
}

export default Navbar;
