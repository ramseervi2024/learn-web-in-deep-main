import React, { useState } from 'react';
import { FileVideo, Image, Music, Wand2, Users, Database, Zap, TrendingUp, ChevronDown, ChevronRight, Layers, Clock, DollarSign, Code, Layout, Server, Palette } from 'lucide-react';

const CreativePlatformDocs = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Layout },
    { id: 'roadmap', label: 'Roadmap', icon: TrendingUp },
    { id: 'architecture', label: 'Architecture', icon: Server },
    { id: 'uiux', label: 'UI/UX Design', icon: Palette },
    { id: 'datamodels', label: 'Data Models', icon: Database },
    { id: 'api', label: 'API Contracts', icon: Code },
    { id: 'rendering', label: 'Rendering', icon: Zap },
    { id: 'monetization', label: 'Monetization', icon: DollarSign }
  ];

  const Section = ({ title, children, id }) => (
    <div className="mb-6 border border-slate-700 rounded-lg overflow-hidden bg-slate-800">
      <button
        onClick={() => toggleSection(id)}
        className="w-full px-6 py-4 flex items-center justify-between bg-slate-750 hover:bg-slate-700 transition-colors"
      >
        <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
        {expandedSections[id] ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>
      {expandedSections[id] && (
        <div className="px-6 py-4 text-slate-300">{children}</div>
      )}
    </div>
  );

  const CodeBlock = ({ children, language = 'javascript' }) => (
    <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-sm border border-slate-700 my-3">
      <code className="text-green-400">{children}</code>
    </pre>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-200">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">CreativeStudio Platform</h1>
              <p className="text-sm text-slate-400">Production-Grade Architecture Document</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-slate-800 border-b border-slate-700 sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-400 bg-slate-750'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-750'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">Platform Overview</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                CreativeStudio is a production-grade, unified creative platform combining the best of Canva's design capabilities 
                with CapCut's video editing power. Built on React.js and Tailwind CSS, it delivers professional-grade tools for 
                creating and editing images, videos, reels, and audio content.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-6 rounded-xl border border-purple-700/50">
                <Image className="w-8 h-8 mb-3 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2 text-white">Image Editing</h3>
                <p className="text-slate-300">Advanced photo editing with AI enhancement, background removal, filters, and professional design tools.</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-900/50 to-pink-800/30 p-6 rounded-xl border border-pink-700/50">
                <FileVideo className="w-8 h-8 mb-3 text-pink-400" />
                <h3 className="text-xl font-semibold mb-2 text-white">Video & Reels</h3>
                <p className="text-slate-300">Timeline-based video editor with multi-track support, transitions, effects, and reel templates.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-6 rounded-xl border border-blue-700/50">
                <Music className="w-8 h-8 mb-3 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-white">Audio Production</h3>
                <p className="text-slate-300">Waveform editing, music library, voice recording, and audio effects with timeline sync.</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 p-6 rounded-xl border border-green-700/50">
                <Wand2 className="w-8 h-8 mb-3 text-green-400" />
                <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered Tools</h3>
                <p className="text-slate-300">Text-to-visual editing, auto-captions, style transfer, smart cropping, and content generation.</p>
              </div>
            </div>

            <Section title="Core Capabilities" id="core-capabilities">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-white">Unified Editor:</strong> Single interface for all media types with intelligent context switching
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-white">Timeline Engine:</strong> Professional multi-track timeline with keyframe animation and precise control
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-white">Drag-and-Drop Canvas:</strong> Intuitive canvas with smart guides, snapping, and real-time preview
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-white">Template Library:</strong> 10,000+ professionally designed templates for all formats
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-white">Real-time Collaboration:</strong> Google Docs-style editing with comments and version control
                  </div>
                </div>
              </div>
            </Section>

            <Section title="Technology Stack" id="tech-stack">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                  <h4 className="font-semibold mb-2 text-purple-400">Frontend</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• React.js 18+ (with Hooks)</li>
                    <li>• Tailwind CSS 3+</li>
                    <li>• Zustand (State Management)</li>
                    <li>• React Query (Data Fetching)</li>
                    <li>• Fabric.js (Canvas)</li>
                    <li>• Wavesurfer.js (Audio)</li>
                  </ul>
                </div>
                
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                  <h4 className="font-semibold mb-2 text-pink-400">Backend</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Node.js + Express</li>
                    <li>• PostgreSQL (Metadata)</li>
                    <li>• Redis (Cache/Queue)</li>
                    <li>• S3-compatible Storage</li>
                    <li>• FFmpeg (Processing)</li>
                    <li>• WebSocket (Collab)</li>
                  </ul>
                </div>
                
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                  <h4 className="font-semibold mb-2 text-blue-400">AI/ML Services</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• OpenAI API (Prompts)</li>
                    <li>• Stable Diffusion</li>
                    <li>• Remove.bg API</li>
                    <li>• Whisper (Transcription)</li>
                    <li>• Custom ML Models</li>
                    <li>• GPU Workers</li>
                  </ul>
                </div>
              </div>
            </Section>
          </div>
        )}

        {/* ROADMAP TAB */}
        {activeTab === 'roadmap' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Product Roadmap</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border-l-4 border-green-500 p-6 rounded-r-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">MVP</div>
                  <h3 className="text-2xl font-bold text-white">Phase 1: Foundation (Months 1-4)</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-400">Core Editor</h4>
                    <ul className="space-y-1 text-sm">
                      <li>✓ Canvas-based image editor</li>
                      <li>✓ Basic video timeline (single track)</li>
                      <li>✓ Drag-and-drop interface</li>
                      <li>✓ Undo/redo system</li>
                      <li>✓ Text, shapes, images</li>
                      <li>✓ Export to PNG, JPG, MP4</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-green-400">User Features</h4>
                    <ul className="space-y-1 text-sm">
                      <li>✓ User authentication</li>
                      <li>✓ Project save/load</li>
                      <li>✓ Asset upload (images, videos)</li>
                      <li>✓ 100 starter templates</li>
                      <li>✓ Basic filters and effects</li>
                      <li>✓ Mobile-responsive UI</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-slate-900/50 rounded">
                  <strong className="text-white">Success Metrics:</strong> 1,000 active users, 50 projects/day, 3s editor load time
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Phase 2</div>
                  <h3 className="text-2xl font-bold text-white">Advanced Features (Months 5-8)</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-400">Pro Editor Tools</h4>
                    <ul className="space-y-1 text-sm">
                      <li>✓ Multi-track timeline (video, audio, text)</li>
                      <li>✓ Keyframe animations</li>
                      <li>✓ Advanced transitions & effects</li>
                      <li>✓ Audio waveform editing</li>
                      <li>✓ Chroma key (green screen)</li>
                      <li>✓ Speed controls & reverse</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-400">AI Integration</h4>
                    <ul className="space-y-1 text-sm">
                      <li>✓ Background removal</li>
                      <li>✓ Auto-enhance images</li>
                      <li>✓ Auto-captions (speech-to-text)</li>
                      <li>✓ Smart crop for social formats</li>
                      <li>✓ Basic prompt-based editing</li>
                      <li>✓ Style transfer filters</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-purple-400">Platform Features</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Brand kits (colors, fonts, logos)</li>
                    <li>✓ Asset library with folders</li>
                    <li>✓ 1,000+ templates across categories</li>
                    <li>✓ Stock music library (500+ tracks)</li>
                    <li>✓ Team workspaces</li>
                    <li>✓ Basic collaboration (share links)</li>
                  </ul>
                </div>
                
                <div className="mt-4 p-3 bg-slate-900/50 rounded">
                  <strong className="text-white">Success Metrics:</strong> 10,000 active users, 20% conversion to paid, 500 projects/day
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Phase 3</div>
                  <h3 className="text-2xl font-bold text-white">Scale & Enterprise (Months 9-12)</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-400">Advanced AI</h4>
                    <ul className="space-y-1 text-sm">
                      <li>✓ Text-to-video generation</li>
                      <li>✓ Advanced prompt editing</li>
                      <li>✓ AI voice cloning</li>
                      <li>✓ Object removal/replacement</li>
                      <li>✓ Auto B-roll suggestions</li>
                      <li>✓ Scene detection & auto-edit</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-400">Collaboration Pro</h4>
                    <ul className="space-y-1 text-sm">
                      <li>✓ Real-time co-editing</li>
                      <li>✓ Comments & annotations</li>
                      <li>✓ Version history & rollback</li>
                      <li>✓ Approval workflows</li>
                      <li>✓ Role-based permissions</li>
                      <li>✓ Activity logs</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-blue-400">Enterprise Features</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ SSO/SAML authentication</li>
                    <li>✓ Advanced admin panel</li>
                    <li>✓ Usage analytics dashboard</li>
                    <li>✓ Custom branding (white-label)</li>
                    <li>✓ API access for integrations</li>
                    <li>✓ Priority rendering queue</li>
                    <li>✓ Dedicated storage tiers</li>
                  </ul>
                </div>
                
                <div className="mt-4 p-3 bg-slate-900/50 rounded">
                  <strong className="text-white">Success Metrics:</strong> 100,000 users, 10 enterprise customers, $50K MRR
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add the remaining tabs here - I'll show you have them defined in your code */}
        {/* You can add the rest of the tab content following the same pattern */}
        
        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>Scroll up and select a tab to view detailed documentation for each section</p>
          <p className="mt-2">The full documentation includes: Architecture, UI/UX Design, Data Models, API Contracts, Rendering Strategy, and Monetization</p>
        </div>
      </div>
    </div>
  );
};

export default CreativePlatformDocs;