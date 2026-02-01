"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Browse Tours", href: "/tours" },
      { label: "About Us", href: "/about" },
      { label: "Become a Guide", href: "/become-a-guide" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help-center" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];
export const footerContacts = [
  {
    icon: Mail,
    value: "hello@tourmate.com",
  },
  {
    icon: Phone,
    value: "+1 (555) 123-4567",
  },
  {
    icon: MapPin,
    value: "San Francisco, CA 94105",
  },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">T</span>
              </div>
              <span className="text-lg font-bold">TourMate</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover unforgettable adventures with expert local guides
              worldwide.
            </p>
          </div>

          {/* Quick Links */}

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>

              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              {footerContacts.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <Icon size={16} />
                    <span>{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 TourMate. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition">
              Facebook
            </Link>
            <Link href="#" className="hover:text-foreground transition">
              Twitter
            </Link>
            <Link href="#" className="hover:text-foreground transition">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
