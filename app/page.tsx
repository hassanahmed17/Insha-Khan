import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Achievements from '@/components/sections/Achievements';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Achievements />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}