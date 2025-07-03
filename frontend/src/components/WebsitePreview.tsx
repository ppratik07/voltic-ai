import React from 'react';
import { Globe, ExternalLink } from 'lucide-react';

interface WebsitePreviewProps {
  projectName: string;
}

const WebsitePreview: React.FC<WebsitePreviewProps> = ({ projectName }) => {
  // Mock preview content - in a real app, this would be the actual generated website
  const previewContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${projectName}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem 0; text-align: center; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .hero { padding: 4rem 0; text-align: center; background: #f8fafc; }
        .features { padding: 4rem 0; }
        .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem; }
        .feature-card { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .footer { background: #1a202c; color: white; padding: 2rem 0; text-align: center; }
        h1 { font-size: 3rem; margin-bottom: 1rem; }
        h2 { font-size: 2.5rem; margin-bottom: 1rem; color: #2d3748; }
        h3 { font-size: 1.5rem; margin-bottom: 1rem; color: #4a5568; }
        p { line-height: 1.6; color: #718096; }
        .btn { display: inline-block; background: #667eea; color: white; padding: 1rem 2rem; border-radius: 8px; text-decoration: none; margin-top: 1rem; }
        .btn:hover { background: #5a67d8; }
      </style>
    </head>
    <body>
      <header class="header">
        <div class="container">
          <h1>${projectName}</h1>
          <p>Welcome to our amazing website</p>
        </div>
      </header>
      
      <section class="hero">
        <div class="container">
          <h2>Build Something Amazing</h2>
          <p>This is a preview of your generated website. It features modern design, responsive layout, and clean code.</p>
          <a href="#" class="btn">Get Started</a>
        </div>
      </section>
      
      <section class="features">
        <div class="container">
          <h2>Features</h2>
          <div class="feature-grid">
            <div class="feature-card">
              <h3>⚡ Fast Performance</h3>
              <p>Lightning-fast loading times and optimized performance for the best user experience.</p>
            </div>
            <div class="feature-card">
              <h3>📱 Responsive Design</h3>
              <p>Looks great on all devices, from mobile phones to desktop computers.</p>
            </div>
            <div class="feature-card">
              <h3>🎨 Beautiful UI</h3>
              <p>Modern, clean design that engages users and drives conversions.</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer class="footer">
        <div class="container">
          <p>&copy; 2025 ${projectName}. All rights reserved.</p>
        </div>
      </footer>
    </body>
    </html>
  `;

  return (
    <div className="h-full bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="text-blue-400" size={16} />
          <span className="text-sm text-gray-300 font-medium">Website Preview</span>
        </div>
        <button className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors">
          <ExternalLink size={12} />
          Open in New Tab
        </button>
      </div>
      <div className="h-full">
        <iframe
          srcDoc={previewContent}
          className="w-full h-full bg-white"
          style={{ height: 'calc(100% - 40px)' }}
          title="Website Preview"
        />
      </div>
    </div>
  );
};

export default WebsitePreview;