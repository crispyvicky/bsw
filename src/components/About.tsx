import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative grid grid-cols-5 gap-4">
          <div className="col-span-3">
            <img
              alt="Modern living room with a built-in sofa by a large window overlooking a city"
              className="w-full h-full object-cover rounded-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7zzWO_8LeAnHQPPwbFtf34MrpYZ0dUDBcjjazptkMArqjA3Ldp-AdHHzoWLLv5OxEcDmU5nmUvSAoI3nB7g3fRK8zWfoHjY2FcSAHIdR3At7snIO4j1Moa4mP_PFLOPOL65ghaPZJu7gXQ5AkgiRyEB5bY-72G-vaa69KpG6L9Rd-q8P8sdENcctTe9kw0exreMDn1LgdA7-44-NnjimtJ2su2FZu_08LzXGkev3-ya2rFd7HieSjMvCa6r6mizr23Drx-D3eoP8"
            />
          </div>
          <div className="col-span-2 self-end">
            <img
              alt="Stylish interior with wooden stairs, warm lighting, and green plants"
              className="w-full object-cover rounded-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCweamak4QFg4vi-C3KRZ-Bmy5GAcxrz9Aw7qPv4HlM9DxH7HIK3l6t98NqqOqsIvkNeYPNk-fvyLQFH2YLvwkWFqIlmRM9R4OsCYgkRerov_o6H3nu1BZdHyXOFh3kXRKCVYP4Rw73yUxeLE2g_zoRfsSOFfregal-SNMh6DbfbytHwfYHSoK_JO2t9Aie78UYw-517JQYNOMIzC1Fnec2Yn3JkGgpgdPf9_GY7a3rdl2R463e5EojhOX86CA6_3sZOLeNj0nse30"
            />
          </div>
        </div>
        <div className="lg:pl-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-wide">
            ABOUT US
          </h2>
          <p className="my-8 leading-relaxed text-gray-400">
            Our approach is rooted in collaboration. We listen, understand, and work closely with our clients to translate their dreams into reality. Whether it's a cozy home, a vibrant office, or a commercial space, we infuse every project with passion and precision.
          </p>
          <a className="inline-flex items-center font-semibold text-gray-900 dark:text-white group" href="#about">
            READ MORE
            <span className="ml-3 flex items-center justify-center w-8 h-8 rounded-full border border-gray-400 dark:border-gray-600 group-hover:bg-white dark:group-hover:text-black transition-all">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
