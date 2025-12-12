import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Star } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-medium aspect-[3/4] relative"
              >
                <img 
                  src="Images\Classic French Toast.jpeg" 
                  alt="Fresh croissant with coffee"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-medium aspect-[3/4] mt-8 relative"
              >
                <img 
                  src="Images\Classic Milk Tea.jpeg" 
                  alt="French toast with syrup"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-elevated border border-border"
            >
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="font-display text-2xl font-bold">4.8</span>
              </div>
              <p className="text-xs text-muted-foreground">Customer Rating</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              A Taste of French Elegance in Nagpur
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              La Farine Patisserie & Café brings the timeless art of French baking to Nagpur. 
              Our name, meaning "The Flour" in French, represents our commitment to the fundamental 
              craft of pastry-making – where simple, quality ingredients transform into extraordinary delights.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From buttery croissants to artisan coffees, every item on our menu is crafted with 
              passion and precision, creating moments of joy for our guests.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              <a 
                href="https://www.google.com/maps/place/La+Farine+patisserie+and+cafe/@21.1248825,79.0567512,17z/data=!4m15!1m8!3m7!1s0x3bd4bfb969670c8d:0x118eb3e477af864a!2sLa+Farine+patisserie+and+cafe!8m2!3d21.1248825!4d79.0593261!10e9!16s%2Fg%2F11ghlp90d4!3m5!1s0x3bd4bfb969670c8d:0x118eb3e477af864a!8m2!3d21.1248825!4d79.0593261!16s%2Fg%2F11ghlp90d4?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary/70 transition-colors cursor-pointer group"
              >
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground group-hover:text-accent transition-colors">Visit Us</p>
                  <p className="text-sm text-muted-foreground">
                    Shraddhanand Chowk, opposite A Square Building, Laxminagar, Nagpur 440022
                  </p>
                </div>
              </a>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Call Us</p>
                    <p className="text-sm text-muted-foreground">+91 88067 54042</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Hours</p>
                    <p className="text-sm text-muted-foreground">8 AM - 10 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
