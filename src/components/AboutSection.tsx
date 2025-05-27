import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Cloud, Zap, Database, Server } from 'lucide-react';

const expertise = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Full Stack Development",
    description: "Building robust and scalable applications across the entire tech stack",
    shape: "hexagon",
    color: "from-purple-600 to-blue-600"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI Integration",
    description: "Implementing intelligent solutions that enhance user experience",
    shape: "circle",
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "IoT Development",
    description: "Creating connected solutions for the modern world",
    shape: "diamond",
    color: "from-cyan-600 to-teal-600"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Payment Systems",
    description: "Developing secure and efficient payment processing solutions",
    shape: "square",
    color: "from-teal-600 to-emerald-600"
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Architecture",
    description: "Designing scalable and resilient cloud-based systems",
    shape: "parallelogram",
    color: "from-emerald-600 to-purple-600"
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "AI Universe Clouds",
    description: "Seamlessly integrating AI with various systems",
    shape: "star",
    color: "from-pink-600 to-purple-600"
  }
];

const getShapeClass = (shape: string) => {
  switch (shape) {
    case 'circle': return 'rounded-full';
    case 'square': return 'rounded-lg';
    case 'hexagon': return 'clip-hexagon';
    case 'diamond': return 'clip-diamond';
    case 'parallelogram': return 'clip-parallelogram';
    case 'star': return 'clip-star';
    default: return 'rounded-lg';
  }
};

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit-like lines */}
        <div className="absolute inset-0 opacity-5">
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
        
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Hello! I'm <span className="font-semibold text-gray-900">G Murali Yadav</span>, a Full Stack Software Developer with a passion for emerging technologies. I describe myself as a technophile – always eager to learn about and work with cutting-edge tech.
              </p>
              <p>
                Currently working in the payment domain, I'm deeply interested in IoT development and creating AI-powered solutions that solve real-world problems efficiently.
              </p>
              <p>
                My mission is to bridge the gap between complex technology and user-friendly applications, making advanced tech accessible to everyone.
              </p>
            </div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300`}></div>
                  <div className="relative bg-white p-6 rounded-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} ${getShapeClass(item.shape)} flex items-center justify-center text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Projects Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-2">Our Projects</h3>
            <div className="mx-auto w-24 h-1 bg-blue-600 rounded-full mb-2"></div>
          </motion.div>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-[#27348B] p-10 rounded-2xl shadow-xl text-white">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center">
                    <Cloud className="w-12 h-12 text-white/70" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-3xl font-extrabold mb-2">AI Universe Clouds</h4>
                  <p className="text-lg mb-6 text-white/90">
                    Our flagship project that simplifies system integration through advanced AI. This platform allows seamless connection between different systems and services, making technology adoption easier than ever before.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="px-5 py-2 rounded-full bg-white/10 text-white/90 font-medium">AI-Powered</span>
                    <span className="px-5 py-2 rounded-full bg-white/10 text-white/90 font-medium">Easy Integration</span>
                    <span className="px-5 py-2 rounded-full bg-white/10 text-white/90 font-medium">Scalable Architecture</span>
                    <span className="px-5 py-2 rounded-full bg-white/10 text-white/90 font-medium">Cloud-Based</span>
                  </div>
                  <hr className="border-white/20 my-6" />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg">
                        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-white/70' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 5.87v-2a4 4 0 00-3-3.87m6 5.87v-2a4 4 0 00-3-3.87' /></svg>
                      </span>
                      <div>
                        <div className="font-bold">Multiple Users</div>
                        <div className="text-white/70 text-sm">Support for team collaboration</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg">
                        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-white/70' fill='none' viewBox='0 0 24 24' stroke='currentColor'><rect x='3' y='7' width='18' height='13' rx='2' /><path d='M16 3v4M8 3v4' /></svg>
                      </span>
                      <div>
                        <div className="font-bold">API Ecosystem</div>
                        <div className="text-white/70 text-sm">Connect with any service</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                      <span className="text-white/70 font-semibold">Coming Soon</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        .clip-diamond {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        .clip-parallelogram {
          clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
        }
        .clip-star {
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
