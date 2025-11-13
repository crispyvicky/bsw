import { Menu, X, Home } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <header className="py-6 flex justify-center">
      <nav className="fixed top-6 z-50 bg-black/30 backdrop-blur-md text-white rounded-full border border-white/10 shadow-lg w-full max-w-5xl mx-6">
        <div className="flex items-center justify-between px-6 py-2">
          <Link className="flex items-center gap-2 text-xl font-display font-bold text-white tracking-wider" to="/">
            <Home size={24} />
            INTENSIFY
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            <Link className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" to="/">
              Home
            </Link>
            {isHomePage ? (
              <a className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" href="#about">
                About
              </a>
            ) : (
              <Link className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" to="/about">
                About
              </Link>
            )}
            <a className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" href={isHomePage ? "#services" : "/#services"}>
              Services
            </a>
            <Link className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" to="/portfolio">
              Portfolio
            </Link>
            <a className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300" href={isHomePage ? "#contact" : "/#contact"}>
              Contact
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <a className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300" href={isHomePage ? "#contact" : "/#contact"}>
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
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>
      )}

      <div
        className={`fixed right-0 top-0 h-screen w-screen bg-black/40 backdrop-blur-md z-50 md:hidden transform transition-all duration-500 ease-out border-l border-white/10 ${
          mobileMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="flex items-center gap-2 text-xl font-display font-bold text-white tracking-wider">
              <Home size={24} />
              INTENSIFY
            </span>
            <button
              className="text-white hover:bg-white/10 p-2 rounded-full transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-6 space-y-4">
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/"
              className="group relative overflow-hidden bg-gradient-to-r from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 px-6 py-4 rounded-3xl transition-all duration-300 text-lg font-semibold text-white"
            >
              <span className="relative z-10">Home</span>
            </Link>

            {isHomePage ? (
              <button
                onClick={() => scrollToSection('about')}
                className="group relative overflow-hidden bg-gradient-to-r from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 px-6 py-4 rounded-3xl transition-all duration-300 text-lg font-semibold text-white text-left"
              >
                <span className="relative z-10">About</span>
              </button>
            ) : (
              <Link
                onClick={() => setMobileMenuOpen(false)}
                to="/about"
                className="group relative overflow-hidden bg-gradient-to-r from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 px-6 py-4 rounded-3xl transition-all duration-300 text-lg font-semibold text-white"
              >
                <span className="relative z-10">About</span>
              </Link>
            )}

            <button
              onClick={() => scrollToSection('services')}
              className="group relative overflow-hidden bg-gradient-to-r from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 px-6 py-4 rounded-3xl transition-all duration-300 text-lg font-semibold text-white text-left"
            >
              <span className="relative z-10">Services</span>
            </button>

            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/portfolio"
              className="group relative overflow-hidden bg-gradient-to-r from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 px-6 py-4 rounded-3xl transition-all duration-300 text-lg font-semibold text-white"
            >
              <span className="relative z-10">Portfolio</span>
            </Link>

            <button
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden bg-gradient-to-r from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 px-6 py-4 rounded-3xl transition-all duration-300 text-lg font-semibold text-white text-left"
            >
              <span className="relative z-10">Contact</span>
            </button>
          </div>

          <div className="p-6 border-t border-white/10">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-black px-6 py-4 rounded-3xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a call
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
