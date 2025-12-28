
import React from 'react';

const services = [
  {
    title: 'Master Planning',
    description: 'Bespoke conceptualization and full site architecture for luxury estates.',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=800&auto=format&fit=crop',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
  },
  {
    title: 'Artisan Hardscape',
    description: 'Precision stonework, architectural walls, and custom terrace structures.',
    image: 'https://images.unsplash.com/photo-1560567527-3802e3b33361?q=80&w=800&auto=format&fit=crop',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Floral Curation',
    description: 'Expert horticultural management and seasonal rotation for high-value foliage.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    title: 'Water Architecture',
    description: 'Infinite-edge reflections, custom cascades, and tranquil koi environments.',
    image: 'https://images.unsplash.com/photo-1512148173402-e19ad9321207?q=80&w=800&auto=format&fit=crop',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-forest/60 uppercase tracking-[0.4em] text-[10px] font-bold block mb-6">Expertise & Disciplines</span>
            <h2 className="text-4xl md:text-6xl font-light serif text-forest leading-tight">Elevating Every <br /><span className="italic">Perspective.</span></h2>
          </div>
          <p className="text-gray-500 font-light max-w-sm md:text-right italic leading-relaxed">
            Our holistic approach combines structural engineering with biological poetry to create living masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-stone-light aspect-[4/5] overflow-hidden">
              {/* Background Image that fades in on hover */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              
              {/* Default State */}
              <div className="relative z-10 h-full p-10 flex flex-col justify-between group-hover:bg-forest/60 transition-colors duration-700">
                <div className="w-10 h-10 text-forest group-hover:text-white transition-colors duration-500">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={service.icon} />
                  </svg>
                </div>
                
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-2xl font-light serif text-forest group-hover:text-white mb-4 transition-colors duration-500">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 group-hover:text-white/80 transition-all duration-700">
                    {service.description}
                  </p>
                  <div className="w-0 h-[1px] bg-white group-hover:w-full transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 flex flex-col items-center">
            <div className="w-px h-16 bg-forest/20 mb-12"></div>
            <p className="text-gray-500 italic mb-10 max-w-lg text-center font-light">
              We specialize in multi-phase projects that evolve with your property over generations.
            </p>
            <a href="#contact" className="px-12 py-5 border border-forest/20 text-forest text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-forest hover:text-white transition-all duration-500">
                Consult With Josh
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
