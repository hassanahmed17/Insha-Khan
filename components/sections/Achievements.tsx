"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Define the interface for an achievement
interface Achievement {
  image: string;
  title: string;
  description: string;
}

// Achievements data
const achievements: Achievement[] = [
  {
    image: "https://res.cloudinary.com/drdzmc9dr/image/upload/v1732471298/lakhpati-club_zcmxog.jpg",
    title: "Lakhpati Club",
    description: "Qualified for the Lakhpati Club with a total earnings milestone of one lakh achieved to date",
  },
  {
    image: "https://res.cloudinary.com/drdzmc9dr/image/upload/v1732471298/conclave-22_amwk10.jpg",
    title: "Leadership Conclave 2022",
    description: "Honored with IDIGITALPRENEUR award for exceptional performance during 2021-2022",
  },
  {
    image: "https://res.cloudinary.com/drdzmc9dr/image/upload/v1732470527/bootcamp_yn9yni.jpg",
    title: "BOOTCAMP",
    description: "Attained the privilege of a live meeting with the company's founder.",
  },
  {
    image: "https://res.cloudinary.com/drdzmc9dr/image/upload/v1732471298/conclave-23_yjcxsf.jpg",
    title: "Leadership Conclave 2023",
    description: "Recognized with the prestigious IDIGITALPRENEUR award for my outstanding performance throughout the 2022-2023 period.",
  },
  {
    image: "https://res.cloudinary.com/drdzmc9dr/image/upload/v1732471476/snapinsta.app_436304904_1126010181780594_1052176970110070481_n_1080_1_slwlt0.jpg",
    title: "Millionaire Club",
    description: "Recognized with the prestigious IDIGITALPRENEUR award for achieving a milestone of earning 1 million in all-time earnings.",
  },
  {
    image: "https://res.cloudinary.com/drdzmc9dr/image/upload/v1732473759/Screenshot_2024-11-25-00-10-21-614_com.instagram.android_2_jpnyqs.jpg",
    title: "Leadership Conclave 2024",
    description: "Recognized with the prestigious IDIGITALPRENEUR award for my outstanding performance throughout the 2023-2024 period.",
  },
];

// Achievements component
export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <section className="py-20 px-4" id="achievements">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-heading mb-4 gradient-text">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones highlighting my personal accomplishments.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedAchievement(achievement)}
              className="group relative rounded-xl overflow-hidden cursor-pointer card-hover"
            >
              {/* Background Blur */}
              <div
                className="absolute inset-0 bg-cover bg-center blur-lg scale-110"
                style={{
                  backgroundImage: `url(${achievement.image})`,
                  zIndex: 1,
                  opacity: 0.35,
                }}
              ></div>

              {/* Achievement Image */}
              <div className="relative w-full pb-[75%] z-10">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-contain rounded-md"
                  loading="lazy"
                />
              </div>

              {/* Hover Effect */}
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                whileHover={{ y: "30%", opacity: 1 }}
                className="absolute inset-0 flex flex-col justify-center items-center bg-background/75 text-white text-center p-4 rounded-xl transition-all duration-500 z-20"
              >
                <h3 className="text-lg sm:text-xl font-bold font-heading mb-2 gradient-text">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Dialog for Detailed View */}
        <Dialog open={!!selectedAchievement} onOpenChange={() => setSelectedAchievement(null)}>
          <DialogContent className="sm:max-w-[425px] bg-card border-primary/20">
            <DialogHeader>
              <DialogTitle className="font-heading gradient-text">
                {selectedAchievement?.title}
              </DialogTitle>
              <DialogDescription asChild>
                <div className="space-y-4 pt-4">
                  <div className="text-foreground/90">{selectedAchievement?.description}</div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
