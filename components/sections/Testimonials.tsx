"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Rukhsar Ansari",
    role: "Member Team Insha",
    image: "https://res.cloudinary.com/drdzmc9dr/image/upload/v1732474253/Colorful_Gradient_Girl_Hijab_3D_Avatar_20241125_002031_0000_zajpwv.png",
    quote: "Thank you, Insha for the prompt guidance in daily sessions and more importantly for getting me into this platform. May Allah give you more success in this duniya and akhirah.",
  },
  {
    name: "Nasrin Qureshi",
    role: "Member Team Insha",
    image: "https://res.cloudinary.com/drdzmc9dr/image/upload/v1732477619/a-3d-render-of-a-cartoon-character-of-a-hijabi-gir-M9fwinWFTjSXCJMW5zaENQ-5R362PH2SsS6f3qJYY3wqA_cc9ajq.jpg",
    quote: "Your mentorship helped me earn 28k Alhamdulillah. Thank you so much for your support and guidance. You're the best mentor; I never thought I could earn this much, all thanks to you. JazakAllah.",
  },
  {
    name: "Asmi",
    role: "Member Team Insha",
    image: "https://res.cloudinary.com/drdzmc9dr/image/upload/v1732477619/a-3d-render-of-a-hijabi-girl-cartoon-character-wit-z81Lgm8VRbGtaIzhLVGQbg-8EunoiT9TDSbOEUnv4dmQw_yv6gw4.jpg",
    quote: "Alhamdulillah. I earned 2 lakh, which I never expected as an engineering student. Thanks for your guidance and support. May Allah bless you with more.",
  },
  {
    name: "Afsha Naaz",
    role: "Member Team Insha",
    image: "https://res.cloudinary.com/drdzmc9dr/image/upload/v1732477619/a-3d-render-of-a-cartoon-hijabi-girl-with-a-decent-WnHSqIG0REKQHZi4l4RG0A-5R362PH2SsS6f3qJYY3wqA_tr6flx.jpg",
    quote: "Your point-to-point support and guidance have proven to be effective. We're grateful to be part of your mentorship, and Team Insha will indeed rock.",
  },
  {
    name: "Anam",
    role: "Member Team Insha",
    image: "https://res.cloudinary.com/drdzmc9dr/image/upload/v1732477619/a-3d-render-of-a-cartoon-character-of-a-hijabi-gir-k78NOa-jQFi0sGnBdNqwmA-8EunoiT9TDSbOEUnv4dmQw_xqfowu.jpg",
    quote: "Mam, your guidance is exceptional. You clarify everything, and your availability for guidance is the thing to be appreciated. It's the best experience, and I'm thankful to be on your team.",
  },
  {
    name: "Urooj",
    role: "Member Team Insha",
    image: "https://res.cloudinary.com/drdzmc9dr/image/upload/v1732477619/a-3d-render-of-a-cartoon-hijabi-girl-with-a-decent-wWtw5GluT3ypsVGYrjk-XA-5R362PH2SsS6f3qJYY3wqA_cg8dvz.jpg",
    quote: "Thank you for motivating and simplifying my future. Your guidance has been invaluable, and I trust you completely. I'm grateful for our friendship, my leader. We have much more to learn together, Inshallah. Thanks for your support.",
  },
];

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  // Early return with skeleton loading state
  if (!mounted) {
    return (
      <section className="py-20 px-4" id="testimonials">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="h-10 w-64 bg-muted/20 rounded-lg mx-auto mb-4 animate-pulse" />
            <div className="h-6 w-96 bg-muted/20 rounded-lg mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="h-[350px] bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6 h-full flex flex-col animate-pulse">
                  <div className="w-8 h-8 bg-primary/20 rounded-full mb-4" />
                  <div className="flex-grow space-y-4">
                    <div className="h-4 bg-muted/20 rounded w-3/4" />
                    <div className="h-4 bg-muted/20 rounded w-full" />
                    <div className="h-4 bg-muted/20 rounded w-2/3" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted/20" />
                    <div className="space-y-2">
                      <div className="h-4 w-24 bg-muted/20 rounded" />
                      <div className="h-3 w-20 bg-muted/20 rounded" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4" id="testimonials">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-heading mb-4 gradient-text">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from women who have transformed their careers through my guiding
          </p>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
              >
                <Card className="h-[350px] bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6 h-full flex flex-col">
                    <Quote className="w-8 h-8 text-primary mb-4 animate-glow" />
                    <p className="text-foreground/90 mb-6 flex-grow text-base">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold gradient-text text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}