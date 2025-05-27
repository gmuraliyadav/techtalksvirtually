import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import ComingSoonModal from './ComingSoonModal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-screen py-16 md:py-24 lg:py-32 overflow-hidden relative bg-gradient-to-b from-white to-gray-50">
      {/* AI-themed background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        
        {/* Animated circuit lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q25,25 50,50 T100,50"
              stroke="url(#gradient)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                  TechTalksVirtually
                </span>
                <br />
                <span className="text-gray-800">Where Innovation Meets Community</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                Join our vibrant community of tech enthusiasts, developers, and innovators. Share knowledge, learn from experts, and grow together in the ever-evolving world of technology.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  asChild
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="https://chat.whatsapp.com/IJsPrPwMP0BKSORcndOyKe" target="_blank" rel="noopener noreferrer">Join Our Community</a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsModalOpen(true)}
                >
                  <a href="#events">Explore Events</a>
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Right content */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-0.5 rounded-lg">
                    <div className="bg-white p-4 rounded-lg">
                      <code className="font-mono text-sm text-purple-600">
                        const community = new TechTalksVirtually();
                      </code>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        title: "AI Integration",
                        desc: "Seamlessly integrate AI into your development workflow",
                        bg: "bg-purple-50",
                        text: "text-purple-700"
                      },
                      {
                        title: "Smart Solutions",
                        desc: "AI-powered development tools and automation",
                        bg: "bg-blue-50",
                        text: "text-blue-700"
                      },
                      {
                        title: "Expert Training",
                        desc: "Master AI tools and boost your productivity",
                        bg: "bg-indigo-50",
                        text: "text-indigo-700"
                      },
                      {
                        title: "Custom AI Agents",
                        desc: "Tailored AI solutions for your specific needs",
                        bg: "bg-violet-50",
                        text: "text-violet-700"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className={`p-4 ${item.bg} rounded-lg hover:shadow-lg transition-all duration-300`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <h3 className={`font-bold text-lg ${item.text} mb-2`}>{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    className="mt-8 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25"></div>
                    <div className="relative bg-white p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center"
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-gray-900">AI-Powered Development</h4>
                          <p className="text-sm text-gray-600">Enhance your coding experience with intelligent AI assistance</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;