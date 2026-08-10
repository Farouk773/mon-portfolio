import React, { useState } from 'https://esm.sh/react@18';
import { SKILL_CATEGORIES } from '../data.js';
import { 
  Terminal, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  GitBranch, 
  Sparkles,
  Check
} from 'https://esm.sh/lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Terminal': return Terminal;
      case 'Layout': return Layout;
      case 'Server': return Server;
      case 'Database': return Database;
      case 'Cpu': return Cpu;
      case 'Wrench': return Wrench;
      case 'GitBranch': return GitBranch;
      default: return Sparkles;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge">Technical Competencies</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Technical Stack & Engineering Tools
          </h2>
          <p className="text-slate-400 text-base">
            Comprehensive skill matrix across programming languages, backend frameworks, data libraries & software design.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.icon);
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 space-y-4 group"
              >
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {cat.skills.length} core technologies
                    </span>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-all flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
