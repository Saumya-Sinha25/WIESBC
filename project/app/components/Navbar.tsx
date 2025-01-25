import { useState } from "react"
import { Menu, X } from "lucide-react"
import CustomLogo2 from "../assets/csgulogo.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ["About", "Events", "Team", "Resources", "Contact"]

  return (
    <nav className="border-b border-amber-500/10 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <img src={CustomLogo2.src || "/placeholder.svg"} alt="CSGU Logo" className="w-35 h-14" />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-amber-400 transition-colors duration-300 group"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-amber-500/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-amber-500" /> : <Menu className="w-6 h-6 text-amber-500" />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-md border-t border-amber-500/10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-amber-400 hover:bg-amber-500/10 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}