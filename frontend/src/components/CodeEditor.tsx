import React from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  content: string;
  language: string;
  fileName: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ content, language, fileName }) => {
  const getLanguageFromFileName = (fileName: string): string => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'tsx':
      case 'ts':
        return 'typescript';
      case 'jsx':
      case 'js':
        return 'javascript';
      case 'css':
        return 'css';
      case 'scss':
        return 'scss';
      case 'html':
        return 'html';
      case 'json':
        return 'json';
      case 'md':
        return 'markdown';
      default:
        return 'plaintext';
    }
  };

  const editorLanguage = getLanguageFromFileName(fileName);

  return (
    <div className="h-full bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
        <span className="text-sm text-gray-300 font-medium">{fileName}</span>
      </div>
      <Editor
        height="calc(100% - 40px)"
        language={editorLanguage}
        value={content}
        theme="vs-dark"
        options={{
          readOnly: true,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 14,
          lineNumbers: 'on',
          renderWhitespace: 'selection',
          automaticLayout: true,
          wordWrap: 'on',
          folding: true,
          lineDecorationsWidth: 10,
          lineNumbersMinChars: 3,
          glyphMargin: false,
          contextmenu: false,
          scrollbar: {
            vertical: 'auto',
            horizontal: 'auto',
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8,
          },
        }}
      />
    </div>
  );
};

export default CodeEditor;