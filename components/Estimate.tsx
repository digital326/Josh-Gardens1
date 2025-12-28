
import React, { useState, useMemo } from 'react';

const Estimate: React.FC = () => {
  const [size, setSize] = useState(2500);
  const [tier, setTier] = useState<'refresh' | 'build' | 'estate'>('build');
  const [terrain, setTerrain] = useState<'level' | 'sloped' | 'complex'>('level');

  const tiers = {
    refresh: { label: 'Seasonal Refresh', base: 5, desc: 'Restoring existing beds and minor horticultural updates.' },
    build: { label: 'Design & Build', base: 25, desc: 'Complete overhaul, structural planting, and custom hardscaping.' },
    estate: { label: 'Estate Master Plan', base: 65, desc: 'Full architectural planning, water features, and imported stone.' }
  };

  const terrains = {
    level: { label: 'Level Lot', multiplier: 1 },
    sloped: { label: 'Terraced/Sloped', multiplier: 1.35 },
    complex: { label: 'Rugged/Mountainous', multiplier: 1.6 }
  };

  const calculation = useMemo(() => {
    const basePrice = size * tiers[tier].base;
    const finalPrice = basePrice * terrains[terrain].multiplier;
    const min = Math.round(finalPrice * 0.9);
    const max = Math.round(finalPrice * 1.15);
    
    return {
      min: min.toLocaleString(),
      max: max.toLocaleString()
    };
  }, [size, tier, terrain]);

  return (
    <section id="estimate" className="py-32 bg-forest text-white relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div className="space-y-12">
            <div>
              <span className="text-white/40 uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Investment Concierge</span>
              <h2 className="text-4xl md:text-6xl font-light serif leading-tight">Plan Your <br /><span className="italic text-white/80">Sanctuary.</span></h2>
            </div>

            <div className="space-y-10">
              {/* Size Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">Property Scale (SQ FT)</label>
                  <span className="serif text-2xl">{size.toLocaleString()} <span className="text-sm opacity-50">ft²</span></span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="15000" 
                  step="500" 
                  value={size} 
                  onChange={(e) => setSize(parseInt(e.target.value))}
                  className="w-full h-[2px] bg-white/20 appearance-none cursor-pointer accent-white"
                />
              </div>

              {/* Service Tier Buttons */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">Design Intensity</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(Object.keys(tiers) as Array<keyof typeof tiers>).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTier(t)}
                      className={`px-4 py-4 text-[9px] uppercase tracking-[0.2em] font-bold border transition-all duration-500 ${
                        tier === t ? 'bg-white text-forest border-white' : 'border-white/20 hover:border-white/50'
                      }`}
                    >
                      {tiers[t].label}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-white/40 italic font-light">{tiers[tier].desc}</p>
              </div>

              {/* Terrain Selection */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">Terrain Complexity</label>
                <div className="flex flex-wrap gap-4">
                  {(Object.keys(terrains) as Array<keyof typeof terrains>).map((tr) => (
                    <button
                      key={tr}
                      onClick={() => setTerrain(tr)}
                      className={`flex items-center space-x-3 group`}
                    >
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                        terrain === tr ? 'bg-white border-white' : 'border-white/30 group-hover:border-white'
                      }`}>
                        {terrain === tr && <div className="w-1.5 h-1.5 rounded-full bg-forest"></div>}
                      </div>
                      <span className={`text-[10px] uppercase tracking-widest font-bold transition-opacity ${terrain === tr ? 'opacity-100' : 'opacity-40'}`}>
                        {terrains[tr].label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Visual Frame */}
            <div className="absolute -inset-4 border border-white/5 pointer-events-none rounded-sm"></div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-16 text-center space-y-10 relative">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold block">Estimated Range</span>
                <div className="flex flex-col items-center">
                   <span className="text-4xl md:text-6xl lg:text-7xl serif font-light transition-all duration-500">
                    ${calculation.min}
                   </span>
                   <div className="h-10 w-[1px] bg-white/20 my-4"></div>
                   <span className="text-4xl md:text-6xl lg:text-7xl serif font-light opacity-60 transition-all duration-500">
                    ${calculation.max}
                   </span>
                </div>
              </div>

              <div className="pt-8 space-y-8">
                <p className="text-white/50 text-xs font-light leading-relaxed italic max-w-xs mx-auto">
                  *Figures provided are professional estimates for high-quality craftsmanship in the North Shore region. Final quotes require a physical site assessment.
                </p>
                <a 
                  href="#contact" 
                  className="inline-block bg-white text-forest px-12 py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-stone-100 transition-all shadow-2xl"
                >
                  Confirm Your Estimate
                </a>
              </div>
            </div>

            {/* Floating leaf or artistic element could go here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimate;
