import React from 'https://esm.sh/react@18';
import { EDUCATION, LANGUAGES } from '../data.js';
import { GraduationCap, MapPin, Globe2, Award, BookOpen } from 'https://esm.sh/lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge">Academic Background</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Education & Language Proficiency
          </h2>
          <p className="text-slate-400 text-base">
            Academic engineering progression at CY Tech France, 3iL Limoges, and IIT Sfax.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Timeline Cards */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Higher Education Degrees</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 space-y-3 relative overflow-hidden"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-tight">
                        {edu.school}
                      </h4>
                      <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{edu.location}</span>
                      </span>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-sm font-bold text-slate-200">
                    {edu.degree}
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Globe2 className="w-5 h-5 text-cyan-400" />
              <span>Language Proficiency</span>
            </h3>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
              {LANGUAGES.map((lang, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-white">{lang.name}</span>
                    <span className="text-xs font-semibold text-cyan-400">{lang.level}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 leading-normal">
                Fluent communication capabilities for international teams, recruiters, and freelance projects across France, Europe, and globally.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
