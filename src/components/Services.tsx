import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Office\nDesign',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt6Nn7mkmlav-n8QDMCiMVl-BJ-idpxMIgWhc-CvqUONdLCN0Xw2MXa6noiieMvbrtW3hl8Csy0PHnqpV9ONQ7LTgoQH4Oe1d3c9CMbmTbZgj48Y1gwJdrbCeGaX6MASNeXi4zq__2BGrNBYjguE_DEOD8Qn7NA31bnjkfVG-Qom74BEG6fPOsicf36-cUaToBXEu_UEz7O6UPV4ORQTU1qjh4xHgy7OWV03rgZOkVsOCcCLR_Lj9lfpzeXDN2GrhOS98HKGyaH6o',
    alt: 'Modern office design with ergonomic chairs and wooden desks',
  },
  {
    title: 'Residential\nDesign',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeKpQBwJNDH1ULCDvhwdcIByeKNN7vClN3NurNvIvcnqTd4eKRrC7gTECYU7lONL-8vuYV4ttu_3ALqgt31CTCdByB2atKH6wCmkM-FcuUNKBx_Bjg3c2z4hkRTl-TSNzk2SzRs3vyM7ZD5zupOskI6QjviPqOEPxm2aiSo5DcwjYOIEzDK-F5qCqjpRHEWYcvWGT__ZHLcfHZcLUuAtnUvDqwbLeqNa21GuBLrtnYYMODWNXaAOE4xuMmM3guJM1O5oT193x2AVI',
    alt: 'Luxurious residential living room with a large sofa and artistic decor',
  },
  {
    title: 'Commercial\nSpace',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrIoJvSpW_u1gQ92B9w5zJrfJANye_sfb7Uc-xHDHTDLbT28J7zNJTb0AQA-9ksxhLBuOrgVv-rYtfSqZlM2Jayhcek8UKlkmZXjFbKi0ZkqgmfUtu34v6ml697fXALipkWyfmWTC0JB-3Jml-pua4NrIppHT_IMLgRGY8RDziY8pSjFhNYe_qIP_4x7oS8v_lwqQiA3gQkscOYRkTM7ow4Ziw8i4j73epZwRpvaifYFqYmqcYTKpMxyqKXsja0gkDac-ToOoQBmo',
    alt: 'Spacious commercial area with high ceilings and modern lighting',
  },
  {
    title: 'Event\nDesign',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL0hmDU-lj2HgHrQ-ZBg-ZTBNQYSnppPRL3EpEvB8qxODxupgy5TCzmF4q5VQ4wnPbCscHpRGDvlhPDJ6tmvrKNzAnovU_d6FzMvHwnRQyMlpAazyc3gKT_t58-k3DbQJKK0mPifsu2Ed8OVyXDjXg7mOvg6ntvgVulOVCriip_7hsVz5_8K9m15U140bnwE6ADK9ZMz7vX7goSsFyLPcFM_yD3J9XDRJWjXbQrEr1CvUHkBnwmsAXLjG4fzPcWe2deY9W1PsZrLA',
    alt: 'Elegant event setup with decorated tables and chairs',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-wide mb-4 md:mb-0">
          EXCEPTIONAL<br />SERVICES
        </h2>
        <p className="md:w-1/3 leading-relaxed text-gray-400">
          As an edifice interior business, our commitment is to deliver unparalleled services that elevate your spaces. Our expertise lies in our ability to deliver projects on time.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="relative group overflow-hidden rounded-2xl aspect-square">
            <img
              alt={service.alt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              src={service.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 transition-all duration-300">
              <h3 className="text-white font-bold text-2xl uppercase opacity-100 transition-opacity duration-300 group-hover:opacity-0 whitespace-pre-line">
                {service.title}
              </h3>
            </div>
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a className="inline-flex items-center text-white font-semibold" href="#services">
                Learn More <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
