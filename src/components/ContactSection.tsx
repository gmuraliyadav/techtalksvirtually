import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Building2, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/yourusername'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: 'Twitter',
      href: 'https://twitter.com/yourusername'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
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
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a question or interested in collaborating? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Email</h3>
                      <a href="mailto:techtalksvritually@gmail.com" className="text-purple-600 hover:text-purple-700">
                        techtalksvritually@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Brand</h3>
                      <p className="text-gray-600">Tech Talks Virtually With AI</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white p-8 rounded-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Dear TechTalksVirtually Team,

I am writing to express my interest in [your specific interest].

[Briefly describe your background or company]

[Explain what you're looking for or how you'd like to work together]

I would appreciate the opportunity to discuss this further.

Best regards,
[Your Name]
[Your Contact Information]"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full h-48"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
