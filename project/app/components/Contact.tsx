import { Mail, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden">
        <div className="bg-black backdrop-blur-sm p-8">
          <h2 className="text-3xl font-bold mb-8 text-amber-400">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 border border-transparent hover:border-amber-500/20">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-amber-400 transition-colors">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span className="group-hover:text-amber-100 transition-colors duration-300">
                    ieee.cs@university.edu
                  </span>
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 border border-transparent hover:border-amber-500/20">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-amber-400 transition-colors">
                Meeting Times
              </h3>
              <p className="text-gray-400 group-hover:text-amber-100 transition-colors duration-300">
                Regular meetings every Tuesday at 5:00 PM
              </p>
              <p className="text-gray-400 group-hover:text-amber-100 transition-colors duration-300">
                Room 301, Computer Science Building
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}