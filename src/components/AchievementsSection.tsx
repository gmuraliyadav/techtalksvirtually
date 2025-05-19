
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      title: "AI Model Development",
      description: "Successfully created multiple AI models with practical applications in various domains.",
      icon: "🤖"
    },
    {
      title: "Seamless Integration",
      description: "Developed frameworks allowing for rapid integration of AI with existing business systems.",
      icon: "🔄"
    },
    {
      title: "IoT Solutions",
      description: "Created innovative IoT developments that bridge the physical and digital worlds.",
      icon: "📱"
    },
    {
      title: "Payment Systems",
      description: "Enhanced payment domain solutions with modern security and efficiency improvements.",
      icon: "💳"
    }
  ];

  return (
    <section id="achievements" className="py-16 bg-tech-light-purple">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Our Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-tech-purple mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {achievements.map((item, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            These achievements represent our ongoing commitment to innovation and excellence in AI and technology solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
