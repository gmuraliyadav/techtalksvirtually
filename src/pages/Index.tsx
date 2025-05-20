import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import CollaborateSection from '@/components/CollaborateSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Ensure filename matches import: Index.tsx (or rename file to index.tsx and update import in App.tsx accordingly)

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <AchievementsSection />
      <CollaborateSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
