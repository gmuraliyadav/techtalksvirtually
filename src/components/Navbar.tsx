import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-6 lg:px-8 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            TechTalksVirtually
          </h1>
          <span className="text-sm font-medium text-purple-600">TTV</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">About</a>
          <a href="#services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Services</a>
          <a href="#projects" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Projects</a>
          <a href="#achievements" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Achievements</a>
          <a href="#collaborate" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Collaborate</a>
        </div>
        
        <div>
          <Button 
            asChild 
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6"
          >
            <a href="#contact">Join Community</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
