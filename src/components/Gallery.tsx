import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
    <section id="projects" className="py-32 lg:py-48 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="mb-6 px-6 py-2 bg-blue-50 text-blue-600 text-xs font-bold tracking-[0.4em] uppercase rounded-full border border-blue-100">
            Heritage Gallery
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-medium text-gray-900 tracking-tight leading-tight">
            Curated <span className="italic font-light">Masterpieces.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-gray-500 text-xl font-light">
            A glimpse into the <span className="font-medium text-gray-900">Imaginary</span> world of Badigar Space Works.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Link to="/portfolio" className="relative overflow-hidden rounded-[4rem] shadow-3xl group block">
            <img
              alt="Premium Interior"
              className="w-full h-[700px] object-cover transform group-hover:scale-110 transition-transform duration-[3s] ease-out"
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700"></div>
            <div className="absolute bottom-12 left-12">
              <div className="text-white text-xs font-bold tracking-widest uppercase mb-2">Portfolio 2024</div>
              <h3 className="text-white text-4xl font-display italic">The Azure Residence</h3>
            </div>
          </Link>
          <div className="grid grid-rows-2 gap-12 text-center lg:text-left">
            <Link to="/portfolio" className="relative overflow-hidden rounded-[3.5rem] shadow-2xl group block">
              <img
                alt="Interior Detail"
                className="w-full h-[326px] object-cover transform group-hover:scale-110 transition-transform duration-[2s] ease-out"
                src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700"></div>
            </Link>
            <Link to="/portfolio" className="relative overflow-hidden rounded-[3.5rem] shadow-2xl group block">
              <img
                alt="Modern Space"
                className="w-full h-[326px] object-cover transform group-hover:scale-110 transition-transform duration-[2s] ease-out"
                src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=800"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
