"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/insha-khan-943155222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/inshakhan09_?igsh=ZjJ4OWNsYXBlZWZu", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61551705077024&mibextid=2JQ9oc", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter", isDisabled: true }, // Adding condition for Twitter
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Achievements", href: "#achievements" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSocialClick = (href: string, isDisabled: boolean) => {
    if (isDisabled) {
      // Prevent redirect for Twitter
      return;
    }
    window.open(href, "_blank"); // Opens other social links in a new tab
  };

  return (
    <footer className="bg-muted py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Insha Khan
            </h3>
            <p className="text-muted-foreground">
              Entrepreneur & Business Coach
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default behavior
                    handleSocialClick(social.href, social.isDisabled);
                  }}
                  target={social.isDisabled ? undefined : "_blank"} // Only target="_blank" for links that aren't disabled
                  rel="noopener noreferrer" // Security for links
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>
            Copyright &copy; {new Date().getFullYear()} by Insha Khan. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}