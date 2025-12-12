import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BakeryScene } from "@/components/3d/BakeryScene";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--accent) / 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, hsl(var(--primary) / 0.2) 0%, transparent 40%),
                             radial-gradient(circle at 60% 80%, hsl(var(--accent) / 0.25) 0%, transparent 45%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-secondary-foreground">
                Freshly Baked Daily
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              Artisan Delights,{" "}
              <span className="text-primary relative">
                Crafted
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-accent"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              With Love
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Welcome to La Farine, where every croissant is a masterpiece and every coffee tells a story. 
              Experience the warmth of authentic French patisserie in the heart of Nagpur.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild variant="hero" size="xl">
                <Link to="/menu" className="gap-2">
                  Explore Menu
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl"
                onClick={() => window.open('https://www.zomato.com/nagpur/la-farine-patisserie-and-cafe-bajaj-nagar', '_blank')}
              >
                Order Now
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "50+", label: "Menu Items" },
                { value: "4.8", label: "Rating" },
                { value: "₹350", label: "For Two" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <BakeryScene />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full bg-primary/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
