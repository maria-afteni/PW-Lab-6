import './App.css';
import React, { useState, useEffect } from "react";
import Navbar from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import AddForm from './components/AddForm';
import Footer from './components/Footer';
import Contact from './components/Contact';


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
    localStorage.setItem("projects", JSON.stringify({...projects, [projectId]: projectData}));
    setProjectId(projectId + 1);
    localStorage.setItem("projectId", projectId + 1);
  };

  const handleDeleteProject = (projectId) => {
    const updatedProjects = { ...projects };
    delete updatedProjects[projectId];
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  return (
    <div className="App">

      <Navbar />
      <About />
      <Projects 
        projects={projects}
        onShowForm={() => setShowForm(true)}
        onDeleteProject={handleDeleteProject} />
      {showForm && (
        <AddForm
          onSubmit={handleAddProject}
          onClose={() => setShowForm(false)}
          />)}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
