
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have a question or interested in collaborating? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-tech-purple mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-tech-gradient p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-white/90">techtalksvritually@gmail.com</p>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-1">Brand</p>
                    <p className="text-white/90">TechTalks Scene</p>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-1">Follow Us</p>
                    <div className="flex space-x-3 mt-2">
                      <a href="https://twitter.com/gmuraliyadav6" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors">
                        <Twitter size={16} />
                      </a>
                      <a href="https://instagram.com/_muralig" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors">
                        <Instagram size={16} />
                      </a>
                      <a href="https://www.linkedin.com/in/gmuraliyadav" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors">
                        <Linkedin size={16} />
                      </a>
                      <a href="https://youtube.com/@TechTalksVirtually" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors">
                        <Youtube size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-6">Why Connect With Us?</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-tech-light-purple/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Custom AI Solutions</h4>
                      <p className="text-gray-700">
                        We can help you implement AI tools tailored specifically to your business needs.
                      </p>
                    </div>
                    
                    <div className="bg-tech-light-purple/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Technical Consultation</h4>
                      <p className="text-gray-700">
                        Need advice on implementing new technologies or solving complex problems? Let's talk.
                      </p>
                    </div>
                    
                    <div className="bg-tech-light-purple/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Partnership Opportunities</h4>
                      <p className="text-gray-700">
                        Interested in collaborating on innovative tech projects? Reach out to discuss possibilities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
