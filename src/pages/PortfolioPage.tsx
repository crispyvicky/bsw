import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projects = [
  {
    id: 1,
    category: 'Residential',
    title: 'Serene Urban Oasis',
    description: 'This project transformed a compact city apartment into a tranquil retreat. By maximizing natural light and employing a minimalist color palette, we created an illusion of space and calm amidst the urban hustle. Custom joinery and smart storage solutions ensure functionality without compromising on style.',
    testimonial: "Intensify didn't just redesign our apartment; they reshaped our daily lives. Every detail is perfect. It's our sanctuary.",
    client: 'The Chen Family',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOzpodheUdElS2E5aepwhWEjPXB64ecq9fQvn3jvGnt16ISidVHEn7vFr_9xrWM2MLYwhp6xtCxYAKkCEXEIcPrj9mqvkGdaRuBp8gt405xKUuRgG-9SMxC-dySZQOJp3qhNsCsw4xqkTJ3P083ThBEReleVqH6VKhc9mDZwztw3oB4FLSHw2wN9jJ5S-t7NpPUj_JMZtbm1SWHJR_KyLTHZXjFJ9822zaAs65-06xjqyZ3bXK7Cun4KpYb3vkQwkRyh_-e0EW2gM',
    imageAlt: 'Modern minimalist living room with neutral tones',
  },
  {
    id: 2,
    category: 'Commercial',
    title: 'Innovate HQ',
    description: 'The brief was to design a workspace that fosters collaboration and innovation. We delivered a dynamic environment with flexible work zones, a striking reception area, and biophilic design elements to enhance employee well-being and productivity. The design reflects the company\'s forward-thinking ethos.',
    testimonial: 'Our new office is incredible. The design has boosted morale and creativity. Working with Intensify was a seamless and inspiring experience.',
    client: 'CEO, Innovate Inc.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt6Nn7mkmlav-n8QDMCiMVl-BJ-idpxMIgWhc-CvqUONdLCN0Xw2MXa6noiieMvbrtW3hl8Csy0PHnqpV9ONQ7LTgoQH4Oe1d3c9CMbmTbZgj48Y1gwJdrbCeGaX6MASNeXi4zq__2BGrNBYjguE_DEOD8Qn7NA31bnjkfVG-Qom74BEG6fPOsicf36-cUaToBXEu_UEz7O6UPV4ORQTU1qjh4xHgy7OWV03rgZOkVsOCcCLR_Lj9lfpzeXDN2GrhOS98HKGyaH6o',
    imageAlt: 'Sleek corporate office lobby with a bold reception desk',
  },
  {
    id: 3,
    category: 'Hospitality',
    title: 'The Grandeur Hotel',
    description: 'A blend of classic luxury and contemporary comfort, the Grandeur Hotel suite offers guests an unforgettable stay. Rich textures, bespoke furniture, and curated art pieces create an atmosphere of sophisticated elegance, complemented by breathtaking city views.',
    testimonial: 'The new suite designs by Intensify have elevated our guest experience to a new level of luxury. The feedback has been overwhelmingly positive.',
    client: 'Hotel Manager',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrIoJvSpW_u1gQ92B9w5zJrfJANye_sfb7Uc-xHDHTDLbT28J7zNJTb0AQA-9ksxhLBuOrgVv-rYtfSqZlM2Jayhcek8UKlkmZXjFbKi0ZkqgmfUtu34v6ml697fXALipkWyfmWTC0JB-3Jml-pua4NrIppHT_IMLgRGY8RDziY8pSjFhNYe_qIP_4x7oS8v_lwqQiA3gQkscOYRkTM7ow4Ziw8i4j73epZwRpvaifYFqYmqcYTKpMxyqKXsja0gkDac-ToOoQBmo',
    imageAlt: 'Luxury hotel suite with a city view',
  },
  {
    id: 4,
    category: 'Residential',
    title: 'Modern Villa Retreat',
    description: 'This expansive villa combines contemporary architecture with warm, inviting interiors. Floor-to-ceiling windows bring the outdoors in, while carefully selected materials and furnishings create a harmonious flow throughout the living spaces. The result is a luxurious yet comfortable family home.',
    testimonial: 'Our villa is beyond anything we imagined. Every room feels like a masterpiece, yet it\'s so livable and comfortable for our family.',
    client: 'The Martinez Family',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeKpQBwJNDH1ULCDvhwdcIByeKNN7vClN3NurNvIvcnqTd4eKRrC7gTECYU7lONL-8vuYV4ttu_3ALqgt31CTCdByB2atKH6wCmkM-FcuUNKBx_Bjg3c2z4hkRTl-TSNzk2SzRs3vyM7ZD5zupOskI6QjviPqOEPxm2aiSo5DcwjYOIEzDK-F5qCqjpRHEWYcvWGT__ZHLcfHZcLUuAtnUvDqwbLeqNa21GuBLrtnYYMODWNXaAOE4xuMmM3guJM1O5oT193x2AVI',
    imageAlt: 'Luxurious residential living room with a large sofa and artistic decor',
  },
  {
    id: 5,
    category: 'Commercial',
    title: 'Boutique Retail Space',
    description: 'This high-end retail boutique showcases products in an environment that feels more like an art gallery than a store. Strategic lighting, minimalist displays, and luxurious materials create an immersive shopping experience that elevates the brand and engages customers.',
    testimonial: 'The store design has completely transformed our customer experience. Sales are up, and clients love spending time in our space.',
    client: 'Boutique Owner',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageAlt: 'Modern boutique retail interior with elegant displays',
  },
  {
    id: 6,
    category: 'Hospitality',
    title: 'Coastal Restaurant',
    description: 'This waterfront restaurant design captures the essence of coastal dining with a sophisticated twist. Natural materials, ocean-inspired colors, and thoughtful lighting create an ambiance that is both relaxed and refined, perfectly complementing the culinary experience.',
    testimonial: 'The space is stunning. Our guests consistently comment on the beautiful design, and it has become a destination in itself.',
    client: 'Restaurant Owner',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL0hmDU-lj2HgHrQ-ZBg-ZTBNQYSnppPRL3EpEvB8qxODxupgy5TCzmF4q5VQ4wnPbCscHpRGDvlhPDJ6tmvrKNzAnovU_d6FzMvHwnRQyMlpAazyc3gKT_t58-k3DbQJKK0mPifsu2Ed8OVyXDjXg7mOvg6ntvgVulOVCriip_7hsVz5_8K9m15U140bnwE6ADK9ZMz7vX7goSsFyLPcFM_yD3J9XDRJWjXbQrEr1CvUHkBnwmsAXLjG4fzPcWe2deY9W1PsZrLA',
    imageAlt: 'Elegant restaurant setup with decorated tables',
  },
];

export default function PortfolioPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-700 dark:text-gray-300 antialiased">
      <Navbar />
      <main className="px-6 lg:px-8">
        <section
          className="py-16 lg:py-24 text-center relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase text-white leading-none">
              OUR WORK
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-gray-200 text-lg">
              Witness the transformation of spaces into bespoke environments. Our portfolio is a testament to our philosophy that great design is born from passion, precision, and partnership.
            </p>
          </div>
        </section>

        <section className="py-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 0 ? '' : ''
                }`}
              >
                <div className={index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                    {project.category}
                  </h3>
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-2">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-8 italic border-l-2 border-white pl-6">
                    <p className="text-gray-300">"{project.testimonial}"</p>
                    <cite className="block text-gray-500 mt-3 not-italic">
                      - {project.client}
                    </cite>
                  </div>
                </div>
                <div className={`group relative overflow-hidden rounded-2xl cursor-pointer ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}`}>
                  <img
                    alt={project.imageAlt}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <div className="px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
}
