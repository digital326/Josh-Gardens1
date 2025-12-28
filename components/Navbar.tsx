
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className={`flex items-center space-x-4 transition-colors duration-700 ${isScrolled ? 'text-forest' : 'text-white'}`}>
            <div className="w-10 h-10 flex items-center justify-center">
               <svg viewBox="0 0 100 100" className="w-full h-full transform transition-transform duration-700 hover:rotate-12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M50 10 C27.9 10, 10 27.9, 10 50 C10 72.1, 27.9 90, 50 90 C72.1 90, 90 72.1, 90 50 C90 27.9, 72.1 10, 50 10 Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M50 32 C40 32, 32 40, 32 50 C32 61, 40 70, 50 74 C50 60, 50 46, 50 32 Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50 32 C60 32, 68 40, 68 50 C68 61, 60 70, 50 74 C50 60, 50 46, 50 32 Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50 32 L50 74"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M38 78 C44 76, 56 76, 62 78"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
               </svg>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold serif tracking-widest leading-none">JOSH JONES</h1>
              <p className="text-[9px] uppercase tracking-[0.4em] font-medium opacity-70">GARDENING & DESIGN</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 hover:opacity-100 relative group ${
                  isScrolled ? 'text-forest opacity-70' : 'text-white opacity-80'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-forest' : 'bg-white'}`}></span>
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-forest' : 'text-white'} p-2 focus:outline-none transition-transform active:scale-95`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-x-0 top-0 h-screen bg-white transition-transform duration-700 ease-in-out z-40 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-forest text-2xl font-light serif uppercase tracking-[0.2em] hover:italic transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8 flex space-x-6 opacity-40">
            <span className="text-[10px] uppercase tracking-widest font-bold">Instagram</span>
            <span className="text-[10px] uppercase tracking-widest font-bold">LinkedIn</span>
          </div>
        </div>
        {/* Close Button Inside Menu */}
        <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-forest p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
