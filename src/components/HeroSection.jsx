import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Calculator, Calendar, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons';

export default function HeroSection({ personalInfo, personaConfig, activePersona, stats }) {
  const currentConfig = personaConfig[activePersona] || personaConfig.recruiter;
  
  // Dynamic typing text effect
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingRoles = [
    "Full-Stack Web Architect",
    "SaaS Product Developer",
    "React & Next.js Expert",
    "AI Integration Engineer"
  ];

  useEffect(() => {
    let timer;
    const currentRole = typingRoles[loopNum % typingRoles.length];

    if (isDeleting) {
      setTypedText(currentRole.substring(0, typedText.length - 1));
    } else {
      setTypedText(currentRole.substring(0, typedText.length + 1));
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && typedText === currentRole) {
      speed = 1800; // Pause at end of text
      setIsDeleting(true);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      speed = 400;
    }

    timer = setTimeout(() => {}, speed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum]);

  const handleActionClick = (action) => {
    const el = document.getElementById(action);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative pt-12 pb-20 overflow-hidden">
      
      {/* Background ambient glow shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Dynamic Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15]">
              {currentConfig.heroTitle}
            </h1>

            {/* Subtitle & Typing Effect */}
            <div className="space-y-3">
              <div className="text-xl sm:text-2xl font-semibold text-indigo-400 flex items-center gap-2">
                <span>I am a</span>
                <span className="text-white border-b-2 border-indigo-500 pb-0.5 min-h-[36px] inline-block font-mono">
                  {typedText}<span className="animate-pulse text-indigo-400">|</span>
                </span>
              </div>

              <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleActionClick(currentConfig.primaryCtaAction)}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] transition-all flex items-center space-x-2"
              >
                <span>{currentConfig.primaryCtaText}</span>
                {currentConfig.primaryCtaAction === 'resume' ? (
                  <Download className="w-4 h-4" />
                ) : currentConfig.primaryCtaAction === 'estimator' ? (
                  <Calculator className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => handleActionClick(currentConfig.secondaryCtaAction)}
                className="px-6 py-3.5 rounded-xl bg-gray-900/90 hover:bg-gray-800 text-gray-200 border border-white/10 hover:border-indigo-500/40 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>{currentConfig.secondaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-indigo-400" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4 text-gray-400">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Connect:</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-900 border border-white/5 hover:text-white hover:border-indigo-500/50 transition-colors">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-900 border border-white/5 hover:text-white hover:border-indigo-500/50 transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-900 border border-white/5 hover:text-white hover:border-indigo-500/50 transition-colors">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2 rounded-lg bg-gray-900 border border-white/5 hover:text-white hover:border-indigo-500/50 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Avatar & Floating Glass Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main Avatar Wrapper with glowing glass frame */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl p-1 bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent shadow-2xl">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-gray-900 relative">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center filter contrast-105 hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80"></div>
                
                {/* Name Tag overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-gray-900/80 backdrop-blur-md border border-white/10 text-left">
                  <div className="font-heading font-bold text-white text-lg flex items-center justify-between">
                    <span>{personalInfo.name}</span>
                    <ShieldCheck className="w-5 h-5 text-indigo-400" />
                  </div>
                  <p className="text-xs text-gray-300">{personalInfo.location}</p>
                </div>
              </div>

              {/* Floating Glass Pill 1 */}
              <div className="absolute -top-4 -left-4 px-4 py-2.5 rounded-2xl glass-panel border border-indigo-500/30 shadow-xl flex items-center space-x-2 animate-bounce-slow">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white">Full-Stack Verified</span>
              </div>

              {/* Floating Glass Pill 2 */}
              <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-2xl glass-panel border border-purple-500/30 shadow-xl text-left">
                <div className="text-[10px] uppercase font-bold text-purple-400 tracking-wider">Top Skills</div>
                <div className="text-xs font-bold text-white mt-0.5">React • Next.js • Node</div>
              </div>

            </div>

          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-white/10 text-left hover:border-indigo-500/30 transition-colors"
            >
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-gray-400 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
