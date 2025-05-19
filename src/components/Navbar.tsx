
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-6 lg:px-8 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold gradient-text">TechTalks</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-700 hover:text-tech-purple font-medium transition-colors">About</a>
          <a href="#services" className="text-gray-700 hover:text-tech-purple font-medium transition-colors">Services</a>
          <a href="#projects" className="text-gray-700 hover:text-tech-purple font-medium transition-colors">Projects</a>
          <a href="#achievements" className="text-gray-700 hover:text-tech-purple font-medium transition-colors">Achievements</a>
          <a href="#collaborate" className="text-gray-700 hover:text-tech-purple font-medium transition-colors">Collaborate</a>
        </div>
        
        <div>
          <Button 
            asChild 
            className="bg-tech-purple hover:bg-tech-vivid-purple text-white"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
