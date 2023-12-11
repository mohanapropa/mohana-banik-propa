import React from 'react'
import './Projects.css'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const projectData = [
    {
      project_name: 'CRVS - Project of Education Ministry of Bangladesh',
      tech_stack: ['Angular', 'JAVA','Spring Boot', 'Oracle'],
      responsibilities:
        ['Analyzing bugs, finding out the root cause, and fixing bugs.',
        'Implementing Rest API and maintaining Java application phases.',
        'Designing and implementing jasper reports to provide insightful data representation.',
        'Creating comprehensive technical documentation.',
        'Conducting training session for Headmaster and Assistant Teachers all over Bangladesh.',
        'Conducting training session for ATEO and TEO all over Bangladesh about the system.']
    },
    {
      project_name: 'AFS(Banking System) - Southtech Personal Project',
      tech_stack: ['Angular', 'Java', 'Spring Boot', 'PostGRE','MSSQL'],
      responsibilities:
      ['Analyzing bugs and fixing bugs.',
      'Migrating MSSQL files to PostGRE in Database end.',
      'Writing new Stored Procedures to enhance database management and streamline operations.',
      'Converting MSSQL.sql repositories into PostgreSQL within the Java environment.']
    },

    {
      project_name: 'Online Library Management System',
      tech_stack: ['HTML', 'CSS','BootStrap','PHP','My SQL'],
      responsibilities:
      ['Implemented features such as Book search, Student monitoring.',
      'Implemented Automated notifications for overdue books.'] 
     }
  ]

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">Featured Projects</h1>
      <div className="projects-container">
        {projectData.map((project, id) => (
          <ProjectCard
            key={id}
            title={project.project_name}
            stacks={project.tech_stack}
            responsibility={project.responsibilities}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
