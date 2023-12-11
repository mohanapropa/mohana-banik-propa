import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => (
  <div className="project-card">
    <i className="fa-regular fa-arrow-up-right" />
    <div className="card-description">
      <h3>{props.title}</h3>
      <div className="stacks">
        {
            props.stacks.map((stack, id) => (
              <button className="tech-stack" key={id}>
                {stack}
              </button>
            ))
          }
      </div>
      <p>{props.responsibility.map((res,index)=>(
  <li key={index}>{res}</li>
))}</p>

    </div>
  </div>
);

export default ProjectCard;
