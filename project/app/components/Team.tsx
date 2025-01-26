import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    { name: "Dr. Sarah Chen", role: "Faculty Advisor", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
    { name: "Alex Thompson", role: "Chapter Chair", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
    { name: "Maya Patel", role: "Vice Chair", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop" },
    { name: "James Wilson", role: "Technical Lead", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop" },
  ];

  return (
    <section id="team" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-amber-400">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-slate-800/50 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 border border-transparent hover:border-amber-500/20">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-2 ring-amber-500/50 group-hover:ring-amber-500 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-amber-400 transition-colors">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
              <div className="flex justify-center space-x-3 mt-4">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Team;
=======
export default Team;
>>>>>>> a3567d323f9de7cefbf97c9aaf89a1b5f1c94668
