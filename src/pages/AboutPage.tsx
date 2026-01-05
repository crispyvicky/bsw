import React from 'react';
import { Lightbulb, Award, Users, Shield, MapPin, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFF] text-[#0F172A] antialiased">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="about-hero" className="relative h-[85vh] flex items-center justify-center py-24 text-center px-6 lg:px-8 overflow-hidden rounded-b-[5rem] mx-6 mt-6 shadow-3xl border-4 border-white">
          <div className="absolute inset-0 z-0">
            <img
              alt="Sophisticated modern interior"
              className="w-full h-full object-cover scale-100 transition-transform duration-[10s] hover:scale-110"
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="mb-10 inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-[0.4em] uppercase text-white shadow-2xl">
              Established 1996
            </div>
            <h1 className="font-display text-7xl md:text-9xl font-medium tracking-tight text-white leading-tight drop-shadow-2xl text-white">
              Badigar <br /> <span className="italic font-light">Space Works.</span>
            </h1>
            <p className="mt-10 max-w-2xl mx-auto text-2xl text-white/80 font-light leading-relaxed">
              Curating the world of <span className="font-medium text-white">Imaginary Design</span>. A legacy of Hyderabad's finest craftsmanship.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-32 lg:py-48 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
              <div className="relative h-[700px] group overflow-hidden rounded-[4rem] shadow-4xl border-[12px] border-[#F8FAFF]">
                <img
                  alt="Traditional and modern craft"
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                  src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>
              <div className="lg:pr-8">
                <div className="flex items-center gap-4 text-blue-600 font-bold tracking-[0.3em] text-xs uppercase mb-10">
                  <span className="w-12 h-[1px] bg-blue-600"></span>
                  The Visionary Journey
                </div>
                <h2 className="text-5xl lg:text-7xl font-display font-medium text-gray-900 tracking-tight leading-[1.1] mb-12">
                  Crafting History <br /> <span className="italic font-light">In Every Vision.</span>
                </h2>
                <div className="space-y-8 text-gray-500 text-xl leading-relaxed font-light mb-16">
                  <p>
                    Since 1996, Badigar Space Works has been the pioneer of <span className="font-medium text-gray-900">Imaginary Design</span> in Hyderabad. We don't just create interiors; we architect atmospheric legacies.
                  </p>
                  <p>
                    Our foundation in the heritage of Vishwakarma ensures that every curve, every texture, and every shadow is divine. From our elite studio in Mahankali Nagar, we bridge the gap between ancient wisdom and the futuristic aesthetic of tomorrow.
                  </p>
                  <div className="p-8 bg-[#F8FAFF] rounded-[3rem] border border-blue-50 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                    <p className="font-medium text-gray-900 italic text-2xl leading-relaxed group-hover:translate-x-2 transition-transform duration-500">
                      "We design for the soul that seeks transcendence."
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-blue-200">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-medium text-gray-900 tracking-tight leading-none mb-2">Proudly Hyderabad</h4>
                    <p className="text-gray-400 font-light text-lg">Mahankali Nagar • Gachibowli • Jubilee Hills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proprietor Section */}
        <section className="py-32 lg:py-48 px-6 lg:px-8 bg-[#F1F5F9] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -mr-64 -mt-64"></div>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 text-blue-600 font-bold tracking-[0.4em] text-[10px] uppercase mb-10">
                  <span className="w-12 h-[1px] bg-blue-600"></span>
                  The Visionary
                </div>
                <h2 className="text-6xl lg:text-8xl font-display font-medium text-gray-900 tracking-tight leading-tight mb-8">
                  Pavan. <br /> <span className="italic font-light text-blue-600">The Proprietor.</span>
                </h2>
                <div className="relative">
                  <div className="absolute -left-10 top-0 text-9xl text-blue-600/10 font-serif leading-none transition-transform duration-700 group-hover:scale-110">“</div>
                  <p className="text-3xl lg:text-4xl font-display italic font-light text-gray-700 leading-relaxed mb-12 relative z-10">
                    "I'm taking the highway because I wanna reach the highs fastly."
                  </p>
                </div>
                <p className="text-xl text-gray-500 font-light leading-relaxed mb-12 max-w-lg">
                  Driven by an unrelenting ambition to redefine Hyderabad's skyline. Pavan leads Badigar Space Works with a philosophy of speed, precision, and visionary transcendence. Under his leadership, we don't just design; we accelerate the future of living.
                </p>
                <div className="inline-block px-8 py-4 bg-white rounded-2xl shadow-xl border border-blue-50">
                  <div className="text-gray-900 font-bold tracking-widest text-xs uppercase">Chief Visionary Officer</div>
                  <div className="text-blue-600 text-sm font-medium mt-1">Founding Member since 1996</div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative group">
                <div className="relative z-10 overflow-hidden rounded-[5rem] shadow-4xl aspect-[4/5] border-[16px] border-white">
                  <img
                    alt="Pavan - Proprietor of Badigar Space Works"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[3s] ease-out"
                    src="/pavan.jpeg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center p-6 shadow-3xl text-white transform group-hover:rotate-12 transition-all duration-700 z-20">
                  <div className="border-2 border-white/20 w-full h-full rounded-full flex flex-col items-center justify-center text-center">
                    <Sparkles className="mb-2" size={24} />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Vision 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy Stats */}
        <section className="py-32 bg-blue-600 text-white relative z-10 mx-6 rounded-[5rem] shadow-4xl mb-32 border-4 border-white/10">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-center">
              <div>
                <div className="text-6xl md:text-8xl font-display font-medium mb-4 leading-none">28+</div>
                <div className="text-white/60 font-bold uppercase tracking-[0.3em] text-[10px]">Years of Vision</div>
              </div>
              <div>
                <div className="text-6xl md:text-8xl font-display font-medium mb-4 leading-none">1.2k</div>
                <div className="text-white/60 font-bold uppercase tracking-[0.3em] text-[10px]">Divine Projects</div>
              </div>
              <div>
                <div className="text-6xl md:text-8xl font-display font-medium mb-4 leading-none text-3xl md:text-5xl uppercase tracking-tighter">Hyd</div>
                <div className="text-white/60 font-bold uppercase tracking-[0.3em] text-[10px]">Base Location</div>
              </div>
              <div>
                <div className="text-6xl md:text-8xl font-display font-medium mb-4 leading-none text-blue-300">★</div>
                <div className="text-white/60 font-bold uppercase tracking-[0.3em] text-[10px]">Visionary Precision</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-32 lg:py-48 px-6 lg:px-8 bg-[#F8FAFF]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center">
              <div className="mb-8 inline-flex items-center gap-3 px-6 py-2 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.4em] uppercase rounded-full border border-blue-100">
                <Sparkles size={14} />
                Our Core Pillars
              </div>
              <h2 className="text-6xl lg:text-8xl font-display font-medium text-gray-900 tracking-tight leading-tight">Divine <span className="italic font-light">Philosophy.</span></h2>
              <p className="mt-10 max-w-2xl mx-auto text-gray-500 text-2xl font-light">
                Guided by the heritage of Vishwakarma, we navigate the future of premium spaces.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { icon: Lightbulb, title: "Imaginary Design", desc: "Pushing boundaries with visionary conceptual brilliance." },
                { icon: Award, title: "Premium Integrity", desc: "Sourcing only the world's most elite sustainable materials." },
                { icon: Users, title: "Patron Experience", desc: "Honoring our clients' journey as a sacred collaboration." },
                { icon: Shield, title: "Heritage Trust", desc: "A 28-year reputation of divine honesty in Hyderabad." }
              ].map((value, idx) => (
                <div key={idx} className="bg-white p-12 rounded-[4rem] border border-blue-50 shadow-xl hover:shadow-4xl transition-all duration-700 group hover:-translate-y-4">
                  <div className="w-20 h-20 bg-blue-50 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                    <value.icon size={40} strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-display font-medium text-gray-900 mb-6 tracking-tight">{value.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-light">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
