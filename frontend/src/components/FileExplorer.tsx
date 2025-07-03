import React, { useState } from 'react';
import { ChevronRight, ChevronDown, File, Folder, FolderOpen, Code, Image, FileText } from 'lucide-react';
import { FileNode } from '../types/project';

interface FileExplorerProps {
  files: FileNode[];
  onFileSelect: (file: FileNode | null) => void;
  selectedFile: FileNode | null;
}

interface FileItemProps {
  file: FileNode;
  level: number;
  selectedFile: FileNode | null;
  onFileSelect: (file: FileNode | null) => void;
}

const FileItem: React.FC<FileItemProps> = ({ file, level, selectedFile, onFileSelect }) => {
  const [isExpanded, setIsExpanded] = useState(level < 2);

  const getFileIcon = (fileName: string, type: 'file' | 'folder', isOpen?: boolean) => {
    if (type === 'folder') {
      return isOpen ? <FolderOpen className="text-blue-400" size={16} /> : <Folder className="text-blue-400" size={16} />;
    }

    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'tsx':
      case 'ts':
      case 'js':
      case 'jsx':
        return <Code className="text-blue-400" size={16} />;
      case 'css':
      case 'scss':
        return <Code className="text-purple-400" size={16} />;
      case 'html':
        return <Code className="text-orange-400" size={16} />;
      case 'json':
        return <Code className="text-yellow-400" size={16} />;
      case 'md':
        return <FileText className="text-gray-400" size={16} />;
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'gif':
      case 'svg':
        return <Image className="text-green-400" size={16} />;
      default:
        return <File className="text-gray-400" size={16} />;
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleClick = () => {
    if (file.type === 'folder') {
      setIsExpanded(!isExpanded);
    } else {
      // Toggle file selection - if already selected, deselect it
      onFileSelect(selectedFile?.id === file.id ? null : file);
    }
  };

  const isSelected = selectedFile?.id === file.id;

  return (
    <div>
      <div
        className={`flex items-center gap-2 px-3 py-2 hover:bg-gray-700/50 cursor-pointer transition-all duration-200 ${
          isSelected ? 'bg-blue-600/20 border-r-2 border-blue-400' : ''
        }`}
        style={{ paddingLeft: `${level * 20 + 12}px` }}
        onClick={handleClick}
      >
        {file.type === 'folder' && (
          <div className="flex-shrink-0">
            {isExpanded ? (
              <ChevronDown className="text-gray-400" size={14} />
            ) : (
              <ChevronRight className="text-gray-400" size={14} />
            )}
          </div>
        )}
        
        <div className="flex-shrink-0">
          {getFileIcon(file.name, file.type, isExpanded)}
        </div>
        
        <span className="flex-1 text-sm text-gray-200 truncate">{file.name}</span>
        
        {file.type === 'file' && file.size && (
          <span className="text-xs text-gray-500">{formatFileSize(file.size)}</span>
        )}
      </div>

      {/* Children */}
      {file.type === 'folder' && isExpanded && file.children && (
        <div>
          {file.children.map((child) => (
            <FileItem 
              key={child.id} 
              file={child} 
              level={level + 1} 
              selectedFile={selectedFile}
              onFileSelect={onFileSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FileExplorer: React.FC<FileExplorerProps> = ({ files, onFileSelect, selectedFile }) => {
  return (
    <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      <div className="py-2">
        {files.map((file) => (
          <FileItem 
            key={file.id} 
            file={file} 
            level={0} 
            selectedFile={selectedFile}
            onFileSelect={onFileSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default FileExplorer;