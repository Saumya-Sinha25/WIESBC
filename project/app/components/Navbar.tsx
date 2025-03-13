import React, { useState, memo } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import CustomLogo2 from "../public/csgulogo.png"
import Link from "next/link"

const Navbar = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ["About", "Events", "Team", "Resources", "Contact"]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="border-b border-[#752F8A]/10 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="#hero" passHref>
              <Image 
                src={CustomLogo2.src} 
                alt="CSGU Logo" 
                width={140} 
                height={56} 
                priority 
                className="w-35 h-14 cursor-pointer"
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-[#752F8A] transition-colors duration-300 group"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#752F8A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#752F8A]/10 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-[#752F8A]" /> : <Menu className="w-6 h-6 text-[#752F8A]" />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-md border-t border-[#752F8A]/10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#752F8A] hover:bg-[#752F8A]/10 transition-all duration-300"
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
});

Navbar.displayName = 'Navbar';

export default Navbar;