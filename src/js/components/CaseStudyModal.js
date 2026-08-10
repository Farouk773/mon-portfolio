import React, { useState } from 'https://esm.sh/react@18';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Sparkles, 
  AlertCircle, 
  BookOpen, 
  FileCode,
  ArrowRight,
  Maximize2
} from 'https://esm.sh/lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return null;
  const cs = project.caseStudy || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 modal-backdrop overflow-y-auto">
      
      {/* Container Window */}
      <div className="relative w-full max-w-5xl bg-[#0d1322] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141c2e] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              {cs.type || project.category}
            </span>
            {cs.company && (
              <span className="text-xs font-semibold text-slate-400">
                • {cs.company}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10 text-slate-300 text-sm leading-relaxed">
          
          {/* Title & Short Description */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {cs.overview || project.shortDescription}
            </p>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge-tech">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Special Clarification Banner for TØS or Client Project */}
          {cs.clarificationNote && (
            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-start gap-3 text-cyan-200">
              <AlertCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs leading-normal">{cs.clarificationNote}</p>
            </div>
          )}

          {/* Section 1 & 2: Problem & Farouk's Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="glass-panel p-6 rounded-xl space-y-3 border-l-4 border-l-amber-500">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>The Problem</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                {cs.problem}
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl space-y-3 border-l-4 border-l-cyan-500">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>My Role & Contribution</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                {cs.role}
              </p>
            </div>

          </div>

          {/* Wireframe to Interface Section (Project 3 Special Feature) */}
          {cs.wireframeStory && (
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6 border border-cyan-500/30 bg-slate-900/90">
              <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase text-xs tracking-wider">
                <FileCode className="w-4 h-4" />
                <span>UX/UI Process — From Wireframe to Interface</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Paper Sketch & Wireframe → Production Interface
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                {cs.wireframeStory.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Paper Wireframe Mockup */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wide block">
                    1. Hand-Drawn Paper Wireframe
                  </span>
                  <div className="mockup-window p-2 bg-slate-950">
                    <img 
                      src={cs.wireframeStory.wireframeImage} 
                      alt="Paper Wireframe Sketch"
                      className="rounded-lg w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage(cs.wireframeStory.wireframeImage)}
                    />
                  </div>
                </div>

                {/* Final Web Interface */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide block">
                    2. Final Web Interface
                  </span>
                  <div className="mockup-window p-2 bg-slate-950">
                    <img 
                      src={cs.wireframeStory.finalImage} 
                      alt="Final Web Interface"
                      className="rounded-lg w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage(cs.wireframeStory.finalImage)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 4 & 5: Solution & Key Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>Solution & Key Features</span>
            </h3>
            <p className="text-slate-300 text-sm">
              {cs.solution}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {cs.keyFeatures && cs.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></span>
                  <span className="text-xs text-slate-200 font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Tech Specs */}
          {cs.architecture && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Architecture & Technical Specs</span>
              </h3>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5">
                {cs.architecture.map((arch, idx) => (
                  <p key={idx} className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">›</span>
                    <span>{arch}</span>
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Screenshots Gallery Inside Desktop Window Mockups */}
          {cs.screenshots && cs.screenshots.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-cyan-400" />
                <span>Application Screenshots & Interface Gallery</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cs.screenshots.map((screen, idx) => (
                  <div key={idx} className="mockup-window glass-panel overflow-hidden group">
                    <div className="mockup-header">
                      <div className="mockup-dots">
                        <div className="mockup-dot mockup-dot-red"></div>
                        <div className="mockup-dot mockup-dot-yellow"></div>
                        <div className="mockup-dot mockup-dot-green"></div>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                        {screen.title}
                      </span>
                    </div>

                    <div className="p-2 bg-slate-950 relative overflow-hidden">
                      <img
                        src={screen.src}
                        alt={screen.title}
                        className="w-full h-52 object-cover rounded group-hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                        onClick={() => setSelectedImage(screen.src)}
                      />
                    </div>
                    <div className="p-3 bg-slate-900/90 text-[11px] text-slate-400 border-t border-slate-800">
                      {screen.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 9 & 10: Technical Challenges & What I Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>Technical Challenges Solved</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {cs.challenges}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Key Engineering Takeaways</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {cs.learned}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#141c2e] border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Category: <span className="text-white font-semibold">{project.category}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="btn-primary px-4 py-2 rounded-xl text-xs font-bold"
            >
              Close Case Study
            </button>
          </div>
        </div>

      </div>

      {/* High Res Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img src={selectedImage} alt="Enlarged screenshot view" className="max-w-full max-h-[85vh] rounded-xl border border-slate-700 shadow-2xl object-contain" />
            <button className="absolute top-3 right-3 p-2 bg-slate-900 text-white rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
