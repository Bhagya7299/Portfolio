import React, { useState } from 'react';
import { Briefcase, UserCheck, Building2, Palette, Settings, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({
  personalInfo,
  activePersona,
  setActivePersona,
  activeTheme,
  setActiveTheme,
  onOpenCustomizer
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const personas = [
    { id: 'recruiter', label: 'Recruiter View', icon: Briefcase, color: 'text-indigo-400' },
    { id: 'freelancer', label: 'Freelancer View', icon: UserCheck, color: 'text-emerald-400' },
    { id: 'business', label: 'Business View', icon: Building2, color: 'text-purple-400' }
  ];

  const themes = [
    { id: 'obsidian', label: 'Obsidian Dark' },
    { id: 'emerald', label: 'Emerald Luxury' },
    { id: 'cyberpunk', label: 'Cyberpunk Neon' },
    { id: 'light', label: 'Light Clean' }
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0b0f19]/85 border-b border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Name */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-emerald-400 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center font-heading font-bold text-xl text-white">
                {personalInfo.name ? personalInfo.name.charAt(0) : 'B'}
              </div>
            </div>
            <div>
              <div className="font-heading font-bold text-lg text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                {personalInfo.name}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for projects"></span>
              </div>
              <p className="text-xs text-gray-400 truncate max-w-[170px] sm:max-w-none">
                {personalInfo.title}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-indigo-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Persona & Theme Switcher & Actions */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* Persona Pills */}
            <div className="flex items-center bg-gray-900/80 p-1 rounded-xl border border-white/10">
              {personas.map((p) => {
                const IconComponent = p.icon;
                const isActive = activePersona === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePersona(p.id)}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-white' : p.color}`} />
                    <span>{p.label.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Theme Selector */}
            <div className="relative group">
              <button
                className="p-2.5 rounded-xl bg-gray-900/80 border border-white/10 text-gray-300 hover:text-white hover:border-indigo-500/50 transition-colors"
                title="Change Theme"
              >
                <Palette className="w-4 h-4 text-indigo-400" />
              </button>
              <div className="absolute right-0 mt-2 w-44 bg-gray-900 border border-white/10 rounded-xl shadow-2xl py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="px-3 py-1 text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                  Select Theme
                </div>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTheme(t.id)}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium flex items-center justify-between hover:bg-white/5 ${
                      activeTheme === t.id ? 'text-indigo-400 font-semibold' : 'text-gray-300'
                    }`}
                  >
                    <span>{t.label}</span>
                    {activeTheme === t.id && <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Profile Customizer Trigger */}
            <button
              onClick={onOpenCustomizer}
              className="p-2.5 rounded-xl bg-gray-900/80 border border-white/10 text-gray-300 hover:text-white hover:border-indigo-500/50 transition-colors"
              title="Customize Portfolio Profile"
            >
              <Settings className="w-4 h-4 text-emerald-400 animate-spin-slow" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenCustomizer}
              className="p-2 rounded-lg bg-gray-900 border border-white/10 text-gray-300"
            >
              <Settings className="w-4 h-4 text-emerald-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-900 border border-white/10 text-gray-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-950/95 border-b border-white/10 px-4 pt-3 pb-6 space-y-4">
          {/* Persona Mobile Switcher */}
          <div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Viewing Mode
            </div>
            <div className="grid grid-cols-3 gap-2">
              {personas.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActivePersona(p.id);
                  }}
                  className={`px-2 py-2 rounded-lg text-xs font-medium text-center ${
                    activePersona === p.id ? 'bg-indigo-600 text-white' : 'bg-gray-900 text-gray-400'
                  }`}
                >
                  {p.label.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Nav Links */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-white py-1.5 text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
