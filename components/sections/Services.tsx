"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Coins } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Mental Support",
    description: "Women empowerment promotes self-worth, decision-making, and mental influence for women’s and others' growth. It is a fundamental human right, crucial to creating a peaceful, prosperous world.",
    features: ["Self-worth promotion", "Decision-making ability", "Global impact"]
  },
  {
    icon: Heart,
    title: "Emotional Support",
    description: "Emotional empowerment enables women to control resources, manage risks, and enhance well-being. It advocates gender equality through education, training, and awareness, fostering strategic decision-making for improved status and opportunities.",
    features: ["Control Resources", "Manage Risks", "Boost Status"]
  },
  {
    icon: Coins,
    title: "Financial Support",
    description: "Women empowerment is about equality, enabling women to perform equally to men. It ensures fairness in rights, laws, and opportunities, regardless of gender, and celebrates their achievements while focusing on true empowerment.",
    features: ["Equal position", "No gender bias", "Empowering opportunities"]
  }
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-muted/50" id="services">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive coaching solutions designed to support your journey to success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full card-hover">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}