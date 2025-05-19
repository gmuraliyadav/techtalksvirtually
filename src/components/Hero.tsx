import React from 'react';
import { Button } from '@/components/ui/button';
const Hero: React.FC = () => {
  return <section className="py-16 md:py-24 lg:py-32 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">G Murali Yadav</span>
              <br />
              <span className="text-tech-dark-purple">AI-Powered Solutions</span>
            </h1>
            
            <p className="text-lg text-gray-700 max-w-xl">
              Passionate technophile, creating custom AI solutions and innovative technologies. Currently exploring the intersection of payments and AI.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-tech-purple hover:bg-tech-vivid-purple text-white">
                Explore My Work
              </Button>
              <Button variant="outline" className="border-tech-purple text-tech-purple hover:bg-tech-light-purple">
                Learn About Me
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-tech-light-purple rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute bottom-10 -left-10 w-64 h-64 bg-tech-purple rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
            
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 animate-float">
              <div className="bg-tech-gradient p-2 rounded-lg mb-4 w-fit">
                <div className="bg-white p-2 rounded">
                  <code className="font-mono text-sm">const developer = new TechEnthusiast();</code>
                </div>
              </div>
              
              <h3 className="font-bold text-xl mb-2">AI-Powered Solutions</h3>
              <p className="text-gray-700">
                Building the future with customized AI tools designed specifically for your unique requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;