import React from 'https://esm.sh/react@18';
import { 
  Code2, 
  Server, 
  Brain, 
  Layout, 
  GraduationCap, 
  MapPin, 
  Sparkles,
  CheckCircle2
} from 'https://esm.sh/lucide-react';
import { PROFILE_DATA } from '../data.js';

export default function About() {
  const metricCards = [
    {
      title: "Full-Stack Development",
      subtitle: "End-to-End Applications",
      description: "Building responsive SPAs, Blazor components, and scalable backend services with clean architecture.",
      icon: Code2,
      color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400"
    },
    {
      title: "REST APIs & Security",
      subtitle: "Microservices & Auth",
      description: "Designing robust API controllers in Spring Boot and ASP.NET Core with JWT authentication and role-based access.",
      icon: Server,
      color: "from-indigo-500/20 to-purple-500/10 border-indigo-500/30 text-indigo-400"
    },
    {
      title: "Data & AI Tools",
      subtitle: "Signal Analysis & ML",
      description: "Ingesting telemetry CSV datasets, signal smoothing, anomaly detection, Pandas pipelines, and TensorFlow models.",
      icon: Brain,
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400"
    },
    {
      title: "UI/UX Design",
      subtitle: "Wireframes to Production",
      description: "Transforming raw requirements and hand-drawn paper wireframes into modern, intuitive user interfaces.",
      icon: Layout,
      color: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Bridging Software Engineering Rigor with Practical Delivery
          </h2>
          <p className="text-slate-400 text-base">
            Software engineering student at CY Tech in Cergy, France, with proven experience across web engineering, data tools, and UI/UX.
          </p>
        </div>

        {/* Narrative & Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-8 glass-panel glass-panel-hover p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <GraduationCap className="w-40 h-40 text-cyan-400" />
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p className="font-semibold text-white text-lg">
                I'm a software engineering student currently studying at CY Tech in Cergy, France.
              </p>
              <p>
                My background combines software development, full-stack web engineering, UI/UX design and data analysis.
              </p>
              <p>
                I enjoy transforming real-world problems into practical digital solutions, from requirements analysis and wireframing to backend APIs, database design and frontend implementation.
              </p>
              <p className="text-slate-400">
                I have worked on academic projects, professional internships and a real client data-analysis project.
              </p>
            </div>

            {/* Core Pillars List */}
            <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Complete Lifecycle: Requirements to Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Real Client Telemetry & Data Cleaning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Enterprise C# / .NET & Spring Boot REST APIs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>User-Centered Wireframing & React UI</span>
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="lg:col-span-4 glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Quick Snapshot</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Current Academic Status</span>
                  <span className="text-white font-bold text-sm">CY Tech — Cergy, France</span>
                  <span className="text-cyan-400 block font-medium">2nd Year Engineering Cycle (CS)</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Target Roles</span>
                  <span className="text-white font-bold">Full-Stack Engineer / Freelance</span>
                  <span className="text-slate-300 block">Internships, Alternance & Client Projects</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Primary Skillset</span>
                  <span className="text-white font-bold">React, Spring Boot, C#, Blazor, Python</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-slate-400 text-xs">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Based in Cergy, France • Available worldwide</span>
            </div>
          </div>

        </div>

        {/* 4 Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                    {card.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="text-cyan-400 font-semibold">Active Practice</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
