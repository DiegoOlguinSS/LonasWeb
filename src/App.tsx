import Navbar from './app/components/Navbar';
import Hero from './app/components/Hero';
import Products from './app/components/Products';
import Features from './app/components/Features';
import Contact from './app/components/Contact';
import Footer from './app/components/Footer';

export default function App() {
  return (
    <div style={{ backgroundColor: '#111111', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
