
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-tech-purple mx-auto"></div>
        </div>
        
        <div className="mt-12">
          <Card className="border-none shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-tech-gradient p-8 md:p-12 flex items-center">
                <div className="space-y-4">
                  <h3 className="text-white text-2xl md:text-3xl font-bold">AI Universe Clouds</h3>
                  <p className="text-white/90 text-lg">
                    Our flagship project providing seamless integration between various systems and AI services, creating a unified ecosystem for businesses.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">AI Integration</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">Cloud Architecture</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">API Development</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-12 flex items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Why AI Universe Clouds?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-tech-purple mr-3"></div>
                      <p>Simplifies complex system integration without extensive coding</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-tech-purple mr-3"></div>
                      <p>Adapts to your existing infrastructure - no need to rebuild</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-tech-purple mr-3"></div>
                      <p>Intelligent data flow management between disparate systems</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-tech-purple mr-3"></div>
                      <p>Scale your integration capabilities as your business grows</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <CardFooter className="bg-white p-6 border-t">
              <Button className="bg-tech-purple hover:bg-tech-vivid-purple text-white">Learn More About AI Universe Clouds</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
