import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Owner, Design Studio',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Badigar Space Works transformed our workspace into a masterpiece. Their heritage in craftsmanship is evident in every corner.',
  },
  {
    name: 'Emma & James Wilson',
    role: 'Hyderabadi Homeowners',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The team at BSW since 1996 brought our dream villa to life. The blend of modern comfort and traditional motifs is stunning.',
  },
  {
    name: 'Marcus Chen',
    role: 'CEO, Tech Solutions',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Exceptional service and timely delivery. Their legacy in Hyderabad is truly well-deserved. Highly recommend for any premium project.',
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 lg:py-48 overflow-hidden bg-[#F8FAFF] px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <div className="mb-6 flex items-center gap-3 text-blue-600 font-bold tracking-[0.3em] text-xs uppercase">
              Patron Voices
            </div>
            <h2 className="text-5xl lg:text-8xl font-display font-medium text-gray-900 tracking-tight leading-tight">
              Divine <span className="italic font-light">Experiences.</span>
            </h2>
          </div>
          <p className="text-xl text-gray-500 font-light max-w-md">Trusted by Hyderabad's elite for over nearly three decades of visionary design.</p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-16"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-blue-50 p-12 rounded-[4rem] flex-shrink-0 w-full md:w-[600px] snap-start shadow-xl hover:shadow-2xl transition-all duration-700 relative group"
            >
              <Quote className="absolute top-12 right-12 text-blue-50 group-hover:text-blue-100 transition-colors" size={80} />
              <div className="flex items-center mb-10">
                <img
                  alt={`Avatar of ${testimonial.name}`}
                  className="w-20 h-20 rounded-[2rem] mr-6 object-cover border-4 border-gray-50 shadow-lg"
                  src={testimonial.image}
                />
                <div>
                  <h4 className="font-display font-medium text-gray-900 text-2xl leading-tight">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600 font-bold tracking-widest uppercase mt-1">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-500 text-xl leading-relaxed italic font-light">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
