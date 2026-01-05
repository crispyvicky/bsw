import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative h-[95vh] flex items-center justify-center overflow-hidden rounded-[4rem] mt-2 mb-24 mx-2 md:mx-6 shadow-2xl border-4 border-white">
      <div className="absolute inset-0 z-0">
        <img
          alt="Premium Interior Design"
          className="w-full h-full object-cover scale-100 transition-transform duration-[10s] ease-linear hover:scale-110"
          src="/Hero.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <div className="mb-10 inline-flex items-center gap-3 px-8 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white text-xs font-bold tracking-[0.4em] uppercase shadow-2xl">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Imaginary Design • Legacy 1996
        </div>
        <h1
          className="font-display font-medium text-white tracking-tight drop-shadow-2xl mb-10"
          style={{
            fontSize: "clamp(3rem, 12vw, 9rem)",
            lineHeight: "0.85",
          }}
        >
          Visionary <br /> <span className="italic font-light">Spaces.</span>
        </h1>
        <p className="text-white/90 text-xl md:text-3xl font-light tracking-wide max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
          The art of <span className="font-medium text-white">Imaginary Design</span>. <br className="hidden md:block" />
          Where Vishwakarma's divine heritage meets modern luxury.
        </p>
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link
            to="/portfolio"
            className="group px-12 py-6 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl flex items-center gap-3"
          >
            Explore Projects
            {/* <span className="w-8 h-[1px] bg-gray-300 group-hover:bg-white group-hover:w-12 transition-all"></span> */}
          </Link>
          <Link
            to="/about"
            className="px-12 py-6 bg-transparent backdrop-blur-md border-2 border-white/60 text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-500 shadow-xl"
          >
            The Journey
          </Link>
        </div>
      </div>

      {/* Decorative vertical badge */}
      <div className="absolute bottom-12 left-12 z-20 hidden lg:block">
        <div className="flex items-center gap-4 text-white/50 text-[10px] font-bold tracking-[0.5em] uppercase vertical-text transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Hyderabad • India • Fine Craftsmanship
        </div>
      </div>
    </section>
  );
}
