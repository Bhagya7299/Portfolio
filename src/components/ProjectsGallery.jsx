import React, { useState } from 'react';
import { Search, ExternalLink, ArrowRight, Layers, Eye } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import CaseStudyModal from './CaseStudyModal';

export default function ProjectsGallery({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = ['All', 'SaaS & AI', 'E-Commerce', 'Web App'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Featured Portfolio
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Engineering Case Studies & Work
          </h2>
          <p className="text-gray-400 text-base">
            Explore production applications, SaaS solutions, and e-commerce platforms built for client growth.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'glass-panel text-gray-400 hover:text-white hover:border-indigo-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech stack or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900/90 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/60 transition-colors"
            />
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="glass-panel p-12 rounded-3xl text-center text-gray-400">
            No projects matched your criteria. Try adjusting your search query!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-300 flex flex-col group hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 text-left"
              >
                
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden bg-gray-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-300 bg-gray-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Quick View Button overlay */}
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs text-white font-bold text-xs gap-2"
                  >
                    <div className="px-4 py-2 rounded-xl bg-indigo-600 shadow-xl flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>Explore Case Study</span>
                    </div>
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3
                      onClick={() => setActiveProjectModal(project)}
                      className="font-heading font-bold text-xl text-white group-hover:text-indigo-300 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span key={idx} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-gray-900 border border-white/5 text-gray-300">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-gray-900 text-gray-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center space-x-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-gray-900 border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/40 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-gray-900 border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/40 transition-colors"
                          title="GitHub Source"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Case Study Modal */}
      {activeProjectModal && (
        <CaseStudyModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}
    </section>
  );
}
