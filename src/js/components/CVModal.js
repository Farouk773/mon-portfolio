import React from 'https://esm.sh/react@18';
import { X, Download, FileText, CheckCircle2, GraduationCap, Briefcase, Code2, Globe2 } from 'https://esm.sh/lucide-react';
import { PROFILE_DATA, EXPERIENCES, EDUCATION, SKILL_CATEGORIES } from '../data.js';

export default function CVModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 modal-backdrop overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0d1322] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto animate-fadeIn">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141c2e] border-b border-slate-800">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Curriculum Vitae — Farouk BOURAOUI</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="btn-primary px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download / Print CV</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document View */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-slate-950 text-slate-200 text-xs sm:text-sm print:bg-white print:text-black">
          
          {/* Top CV Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-extrabold text-white tracking-tight">
                Farouk BOURAOUI
              </h1>
              <p className="text-cyan-400 font-bold text-sm">
                Full-Stack Developer | Software Engineering Student
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Cergy, France • farouk.bouraoui@cy-tech.fr
              </p>
            </div>

            <div className="text-left sm:text-right text-xs text-slate-400 space-y-1">
              <p><span className="text-slate-200 font-semibold">GitHub:</span> github.com/faroukbouraoui</p>
              <p><span className="text-slate-200 font-semibold">LinkedIn:</span> linkedin.com/in/faroukbouraoui</p>
              <p><span className="text-slate-200 font-semibold">Languages:</span> French (Fluent), Arabic (Native), English (B1)</p>
            </div>
          </div>

          {/* Profile Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Executive Profile</span>
            </h2>
            <p className="text-slate-300 text-xs leading-relaxed">
              Software engineering student at CY Tech (Cergy, France) with hands-on full-stack development experience across C# .NET, Blazor, Java Spring Boot, React, Python data pipelines, and SQL databases. Demonstrated delivery across academic team software architecture, professional internships, and real client telemetry projects.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Professional Internships & Experience</span>
            </h2>

            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-bold text-white text-sm">{exp.role}</span>
                      <span className="text-cyan-400 font-semibold text-xs block">@ {exp.company} — {exp.location}</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">{exp.period}</span>
                  </div>

                  <p className="text-xs text-slate-300">{exp.description}</p>
                  <div className="space-y-1 pt-1">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Degrees */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="font-bold text-white text-xs block">{edu.school} — {edu.location}</span>
                  <span className="text-cyan-400 text-xs font-semibold block">{edu.degree}</span>
                  <span className="text-[11px] text-slate-400 font-mono block">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Skill Taxonomy */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Globe2 className="w-4 h-4" />
              <span>Core Technologies & Methods</span>
            </h2>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 font-semibold block">Languages & Frameworks:</span>
                <span className="text-slate-200">Java, Python, C#, JavaScript, React, Spring Boot, Blazor, ASP.NET Core, Laravel</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block">Databases & Tools:</span>
                <span className="text-slate-200">PostgreSQL, SQL Server, MySQL, Git, Docker, Postman, Figma, Visual Studio</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
