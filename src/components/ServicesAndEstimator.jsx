import React, { useState } from 'react';
import { Code, Rocket, ShoppingBag, Cpu, Check, Calculator, Sparkles, Send, Clock, DollarSign, ArrowRight, MessageSquareCheck, Handshake } from 'lucide-react';

export default function ServicesAndEstimator({ services, estimatorOptions, onSendEstimateToContact }) {
  // Currency state: 'INR' | 'USD'
  const [currency, setCurrency] = useState('INR');
  
  // Estimator state
  const [selectedProjectType, setSelectedProjectType] = useState(estimatorOptions.projectTypes[0].id);
  const [selectedFeatures, setSelectedFeatures] = useState(['contact_form']);
  const [selectedSpeed, setSelectedSpeed] = useState('standard');

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code className="w-6 h-6 text-indigo-400" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-purple-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      default: return <Code className="w-6 h-6 text-indigo-400" />;
    }
  };

  // Calculate project cost & timeline
  const currentProjectTypeObj = estimatorOptions.projectTypes.find(p => p.id === selectedProjectType) || estimatorOptions.projectTypes[0];
  const currentSpeedObj = estimatorOptions.timelineSpeed.find(s => s.id === selectedSpeed) || estimatorOptions.timelineSpeed[0];

  let baseCostUsd = currentProjectTypeObj.baseCost;
  let baseCostInr = currentProjectTypeObj.baseInr || 2999;
  let baseDays = currentProjectTypeObj.baseDays;

  selectedFeatures.forEach(featId => {
    const featObj = estimatorOptions.features.find(f => f.id === featId);
    if (featObj) {
      baseCostUsd += featObj.cost;
      baseCostInr += (featObj.inr || 500);
      baseDays += featObj.days;
    }
  });

  const finalCostUsd = Math.round(baseCostUsd * currentSpeedObj.multiplier);
  const finalCostInr = Math.round(baseCostInr * currentSpeedObj.multiplier);
  const finalDays = Math.round(baseDays);

  const toggleFeature = (featId) => {
    if (selectedFeatures.includes(featId)) {
      setSelectedFeatures(selectedFeatures.filter(id => id !== featId));
    } else {
      setSelectedFeatures([...selectedFeatures, featId]);
    }
  };

  const handleProposalTrigger = () => {
    const projectTypeName = currentProjectTypeObj.name;
    const selectedFeatureNames = selectedFeatures
      .map(id => estimatorOptions.features.find(f => f.id === id)?.name)
      .filter(Boolean)
      .join(', ');
    
    const priceFormatted = currency === 'INR' ? `₹${finalCostInr}` : `$${finalCostUsd}`;

    const summaryMsg = `Hi Bhagya, I used your project estimator on your portfolio. I'm interested in building a ${projectTypeName} with features: [${selectedFeatureNames || 'Standard'}]. Estimated quote: ~${priceFormatted} (${finalDays} days). I would like to negotiate according to my workload & budget!`;

    if (onSendEstimateToContact) {
      onSendEstimateToContact(summaryMsg);
    }

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* SERVICES SECTION */}
        <div>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Services & Student Pricing
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Pocket-Friendly Web Services
            </h2>
            <p className="text-gray-400 text-base">
              Quality custom web development with flexible, negotiable rates suited for small businesses and individuals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 relative text-left flex flex-col justify-between space-y-6 group"
              >
                {service.popular && (
                  <div className="absolute top-6 right-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                      Popular Option
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-gray-900 border border-white/10 w-fit group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2.5 pt-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-gray-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Inquire / Discuss Budget</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>


        {/* INTERACTIVE COST ESTIMATOR SECTION */}
        <div id="estimator" className="glass-panel rounded-3xl p-6 sm:p-10 border border-indigo-500/30 bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950/40 text-left relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Banner Notice: Negotiable Pricing */}
          <div className="mb-8 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                <Handshake className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-emerald-200 font-medium">
                <strong className="text-white">100% Negotiable Rates:</strong> Prices below are baseline estimates. Final price is customized based on your exact workload & budget!
              </p>
            </div>

            {/* Currency Selector Toggle */}
            <div className="flex items-center bg-gray-900 p-1 rounded-xl border border-white/10 shrink-0">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  currency === 'INR' ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  currency === 'USD' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                $ USD
              </button>
            </div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            
            {/* Left Options Form */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-indigo-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                    Pocket Estimator
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  Affordable Budget Estimator
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  Select your requirement to view estimated pocket-friendly pricing.
                </p>
              </div>

              {/* Step 1: Project Type */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                  1. Select Website Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {estimatorOptions.projectTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedProjectType(type.id)}
                      className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                        selectedProjectType === type.id
                          ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                          : 'bg-gray-900 border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      <div className="font-bold text-white text-sm">{type.name}</div>
                      <div className="text-[11px] text-emerald-400 font-mono mt-1">
                        Starting from {currency === 'INR' ? `₹${type.baseInr || 2999}` : `$${type.baseCost}`}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Desired Features */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                  2. Select Features (Multi-select)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {estimatorOptions.features.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat.id);
                    return (
                      <button
                        key={feat.id}
                        onClick={() => toggleFeature(feat.id)}
                        className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all ${
                          isChecked
                            ? 'bg-indigo-600/20 border-indigo-500 text-white'
                            : 'bg-gray-900 border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span>{feat.name}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-md font-mono ${isChecked ? 'bg-indigo-500 text-white' : 'bg-gray-800 text-gray-400'}`}>
                          +{currency === 'INR' ? `₹${feat.inr || 500}` : `$${feat.cost}`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Timeline Speed */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                  3. Development Pace
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {estimatorOptions.timelineSpeed.map((speed) => (
                    <button
                      key={speed.id}
                      onClick={() => setSelectedSpeed(speed.id)}
                      className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                        selectedSpeed === speed.id
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                          : 'bg-gray-900 border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      {speed.name}
                    </button>
                  ))}
                </div>
              </div>

            </div>


            {/* Right Summary Result Card */}
            <div className="lg:col-span-5 h-full flex flex-col justify-between">
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-indigo-500/30 bg-gray-900/90 space-y-6 shadow-xl">
                
                <div className="border-b border-white/10 pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                    Estimated Quote Summary
                  </span>
                  <div className="font-heading font-bold text-lg text-white mt-1">
                    {currentProjectTypeObj.name}
                  </div>
                </div>

                {/* Estimated Budget */}
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <span>Estimated Budget Range</span>
                  </div>
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-indigo-300 to-indigo-400">
                    {currency === 'INR' ? `₹${finalCostInr}` : `$${finalCostUsd}`}
                  </div>
                  <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 pt-1">
                    <Handshake className="w-3.5 h-3.5" />
                    <span>Negotiable based on your workload & budget</span>
                  </div>
                </div>

                {/* Estimated Timeline */}
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    <span>Estimated Delivery</span>
                  </div>
                  <div className="font-heading font-bold text-xl text-white">
                    ~{finalDays} Days
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="text-xs text-gray-400 space-y-1.5 pt-2 border-t border-white/10">
                  <div className="flex justify-between">
                    <span>Selected Addons:</span>
                    <span className="text-white font-semibold">{selectedFeatures.length} features</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Negotiation Status:</span>
                    <span className="text-emerald-400 font-semibold">100% Open</span>
                  </div>
                </div>

                {/* Send Proposal CTA Button */}
                <button
                  onClick={handleProposalTrigger}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center space-x-2 transition-all hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  <span>Inquire / Negotiate Quote</span>
                </button>

                <p className="text-[11px] text-gray-500 text-center">
                  *Send me your exact requirements to get a custom discounted quote.
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
