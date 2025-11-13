import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-700 dark:text-gray-300 antialiased">
      <Navbar />
      <main>
        <section className="relative h-[60vh] min-h-[400px] lg:min-h-[500px] flex items-end py-16 lg:py-24 text-left px-6 lg:px-8">
          <div className="absolute inset-0 z-0 px-6 lg:px-8">
            <img
              alt="Elegant, modern interior with minimalist furniture and sophisticated lighting"
              className="w-full h-full object-cover rounded-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeKpQBwJNDH1ULCDvhwdcIByeKNN7vClN3NurNvIvcnqTd4eKRrC7gTECYU7lONL-8vuYV4ttu_3ALqgt31CTCdByB2atKH6wCmkM-FcuUNKBx_Bjg3c2z4hkRTl-TSNzk2SzRs3vyM7ZD5zupOskI6QjviPqOEPxm2aiSo5DcwjYOIEzDK-F5qCqjpRHEWYcvWGT__ZHLcfHZcLUuAtnUvDqwbLeqNa21GuBLrtnYYMODWNXaAOE4xuMmM3guJM1O5oT193x2AVI"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 rounded-2xl"></div>
          </div>
          <div className="relative z-10 w-full px-8 md:px-12">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase text-white leading-none">
              About Us
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">Crafting narratives in space, one design at a time.</p>
          </div>
        </section>

        <section className="py-24 lg:py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="lg:pr-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-wide">
                  OUR MISSION & VISION
                </h2>
                <p className="my-6 leading-relaxed text-gray-400">
                  At Intensify, our mission is to create bespoke interiors that tell a story. We believe that a well-designed space can elevate the human experience, fostering creativity, comfort, and connection. We are dedicated to pushing the boundaries of design while honoring the unique vision of each client.
                </p>
                <p className="leading-relaxed text-gray-400">
                  Our vision is to be a globally recognized leader in interior design, renowned for our innovative approach, unwavering commitment to quality, and our ability to transform ordinary spaces into extraordinary environments that inspire and endure.
                </p>
              </div>
              <div className="relative h-96 lg:h-auto lg:aspect-[4/5]">
                <img
                  alt="A chic, well-lit office space with plants and modern furniture"
                  className="w-full h-full object-cover rounded-2xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt6Nn7mkmlav-n8QDMCiMVl-BJ-idpxMIgWhc-CvqUONdLCN0Xw2MXa6noiieMvbrtW3hl8Csy0PHnqpV9ONQ7LTgoQH4Oe1d3c9CMbmTbZgj48Y1gwJdrbCeGaX6MASNeXi4zq__2BGrNBYjguE_DEOD8Qn7NA31bnjkfVG-Qom74BEG6fPOsicf36-cUaToBXEu_UEz7O6UPV4ORQTU1qjh4xHgy7OWV03rgZOkVsOCcCLR_Lj9lfpzeXDN2GrhOS98HKGyaH6o"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-gray-900/50 rounded-4xl p-8 lg:p-16">
            <div className="mb-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-wide">MEET OUR TEAM</h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                The creative minds behind our most iconic designs. A symphony of talent, passion, and expertise.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img
                    alt="Professional portrait of Olivia Vance"
                    className="w-full h-full rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGvfM09Y0b-NefwOVVgqWb7IB19O6u4bFl124RQBEg_aoxBe28cYQ__0KWDZ9K0MR53z4OtIMdQFgI8Hnbuq18QfBo9KaJKiz7IOuEGfVjZomn3BpgzwlvMoq9Sxes7Vt-HNpl7r4TeE2Z-J-fJlqoWJHQi9pv2JDeOpQx3mWWkU8nV5Taw_R1r0P3wmfJWYoV3dSP380N16tjKWuMvX1IKQwlXl3AU-vd6j7i7HoyeZV0aNKYBDTC31bG5Zlq8ZWFiVV3LctO_aQ"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">Olivia Vance</h3>
                <p className="text-gray-400 mb-2">Founder & Principal Designer</p>
                <p className="text-sm text-gray-500 max-w-xs mx-auto">
                  With over 15 years of experience, Olivia's visionary leadership and keen eye for detail are the driving force behind Intensify.
                </p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img
                    alt="Professional portrait of Liam Chen"
                    className="w-full h-full rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuClr7BXMYjoWVnVk47PY8IXUrLJAyIyOHO-yzB062mk-36Qu0Rd_uoJ00CXR_mrxQFE1mMW7YsBM3YOY5MNz_jn1xBZgN5rDHbcIyQd5JwXYFscUejEbGPjs0vnXml5Xkueyx6lnozQsctWYa0k0YzFM96sGF6h4NNRe-1cZZMGh-NCGQNvemT-jf9QnH-Caq6IIvqS87voDT4-x-mvMvaX_IUMj4-eWvhyushSy8dJQhzTmhVKxGlOVUmA1Q9KiFMc4gH3jzLbTeI"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">Liam Chen</h3>
                <p className="text-gray-400 mb-2">Lead Architect</p>
                <p className="text-sm text-gray-500 max-w-xs mx-auto">
                  Liam masterfully blends form and function, creating structural marvels that are both beautiful and sustainable.
                </p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img
                    alt="Professional portrait of Amara Singh"
                    className="w-full h-full rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOlt4jnz6lysNSlHDMteUzl5svHiPCuytGZHXEioBmGUHiS2FU8dtnfxchITOpDpjxIGE2tbC9SNQMXeEHSf7dKXIz4H2DArKE8lgFjBsV0SPVK25_HhSlG27C9NL0SFpD-ZTiU8Sj3ALVjmje-HkUNS6sYSC-6PkuB2T5Yxf9RaKWl-zdKRvpvLQaNbHuAv05UaNF9G7nBfGU3YZ6PG6pHCB7nRn-AZjDrW9e1CDA7SGq71bAmKlebp_0EYJZIzzBL5UQRuSfSf4"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">Amara Singh</h3>
                <p className="text-gray-400 mb-2">Senior Interior Stylist</p>
                <p className="text-sm text-gray-500 max-w-xs mx-auto">
                  Amara has an innate talent for curating textures, colors, and objects to create harmonious and soulful spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-wide">
                  OUR JOURNEY
                </h2>
                <p className="my-6 leading-relaxed text-gray-400">
                  From a small studio to an award-winning firm, our journey has been fueled by a passion for design and a commitment to excellence. Here are some of our key milestones.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="space-y-12">
                  <div className="relative timeline-item">
                    <div className="absolute top-4 left-0 w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="pl-16">
                      <p className="font-bold text-lg text-white">2010 - The Beginning</p>
                      <p className="text-gray-400">Intensify was founded with a vision to revolutionize interior design.</p>
                    </div>
                  </div>
                  <div className="relative timeline-item">
                    <div className="absolute top-4 left-0 w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="pl-16">
                      <p className="font-bold text-lg text-white">2015 - First Major Award</p>
                      <p className="text-gray-400">Won the "Design of the Year" for the 'Metropolis Lofts' project.</p>
                    </div>
                  </div>
                  <div className="relative timeline-item">
                    <div className="absolute top-4 left-0 w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="pl-16">
                      <p className="font-bold text-lg text-white">2020 - International Expansion</p>
                      <p className="text-gray-400">Opened our first international office, expanding our global reach.</p>
                    </div>
                  </div>
                  <div className="relative timeline-item">
                    <div className="absolute top-4 left-0 w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="pl-16">
                      <p className="font-bold text-lg text-white">2024 - Future Forward</p>
                      <p className="text-gray-400">Continuing to innovate with sustainable materials and smart home integration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-wide">OUR CORE VALUES</h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                The principles that guide our work, our relationships, and our culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border border-gray-800 p-8 rounded-2xl text-center hover:bg-gray-900/50 transition-colors duration-300">
                <div className="text-4xl text-white mb-4">💡</div>
                <h3 className="text-xl font-bold text-white mb-2">Creativity</h3>
                <p className="text-gray-400 text-sm">We foster a culture of innovation and artistic expression in every project.</p>
              </div>
              <div className="border border-gray-800 p-8 rounded-2xl text-center hover:bg-gray-900/50 transition-colors duration-300">
                <div className="text-4xl text-white mb-4">✓</div>
                <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                <p className="text-gray-400 text-sm">We are committed to the highest standards of quality and craftsmanship.</p>
              </div>
              <div className="border border-gray-800 p-8 rounded-2xl text-center hover:bg-gray-900/50 transition-colors duration-300">
                <div className="text-4xl text-white mb-4">👥</div>
                <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
                <p className="text-gray-400 text-sm">We believe the best results come from a true partnership with our clients.</p>
              </div>
              <div className="border border-gray-800 p-8 rounded-2xl text-center hover:bg-gray-900/50 transition-colors duration-300">
                <div className="text-4xl text-white mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white mb-2">Integrity</h3>
                <p className="text-gray-400 text-sm">We operate with transparency, honesty, and respect in all our dealings.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
}
