import React, { useState } from 'react';
import { Code2, Server, Cloud, Cpu, Palette, Globe, Terminal, FileCode, Layers } from 'lucide-react';
import { FigmaIcon } from './BrandIcons';

export default function SkillsMatrix({ skills }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'AI & Tools', 'Design'];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-pink-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-blue-400" />;
      case 'Figma': return <FigmaIcon className="w-5 h-5 text-rose-400" />;
      default: return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Technical Proficiency
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Skills & Technical Ecosystem
          </h2>
          <p className="text-gray-400 text-base">
            Modern tools, frameworks, and cloud architectures I utilize to engineer scalable products.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'glass-panel text-gray-400 hover:text-white hover:border-indigo-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 text-left group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-gray-900 border border-white/10 group-hover:scale-110 transition-transform">
                    {getIcon(skill.icon)}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white group-hover:text-indigo-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-gray-400">{skill.category}</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-900 rounded-full h-2 overflow-hidden border border-white/5">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-125"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
