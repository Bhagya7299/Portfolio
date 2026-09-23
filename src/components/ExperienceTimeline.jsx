import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceTimeline({ experience }) {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Career Timeline
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Professional Experience & Track Record
          </h2>
          <p className="text-gray-400 text-base">
            Detailed breakdown of my engineering roles, achievements, and technology stacks utilized.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-500/20 ml-4 sm:ml-8 space-y-12 text-left">
          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-gray-900 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Timeline Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-indigo-500/40 transition-all space-y-4 shadow-xl">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-indigo-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-indigo-400 mt-0.5">
                      {item.company} <span className="text-gray-400 font-normal">({item.type})</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 font-medium">
                    <div className="flex items-center space-x-1 bg-gray-900 px-3 py-1 rounded-lg border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-gray-900 px-3 py-1 rounded-lg border border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-3 text-sm text-gray-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                {item.skills && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-gray-900 border border-white/5 text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
