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
    <div className="min-h-screen bg-[#F8FAFF] text-[#0F172A] antialiased">
      <Navbar />
      <main>
        <Hero />
        <div className="space-y-0">
          <About />
          <Gallery />
          <Services />
          <Testimonials />
          <Blog />
        </div>
      </main>
      <Footer />
    </div>
  );
}
