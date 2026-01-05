import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section id="about" className="py-32 lg:py-48 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-4">
            <div className="col-span-4 overflow-hidden rounded-[3rem] shadow-2xl">
              <img
                alt="Premium living space design"
                className="w-full aspect-[4/5] object-cover hover:scale-110 transition-transform duration-700"
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            </div>
            <div className="col-span-2 self-end overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
              <img
                alt="Elegant architectural details"
                className="w-full aspect-square object-cover hover:scale-110 transition-transform duration-700"
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            </div>
          </div>
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-50/50 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl z-0"></div>
        </div>

        <div className="lg:pl-12">
          <div className="mb-6 flex items-center gap-4 text-blue-600 font-bold tracking-[0.3em] text-xs uppercase">
            <span className="w-10 h-[2px] bg-blue-600"></span>
            The Heritage since 1996
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-medium text-gray-900 tracking-tight leading-[1.1] mb-10">
            Design that <br /> <span className="italic font-light">Transcends.</span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-500 mb-12 font-light">
            Badigar Space Works introduces <span className="font-medium text-gray-900">Imaginary Design</span>—a visionary approach where ancient Vishwakarma artistry meets contemporary luxury. We don't just fill rooms; we curate atmospheric legacies.
          </p>
          <Link className="inline-flex items-center gap-6 group" to="/about">
            <span className="text-lg font-bold text-gray-900 tracking-widest uppercase">Explore Our Story</span>
            <span className="flex items-center justify-center w-14 h-14 rounded-full border border-gray-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500 transform group-hover:rotate-45">
              <ArrowRight size={24} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
