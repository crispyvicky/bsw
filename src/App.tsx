import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-700 dark:text-gray-300 antialiased">
      <div className="container mx-auto px-6 lg:px-8">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Gallery />
          <Services />
          <Testimonials />
          <Blog />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
