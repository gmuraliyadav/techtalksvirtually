import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen py-16 md:py-24 lg:py-32 overflow-hidden relative bg-gradient-to-b from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
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
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                  Welcome to TTV
                </span>
              </div>
              
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
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Join Our Community
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg rounded-full transition-all duration-300">
                  Explore Events
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
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-bold text-lg text-purple-700 mb-2">Live Sessions</h3>
                      <p className="text-gray-600">Interactive tech talks with industry experts</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-bold text-lg text-blue-700 mb-2">Networking</h3>
                      <p className="text-gray-600">Connect with like-minded professionals</p>
                    </div>
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h3 className="font-bold text-lg text-indigo-700 mb-2">Workshops</h3>
                      <p className="text-gray-600">Hands-on learning experiences</p>
                    </div>
                    <div className="p-4 bg-violet-50 rounded-lg">
                      <h3 className="font-bold text-lg text-violet-700 mb-2">Resources</h3>
                      <p className="text-gray-600">Access to exclusive tech content</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;