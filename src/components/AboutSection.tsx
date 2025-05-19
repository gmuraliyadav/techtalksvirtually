
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  const skills = [
    "Full Stack Development",
    "AI Integration",
    "IoT Development",
    "Payment Systems",
    "Cloud Architecture"
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-tech-purple mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Hello! I'm <span className="font-semibold">G Murali Yadav</span>, a Full Stack Software Developer with a passion for emerging technologies. I describe myself as a <span className="italic">technophile</span> – always eager to learn about and work with cutting-edge tech.
            </p>
            
            <p className="text-lg text-gray-700">
              Currently working in the payment domain, I'm deeply interested in IoT development and creating AI-powered solutions that solve real-world problems efficiently.
            </p>
            
            <p className="text-lg text-gray-700">
              My mission is to bridge the gap between complex technology and user-friendly applications, making advanced tech accessible to everyone.
            </p>
          </div>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Technical Expertise</h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-tech-purple"></div>
                    <span className="text-gray-800">{skill}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-tech-light-purple rounded-lg">
                <p className="text-gray-800">
                  <span className="font-semibold">Current Focus:</span> AI Universe Clouds - seamlessly integrating AI with various systems
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
