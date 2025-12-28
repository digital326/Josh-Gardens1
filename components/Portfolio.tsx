import React, { useState, useEffect } from 'react';

interface Project {
  title: string;
  category: string;
  image: string;
  description?: string;
}

const projects: Project[] = [
  {
    title: 'Edgemont Modern Retreat',
    category: 'Full Transformation',
    image: 'https://www.edmonton.ca/sites/default/files/public-files/documents/FYIB_General_Yard_1200x628.jpg',
    description: 'A complete site redesign featuring structural terracing and native PNW plantings.'
  },
  {
    title: 'Deep Cove Sanctuary',
    category: 'Waterfront Garden',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1200&auto=format&fit=crop',
    description: 'Harmonizing coastal breezes with salt-tolerant flora and custom stone pathways.'
  },
  {
    title: 'British Properties Estate',
    category: 'Classical Landscaping',
    image: 'https://www.westcoasttraveller.com/wp-content/uploads/2020/08/21785852_web1_copy_200608-WCT-IslandGardenTour_1-800x533.jpg',
    description: 'Formal garden architecture meets the wild majesty of the North Shore.'
  },
  {
    title: 'Capilano Highland Garden',
    category: 'Rock & Stone Design',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1200&auto=format&fit=crop',
    description: 'Utilizing local granite to create organic movement throughout the property.'
  },
  {
    title: 'Lonsdale Urban Oasis',
    category: 'Rooftop & Minimalist',
    image: 'https://www.studiomunge.com/wp-content/uploads/2021/06/Forest-Hill-luxury-residence-architecture-interior-design-alessandro-munge-studio-toronto-best-5.jpg',
    description: 'High-density luxury gardening for sophisticated urban living.'
  },
  {
    title: 'Dundarave Floral Master',
    category: 'Seasonal Colour',
    image: 'https://img.jamesedition.com/listing_images/2025/12/23/13/40/32/31b4ec00-9b18-4ef4-b533-319a6feb9095/je/760x470xc.jpg',
    description: 'A year-round rotation of blooms curated for continuous seasonal interest.'
  }
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 bg-stone-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <span className="text-forest/60 uppercase tracking-[0.3em] text-[10px] font-bold">Selected Works</span>
            <h2 className="text-4xl md:text-6xl font-light serif text-forest mt-4">A Legacy of <span className="italic">Excellence.</span></h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs md:text-right italic font-light leading-relaxed">
            A curation of our most prestigious transformations across the North Shore and British Properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 backdrop-blur-[1px]">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white/80 uppercase tracking-[0.2em] text-[9px] mb-1 block">{project.category}</span>
                  <h3 className="text-white text-2xl serif">{project.title}</h3>
                  <div className="w-8 h-[1px] bg-white/50 mt-4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 text-forest/50 hover:text-forest transition-colors uppercase tracking-[0.2em] text-[10px] font-bold">
                <span>Discover our process on Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10 bg-forest/95 backdrop-blur-md transition-all duration-500 animate-in fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
            onClick={() => setSelectedProject(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div 
            className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 bg-white shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lg:col-span-2 aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
              <span className="text-forest/60 uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">{selectedProject.category}</span>
              <h3 className="text-3xl md:text-4xl serif text-forest mb-6 leading-tight">{selectedProject.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                {selectedProject.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-5 h-[1px] bg-forest/30"></div>
                  <span className="text-[10px] uppercase tracking-widest text-forest/70 font-bold italic">Curated by Josh Jones</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="mt-12 text-forest text-[10px] uppercase tracking-[0.3em] font-bold border-b border-forest/20 pb-1 self-start hover:border-forest transition-colors"
              >
                Close Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;