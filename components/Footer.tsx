
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-light pt-32 pb-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-8 h-8 flex items-center justify-center text-forest">
                 <svg viewBox="0 0 100 100" className="w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
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
              <div className="text-forest">
                <h2 className="text-lg font-bold serif tracking-[0.2em] leading-none uppercase">JOSH JONES</h2>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed pr-12 italic font-light">
              Dedicated to the stewardship of North Vancouver's most distinguished residential landscapes.
            </p>
            <div className="mt-8 flex space-x-6 text-forest/40">
                <a href="#" className="hover:text-forest transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="hover:text-forest transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-forest mb-8">Navigation</h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-gray-500 text-xs tracking-widest uppercase hover:text-forest transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-500 text-xs tracking-widest uppercase hover:text-forest transition-colors">Philosophy</a></li>
              <li><a href="#services" className="text-gray-500 text-xs tracking-widest uppercase hover:text-forest transition-colors">Disciplines</a></li>
              <li><a href="#portfolio" className="text-gray-500 text-xs tracking-widest uppercase hover:text-forest transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-forest mb-8">Service Areas</h4>
            <ul className="space-y-5">
              <li className="text-gray-500 text-xs tracking-widest uppercase">British Properties</li>
              <li className="text-gray-500 text-xs tracking-widest uppercase">Deep Cove</li>
              <li className="text-gray-500 text-xs tracking-widest uppercase">Edgemont Village</li>
              <li className="text-gray-500 text-xs tracking-widest uppercase">Caulfeild</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-forest mb-8">Newsletter</h4>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-6 font-medium">Seasonal journals for the PNW.</p>
            <form className="flex border-b border-stone-300 pb-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="YOUR EMAIL" className="bg-transparent text-[10px] uppercase tracking-widest w-full focus:outline-none focus:placeholder-transparent" />
              <button className="text-forest text-[10px] uppercase tracking-[0.3em] font-bold pl-4">Join</button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} Josh Jones Gardening & Design Inc.
          </p>
          <div className="flex space-x-10 text-[9px] uppercase tracking-[0.4em] text-gray-400 font-medium">
            <a href="#" className="hover:text-forest transition-colors">Privacy</a>
            <a href="#" className="hover:text-forest transition-colors">Terms</a>
            <a href="#" className="hover:text-forest transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
