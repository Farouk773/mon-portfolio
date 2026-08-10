import React, { useState } from 'https://esm.sh/react@18';
import { 
  ArrowRight, 
  FileText, 
  Terminal, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  Database,
  Cpu
} from 'https://esm.sh/lucide-react';
import { PROFILE_DATA } from '../data.js';

export default function Hero({ onOpenCV }) {
  const [activeTab, setActiveTab] = useState('code');

  const heroTechs = [
    { name: 'React', color: 'from-cyan-500/20 to-cyan-500/10 text-cyan-400 border-cyan-500/30' },
    { name: 'Spring Boot', color: 'from-emerald-500/20 to-emerald-500/10 text-emerald-400 border-emerald-500/30' },
    { name: 'C# / .NET', color: 'from-indigo-500/20 to-indigo-500/10 text-indigo-400 border-indigo-500/30' },
    { name: 'Python', color: 'from-amber-500/20 to-amber-500/10 text-amber-400 border-amber-500/30' },
    { name: 'SQL', color: 'from-blue-500/20 to-blue-500/10 text-blue-400 border-blue-500/30' },
    { name: 'REST API', color: 'from-sky-500/20 to-sky-500/10 text-sky-400 border-sky-500/30' },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-lg shadow-cyan-950/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold text-cyan-300 tracking-wide uppercase">
                CY Tech Engineering Student • Cergy, France
              </span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Full-Stack <span className="text-gradient-cyan">Developer</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-200 tracking-tight">
                Building useful, scalable & modern digital products.
              </p>
              <p className="text-sm sm:text-base font-semibold text-cyan-400/90 tracking-wide">
                {PROFILE_DATA.secondaryTitle}
              </p>
            </div>

            {/* Intro Text */}
            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              <p>{PROFILE_DATA.intro}</p>
              <p className="text-slate-400">{PROFILE_DATA.secondaryIntro}</p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="btn-primary px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCV}
                className="btn-secondary px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 border border-slate-700 hover:border-slate-500"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Tech Badges Row */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Core Stack Expertise:
              </span>
              <div className="flex flex-wrap gap-2">
                {heroTechs.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border bg-gradient-to-r ${tech.color} backdrop-blur-md shadow-sm`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Visual Column: Refined Interactive Code / Architecture Window */}
          <div className="lg:col-span-5">
            <div className="mockup-window glass-panel border border-slate-800 shadow-2xl relative">
              
              {/* Window Header / Tabs */}
              <div className="mockup-header">
                <div className="mockup-dots">
                  <div className="mockup-dot mockup-dot-red"></div>
                  <div className="mockup-dot mockup-dot-yellow"></div>
                  <div className="mockup-dot mockup-dot-green"></div>
                </div>

                <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800/80 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-all ${
                      activeTab === 'code' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>farouk.ts</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('arch')}
                    className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-all ${
                      activeTab === 'arch' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Layers className="w-3 h-3" />
                    <span>arch.puml</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-all ${
                      activeTab === 'terminal' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>terminal</span>
                  </button>
                </div>
              </div>

              {/* Window Body Content */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[340px] bg-[#0c1220]/90">
                
                {activeTab === 'code' && (
                  <div className="space-y-1 text-slate-300">
                    <p><span className="text-purple-400">interface</span> <span className="text-yellow-300">SoftwareEngineer</span> &#123;</p>
                    <p className="pl-4"><span className="text-cyan-400">name</span>: <span className="text-emerald-300">'Farouk BOURAOUI'</span>;</p>
                    <p className="pl-4"><span className="text-cyan-400">university</span>: <span className="text-emerald-300">'CY Tech (Cergy, France)'</span>;</p>
                    <p className="pl-4"><span className="text-cyan-400">degree</span>: <span className="text-emerald-300">'Computer Science Engineering'</span>;</p>
                    <p className="pl-4"><span className="text-cyan-400">roles</span>: [<span className="text-emerald-300">'Full-Stack Developer'</span>, <span className="text-emerald-300">'Freelance'</span>];</p>
                    <p className="pl-4"><span className="text-cyan-400">stack</span>: &#123;</p>
                    <p className="pl-8"><span className="text-cyan-300">frontend</span>: [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Blazor'</span>, <span className="text-emerald-300">'Tailwind'</span>],</p>
                    <p className="pl-8"><span className="text-cyan-300">backend</span>: [<span className="text-emerald-300">'Spring Boot'</span>, <span className="text-emerald-300">'ASP.NET Core'</span>, <span className="text-emerald-300">'Python'</span>],</p>
                    <p className="pl-8"><span className="text-cyan-300">databases</span>: [<span className="text-emerald-300">'PostgreSQL'</span>, <span className="text-emerald-300">'SQL Server'</span>, <span className="text-emerald-300">'MySQL'</span>],</p>
                    <p className="pl-8"><span className="text-cyan-300">security</span>: [<span className="text-emerald-300">'JWT'</span>, <span className="text-emerald-300">'REST API'</span>, <span className="text-emerald-300">'Role-based RBAC'</span>]</p>
                    <p className="pl-4">&#125;;</p>
                    <p className="pl-4"><span className="text-cyan-400">status</span>: <span className="text-emerald-300">'Open to Internships & Freelance'</span>;</p>
                    <p>&#125;</p>
                    <p className="pt-2 text-slate-500">// Ready to ship production-quality full-stack products</p>
                  </div>
                )}

                {activeTab === 'arch' && (
                  <div className="space-y-3 text-slate-300">
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-cyan-400 font-bold border-b border-slate-800 pb-1.5">
                        <span>Architecture Diagram Blueprint</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300">REST / Microservices</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px] pt-1">
                        <div className="p-2 rounded bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 font-semibold">
                          Client Apps<br/><span className="text-slate-400 font-normal">React / Blazor</span>
                        </div>
                        <div className="p-2 rounded bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 font-semibold">
                          REST Gateway<br/><span className="text-slate-400 font-normal">JWT Auth</span>
                        </div>
                        <div className="p-2 rounded bg-emerald-950/60 border border-emerald-800/50 text-emerald-300 font-semibold">
                          Backend Core<br/><span className="text-slate-400 font-normal">Spring / .NET</span>
                        </div>
                      </div>
                      <div className="pt-1 text-[11px] text-slate-400 text-center">
                        ↕ Connected to PostgreSQL / SQL Server DB & Data Pipelines
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 leading-normal pl-1">
                      <p className="text-emerald-400">✓ Requirements Analysis & UML Diagrams</p>
                      <p className="text-emerald-400">✓ Entity Framework Core / Hibernate ORM</p>
                      <p className="text-emerald-400">✓ Automated CSV Signal Anomaly Pipeline</p>
                    </div>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-1.5 text-slate-300 font-mono">
                    <p><span className="text-emerald-400">$</span> farouk-cli --status</p>
                    <p className="text-cyan-300">[INFO] Querying developer profile metrics...</p>
                    <p className="text-slate-400">-------------------------------------------</p>
                    <p><span className="text-yellow-400">Location:</span> Cergy, France (CY Tech Student)</p>
                    <p><span className="text-yellow-400">Experience:</span> 3 Professional Internships & Client Work</p>
                    <p><span className="text-yellow-400">Featured Apps:</span> 5 Major Engineering Projects</p>
                    <p><span className="text-yellow-400">Code Quality:</span> Clean Architecture, Semantic HTML</p>
                    <p className="text-slate-400">-------------------------------------------</p>
                    <p className="text-emerald-400">$ farouk-cli --run-tests</p>
                    <p className="text-emerald-300">✓ 100% tests passed (REST APIs, Security, Data Pipeline)</p>
                    <p className="text-slate-500 animate-pulse">$ _</p>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
