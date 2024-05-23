import React from 'react';
import '../styles/Projects.css'



const Projects = ({projects, onShowForm}) => {
  return (
    <div >
      <h2 className='title-p' id='projects'>PROJECTS</h2>
      <button
                className='btn'
                onClick={onShowForm}
              >
                Add Project
          </button>
      <div className='projects-container'>
        <div className='location-list'>
          {Object.keys(projects).length > 0 ? (
              Object.keys(projects).map(key => (
                <div key={key} className='location-item'>
                  <h3>{projects[key].name}</h3>
                  <p>{projects[key].description}</p>
                  <p>{projects[key].tech}</p>
                </div>
              ))
            ) : (
              <p style={{display:'flex', justifyContent:'center'}}>No projects available. Add your first project - show your skills.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

