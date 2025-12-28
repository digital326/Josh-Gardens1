import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-stone-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative z-10 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] group">
              <img 
                src="https://images.unsplash.com/photo-1649669976302-a032eb8a8144?q=80&w=735&auto=format" 
                alt="Sophisticated manicured lawn and garden" 
                className="w-full h-[600px] object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[3s] ease-out"
              />
              <div className="absolute inset-0 border-[20px] border-white/10 group-hover:border-white/0 transition-all duration-1000"></div>
            </div>
            
            {/* Floating Detail Image - High-end stone and greenery textures */}
            <div className="absolute -bottom-16 -right-16 w-64 h-80 hidden md:block shadow-2xl z-20 overflow-hidden border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop" 
                alt="Horticultural craftsmanship" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Artistic accents */}
            <div className="absolute -top-12 -left-12 w-48 h-48 border-l border-t border-forest/10 -z-10"></div>
            <div className="absolute bottom-24 -left-24 text-[12rem] font-serif text-forest/[0.03] select-none pointer-events-none italic">Jones</div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 lg:pl-12 space-y-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-8 h-[1px] bg-forest/40"></div>
                <span className="text-forest/60 uppercase tracking-[0.4em] text-[10px] font-bold">The Heritage</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light serif text-forest leading-[1.1] tracking-tight">
                Sculpting the <br /> <span className="italic">Wild Shore.</span>
              </h2>
            </div>
            
            <div className="space-y-6 max-w-xl">
              <p className="text-gray-600 leading-relaxed text-xl font-light italic">
                "A garden is a dialogue between the architecture of the home and the soul of the land."
              </p>
              <p className="text-gray-500 leading-relaxed font-light">
                For over two decades, Josh Jones has been the silent architect behind some of the North Shore's most breathtaking private landscapes. Our approach is purely bespoke—eschewing trends for timeless craftsmanship that respects the unique microclimates of British Columbia.
              </p>
              <p className="text-gray-500 leading-relaxed font-light">
                From structural hardscaping that defies the rugged terrain to delicate horticultural curation, every project is a masterclass in balance, tranquility, and prestige.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <span className="block text-4xl font-light serif text-forest">20+</span>
                <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Years of Mastery</span>
              </div>
              <div className="space-y-2">
                <span className="block text-4xl font-light serif text-forest">150+</span>
                <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Estate Projects</span>
              </div>
              <div className="space-y-2 hidden md:block">
                <span className="block text-4xl font-light serif text-forest">08</span>
                <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Design Awards</span>
              </div>
            </div>

            <div className="pt-8">
              <a href="#contact" className="group inline-flex items-center space-x-6 text-forest text-[10px] uppercase tracking-[0.4em] font-bold">
                <span>The Consultation Process</span>
                <div className="w-12 h-12 rounded-full border border-forest/20 flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-all duration-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;