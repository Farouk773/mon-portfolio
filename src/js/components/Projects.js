import React, { useState } from 'https://esm.sh/react@18';
import { 
  FEATURED_PROJECTS, 
  OTHER_PROJECTS 
} from '../data.js';
import { 
  ArrowRight, 
  Github, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Code2, 
  FileCode, 
  Cpu, 
  Database,
  CheckCircle2
} from 'https://esm.sh/lucide-react';
import CaseStudyModal from './CaseStudyModal.js';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const categories = ['All', 'Client Work', 'Full-Stack', 'Data & AI', 'UI/UX Design'];

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Client Work') return proj.category.includes('Client');
    if (activeCategory === 'Full-Stack') return proj.category.includes('Full-Stack');
    if (activeCategory === 'Data & AI') return proj.category.includes('Data') || proj.category.includes('AI');
    if (activeCategory === 'UI/UX Design') return proj.category.includes('UI') || proj.category.includes('Front-End');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-badge">Featured Projects</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Engineering Projects & Client Engagements
          </h2>
          <p className="text-slate-400 text-base">
            A selection of applications, client work and software engineering projects showcasing end-to-end delivery.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/40'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Primary Featured Projects Grid */}
        <div className="space-y-12 mb-20">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Text Details Side */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="badge-category">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-300 text-[11px] font-semibold border border-slate-700">
                        {project.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Special Wireframe Preview Box for Project 3 */}
                    {project.id === 'online-learning-platform' && (
                      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2 text-slate-200 font-semibold">
                          <FileCode className="w-4 h-4 text-cyan-400" />
                          <span>Design Process: Paper Wireframe → Interface</span>
                        </div>
                        <span className="text-[11px] text-cyan-400 font-bold">Interactive Gallery</span>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="badge-tech">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setActiveCaseStudy(project)}
                        className="btn-primary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Visual Frame Side inside Desktop Window Mockup */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="mockup-window glass-panel overflow-hidden border border-slate-700/80 shadow-2xl group-hover:border-cyan-500/40 transition-colors">
                      
                      <div className="mockup-header">
                        <div className="mockup-dots">
                          <div className="mockup-dot mockup-dot-red"></div>
                          <div className="mockup-dot mockup-dot-yellow"></div>
                          <div className="mockup-dot mockup-dot-green"></div>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 truncate max-w-[240px]">
                          {project.title.toLowerCase().replace(/\s+/g, '-')}.app
                        </span>
                      </div>

                      <div className="p-3 bg-slate-950 relative overflow-hidden group">
                        <img
                          src={project.primaryImage}
                          alt={project.title}
                          className="w-full h-64 sm:h-72 object-cover rounded-lg group-hover:scale-[1.03] transition-transform duration-500"
                        />
                        
                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                          <button
                            onClick={() => setActiveCaseStudy(project)}
                            className="btn-primary px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-xl"
                          >
                            <span>Explore 10-Section Case Study</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Other Projects Grid */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span>Other Technical Projects</span>
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                Additional computer vision, machine learning, OOP and web projects.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OTHER_PROJECTS.map((proj, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between space-y-4 border border-slate-800"
              >
                <div>
                  <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block mb-2">
                    {proj.category}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {proj.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Case Study Modal Trigger */}
      {activeCaseStudy && (
        <CaseStudyModal
          project={activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
        />
      )}

    </section>
  );
}
