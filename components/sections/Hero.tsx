"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

function FloatingSpheres() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Sphere args={[1, 32, 32]} position={[-4, 0, 0]}>
        <meshStandardMaterial color="#d946ef" />
      </Sphere>
      <Sphere args={[0.8, 32, 32]} position={[4, 2, -2]}>
        <meshStandardMaterial color="#a855f7" />
      </Sphere>
      <Sphere args={[1.2, 32, 32]} position={[2, -2, -1]}>
        <meshStandardMaterial color="#ec4899" />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate />
    </>
  );
}

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const navHeight = document.querySelector('nav')?.getBoundingClientRect().height || 0;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <FloatingSpheres />
        </Canvas>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Women to Achieve Their Dreams
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform your potential into success with professional guidance and support
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            className="text-lg"
            onClick={scrollToAbout}
          >
            Discover More
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </motion.div>
    </section>
  );
}