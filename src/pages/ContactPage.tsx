import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-[#F8FAFF] text-[#0F172A] antialiased">
            <Navbar />
            <main className="pt-32">
                <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-32">
                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                        <div>
                            <div className="mb-10 inline-flex items-center gap-3 px-6 py-2 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.4em] uppercase rounded-full border border-blue-100">
                                <Sparkles size={14} />
                                Start Your Vision
                            </div>
                            <h1 className="text-6xl md:text-8xl font-display font-medium mb-10 tracking-tight leading-tight text-gray-900">
                                Let's Craft Your <br /> <span className="italic font-light text-blue-600">Legacy.</span>
                            </h1>
                            <p className="text-2xl text-gray-500 font-light mb-16 leading-relaxed max-w-xl">
                                Whether it's a private estate or a commercial landmark, we're ready to bring the <span className="font-medium text-gray-900">Imaginary Design</span> touch to your vision.
                            </p>

                            <div className="space-y-12">
                                <div className="flex items-center gap-8 group">
                                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-blue-600 shadow-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6 hover:shadow-4xl">
                                        <Mail size={32} strokeWidth={1} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2">Connect via Email</div>
                                        <div className="text-2xl font-display font-medium tracking-tight">hello@badigar.space</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8 group">
                                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-blue-600 shadow-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 hover:shadow-4xl">
                                        <Phone size={32} strokeWidth={1} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2">Speak with Us</div>
                                        <div className="text-2xl font-display font-medium tracking-tight">+91 99999 88888</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8 group">
                                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-blue-600 shadow-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6 hover:shadow-4xl">
                                        <MapPin size={32} strokeWidth={1} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2">Our Studio</div>
                                        <div className="text-2xl font-display font-medium tracking-tight">Mahankali Nagar, Hyderabad</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-20 pt-16 border-t border-gray-100">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-8">The Social Vision</div>
                                <div className="flex gap-6">
                                    {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                                        <a key={idx} href="#" className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:shadow-4xl transition-all duration-500 border border-gray-50 group">
                                            <Icon size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-12 md:p-20 rounded-[4.5rem] shadow-4xl border border-blue-50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -mr-16 -mt-16 opacity-50"></div>
                            <form className="space-y-12 relative z-10">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] ml-2">Your Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-300 text-lg font-light"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] ml-2">Email Identity</label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-300 text-lg font-light"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] ml-2">Vision Type</label>
                                    <select className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl focus:ring-4 focus:ring-blue-100 outline-none appearance-none transition-all text-lg font-light text-gray-500">
                                        <option>Residential Sanctuary</option>
                                        <option>Visionary Workspace</option>
                                        <option>Elite Retail</option>
                                        <option>Sacred Restoration</option>
                                    </select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] ml-2">The Mission</label>
                                    <textarea
                                        placeholder="Describe your visionary space..."
                                        className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl focus:ring-4 focus:ring-blue-100 outline-none min-h-[200px] resize-none transition-all placeholder:text-gray-300 text-lg font-light"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-6 bg-blue-600 text-white rounded-[2.5rem] font-bold text-xl hover:bg-gray-900 transition-all duration-500 shadow-2xl flex items-center justify-center gap-4 group"
                                >
                                    Initiate Inquiry
                                    <Send size={24} className="group-hover:translate-x-3 group-hover:-translate-y-2 transition-transform duration-500" />
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Map Placeholder */}
                <section className="h-[600px] bg-blue-50 mt-32 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-[2s] mx-6 rounded-[4rem] group border-4 border-white shadow-3xl">
                    <img
                        src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1920"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-[10s]"
                        alt="Map Background"
                    />
                    <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-[1px]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-16 bg-white/80 backdrop-blur-xl rounded-[4rem] shadow-4xl border border-white">
                            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-2xl shadow-blue-200 animate-pulse">
                                <MapPin size={48} strokeWidth={1} />
                            </div>
                            <h3 className="text-3xl font-display font-medium text-gray-900 mb-4 tracking-tight">Interactive Map Coming Soon</h3>
                            <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs">Mahankali Nagar • Hyderabad • Telangana</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
