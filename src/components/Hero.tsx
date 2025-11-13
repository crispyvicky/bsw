export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[500px] flex flex-col justify-center items-center text-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <img
          alt="A luxurious modern interior design with sophisticated lighting"
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/3566127/pexels-photo-3566127.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold tracking-tighter uppercase text-white leading-none drop-shadow-lg">
          INTENSIFY
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-100 drop-shadow-md max-w-3xl">Transforming Spaces, Elevating Experiences</p>
      </div>
    </section>
  );
}
