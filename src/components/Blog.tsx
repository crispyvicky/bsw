const blogPosts = [
  {
    title: 'Navigating the Shifting Tides: Strategies',
    readTime: '10 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzbmEC9ZXfYNLHzxDmsImAabywuQKvYhFTOYoUfTO0-LqWdyVZ2bYIXbokVS3kEt-sgXfgYLTWC2Zfmvni_h_dYSKi2jf1QMG2VNLTFVjfotLTd4D_6QxfeN4fd7aan_2IlOjlCKNAZ_jAd9VQE_34FQvObAtquH0iE3qNTekUio_TaauGG0HTUP8_xaJgHu7jIYkofkObtC3vRT86r6qRCHfJFHeqOMBsNC3HMzji56PezXyE1gMYOst7th7UKMHTFEIG2cS1p8k',
    alt: 'Stylish living room with pink armchair and dark walls',
  },
  {
    title: 'Unlock the Door to Smart Investing',
    readTime: '8 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOzpodheUdElS2E5aepwhWEjPXB64ecq9fQvn3jvGnt16ISidVHEn7vFr_9xrWM2MLYwhp6xtCxYAKkCEXEIcPrj9mqvkGdaRuBp8gt405xKUuRgG-9SMxC-dySZQOJp3qhNsCsw4xqkTJ3P083ThBEReleVqH6VKhc9mDZwztw3oB4FLSHw2wN9jJ5S-t7NpPUj_JMZtbm1SWHJR_KyLTHZXjFJ9822zaAs65-06xjqyZ3bXK7Cun4KpYb3vkQwkRyh_-e0EW2gM',
    alt: 'Modern dining area with black chairs and a unique geometric chandelier',
  },
  {
    title: 'Hottest Neighborhoods for Millennial Homebuyers',
    readTime: '12 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKuVBBhNYEbgfKApw5oBREH9k5OrpMxmIxukb1OLVUv-iQwySz4OEai9zuEKtHodYd67Q1Ngx7mmjv2MNoSsQOGR9Cdwx-mAiOClhTKrU3g9nzIC19fVeqGE9B3X4nQdBGxk2r_KKBqQERi-kNFvhi8R3CwVOx1V7u1xwTVKGL-0S10L3DZ0tfGDKD7OaK4Mzd-yMAw0JdWFREegZ3Lro_Mdd_XGyf3ZyCor_5HpPwVh4LCf5QgC8QvIfWbRvQR-rUHU63ycGWZHg',
    alt: 'Minimalist room with a single wooden chair against a white wall',
  },
];

export default function Blog() {
  return (
    <section className="py-16 lg:py-24">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-wide">
          REAL ESTATE<br />INSIGHTS
        </h2>
        <a className="hidden md:inline-block text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors" href="#blog">
          SEE ALL BLOGS
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl mb-4">
              <img
                alt={post.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                src={post.image}
              />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{post.readTime}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 md:hidden">
        <a className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors" href="#blog">
          SEE ALL BLOGS
        </a>
      </div>
    </section>
  );
}
