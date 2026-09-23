import React, { useState } from 'react';
import { Download, Printer, Copy, Check, FileText, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function DigitalResume({ personalInfo, skills, experience }) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${personalInfo.name} - ${personalInfo.title}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone} | Location: ${personalInfo.location}

SUMMARY:
${personalInfo.bio}

SKILLS:
${skills.map(s => s.name).join(', ')}

EXPERIENCE:
${experience.map(e => `${e.role} at ${e.company} (${e.period})\n- ${e.bullets.join('\n- ')}`).join('\n\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4 no-print">
          <span className="text-xs uppercase font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Interactive CV
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Digital Resume & Curriculum Vitae
          </h2>
          <p className="text-gray-400 text-base">
            Professional printable resume formatted for recruiters and enterprise partners.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center space-x-2 shadow-lg shadow-indigo-600/30 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 border border-white/10 font-bold text-xs flex items-center space-x-2 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Plain Text'}</span>
            </button>
          </div>
        </div>


        {/* RESUME PAPER CARD */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 text-left bg-gray-950/90 shadow-2xl relative">
          
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-heading font-extrabold text-3xl text-white">
                  {personalInfo.name}
                </h1>
                <p className="text-base font-semibold text-indigo-400 mt-1">
                  {personalInfo.title}
                </p>
              </div>

              <div className="text-xs text-gray-300 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center sm:justify-end space-x-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="py-6 border-b border-white/10 space-y-2">
            <h3 className="text-xs uppercase font-bold tracking-widest text-indigo-400">
              Professional Summary
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Core Skills Matrix */}
          <div className="py-6 border-b border-white/10 space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-widest text-indigo-400">
              Core Technical Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span key={idx} className="text-xs font-medium px-3 py-1 rounded-md bg-gray-900 border border-white/10 text-gray-200">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="py-6 border-b border-white/10 space-y-6">
            <h3 className="text-xs uppercase font-bold tracking-widest text-indigo-400">
              Work Experience
            </h3>

            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="font-heading font-bold text-base text-white">
                      {exp.role} <span className="text-indigo-400">— {exp.company}</span>
                    </h4>
                    <span className="text-xs text-gray-400 font-mono">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-300">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="pt-6 space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-widest text-indigo-400">
              Education & Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-gray-900 border border-white/5 space-y-1">
                <div className="font-bold text-white">B.Tech in Computer Science Engineering</div>
                <div className="text-gray-400">Specialization in AI & ML • Currently Pursuing</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-900 border border-white/5 space-y-1">
                <div className="font-bold text-white">AWS Certified Solutions Architect</div>
                <div className="text-gray-400">Amazon Web Services • Verified</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
