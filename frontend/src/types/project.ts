enum StepType{
  CreateFile,
  CreateFolder,
  EditFile,
  DeleteFile,
  RunScript
}
export interface Project {
  id: string;
  name: string;
  description: string;
  prompt: string;
  createdAt: Date;
  updatedAt: Date;
  status: 'pending' | 'generating' | 'completed' | 'error';
}

export interface ProjectStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'error';
  duration?: number;
  details?: string[];
}

export interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  path: string;
  content?: string;
  children?: FileNode[];
  size?: number;
  lastModified?: Date;
}