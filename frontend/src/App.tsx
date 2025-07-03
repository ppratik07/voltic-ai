import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import ProjectWorkspace from './components/ProjectWorkspace';
import { Project } from './types/project';
import { createProject } from './utils/projectStorage';

function App() {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const handleCreateProject = (prompt: string) => {
    const project = createProject(prompt);
    setCurrentProject(project);
  };

  const handleBackToLanding = () => {
    setCurrentProject(null);
  };

  return (
    <div className="App">
      {currentProject ? (
        <ProjectWorkspace 
          project={currentProject} 
          onBack={handleBackToLanding}
        />
      ) : (
        <LandingPage onCreateProject={handleCreateProject} />
      )}
    </div>
  );
}

export default App;