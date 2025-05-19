
import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-dark-purple text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechTalks Scene</h3>
            <p className="text-white/80">
              Creating custom AI solutions and innovative technologies for businesses of all sizes.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white hover:underline transition-all">About</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white hover:underline transition-all">Services</a></li>
              <li><a href="#projects" className="text-white/80 hover:text-white hover:underline transition-all">Projects</a></li>
              <li><a href="#collaborate" className="text-white/80 hover:text-white hover:underline transition-all">Collaborate</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white hover:underline transition-all">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <p className="text-white/80 mb-2">
              Email: techtalksvritually@gmail.com
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="https://twitter.com/gmuraliyadav6" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="https://instagram.com/_muralig" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://www.linkedin.com/in/gmuraliyadav" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://youtube.com/@TechTalksVirtually" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60">
          <p>© {currentYear} G Murali Yadav | TechTalks Scene. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
