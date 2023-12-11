import React from 'react';
import './ProjectCard.css';

const AchievementCard = (props) => (
  <div className="project-card">
    <i className="fa-regular fa-arrow-up-right" />
    <div className="card-description">
      <h3>{props.title}</h3>
      <div><h3>Authors:</h3>
    {props.author.map((author, id) => (
              <li key={id}>
                {author}
              </li>
            ))
          }
      </div>
      <p>
        <h3>Description:</h3>
        {props.description}
    </p>
      <button><a href={props.link} target="_blank">
        Visit Paper
      </a></button>
    </div>
  </div>
);

export default AchievementCard;
