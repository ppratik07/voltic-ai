import { Project } from '../types/project';

const PROJECTS_KEY = 'website-builder-projects';

export const loadProjects = (): Project[] => {
  try {
    const stored = localStorage.getItem(PROJECTS_KEY);
    if (!stored) return [];
    
    const projects = JSON.parse(stored);
    return projects.map((project: any) => ({
      ...project,
      createdAt: new Date(project.createdAt),
      updatedAt: new Date(project.updatedAt)
    }));
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
};

export const saveProjects = (projects: Project[]): void => {
  try {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  } catch (error) {
    console.error('Error saving projects:', error);
  }
};

export const generateProjectId = (): string => {
  return `project-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const createProject = (prompt: string): Project => {
  return {
    id: generateProjectId(),
    name: extractProjectName(prompt),
    description: prompt,
    prompt,
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'pending'
  };
};

const extractProjectName = (prompt: string): string => {
  // Extract a meaningful name from the prompt
  const words = prompt.toLowerCase().split(' ');
  const relevantWords = words.filter(word => 
    !['create', 'build', 'make', 'a', 'an', 'the', 'website', 'app', 'for'].includes(word)
  );
  
  if (relevantWords.length === 0) return 'New Website';
  
  return relevantWords
    .slice(0, 3)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') + ' Website';
};