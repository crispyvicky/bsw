export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] lg:min-h-[700px] flex flex-col justify-center py-16 lg:py-24 text-center">
      <div className="absolute inset-0 z-0">
        <img
          alt="A modern art gallery-like interior with dark walls and brightly lit artwork frames"
          className="w-full h-full object-cover rounded-2xl"
          src="/Hero.png"
        />
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
      </div>
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter uppercase text-white leading-none">
          INTENSIFY
        </h1>
      </div>
    </section>
  );
}
