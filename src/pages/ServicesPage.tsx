import React from 'react';
import { ArrowRight, CheckCircle2, Star, Zap, Layers, PenTool, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const servicesList = [
    {
        title: "Luxury Residential Design",
        desc: "Creating atmospheric legacies for Hyderabad's most discerning families. We blend ancient wisdom with contemporary luxury.",
        features: ["Bespoke Furniture", "Atmospheric Lighting", "Sacred Geometry"],
        icon: Star,
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Visionary Business Spaces",
        desc: "Innovating workspaces that inspire productivity and reflect corporate identity through the lens of Imaginary Design.",
        features: ["Ergonomic Innovation", "Acoustic Excellence", "Smart Integration"],
        icon: Zap,
        image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Elite Retail Environments",
        desc: "Experiential retail design that transforms shopping into a sensory journey, elevating your brand to a global standard.",
        features: ["Sensory Planning", "Global Aesthetics", "Strategic Flow"],
        icon: Layers,
        image: "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Divine Heritage Restoration",
        desc: "Preserving architectural souls with the precision of Vishwakarma techniques, modernized for a new generation.",
        features: ["Artisan Preservation", "Historical Research", "Cultural Continuity"],
        icon: PenTool,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

export default function ServicesPage() {
    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-[#F8FAFF] text-[#0F172A] antialiased">
            <Navbar />
            <main className="pt-32 pb-48">
                <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-32">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="mb-8 inline-flex items-center gap-3 px-6 py-2 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.4em] uppercase rounded-full border border-blue-100 shadow-sm">
                            <Sparkles size={14} />
                            Our Divine Craft
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-medium mb-10 tracking-tight leading-tight text-gray-900">
                            Services that <br /> <span className="italic font-light text-blue-600">Inspire.</span>
                        </h1>
                        <p className="text-2xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
                            Step into the world of <span className="font-medium text-gray-900">Imaginary Design</span>, where every space is a curated masterpiece of heritage and innovation.
                        </p>
                    </div>
                </section>

                <section className="px-6 lg:px-8 max-w-7xl mx-auto space-y-48">
                    {servicesList.map((service, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}>
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-blue-50 group-hover:bg-blue-100/50 rounded-[4rem] transition-colors -z-10"></div>
                                <div className="relative overflow-hidden rounded-[3.5rem] shadow-3xl">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full aspect-[4/3] object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center gap-4 text-blue-600 mb-8 font-bold tracking-[0.3em] uppercase text-xs">
                                    <span className="w-12 h-[1px] bg-blue-600"></span>
                                    Evolution 0{idx + 1}
                                </div>
                                <h2 className="text-5xl md:text-6xl font-display font-medium mb-10 tracking-tight leading-[1.1] text-gray-900">
                                    {service.title}
                                </h2>
                                <p className="text-xl text-gray-500 mb-12 leading-relaxed font-light">
                                    {service.desc}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                                    {service.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-4 text-gray-600 font-light text-lg">
                                            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-50">
                                                <CheckCircle2 size={16} className="text-blue-600" />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-6 px-12 py-6 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-500 shadow-2xl group"
                                >
                                    Experience the Vision
                                    <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
}
