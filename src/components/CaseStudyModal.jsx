import React from 'react';
import { X, ExternalLink, CheckCircle2, TrendingUp, Cpu, Award } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel bg-gray-950 border border-indigo-500/30 rounded-3xl shadow-2xl p-6 sm:p-8 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-gray-900 border border-white/10 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              {project.category}
            </span>
            <span className="text-xs text-gray-400">Detailed Case Study</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
            {project.title}
          </h2>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-gray-900 border border-white/10 text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image Preview Banner */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 max-h-[360px] relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Impact Metrics Banner */}
        {project.metrics && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Object.entries(project.metrics).map(([key, val], idx) => (
              <div key={idx} className="p-4 rounded-xl bg-gray-900/90 border border-indigo-500/20">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}
                </div>
                <div className="font-heading font-bold text-2xl text-indigo-400 mt-1">
                  {val}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Details */}
        <div className="mt-8 space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          
          {/* Problem */}
          {project.caseStudy?.problem && (
            <div className="p-5 rounded-2xl bg-gray-900/60 border border-red-500/20">
              <h3 className="font-heading font-bold text-lg text-red-400 mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 rotate-180" />
                The Challenge & Problem
              </h3>
              <p>{project.caseStudy.problem}</p>
            </div>
          )}

          {/* Solution */}
          {project.caseStudy?.solution && (
            <div className="p-5 rounded-2xl bg-gray-900/60 border border-emerald-500/20">
              <h3 className="font-heading font-bold text-lg text-emerald-400 mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                Architectural Solution
              </h3>
              <p>{project.caseStudy.solution}</p>
            </div>
          )}

          {/* Features */}
          {project.caseStudy?.keyFeatures && (
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                Key Engineering Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.caseStudy.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Business Impact */}
          {project.caseStudy?.impact && (
            <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30">
              <h3 className="font-heading font-bold text-lg text-indigo-300 mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-400" />
                Business Impact & Results
              </h3>
              <p className="text-indigo-100 font-medium">{project.caseStudy.impact}</p>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center space-x-2 shadow-lg shadow-indigo-600/30 transition-all"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 border border-white/10 font-bold text-sm flex items-center space-x-2 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gray-900 text-gray-400 hover:text-white text-sm font-semibold transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
