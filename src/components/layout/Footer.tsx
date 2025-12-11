import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-display text-xl font-bold">LF</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">La Farine</h3>
                <p className="text-sm text-primary-foreground/70">Patisserie & Café</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Crafting moments of joy with freshly baked delights and premium coffee since 2020.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Our Menu", path: "/menu" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  Shraddhanand Chowk, opposite A Square Building, Laxminagar, Nagpur 440022
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                <a
                  href="tel:+918806754042"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 88067 54042
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <a
                  href="mailto:hello@lafarine.cafe"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  hello@lafarine.cafe
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 text-accent" />
                <div className="text-sm">
                  <p className="text-primary-foreground">Mon - Fri</p>
                  <p className="text-primary-foreground/70">8:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 text-accent" />
                <div className="text-sm">
                  <p className="text-primary-foreground">Sat - Sun</p>
                  <p className="text-primary-foreground/70">9:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} La Farine Patisserie & Café. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Cost for two: ₹350 approx
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
