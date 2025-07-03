import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, Clock, AlertCircle, Download, Code, Globe } from 'lucide-react';
import { Project, ProjectStep, FileNode } from '../types/project';
import StepsList from './StepsList';
import FileExplorer from './FileExplorer';
import CodeEditor from './CodeEditor';
import WebsitePreview from './WebsitePreview';
import { generateProjectSteps, generateFileStructure } from '../utils/mockData';

interface ProjectWorkspaceProps {
  project: Project;
  onBack: () => void;
}

type TabType = 'code' | 'preview';

const ProjectWorkspace: React.FC<ProjectWorkspaceProps> = ({ project, onBack }) => {
  const [steps, setSteps] = useState<ProjectStep[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(true);
  const [fileStructure, setFileStructure] = useState(generateFileStructure());
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('code');

  useEffect(() => {
    // Initialize steps and start generation simulation
    const initialSteps = generateProjectSteps(project.prompt);
    setSteps(initialSteps);
    
    // Simulate step progression
    simulateGeneration(initialSteps);
  }, [project]);

  const simulateGeneration = async (initialSteps: ProjectStep[]) => {
    const updatedSteps = [...initialSteps];
    
    for (let i = 0; i < updatedSteps.length; i++) {
      if (updatedSteps[i].status === 'completed') continue;
      
      setCurrentStepIndex(i);
      
      // Update step to in-progress
      updatedSteps[i] = { ...updatedSteps[i], status: 'in-progress' };
      setSteps([...updatedSteps]);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));
      
      // Complete the step
      updatedSteps[i] = { ...updatedSteps[i], status: 'completed', duration: Math.floor(2 + Math.random() * 8) };
      setSteps([...updatedSteps]);
      
      // If this is the last step, stop generating
      if (i === updatedSteps.length - 1) {
        setIsGenerating(false);
      }
    }
  };

  const getStatusIcon = (status: ProjectStep['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-400" size={20} />;
      case 'in-progress':
        return <Clock className="text-blue-400 animate-pulse" size={20} />;
      case 'error':
        return <AlertCircle className="text-red-400" size={20} />;
      default:
        return <Clock className="text-gray-500" size={20} />;
    }
  };

  const completedSteps = steps.filter(step => step.status === 'completed').length;
  const progressPercentage = steps.length > 0 ? (completedSteps / steps.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-300 text-gray-300"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-white">{project.name}</h1>
                <p className="text-sm text-gray-400">Building your website...</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Progress */}
              <div className="flex items-center gap-3">
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div 
                    className="h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-300">
                  {completedSteps}/{steps.length}
                </span>
              </div>
              
              {/* Status */}
              <div className="flex items-center gap-2">
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm text-blue-400 font-medium">Generating</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-sm text-green-400 font-medium">Complete</span>
                  </>
                )}
              </div>

              {/* Download Button */}
              {!isGenerating && (
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  <Download size={16} />
                  Download
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-140px)]">
          {/* Steps Panel */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-700">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-lg font-semibold text-white mb-2">Generation Steps</h2>
              <p className="text-sm text-gray-400">
                Follow the progress as we build your website
              </p>
            </div>
            <div className="p-6 overflow-y-auto h-full">
              <StepsList 
                steps={steps} 
                currentStepIndex={currentStepIndex}
                getStatusIcon={getStatusIcon}
              />
            </div>
          </div>

          {/* File Explorer Panel */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-700">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-lg font-semibold text-white mb-2">Project Files</h2>
              <p className="text-sm text-gray-400">
                Explore the generated project structure
              </p>
            </div>
            <div className="overflow-y-auto h-full">
              <FileExplorer 
                files={fileStructure} 
                onFileSelect={setSelectedFile}
                selectedFile={selectedFile}
              />
            </div>
          </div>

          {/* Code/Preview Panel */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-700">
            <div className="border-b border-gray-700">
              {/* Tab Headers */}
              <div className="flex">
                <button
                  onClick={() => setActiveTab('code')}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === 'code'
                      ? 'text-white bg-gray-700/50 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <Code size={16} />
                  Code
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === 'preview'
                      ? 'text-white bg-gray-700/50 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <Globe size={16} />
                  Preview
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="h-full overflow-hidden">
              {activeTab === 'code' ? (
                selectedFile && selectedFile.content ? (
                  <CodeEditor
                    content={selectedFile.content}
                    language="typescript"
                    fileName={selectedFile.name}
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <Code className="mx-auto mb-4 text-gray-600" size={48} />
                      <p className="text-lg font-medium mb-2">No file selected</p>
                      <p className="text-sm">Select a file from the explorer to view its contents</p>
                    </div>
                  </div>
                )
              ) : (
                <WebsitePreview projectName={project.name} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWorkspace;