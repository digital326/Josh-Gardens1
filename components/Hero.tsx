
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full flex items-center overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-[kenburns_40s_ease_infinite]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1734079692079-aae7e24a7035?q=80&w=2070")' }}
      >
        <div className="absolute inset-0 bg-forest/40 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Aesthetic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-12 md:pt-20">
        <div className="max-w-5xl">
          <div className="overflow-hidden mb-4 sm:mb-6">
            <span className="inline-block text-white/80 uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[9px] sm:text-[10px] font-bold animate-[slide-up_1.2s_ease-out]">
              Masterfully Crafted in North Vancouver
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9.5rem] text-white font-light serif mb-6 sm:mb-10 leading-[0.9] tracking-tighter animate-[fade-in-up_1.5s_ease-out] whitespace-nowrap">
            Nature <span className="italic font-normal">Elevated.</span>
          </h1>
          
          <div className="w-12 sm:w-20 h-[1px] bg-white/40 mb-6 sm:mb-10 animate-[grow-right_2s_ease-out]"></div>

          <p className="text-white/90 text-base sm:text-lg md:text-xl font-light mb-8 sm:mb-14 max-w-lg leading-relaxed animate-[fade-in_2.5s_ease-out] delay-500">
            Bespoke outdoor environments for discerning homeowners in the British Properties and deep coves of the West Coast.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-12 animate-[fade-in_2s_ease-out] delay-1000">
            <a 
              href="#contact" 
              className="group relative overflow-hidden bg-white text-forest px-8 sm:px-12 py-4 sm:py-6 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-700 shadow-2xl w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Private Inquiry</span>
              <div className="absolute inset-0 bg-stone-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <a 
              href="#portfolio" 
              className="group flex items-center justify-center sm:justify-start space-x-5 text-white text-[9px] sm:text-[10px] uppercase tracking-[0.4em] font-bold transition-opacity hover:opacity-70 w-full sm:w-auto"
            >
              <span>View Portfolio</span>
              <div className="relative flex items-center">
                <span className="hidden sm:block w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-700"></span>
                <svg className="w-3 h-3 ml-2 -translate-x-1 group-hover:translate-x-0 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Coordinates */}
      <div className="absolute bottom-12 right-12 hidden lg:block opacity-60">
        <div className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold flex flex-col items-end">
          <span>49.3200° N</span>
          <span>123.0724° W</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 group cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView()}>
        <div className="w-[1px] h-12 sm:h-20 bg-gradient-to-b from-white/80 to-transparent group-hover:h-28 transition-all duration-700"></div>
        <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.4em] mt-4 sm:mt-6 font-bold animate-pulse whitespace-nowrap">Explore</span>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes kenburns {
          0% { transform: scale(1.1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1.1); }
        }
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes grow-right {
          from { width: 0; }
          to { width: 3rem; }
        }
        @media (min-width: 640px) {
          @keyframes grow-right {
            from { width: 0; }
            to { width: 5rem; }
          }
        }
      `}} />
    </section>
  );
};

export default Hero;
