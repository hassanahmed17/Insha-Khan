"use client";

import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send, Mail } from "lucide-react";
import Image from "next/image";

const WEB3_FORMS_API_KEY = "3b289d48-4008-40f0-8fc1-130b92f870c4";
const WEB3_FORMS_API_URL = "https://api.web3forms.com/submit";
const WHATSAPP_URL = "https://wa.me/918860683722"; // Replace with your actual WhatsApp number

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Enter a valid mobile number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch(WEB3_FORMS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3_FORMS_API_KEY,
          ...values,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("There was an error sending your message.");
      }
    } catch (error) {
      alert("There was an error sending your message.");
      console.error("Error:", error);
    }
  };

  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section className="py-20 px-4 bg-muted/50" id="contact">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help! Reach out with any questions or inquiries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MessageSquare className="w-6 h-6 text-primary" />
                <p className="text-muted-foreground">
                  Let's get in touch! We're just a message away.
                </p>
              </div>

              <motion.button
                onClick={handleWhatsAppClick}
                className="group relative flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-[#128C7E] hover:bg-[#128C7E] transition-all duration-300 text-white w-full shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-lg font-semibold">Chat on WhatsApp</span>
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* Mobile OR Separator */}
          <div className="flex md:hidden items-center justify-center w-full my-2"> {/* Changed from my-4 to my-2 */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-px bg-border"></div>
              <span className="text-muted-foreground font-medium px-2">OR</span>
              <div className="w-12 h-px bg-border"></div>
            </div>
          </div>

          <div className="relative">
            {/* "Prefer email instead?" heading */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 mb-4"
            >
              <Mail className="w-6 h-6 text-primary" />
              <p className="text-lg text-muted-foreground">Prefer email instead? Fill out the form below</p>
            </motion.div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full flex items-center justify-center md:justify-start md:-left-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-border"></div>
                <span className="text-muted-foreground font-medium px-2">
                  
                </span>
                <div className="w-12 h-px bg-border"></div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card/50 p-6 rounded-lg border border-border" // Removed backdrop-blur-sm here
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile</FormLabel>
                        <FormControl>
                          <Input placeholder="Your mobile number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
