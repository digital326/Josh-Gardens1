
import React from 'react';

const reviews = [
  {
    text: "Josh transformed our unruly hillside into a stunning multi-level sanctuary. His eye for detail and understanding of the North Shore climate is unparalleled.",
    author: "Eleanor Vance",
    location: "British Properties"
  },
  {
    text: "Professionalism at its finest. The team is discreet, efficient, and deeply knowledgeable about horticulture. Our garden has never looked better.",
    author: "Robert Sterling",
    location: "Edgemont Village"
  },
  {
    text: "The hardscaping work on our patio exceeded expectations. It feels like a natural extension of the forest surrounding us. Truly world-class.",
    author: "Clarissa Hayes",
    location: "Deep Cove"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-forest text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0, 50 0, 100 100" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col items-center mb-24">
          <span className="text-white/40 uppercase tracking-[0.5em] text-[10px] font-bold mb-6">Client Accolades</span>
          <h2 className="text-5xl md:text-7xl font-light serif italic text-center leading-tight">Shared Tranquility.</h2>
          <div className="w-12 h-[1px] bg-white/20 mt-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="text-5xl serif text-white/10 mb-8 transition-transform group-hover:scale-110 duration-700">“</div>
              <p className="text-xl leading-relaxed font-light mb-10 italic text-white/90">
                {review.text}
              </p>
              <div className="mt-auto flex flex-col items-center">
                <div className="w-6 h-[1px] bg-white/30 mb-6"></div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em]">{review.author}</h4>
                <p className="text-[9px] text-white/40 uppercase tracking-[0.3em] mt-2 italic">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-20 border-t border-white/5">
           <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale hover:opacity-70 transition-opacity duration-1000">
              <span className="text-sm md:text-lg serif font-light italic tracking-[0.2em] uppercase">Architectural Digest</span>
              <span className="text-sm md:text-lg serif font-light italic tracking-[0.2em] uppercase">Vancouver Home</span>
              <span className="text-sm md:text-lg serif font-light italic tracking-[0.2em] uppercase">North Shore Living</span>
              <span className="text-sm md:text-lg serif font-light italic tracking-[0.2em] uppercase">Gardens BC</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
