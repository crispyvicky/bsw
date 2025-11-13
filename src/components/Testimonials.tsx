import { useRef } from 'react';

const testimonials = [
  {
    name: 'Eleanor Pena',
    role: 'Owner, Firefly',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGvfM09Y0b-NefwOVVgqWb7IB19O6u4bFl124RQBEg_aoxBe28cYQ__0KWDZ9K0MR53z4OtIMdQFgI8Hnbuq18QfBo9KaJKiz7IOuEGfVjZomn3BpgzwlvMoq9Sxes7Vt-HNpl7r4TeE2Z-J-fJlqoWJHQi9pv2JDeOpQx3mWWkU8nV5Taw_R1r0P3wmfJWYoV3dSP380N16tjKWuMvX1IKQwlXl3AU-vd6j7i7HoyeZV0aNKYBDTC31bG5Zlq8ZWFiVV3LctO_aQ',
    quote: 'Working with Intensify was a game-changer for our office space. Their attention to detail and creative vision transformed our workplace into a vibrant and productive environment.',
  },
  {
    name: 'Mildred & Ernie T.',
    role: 'Homeowners',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOlt4jnz6lysNSlHDMteUzl5svHiPCuytGZHXEioBmGUHiS2FU8dtnfxchITOpDpjxIGE2tbC9SNQMXeEHSf7dKXIz4H2DArKE8lgFjBsV0SPVK25_HhSlG27C9NL0SFpD-ZTiU8Sj3ALVjmje-HkUNS6sYSC-6PkuB2T5Yxf9RaKWl-zdKRvpvLQaNbHuAv05UaNF9G7nBfGU3YZ6PG6pHCB7nRn-AZjDrW9e1CDA7SGq71bAmKlebp_0EYJZIzzBL5UQRuSfSf4',
    quote: 'We are absolutely thrilled with our new home\'s interior. The team perfectly captured our style and created a space that is both beautiful and functional. Highly recommended!',
  },
  {
    name: 'Marcus Finch',
    role: 'CEO, Tech Solutions',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClr7BXMYjoWVnVk47PY8IXUrLJAyIyOHO-yzB062mk-36Qu0Rd_uoJ00CXR_mrxQFE1mMW7YsBM3YOY5MNz_jn1xBZgN5rDHbcIyQd5JwXYFscUejEbGPjs0vnXml5Xkueyx6lnozQsctWYa0k0YzFM96sGF6h4NNRe-1cZZMGh-NCGQNvemT-jf9QnH-Caq6IIvqS87voDT4-x-mvMvaX_IUMj4-eWvhyushSy8dJQhzTmhVKxGlOVUmA1Q9KiFMc4gH3jzLbTeI',
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
            className="bg-gray-200 dark:bg-gray-800/50 p-8 rounded-2xl flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] snap-start"
          >
            <div className="flex items-center mb-4">
              <img
                alt={`Avatar of ${testimonial.name}`}
                className="w-12 h-12 rounded-full mr-4 object-cover"
                src={testimonial.image}
              />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
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
