"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "Is Laptop Required for Work?",
    answer: " Your Smartphone is Enough.",
  },
  {
    question: "Is there any Age limit?",
    answer: " There is no age limit for working here.",
  },
  {
    question: "What is the Work Mode?",
    answer: "The Work Mode is totally online.",
  },
  {
    question: "Is it neccesary to show my Face on Social Media to work?",
    answer: "No, you can easily work without showing your face on Social Media.",
  },
  {
    question: "Is there any Specific Qualification Required?",
    answer: " No, you'll be give all the Trainings to work by us.",
  },
  {
    question: "Can a housewife work here?",
    answer: "Yes absolutely best for females who are looking to start something from home itself.",
  },
  {
    question: "Can a students do it along with studies?",
    answer: "We have students starting from age 14 learning and earning from the platform effortlessly.",
  },
  {
    question: "Can a person with job do it?",
    answer: "Yes you can start your side income from here in free time. 2 hours enough and that too not continuous.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Need more clarity? Check out these frequently asked questions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card/50 backdrop-blur-sm border-primary/20"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index}`} className="border-none px-6 py-2">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-sm font-semibold text-white">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
