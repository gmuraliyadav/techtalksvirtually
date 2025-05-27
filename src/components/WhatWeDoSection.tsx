import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Rocket, Cloud } from 'lucide-react';

const WhatWeDoSection: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Custom AI Solutions",
      description: "We develop tailored AI tools designed specifically to meet your unique requirements, ensuring seamless integration with your existing systems.",
      shape: "circle",
      color: "from-purple-600 to-blue-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Issue Resolution",
      description: "Our team quickly diagnoses and resolves technical issues using our suite of custom AI tools, minimizing downtime for your business.",
      shape: "square",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Rapid Development",
      description: "We pride ourselves on delivering high-quality solutions with impressive speed, helping you stay ahead of your competition.",
      shape: "triangle",
      color: "from-cyan-600 to-teal-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI Integration",
      description: "With our AI Universe Clouds, we make system integration simple and efficient, connecting diverse platforms through intelligent interfaces.",
      shape: "hexagon",
      color: "from-teal-600 to-emerald-600"
    }
  ];

  const getShapeClass = (shape: string) => {
    switch (shape) {
      case "circle":
        return "rounded-full";
      case "square":
        return "rounded-lg";
      case "triangle":
        return "clip-triangle";
      case "hexagon":
        return "clip-hexagon";
      default:
        return "rounded-lg";
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We solve complex technical challenges by developing customized AI solutions that streamline workflows and enhance capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300`}></div>
              <div className="relative bg-white p-6 rounded-lg border border-gray-100 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} ${getShapeClass(service.shape)} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </section>
  );
};

export default WhatWeDoSection; 