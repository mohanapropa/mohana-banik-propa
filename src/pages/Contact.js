import React from 'react'
import './Contact.css'

const Contact = () => (

  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        I LOVE <br />
        Coding
        <br />
      </h1>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
       <p>Gaming</p>
        <p>Live Streaming</p>
        <p>Outdoor Sports</p>
        <p>Travelling</p>
        <p>Tutoring</p>
      </div>
      <hr />
      <h3>Overseeing any Project?</h3>
      <button className="hire-me">
      <a href="mailto:mohanapropa97@gmail.com" target="_blank" rel="noreferrer">Email Me </a>
      </button>
    
      <hr></hr>
      <div className="social-icons">
        <a href="https://gitlab.com/mohanapropa97" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohanapropa97"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in" />
        </a>

        <a
          href="skype:mohanapropa97?chat"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-skype" />
        </a>
         
        <a
          href="https://www.facebook.com/mohanapropa97/"
          target="_blank" rel="noreferrer" 
        >
          <i className="fa-brands fa-facebook" />
        </a>
        <a
          href="https://discord.com/users/__billi__"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-discord" />
        </a>
      </div>
      <hr />
    </div>
  </div>
)

export default Contact
