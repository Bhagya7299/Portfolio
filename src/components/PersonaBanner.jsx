import React from 'react';
import { Sparkles, Briefcase, UserCheck, Building2, ChevronRight } from 'lucide-react';

export default function PersonaBanner({ activePersona, setActivePersona, personaConfig }) {
  const currentConfig = personaConfig[activePersona] || personaConfig.recruiter;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-indigo-500/20 bg-gradient-to-r from-indigo-950/40 via-gray-900/60 to-purple-950/40 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          
          {/* Persona Label & Description */}
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 shrink-0">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs uppercase font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                  {currentConfig.badgeText}
                </span>
                <span className="text-xs text-gray-400 hidden sm:inline">• Customizing experience for you</span>
              </div>
              <p className="text-sm font-medium text-gray-200 mt-1">
                {activePersona === 'recruiter' && "Tailored for Hiring Managers & Recruiters: Highlights resume, tech stack, and engineering history."}
                {activePersona === 'freelancer' && "Tailored for Clients: Highlights services, project calculator, and case studies."}
                {activePersona === 'business' && "Tailored for B2B & Enterprise Partners: Highlights tech architecture and scalable solutions."}
              </p>
            </div>
          </div>

          {/* Quick Persona Selector Buttons */}
          <div className="flex items-center space-x-2 w-full md:w-auto shrink-0 overflow-x-auto pb-1 md:pb-0">
            <button
              onClick={() => setActivePersona('recruiter')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activePersona === 'recruiter'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Job Seeker</span>
            </button>
            
            <button
              onClick={() => setActivePersona('freelancer')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activePersona === 'freelancer'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Freelancer</span>
            </button>

            <button
              onClick={() => setActivePersona('business')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activePersona === 'business'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Business / B2B</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
