import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-6 flex justify-center">
      <nav className="fixed top-6 z-50 bg-white/70 backdrop-blur-md text-gray-800 rounded-full border border-black/5 shadow-sm w-full max-w-5xl mx-6">
        <div className="flex items-center justify-between px-6 py-2">
          <Link className="flex items-center gap-3 text-xl font-display font-bold text-gray-900 tracking-tight" to="/">
            <img src="/logo.png" alt="BSW Logo" className="w-16 h-16 object-contain" />
            <span className="hidden sm:inline">Badigar Space Works</span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            <Link className="px-4 py-2 rounded-full hover:bg-black/5 transition-colors duration-300 font-medium text-sm" to="/">
              Home
            </Link>
            <Link className="px-4 py-2 rounded-full hover:bg-black/5 transition-colors duration-300 font-medium text-sm" to="/about">
              About
            </Link>
            <Link className="px-4 py-2 rounded-full hover:bg-black/5 transition-colors duration-300 font-medium text-sm" to="/services">
              Services
            </Link>
            <Link className="px-4 py-2 rounded-full hover:bg-black/5 transition-colors duration-300 font-medium text-sm" to="/portfolio">
              Portfolio
            </Link>
            <Link className="px-4 py-2 rounded-full hover:bg-black/5 transition-colors duration-300 font-medium text-sm" to="/contact">
              Contact
            </Link>
          </div>
          <div className="hidden md:flex items-center ml-4">
            <Link className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-200" to="/contact">
              Book a call
            </Link>
          </div>
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        </div>
      )}

      <div
        className={`fixed right-0 top-0 h-screen w-screen bg-white/95 backdrop-blur-xl z-50 md:hidden transform transition-all duration-500 ease-out border-l border-gray-100 ${mobileMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <span className="flex items-center gap-3 text-xl font-display font-bold text-gray-900 tracking-tight">
              <img src="/logo.png" alt="BSW Logo" className="w-8 h-8 object-contain" />
              Badigar Space
            </span>
            <button
              className="text-gray-800 hover:bg-gray-100 p-2 rounded-full transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-6 space-y-3">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                onClick={() => setMobileMenuOpen(false)}
                to={item.path}
                className="group relative overflow-hidden bg-gray-50 hover:bg-gray-100 px-6 py-4 rounded-2xl transition-all duration-300 text-lg font-semibold text-gray-900"
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="p-6 border-t border-gray-100">
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/contact"
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 shadow-md hover:shadow-lg shadow-blue-200 block text-center"
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
