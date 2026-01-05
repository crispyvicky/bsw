const blogPosts = [
  {
    title: 'Divine Symmetry: The Vishwakarma Influence',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Heritage architecture',
  },
  {
    title: 'Modern Hyderabadi Villas: A 28-Year Legacy',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Luxury villa',
  },
  {
    title: 'Sustainable Interiors in Mahankali Nagar',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Natural materials interior',
  },
];

export default function Blog() {
  return (
    <section className="py-32 lg:py-48 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between lg:items-end mb-24 gap-8">
          <div>
            <div className="mb-6 flex items-center gap-3 text-blue-600 font-bold tracking-[0.3em] text-xs uppercase">
              Curated Insights
            </div>
            <h2 className="text-5xl lg:text-8xl font-display font-medium text-gray-900 tracking-tight leading-tight">
              Design <span className="italic font-light">Journal.</span>
            </h2>
          </div>
          <a className="inline-flex items-center text-sm font-bold uppercase tracking-[0.2em] text-blue-600 hover:text-blue-800 transition-colors group" href="#blog">
            Explore All Articles
            <span className="ml-4 w-12 h-[1px] bg-blue-200 group-hover:w-20 group-hover:bg-blue-600 transition-all duration-500"></span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {blogPosts.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-[3.5rem] mb-10 shadow-2xl relative">
                <img
                  alt={post.alt}
                  className="w-full h-[450px] object-cover transform group-hover:scale-110 transition-transform duration-[2s] ease-out"
                  src={post.image}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700"></div>
              </div>
              <div className="px-4">
                <h3 className="font-display font-medium text-3xl text-gray-900 mb-6 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <div className="flex items-center text-xs text-gray-400 font-bold tracking-[0.2em] uppercase">
                  <span className="w-8 h-[1px] bg-blue-600 mr-4"></span>
                  {post.readTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
