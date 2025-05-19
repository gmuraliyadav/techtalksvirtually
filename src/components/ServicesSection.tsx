
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Custom AI Solutions",
      description: "We develop tailored AI tools designed specifically to meet your unique requirements, ensuring seamless integration with your existing systems."
    },
    {
      title: "Issue Resolution",
      description: "Our team quickly diagnoses and resolves technical issues using our suite of custom AI tools, minimizing downtime for your business."
    },
    {
      title: "Rapid Development",
      description: "We pride ourselves on delivering high-quality solutions with impressive speed, helping you stay ahead of your competition."
    },
    {
      title: "AI Integration",
      description: "With our AI Universe Clouds, we make system integration simple and efficient, connecting diverse platforms through intelligent interfaces."
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">What We Do</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We solve complex technical challenges by developing customized AI solutions that streamline workflows and enhance capabilities.
          </p>
          <div className="w-24 h-1 bg-tech-purple mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="tech-card hover:-translate-y-2">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-tech-light-purple flex items-center justify-center mb-3">
                  <span className="font-bold text-tech-purple">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
