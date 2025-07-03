import React, { useState } from 'react';
import { Sparkles, Zap, Code, Palette, Rocket, ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onCreateProject: (prompt: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onCreateProject }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    
    // Simulate processing time
    setTimeout(() => {
      onCreateProject(prompt.trim());
      setIsGenerating(false);
    }, 1500);
  };

  const examplePrompts = [
    "Create a modern portfolio website for a graphic designer",
    "Build a landing page for a SaaS startup",
    "Make a restaurant website with menu and reservations",
    "Create an e-commerce store for handmade jewelry"
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate websites in seconds with AI-powered automation"
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Production-ready React components with TypeScript"
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Modern, responsive designs that look professional"
    },
    {
      icon: Rocket,
      title: "Deploy Ready",
      description: "Optimized builds ready for immediate deployment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-xl shadow-lg">
            <Sparkles className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            WebCraft AI
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Create Stunning Websites
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              with AI Magic
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into beautiful, functional websites in minutes. 
            Just describe what you want, and our AI will build it for you.
          </p>
        </div>

        {/* Prompt Input */}
        <div className="max-w-4xl mx-auto mb-16">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative group">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the website you want to create... (e.g., 'Create a modern portfolio website for a photographer with a gallery, about page, and contact form')"
                className="w-full h-32 px-6 py-4 text-lg bg-gray-800/80 backdrop-blur-sm border-2 border-gray-600 rounded-2xl 
                         focus:outline-none focus:border-blue-500 focus:bg-gray-800 transition-all duration-300 
                         placeholder-gray-400 shadow-lg hover:shadow-xl resize-none text-white"
                disabled={isGenerating}
              />
              <button
                type="submit"
                disabled={!prompt.trim() || isGenerating}
                className="absolute bottom-4 right-4 px-6 py-3 bg-blue-600 text-white rounded-xl 
                         hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed 
                         transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2
                         disabled:hover:bg-blue-600"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    Create Website
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Example Prompts */}
          <div className="mt-6">
            <p className="text-sm text-gray-400 mb-3">Try these examples:</p>
            <div className="flex flex-wrap gap-2">
              {examplePrompts.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(example)}
                  className="px-4 py-2 text-sm bg-gray-700/80 hover:bg-gray-600/80 text-gray-200 rounded-lg 
                           transition-colors duration-300 hover:scale-105 border border-gray-600"
                  disabled={isGenerating}
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl 
                       transition-all duration-300 hover:scale-105 border border-gray-700"
            >
              <div className="p-3 bg-blue-600/20 rounded-xl w-fit mb-4">
                <feature.icon className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">10,000+</div>
              <div className="text-gray-300">Websites Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">{"< 30s"}</div>
              <div className="text-gray-300">Average Generation Time</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 text-sm">
        <p>Built with React, TypeScript, and AI • © 2025 WebCraft AI</p>
      </footer>
    </div>
  );
};

export default LandingPage;