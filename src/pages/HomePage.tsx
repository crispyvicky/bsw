import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-700 dark:text-gray-300 antialiased">
      <Navbar />
      <main className="px-6 lg:px-8">
        <Hero />
        <div className="max-w-7xl mx-auto">
          <About />
          <Gallery />
          <Services />
          <Testimonials />
          <Blog />
        </div>
      </main>
      <div className="px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
}
