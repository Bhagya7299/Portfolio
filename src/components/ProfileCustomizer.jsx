import React, { useState } from 'react';
import { X, Save, RotateCcw, Settings, Check, User, Mail, Phone, MapPin, Globe, Sparkles } from 'lucide-react';

export default function ProfileCustomizer({ isOpen, onClose, portfolioData, onSaveData, onResetData }) {
  const [formData, setFormData] = useState(portfolioData.personalInfo);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...portfolioData,
      personalInfo: formData
    };
    onSaveData(updatedData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1500);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all portfolio data to defaults?")) {
      const resetData = onResetData();
      setFormData(resetData.personalInfo);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-gray-950 border-l border-indigo-500/30 text-left p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-y-auto">
          
          {/* Header */}
          <div className="space-y-4 border-b border-white/10 pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-emerald-400" />
                <h2 className="font-heading font-bold text-xl text-white">Customize Profile</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-gray-900 border border-white/10 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Update your portfolio information below. All changes will be saved to your browser's local storage immediately.
            </p>
          </div>

          {/* Form Fields */}
          <form id="customizer-form" onSubmit={handleSubmit} className="py-6 space-y-5 flex-1 overflow-y-auto pr-1">
            
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full bg-gray-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500"
              />
            </div>

            {/* Title */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Professional Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full bg-gray-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500"
              />
            </div>

            {/* Bio */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Short Bio / Tagline</label>
              <textarea
                rows={3}
                value={formData.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
                className="w-full bg-gray-900 border border-white/10 rounded-xl p-3 text-xs text-white focus:border-indigo-500 resize-none"
              ></textarea>
            </div>

            {/* Availability */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Availability Badge Text</label>
              <input
                type="text"
                value={formData.availability}
                onChange={(e) => handleChange('availability', e.target.value)}
                className="w-full bg-gray-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full bg-gray-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Phone</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full bg-gray-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full bg-gray-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500"
              />
            </div>

            {/* Social Links */}
            <div className="pt-2 space-y-3 border-t border-white/10">
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Social Links</div>
              
              <div className="space-y-2 text-xs">
                <input
                  type="text"
                  placeholder="GitHub URL"
                  value={formData.github}
                  onChange={(e) => handleChange('github', e.target.value)}
                  className="w-full bg-gray-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="LinkedIn URL"
                  value={formData.linkedin}
                  onChange={(e) => handleChange('linkedin', e.target.value)}
                  className="w-full bg-gray-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Twitter URL"
                  value={formData.twitter}
                  onChange={(e) => handleChange('twitter', e.target.value)}
                  className="w-full bg-gray-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

          </form>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            {savedSuccess && (
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs font-semibold flex items-center justify-center space-x-1.5">
                <Check className="w-4 h-4" />
                <span>Profile Saved Successfully!</span>
              </div>
            )}

            <div className="flex items-center space-x-3">
              <button
                type="submit"
                form="customizer-form"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-1.5"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="px-3.5 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white border border-white/10 text-xs font-semibold"
                title="Reset to default data"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
