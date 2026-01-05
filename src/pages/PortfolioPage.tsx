import React from 'react';
import { Star, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projects = [
  {
    id: 1,
    category: 'Residential',
    title: 'The Nizam Vision',
    description: 'A masterpiece of contemporary luxury infused with traditional Hyderabadi elements. We applied the principles of Imaginary Design to create a space that feels both historic and futuristic.',
    testimonial: "Badigar Space Works didn't just design a house; they preserved our legacy through a visionary lens.",
    client: 'The Reddy Foundation',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Modern minimalist living room',
  },
  {
    id: 2,
    category: 'Commercial',
    title: 'Cyber City Hub',
    description: 'Designed for the future of work. Our team created a high-energy environment using biophilic design and modular spaces to foster collaboration in the heart of HITEC City.',
    testimonial: 'The most stunning office in Hyderabad. Their premium aesthetic has redefined our corporate culture.',
    client: 'CEO, TechOrbit India',
    image: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Sleek corporate office lobby',
  },
  {
    id: 3,
    category: 'Hospitality',
    title: 'Royal Deccan Suite',
    description: 'A blend of classic luxury and contemporary comfort. Rich textures, bespoke furniture, and curated art pieces create an atmosphere of sophisticated elegance for elite travelers.',
    testimonial: 'Exquisite attention to detail. Badigar Space Works is truly the world-class.',
    client: 'Global Hospitality Group',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Luxury hotel suite',
  },
];

export default function PortfolioPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFF] text-[#0F172A] antialiased">
      <Navbar />
      <main>
        <section
          className="relative h-[80vh] flex items-center justify-center overflow-hidden rounded-[4rem] mt-6 mb-32 mx-6 shadow-3xl border-4 border-white"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1920"
              className="w-full h-full object-cover scale-100 transition-transform duration-[10s] hover:scale-110"
              alt="Background"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
            <div className="flex justify-center gap-2 mb-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-blue-400 fill-blue-400" size={16} />
              ))}
            </div>
            <h1 className="font-display text-7xl md:text-9xl font-medium tracking-tight text-white leading-none mb-10">
              The <span className="italic font-light">Work.</span>
            </h1>
            <p className="text-white/80 text-2xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
              Curating visionary environments since 1996. <br />
              Witness the art of <span className="font-medium text-white">Imaginary Design</span>.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto mb-48">
          <div className="grid grid-cols-1 gap-48 lg:gap-64">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center"
              >
                <div className={index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}>
                  <div className="flex items-center gap-4 text-blue-600 font-bold tracking-[0.3em] text-xs uppercase mb-8">
                    <Sparkles size={16} />
                    {project.category}
                  </div>
                  <h2 className="font-display text-5xl lg:text-8xl font-medium text-gray-900 tracking-tight leading-[1.1] mb-12">
                    {project.title}
                  </h2>
                  <p className="text-xl text-gray-400 font-light leading-relaxed mb-16">
                    {project.description}
                  </p>
                  <div className="p-12 bg-white rounded-[3.5rem] border border-blue-50 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                    <p className="text-gray-900 text-xl font-light italic leading-relaxed mb-10 group-hover:translate-x-2 transition-transform duration-500">"{project.testimonial}"</p>
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-xl">
                        {project.client.charAt(0)}
                      </div>
                      <cite className="block text-gray-400 font-bold not-italic text-xs tracking-[0.2em] uppercase">
                        {project.client}
                      </cite>
                    </div>
                  </div>
                </div>
                <div className={`relative group ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}`}>
                  <div className="relative overflow-hidden rounded-[4rem] shadow-4xl aspect-[4/5] border-[12px] border-white">
                    <img
                      alt={project.imageAlt}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-out"
                      src={project.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600 rounded-full flex items-center justify-center p-4 shadow-3xl text-white transform group-hover:rotate-12 transition-all duration-700">
                    <div className="border-2 border-white/20 w-full h-full rounded-full flex flex-col items-center justify-center text-center">
                      <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">Award</span>
                      <span className="font-display italic text-xl">Winner</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
