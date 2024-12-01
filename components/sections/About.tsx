"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Import Accordion components
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/drdzmc9dr/image/upload/v1732472798/IMG-20241025-WA0000_v6wsld.jpg"
              alt="Insha Khan - Business Coach"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="object-cover object-center"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Greetings, I am Insha Khan, a digital entrepreneur and business coach. My expertise lies in guiding individuals on how to generate a consistent monthly income ranging from 15,000 to 20,000 rupees through the strategic utilization of various social media platforms such as Instagram, Facebook, WhatsApp, YouTube, and other diverse sources.
            </p>

            {/* Accordion Section for Mission and Responsibility with Same Style as FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="mission"
                    className="border-none px-6 py-2 bg-card/50 backdrop-blur-sm rounded-lg"
                  >
                    <AccordionTrigger className="text-left flex items-center text-xl font-semibold gradient-text hover:no-underline">
                      My Mission
                      <motion.div className="ml-auto">
                        <ChevronDownIcon
                          className="w-5 h-5 transition-transform duration-300"
                          aria-hidden="true"
                        />
                      </motion.div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      My Mission is to offer a secure and safe platform for women across various regions of India. This platform is for those who wish to express themselves and harbor the enthusiasm to pursue or achieve something.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>

              <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="responsibility"
                    className="border-none px-6 py-2 bg-card/50 backdrop-blur-sm rounded-lg"
                  >
                    <AccordionTrigger className="text-left flex items-center text-xl font-semibold gradient-text hover:no-underline">
                      My Responsibility
                      <motion.div className="ml-auto">
                        <ChevronDownIcon
                          className="w-5 h-5 transition-transform duration-300"
                          aria-hidden="true"
                        />
                      </motion.div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      My Responsibility is to provide a safe & secure platform to all the women of our country from different regions of India who want to express themselves and have enthusiasm to do something or achieve something.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}