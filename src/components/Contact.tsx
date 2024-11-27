import React from 'react';
import { Phone, Mail, Linkedin, Send, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-primary-600 font-medium mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-transparent bg-clip-text">
            Get in Touch
          </h2>
        </div>
        
        <div className="max-w-sm mx-auto">
          <div className="relative">
            {/* Phone Frame */}
            <div className="bg-gray-900 rounded-[3rem] p-4 shadow-xl">
              {/* Screen Content */}
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-[2.5rem] p-6 space-y-6">
                <div className="w-32 h-1 bg-white/20 mx-auto rounded-full mb-8"></div>
                
                {/* Contact Links */}
                <div className="space-y-6">
                  <a href="tel:+1234567890" 
                     className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl hover:bg-white/20 transition-all hover:-translate-y-0.5">
                    <div className="p-2 bg-white/10 rounded-xl">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white">+54 9 11 2465 4490</span>
                  </a>
                  
                  <a href="mailto:your@email.com" 
                     className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl hover:bg-white/20 transition-all hover:-translate-y-0.5">
                    <div className="p-2 bg-white/10 rounded-xl">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white">camivinci7@gmail.com</span>
                  </a>
                  
                  <a href="https://linkedin.com" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl hover:bg-white/20 transition-all hover:-translate-y-0.5">
                    <div className="p-2 bg-white/10 rounded-xl">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white">www.linkedin.com/in/camila-vinciguerra</span>
                  </a>
                </div>
              
                

                <div className="w-16 h-1 bg-white/20 rounded-full mx-auto mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}