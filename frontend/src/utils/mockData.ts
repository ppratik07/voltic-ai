import { ProjectStep, FileNode } from '../types/project';

export const generateProjectSteps = (prompt: string): ProjectStep[] => {
  return [
    {
      id: 'step-1',
      title: 'Analyzing Requirements',
      description: 'Understanding your project requirements and specifications',
      status: 'completed',
      duration: 2,
      details: [
        'Parsed project prompt',
        'Identified key features',
        'Determined technology stack',
        'Created project structure'
      ]
    },
    {
      id: 'step-2',
      title: 'Setting Up Project',
      description: 'Creating project structure and installing dependencies',
      status: 'completed',
      duration: 5,
      details: [
        'Initialized React project',
        'Configured TypeScript',
        'Set up Tailwind CSS',
        'Installed required packages'
      ]
    },
    {
      id: 'step-3',
      title: 'Generating Components',
      description: 'Creating React components based on your requirements',
      status: 'in-progress',
      details: [
        'Building main layout',
        'Creating navigation',
        'Implementing features',
        'Adding responsive design'
      ]
    },
    {
      id: 'step-4',
      title: 'Styling & Design',
      description: 'Applying beautiful styling and animations',
      status: 'pending',
      details: [
        'Custom CSS styling',
        'Responsive breakpoints',
        'Micro-interactions',
        'Color scheme optimization'
      ]
    },
    {
      id: 'step-5',
      title: 'Testing & Optimization',
      description: 'Testing functionality and optimizing performance',
      status: 'pending',
      details: [
        'Component testing',
        'Performance optimization',
        'Cross-browser compatibility',
        'Mobile responsiveness'
      ]
    },
    {
      id: 'step-6',
      title: 'Deployment Ready',
      description: 'Preparing your website for deployment',
      status: 'pending',
      details: [
        'Build optimization',
        'Asset compression',
        'SEO optimization',
        'Production configuration'
      ]
    }
  ];
};

export const generateFileStructure = (): FileNode[] => {
  return [
    {
      id: 'root',
      name: 'my-website',
      type: 'folder',
      path: '/',
      children: [
        {
          id: 'public',
          name: 'public',
          type: 'folder',
          path: '/public',
          children: [
            {
              id: 'index-html',
              name: 'index.html',
              type: 'file',
              path: '/public/index.html',
              size: 1024,
              lastModified: new Date(),
              content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Awesome Website</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
            },
            {
              id: 'favicon',
              name: 'favicon.ico',
              type: 'file',
              path: '/public/favicon.ico',
              size: 512,
              lastModified: new Date()
            }
          ]
        },
        {
          id: 'src',
          name: 'src',
          type: 'folder',
          path: '/src',
          children: [
            {
              id: 'app-tsx',
              name: 'App.tsx',
              type: 'file',
              path: '/src/App.tsx',
              size: 2048,
              lastModified: new Date(),
              content: `import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;`
            },
            {
              id: 'main-tsx',
              name: 'main.tsx',
              type: 'file',
              path: '/src/main.tsx',
              size: 512,
              lastModified: new Date(),
              content: `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`
            },
            {
              id: 'components',
              name: 'components',
              type: 'folder',
              path: '/src/components',
              children: [
                {
                  id: 'header-tsx',
                  name: 'Header.tsx',
                  type: 'file',
                  path: '/src/components/Header.tsx',
                  size: 1536,
                  lastModified: new Date(),
                  content: `import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            MyWebsite
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;`
                },
                {
                  id: 'hero-tsx',
                  name: 'Hero.tsx',
                  type: 'file',
                  path: '/src/components/Hero.tsx',
                  size: 1024,
                  lastModified: new Date(),
                  content: `import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Our Amazing Website
        </h1>
        <p className="text-xl mb-8">
          We create beautiful, functional websites that drive results
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;`
                },
                {
                  id: 'features-tsx',
                  name: 'Features.tsx',
                  type: 'file',
                  path: '/src/components/Features.tsx',
                  size: 2048,
                  lastModified: new Date(),
                  content: `import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Fast Performance',
      description: 'Lightning-fast loading times for better user experience',
      icon: '⚡'
    },
    {
      title: 'Responsive Design',
      description: 'Looks great on all devices, from mobile to desktop',
      icon: '📱'
    },
    {
      title: 'SEO Optimized',
      description: 'Built with SEO best practices for better visibility',
      icon: '🔍'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;`
                },
                {
                  id: 'footer-tsx',
                  name: 'Footer.tsx',
                  type: 'file',
                  path: '/src/components/Footer.tsx',
                  size: 1024,
                  lastModified: new Date(),
                  content: `import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MyWebsite</h3>
            <p className="text-gray-400">
              Creating amazing web experiences since 2024
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@mywebsite.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`
                }
              ]
            },
            {
              id: 'styles',
              name: 'styles',
              type: 'folder',
              path: '/src/styles',
              children: [
                {
                  id: 'app-css',
                  name: 'App.css',
                  type: 'file',
                  path: '/src/styles/App.css',
                  size: 2048,
                  lastModified: new Date(),
                  content: `.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  padding: 20px;
  color: white;
}

.App-link {
  color: #61dafb;
}

/* Custom animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

/* Responsive utilities */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}`
                },
                {
                  id: 'index-css',
                  name: 'index.css',
                  type: 'file',
                  path: '/src/styles/index.css',
                  size: 1024,
                  lastModified: new Date(),
                  content: `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}`
                }
              ]
            }
          ]
        },
        {
          id: 'package-json',
          name: 'package.json',
          type: 'file',
          path: '/package.json',
          size: 1024,
          lastModified: new Date(),
          content: `{
  "name": "my-awesome-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.0",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}`
        },
        {
          id: 'readme',
          name: 'README.md',
          type: 'file',
          path: '/README.md',
          size: 512,
          lastModified: new Date(),
          content: `# My Awesome Website

A modern, responsive website built with React and TypeScript.

## Features

- ⚡ Fast and optimized
- 📱 Fully responsive design
- 🎨 Beautiful UI with Tailwind CSS
- 🔧 TypeScript for type safety
- 🚀 Ready for deployment

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Build for Production

\`\`\`bash
npm run build
\`\`\`

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- ESLint`
        }
      ]
    }
  ];
};