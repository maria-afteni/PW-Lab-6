import './App.css';
import React, { useState, useEffect } from "react";
import Navbar from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import AddForm from './components/AddForm'


function App() {
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState({});
  const [projectId, setProjectId] = useState(localStorage.getItem("projectId") ? parseInt(localStorage.getItem("projectId")) : 0);

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects"));
    if (savedProjects) {
      setProjects(savedProjects);
    }
  }, []);

  const handleAddProject = (projectData) => {
    setProjects({...projects, [projectId]: projectData});
    localStorage.setItem("locations", JSON.stringify({...projects, [projectId]: projectData}));
    setProjectId(projectId + 1);
    localStorage.setItem("locationId", projectId + 1);
  };

  return (
    <div className="App">

      <Navbar />
      <About />
      <Projects 
        projects={projects}
        onShowForm={() => setShowForm(true)} />
      {showForm && (
        <AddForm
          onSubmit={handleAddProject}
          onClose={() => setShowForm(false)}
          />)}
    </div>
  );
}

export default App;
