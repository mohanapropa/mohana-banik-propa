import React from 'react'
import './About.css'
import HTML from '../image/html.png'
import jQuery from '../image/jquery.png'
import VSCode from '../image/vscode.png'

import ReactIcon from '../image/react.png'
import NPMlogo from '../image/npm.png'
import GitLogo from '../image/git.png'
import GitHublogo from '../image/github.png'
import GMeet from '../image/meet.png'
import Zoomlogo from '../image/zoom.webp'
import SkypeLogo from '../image/skype.png'

import Oracle from '../image/Oracle.png'
import Mssql from '../image/mssql.png'

import CSS from '../image/css.png'
import BootStrap from '../image/bootstrap.png'
import JavaScript from '../image/javascript.png'
import C from '../image/c.jpg'
import cplusplus from '../image/c++.png'
import Java from '../image/java.svg'
import PostMan from '../image/postman.png'
import MySql from '../image/mysql.png'
import SpringBoot from '../image/springboot.png'
import PostgreSQL from '../image/postgres.png'

import Gitlab from '../image/gitlab.svg'
import Svn from '../image/svn.png'
import Docker from '../image/docker.png'
import matlab from '../image/matlab.png'
import Balsamiq from '../image/balsamiq.webp'
import Discord from '../image/discord.png'
import Intellij from '../image/IntelliJ_IDEA_Icon.svg.png'

const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="about-title">About Me</h2>
      <p className="paragraph about-para">
      I graduated from Bangladesh University of Professionals in 2021. 
      I have been involved with competitive programming since my graduation. 
      I have experience working with Core JAVA, REST architecture, Springboot Framework,
       Spring MVC, Hibernate Framework and OOP-based coding.In addition to working with the
        Rest API, I have created  APIs for professional goals.  Currently I am employed as a 
        Software Support and Maintenance Engineer at Southtech Limited. There, I have worked 
        with databases as well. I have experience working in Oracle, PostgreSQL and MSSQL.
      </p>
      <div className="my-btns">
          <button className="cv">
            <a
              href="https://drive.google.com/file/d/1_ejeLWFA_wAK5mnd6wQleM6cISZ6G-_n/view?usp=sharing"
              target="_blank">
              Get My CV
            </a>
          </button>
          <button className="cover-letter">
          <a
              href="https://drive.google.com/file/d/1_ejeLWFA_wAK5mnd6wQleM6cISZ6G-_n/view?usp=sharing"
              target="_blank">
              Cover Letter
            </a>
          </button>
        </div>
    </div>
    <div className="about-skills">
    <h2 className="skill-title">Programming Language</h2>
      <div className="skills">
        <div className="skill">
          <img src={C} alt="" />
          <p>C</p>
        </div>
        <div className="skill">
          <img src={cplusplus} alt="" />
          <p>C++</p>
        </div>
        <div className="skill">
          <img src={Java} alt="" />
          <p>JAVA</p>
        </div>
        <div className="skill">
          <img src={JavaScript} alt="" />
          <p>JavaScript</p>
        </div>
      </div>
      <h2 className="skill-title">Front-End</h2>
      <div className="skills">
      <div className="skill">
          <img src={HTML} alt="" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img src={CSS} alt="" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <img src={ReactIcon} alt="" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src={JavaScript} alt="" />
          <p>JavaScript</p>
        </div>
       
        <div className="skill">
          <img src={jQuery} alt="" />
          <p>jQuery</p>
        </div>
        
        <div className="skill">
          <img src={BootStrap} alt="" />
          <p>Bootstrap</p>
        </div>
      </div>
      <h2 className="skill-title">Back-End</h2>
      <div className="skills">
      <div className="skill">
          <img src={Java} alt="" />
          <p>JAVA</p>
        </div>
        <div className="skill">
          <img src={SpringBoot} alt="" />
          <p>SpringBoot</p>
        </div>
      </div>
      <h2 className="skill-title">Database</h2>
      <div className="skills">
      <div className="skill">
          <img src={MySql} alt="" />
          <p>MySQL</p>
        </div>
        <div className="skill">
          <img src={Oracle} alt="" />
          <p>Oracle</p>
        </div>
        <div className="skill">
          <img src={PostgreSQL} alt="" />
          <p>PostgreSQL</p>
        </div>
        <div className="skill">
          <img src={Mssql} alt="" />
          <p>MSSQL</p>
        </div>
      </div>

      <h2 className="skill-title">Version Controlling</h2>
      <div className="skills">
        <div className="skill">
          <img src={GitLogo} alt="" />
          <p>Git</p>
        </div>
        <div className="skill">
          <img src={GitHublogo} alt="" />
          <p>GitHub</p>
        </div>
        <div className="skill">
          <img src={Gitlab} alt="" />
          <p>GitLab</p>
        </div>
        <div className="skill">
          <img src={Svn} alt="" />
          <p>SUBVERSION</p>
        </div>
      </div>
      <h2 className="skill-title">Tools</h2>
      <div className="skills">
        <div className="skill">
          <img src={VSCode} alt="" />
          <p>VS Code</p>
        </div>
        <div className="skill">
          <img src={Intellij} alt="" />
          <p>IntelliJ</p>
        </div>
        <div className="skill">
          <img src={matlab} alt="" />
          <p>Matlab</p>
        </div>

        <div className="skill">
          <img src={PostMan} alt="" />
          <p>Postman</p>
        </div>
        <div className="skill">
          <img src={NPMlogo} alt="" />
          <p>npm</p>
        </div>
        <div className="skill">
          <img src={Docker} alt="" />
          <p>Docker</p>
        </div>
        <div className="skill">
          <img src={Balsamiq} alt="" />
          <p>Balsamiq</p>
        </div>
        
      </div>
      <h2 className="skill-title">Communication</h2>
      <div className="skills">
      <div className="skill">
          <img src={Discord} alt="" />
          <p>Discord</p>
        </div>
        <div className="skill">
          <img src={SkypeLogo} alt="" />
          <p>Skype</p>
        </div>
        <div className="skill">
          <img src={GMeet} alt="" />
          <p>Google Meet</p>
        </div>
        <div className="skill">
          <img src={Zoomlogo} alt="" />
          <p>Zoom</p>
        </div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
       <p className="soft-skill">Problem Solving</p>
        <p className="soft-skill">Critical Thinking</p>
        <p className="soft-skill">Communication</p>
        <p className="soft-skill">Teamwork</p>
        <p className="soft-skill">Collaboration</p>
        <p className="soft-skill">Creativity</p>
        <p className="soft-skill">Time Management</p>
        <p className="soft-skill">Adaptability</p>
      </div>
    </div>
  </section>
)

export default About
