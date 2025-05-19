
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CollaborateSection: React.FC = () => {
  return (
    <section id="collaborate" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Let's Collaborate</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're looking for talented individuals to join our testing team and help refine our AI models.
          </p>
          <div className="w-24 h-1 bg-tech-purple mx-auto mt-4"></div>
        </div>
        
        <Card className="border-none shadow-lg mt-8 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-4">Why Become a Tester?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-tech-light-purple flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-tech-purple"></div>
                  </div>
                  <p className="text-gray-700">Get early access to cutting-edge AI technologies</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-tech-light-purple flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-tech-purple"></div>
                  </div>
                  <p className="text-gray-700">Shape the development of new technological solutions</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-tech-light-purple flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-tech-purple"></div>
                  </div>
                  <p className="text-gray-700">Collaborate with like-minded tech enthusiasts</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-tech-light-purple flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-tech-purple"></div>
                  </div>
                  <p className="text-gray-700">Gain valuable experience in emerging technologies</p>
                </li>
              </ul>
              
              <div className="mt-6">
                <Button className="bg-tech-purple hover:bg-tech-vivid-purple text-white">
                  Join Our Testing Team
                </Button>
              </div>
            </div>
            
            <div className="bg-tech-gradient p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-white text-2xl font-bold mb-4">What We're Looking For</h3>
              <CardContent className="p-0 space-y-4 text-white/90">
                <p>We're seeking enthusiastic testers with:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span>Interest in AI and emerging technologies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span>Attention to detail and analytical thinking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span>Ability to provide constructive feedback</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span>Commitment to testing schedules</span>
                  </li>
                </ul>
                <p className="italic pt-2">
                  No specific technical background required - just passion for technology!
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CollaborateSection;
