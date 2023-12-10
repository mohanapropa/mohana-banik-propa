import React from "react";
import "./Home.css";

import Imu from "../image/propa.jpg";

const Me = () => (
  <div className="home" id="home">
    <div className="home-overlay">
      <div className="description">
        <h2 className="title">Hey! I am Mohana Banik Propa</h2>
       <h3 className="tagline">
          I am Fullstack Web developer.
        </h3>
        <p className="paragraph">
          I'm passionate about crafting exceptional digital experiences. 
          As a recent graduate with a solid foundation in backend engineering and database management, 
          I am eager to leverage my educational experience and robust technical and analytical skills 
          in a dynamic environment. Seeking an opportunity to contribute my expertise and passion for 
          building scalable and efficient systems to propel my career in backend development. 
          I am also committed to delivering high-quality solutions that drive innovation and excellence 
          for any professional obligations.
        </p>
       
      </div>
      <img src={Imu} className="my-image" />
    </div>
    
    <div className="social-icons">
      <a href="https://gitlab.com/mohanapropa97" target="_blank">
        <i className="fa-brands fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/mohanapropa97/" target="_blank" >
        <i className="fa-brands fa-linkedin-in" />
      </a>

      <a
        href="https://www.facebook.com/mohanapropa97/"
        target="_blank">
        <i className="fa-brands fa-facebook" />
      </a>
      
      <a href="https://discord.gg/__bili__" target="_blank">
        <i className="fa-brands fa-discord" />
      </a>
      <a
        href="https://www.instagram.com/_.summerwine_" target="_blank">
        <i className="fa-brands fa-instagram" />
      </a>
    </div>
  </div>
);

export default Me;
