import React, { useState, useEffect } from 'react';
import { getPortfolioData, savePortfolioData, resetPortfolioData } from './data/portfolioData';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import PersonaBanner from './components/PersonaBanner';
import HeroSection from './components/HeroSection';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsGallery from './components/ProjectsGallery';
import ServicesAndEstimator from './components/ServicesAndEstimator';
import ExperienceTimeline from './components/ExperienceTimeline';
import DigitalResume from './components/DigitalResume';
import Testimonials from './components/Testimonials';
import ContactAndBooking from './components/ContactAndBooking';
import ProfileCustomizer from './components/ProfileCustomizer';
import Footer from './components/Footer';

export default function App() {
  const [portfolioData, setPortfolioData] = useState(() => getPortfolioData());
  const [activePersona, setActivePersona] = useState('freelancer'); // 'freelancer' | 'recruiter' | 'business'
  const [activeTheme, setActiveTheme] = useState('obsidian'); // 'obsidian' | 'emerald' | 'cyberpunk' | 'light'

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [prefillContactMsg, setPrefillContactMsg] = useState('');

  const handleSaveData = (newData) => {
    setPortfolioData(newData);
    savePortfolioData(newData);
  };

  const handleResetData = () => {
    const defaultData = resetPortfolioData();
    setPortfolioData(defaultData);
    return defaultData;
  };

  const handleSendEstimateToContact = (msg) => {
    setPrefillContactMsg(msg);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 relative theme-${activeTheme}`}>
      
      {/* Dynamic Particle Canvas */}
      <CanvasBackground theme={activeTheme} />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <Navbar
          personalInfo={portfolioData.personalInfo}
          activePersona={activePersona}
          setActivePersona={setActivePersona}
          activeTheme={activeTheme}
          setActiveTheme={setActiveTheme}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* Persona Banner Indicator */}
        <PersonaBanner
          activePersona={activePersona}
          setActivePersona={setActivePersona}
          personaConfig={portfolioData.personaConfig}
        />

        {/* Main Sections */}
        <main className="flex-grow space-y-12">
          
          {/* Hero Section */}
          <HeroSection
            personalInfo={portfolioData.personalInfo}
            personaConfig={portfolioData.personaConfig}
            activePersona={activePersona}
            stats={portfolioData.stats}
          />

          {/* Skills Matrix */}
          <SkillsMatrix skills={portfolioData.skills} />

          {/* Featured Projects & Case Studies */}
          <ProjectsGallery projects={portfolioData.projects} />

          {/* Services & Interactive Cost Estimator */}
          <ServicesAndEstimator
            services={portfolioData.services}
            estimatorOptions={portfolioData.estimatorOptions}
            onSendEstimateToContact={handleSendEstimateToContact}
          />

          {/* Professional Experience History */}
          <ExperienceTimeline experience={portfolioData.experience} />

          {/* Digital Resume Viewer */}
          <DigitalResume
            personalInfo={portfolioData.personalInfo}
            skills={portfolioData.skills}
            experience={portfolioData.experience}
          />

          {/* Client Testimonials & Endorsements */}
          <Testimonials testimonials={portfolioData.testimonials} />

          {/* Contact & Calendar Booker */}
          <ContactAndBooking
            personalInfo={portfolioData.personalInfo}
            prefillMessage={prefillContactMsg}
          />

        </main>

        {/* Footer */}
        <Footer personalInfo={portfolioData.personalInfo} />

      </div>

      {/* Admin Profile Customizer Drawer */}
      <ProfileCustomizer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        portfolioData={portfolioData}
        onSaveData={handleSaveData}
        onResetData={handleResetData}
      />

    </div>
  );
}
