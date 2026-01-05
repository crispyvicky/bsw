import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Atmospheric\nResidences',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Residential'
  },
  {
    title: 'Visionary\nInstitutions',
    image: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Commercial'
  },
  {
    title: 'Elite\nExperiences',
    image: 'https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Retail'
  },
  {
    title: 'Sacred\nLegacies',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Heritage'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 lg:py-64 bg-white/50 backdrop-blur-sm px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-32 gap-16">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 text-blue-600 font-bold tracking-[0.4em] text-[10px] uppercase mb-8">
              <Sparkles size={16} />
              Divine Services
            </div>
            <h2 className="text-6xl lg:text-9xl font-display font-medium text-gray-900 tracking-tight leading-[1.1]">
              Architecting <br /> <span className="italic font-light">Imaginary</span> Design.
            </h2>
          </div>
          <div className="lg:w-1/3">
            <p className="text-2xl leading-relaxed text-gray-500 font-light mb-12">
              Transcending the physical realm through the sacred heritage of Vishwakarma and visionary innovation.
            </p>
            <Link to="/services" className="text-gray-900 font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-4 group">
              Explore The Vision
              <span className="w-16 h-[1px] bg-blue-100 group-hover:w-24 group-hover:bg-blue-600 transition-all duration-700"></span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-[4rem] shadow-4xl hover:shadow-2xl transition-all duration-1000 bg-gray-900">
              <div className="absolute inset-0 z-0">
                <img
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[3s] ease-out opacity-80 group-hover:opacity-100"
                  src={service.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-1000"></div>
              </div>

              <div className="relative z-10 h-[600px] flex flex-col justify-end p-12">
                <div className="mb-6 text-blue-400 font-bold tracking-[0.3em] text-[10px] uppercase">
                  {service.tag}
                </div>
                <h3 className="text-white font-display font-medium text-4xl whitespace-pre-line leading-tight mb-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  {service.title}
                </h3>
                <Link to="/services" className="inline-flex items-center justify-center w-16 h-16 rounded-[1.5rem] bg-white text-gray-900 transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 hover:bg-blue-600 hover:text-white shadow-2xl">
                  <ArrowRight size={28} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
