
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-forest/60 uppercase tracking-widest text-xs font-bold">Inquiry</span>
            <h2 className="text-4xl md:text-5xl font-light serif text-forest mt-4 mb-8">Let's Cultivate <br /> Something Beautiful.</h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Every garden begins with a conversation. Whether you're looking for a complete redesign or expert seasonal care, we'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 text-forest mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400">Location</h4>
                  <p className="text-forest font-medium">North Vancouver, BC</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 text-forest mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400">Email</h4>
                  <p className="text-forest font-medium">hello@joshjonesgardening.ca</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 text-forest mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400">Phone</h4>
                  <p className="text-forest font-medium">604.555.0123</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-light p-8 md:p-12 shadow-inner border border-stone-200">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">First Name</label>
                  <input type="text" className="w-full bg-white border border-stone-300 p-4 text-sm focus:outline-none focus:border-forest transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white border border-stone-300 p-4 text-sm focus:outline-none focus:border-forest transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Email Address</label>
                <input type="email" className="w-full bg-white border border-stone-300 p-4 text-sm focus:outline-none focus:border-forest transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Service of Interest</label>
                <select className="w-full bg-white border border-stone-300 p-4 text-sm focus:outline-none focus:border-forest transition-colors appearance-none">
                  <option>Landscape Design</option>
                  <option>Hardscaping</option>
                  <option>Horticultural Care</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">How can we help?</label>
                <textarea rows={4} className="w-full bg-white border border-stone-300 p-4 text-sm focus:outline-none focus:border-forest transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-forest text-white py-4 text-sm uppercase tracking-widest font-bold hover:bg-forest/90 transition-all shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
