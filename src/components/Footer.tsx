"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  Mail,
  Phone,
  MapPin,
  Star,
  Sun,
  Moon,
  Cloud,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 mt-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-primary/5">
        <div className="absolute top-0 left-0 w-full h-full footer-bg">
          <Star
            className="absolute animate-pulse text-primary top-10 left-[10%]"
            size={20}
          />
          <Star
            className="absolute animate-pulse text-secondary top-20 left-[20%]"
            size={16}
          />
          <Star
            className="absolute animate-pulse text-primary top-15 left-[80%]"
            size={24}
          />
          <Sun
            className="absolute animate-spin-slow text-secondary top-10 right-[15%]"
            size={32}
          />
          <Moon
            className="absolute animate-bounce text-primary bottom-20 left-[85%]"
            size={28}
          />
          <Cloud
            className="absolute animate-float text-accent/60 top-[20%] left-[30%]"
            size={40}
          />
          <Cloud
            className="absolute animate-float-delayed text-accent/60 top-[15%] right-[25%]"
            size={32}
          />
        </div>
      </div>

      {/* Wavy Border */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          className="w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L48 8.875C96 17.75 192 35.5 288 42.375C384 49.25 480 45.125 576 37.625C672 30.125 768 19.25 864 22.75C960 26.25 1056 44.125 1152 53.375C1248 62.625 1344 63.25 1392 63.5L1440 63.75V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
            className="fill-primary/10"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Social Section */}
          <div className="col-span-1 md:col-span-4 text-center md:text-left">
            <div className="mb-6 inline-block relative">
              <div className="relative z-10">
                <Link href="/" className="inline-flex gap-2">
                  <Image
                    src="/icon.svg"
                    alt="Help The Children Foundation"
                    width={80}
                    height={60}
                    className="rounded-lg transform transition-transform "
                  />
                  <Image
                    src="/logo-text.svg"
                    alt="Help The Children Foundation"
                    width={220}
                    height={160}
                    className="rounded-lg transform transition-transform "
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  />
                </Link>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-lg opacity-30 blur-lg animate-tilt"></div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto md:mx-0">
              Bringing smiles and hope to children&apos;s faces, one heart at a
              time. 💝
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="transform hover:scale-110 transition-transform p-2 rounded-full bg-card shadow-md hover:shadow-lg hover:bg-accent/10"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links - Playful Cards */}
          <div className="col-span-1 md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {navigationSections.map((section) => (
                <div
                  key={section.title}
                  className="bg-card/80 backdrop-blur-sm rounded-xl p-6 transform hover:-translate-y-1 transition-all hover:shadow-lg border border-border"
                >
                  <h3 className="text-lg font-bold mb-4 text-primary">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.text}>
                        <Link
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                        >
                          <span className="mr-2">{link.icon}</span>
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rainbow Donation Banner */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40 rounded-2xl opacity-20 blur-xl"></div>
          <div
            className="relative bg-card/90 backdrop-blur rounded-2xl p-8 text-center transform  transition-all border border-border"
            data-aos="flip-down"
          >
            <div className="inline-block mb-4">
              <Heart className="text-secondary" size={32} fill="currentColor" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Us in Making Dreams Come True!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every donation creates a ripple of hope that transforms
              children&apos;s lives. Be part of their journey towards a brighter
              future.
            </p>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full transform hover:scale-105 transition-all"
            >
              <Link href="/donate">
                <Heart className="inline-block mr-2" size={20} /> Spread the
                Love
              </Link>
            </Button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Help The Children Foundation. Made with
            💖 for children everywhere.
          </p>
        </div>
      </div>

      {/* Add required styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes tilt {
          0%,
          100% {
            transform: rotate(-1deg);
          }
          50% {
            transform: rotate(1deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-tilt {
          animation: tilt 4s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

// Navigation sections data
const navigationSections = [
  {
    title: "Discover Our World",
    links: [
      { text: "About Us", href: "/about", icon: "🌟" },
      { text: "Our Programs", href: "/education", icon: "📚" },
      { text: "Success Stories", href: "/impact", icon: "🌈" },
      { text: "Gallery", href: "/gallery", icon: "🎨" },
    ],
  },
  {
    title: "Join Our Mission",
    links: [
      { text: "Donate Now", href: "/donate", icon: "❤️" },
      { text: "Sponsor a Child", href: "/sponsor-a-child", icon: "🤝" },
      { text: "Volunteer", href: "/team", icon: "🌟" },
      { text: "Contact Us", href: "/contact", icon: "✉️" },
    ],
  },
  {
    title: "Get in Touch",
    links: [
      {
        text: "74/1-B, Malibagh Chowdhurypara, Malibadh",
        href: "/contact",
        icon: "📍",
      },
      { text: "Dhaka, Bangladesh", href: "/contact", icon: "🏠" },
      { text: "+880 123-456-7890", href: "tel:+880123456789", icon: "📞" },
      {
        text: "info@hcf.org",
        href: "mailto:info@hcf.org",
        icon: "📧",
      },
    ],
  },
];

// Social media links data
const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: <Facebook size={20} className="text-primary" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter size={20} className="text-primary" />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram size={20} className="text-secondary" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin size={20} className="text-primary" />,
  },
];

export default Footer;
