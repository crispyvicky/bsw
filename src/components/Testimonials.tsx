import { useRef } from 'react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Owner, Design Studio',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Working with Intensify was a game-changer for our office space. Their attention to detail and creative vision transformed our workplace into a vibrant and productive environment.',
  },
  {
    name: 'Emma & James Wilson',
    role: 'Homeowners',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'We are absolutely thrilled with our new home\'s interior. The team perfectly captured our style and created a space that is both beautiful and functional. Highly recommended!',
  },
  {
    name: 'Marcus Chen',
    role: 'CEO, Tech Solutions',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The commercial space they designed for us exceeded all expectations. It\'s modern, inviting, and perfectly reflects our brand\'s identity. A truly professional and talented team.',
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-wide mb-12">
        OUR CLIENTS<br />SPEAK
      </h2>
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-black/50 border border-gray-800 p-8 rounded-2xl flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] snap-start"
          >
            <div className="flex items-center mb-4">
              <img
                alt={`Avatar of ${testimonial.name}`}
                className="w-12 h-12 rounded-full mr-4 object-cover"
                src={testimonial.image}
              />
              <div>
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
