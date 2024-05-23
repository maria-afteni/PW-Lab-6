import React, { useState } from "react";
import '../styles/Form.css'

function AddForm({ onSubmit, onClose }) {
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    tech: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(projectData);
    setProjectData({
      name: "",
      description: "",
      tech: "",
    });
    onClose();
  };



  return (
    <div className={`popup`}>
      <div className={`popup-content `}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form
          className={`popup-content2`}
          onSubmit={handleSubmit}
        >
          <div className={`form-group`}>
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              id="projectName"
              name="name"
              value={projectData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className={`form-group `}>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={projectData.description}
              onChange={handleChange}
              required
              
            />
          </div>
          <div className={`form-group`}>
            <label htmlFor="tech">Tech Stack:</label>
            <input
              type="text"
              id="tech"
              name="tech"
              value={projectData.tech}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.5"
              required
              
            />
          </div>
          <div className={`form-group `}>
            <button
              className={`submit-btn `}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddForm;