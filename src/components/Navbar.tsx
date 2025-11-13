import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-6 flex justify-center">
      <nav className="fixed top-6 z-50 bg-black/30 backdrop-blur-md text-white rounded-full border border-white/10 shadow-lg w-full max-w-5xl mx-6">
        <div className="flex items-center justify-between px-6 py-2">
          <a className="text-xl font-display font-bold text-white tracking-wider" href="#">
            INTENSIFY
          </a>
          <div className="hidden md:flex items-center space-x-2">
            <a className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" href="#home">
              Home
            </a>
            <a className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" href="#about">
              About
            </a>
            <a className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" href="#services">
              Services
            </a>
            <a className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" href="#projects">
              Projects
            </a>
            <a className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" href="#contact">
              Contact
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <a className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300" href="#contact">
              Book a call
            </a>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden px-6 py-4 border-t border-white/10">
            <div className="flex flex-col space-y-2">
              <a className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" href="#home">
                Home
              </a>
              <a className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" href="#about">
                About
              </a>
              <a className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" href="#services">
                Services
              </a>
              <a className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" href="#projects">
                Projects
              </a>
              <a className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" href="#contact">
                Contact
              </a>
              <a className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 text-center" href="#contact">
                Book a call
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
