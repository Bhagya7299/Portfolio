import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons';

export default function Footer({ personalInfo }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-gray-950/80 relative z-10 py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="font-heading font-bold text-xl text-white">
              {personalInfo.name}
            </div>
            <p className="text-xs text-gray-400 max-w-sm">
              Multi-purpose professional portfolio designed for job seeking, freelancing, and business partnerships.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center space-x-4 text-gray-400">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-gray-900 border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/50 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Built with React, Tailwind CSS &</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </footer>
  );
}
