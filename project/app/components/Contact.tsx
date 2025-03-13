import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from 'framer-motion';
import React, { useRef } from 'react';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section 
      id="contact" 
      className="py-16"
      ref={sectionRef}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden">
        <div className="bg-black backdrop-blur-sm p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#752F8A]">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#752F8A]/10 border border-transparent hover:border-[#752F8A]/20"
            >
              <h3 className="text-xl font-semibold mb-4 group-hover:text-[#752F8A] transition-colors">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#752F8A]" />
                  <span className="group-hover:text-[#752F8A] transition-colors duration-300">
                    ieee.cs@university.edu
                  </span>
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#752F8A] hover:text-[#752F8A] transition-colors duration-300">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-[#752F8A] hover:text-[#752F8A] transition-colors duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#752F8A]/10 border border-transparent hover:border-[#752F8A]/20"
            >
              <h3 className="text-xl font-semibold mb-4 group-hover:text-[#752F8A] transition-colors">
                Meeting Times
              </h3>
              <p className="text-gray-400 group-hover:text-[#752F8A] transition-colors duration-300">
                Regular meetings every Tuesday at 5:00 PM
              </p>
              <p className="text-gray-400 group-hover:text-[#752F8A] transition-colors duration-300">
                Room 301, Computer Science Building
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}