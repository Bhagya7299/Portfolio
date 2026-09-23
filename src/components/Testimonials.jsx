import React from 'react';
import { Clock, DollarSign, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Testimonials({ testimonials, whyWorkWithMe }) {
  const features = whyWorkWithMe || [
    {
      title: "100% Commitment & Daily Updates",
      description: "As a passionate student developer, every client project gets my complete focus with clear, daily progress updates.",
      icon: Clock,
      color: "text-indigo-400"
    },
    {
      title: "Student-Friendly Affordable Pricing",
      description: "Get modern, high-quality custom web code without paying heavy corporate agency rates.",
      icon: DollarSign,
      color: "text-emerald-400"
    },
    {
      title: "Fast, Responsive & Clean Code",
      description: "Built with React and Tailwind CSS so your website loads fast on mobile and desktop screens.",
      icon: CheckCircle2,
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Work Ethic & Guarantee
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Why Work With Me?
          </h2>
          <p className="text-gray-400 text-base">
            Honest, dedicated, and transparent freelancing focused on delivering great results for your project.
          </p>
        </div>

        {/* Work Ethic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 text-left relative group"
              >
                <div className="space-y-4 relative z-10">
                  <div className="p-3.5 rounded-2xl bg-gray-900 border border-white/10 w-fit group-hover:scale-105 transition-transform">
                    <HeartHandshake className="w-6 h-6 text-emerald-400" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center space-x-2 text-xs font-semibold text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Guaranteed Satisfaction</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
