import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Star, Heart, Users, Award } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingOrderButton } from "@/components/layout/FloatingOrderButton";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Heart, value: "50+", label: "Menu Items" },
  { icon: Award, value: "4.8", label: "Google Rating" },
  { icon: Clock, value: "5", label: "Years of Excellence" },
];

const values = [
  {
    title: "Quality First",
    description: "We never compromise on the quality of our ingredients. From Belgian chocolate to French butter, every component is carefully selected.",
  },
  {
    title: "Artisan Craft",
    description: "Each pastry is handcrafted by our skilled bakers who bring years of experience and passion to every creation.",
  },
  {
    title: "Fresh Daily",
    description: "We bake fresh every morning to ensure you always get the perfect flaky, buttery texture in every bite.",
  },
  {
    title: "Community Love",
    description: "We're not just a café – we're a gathering place for coffee lovers, pastry enthusiasts, and friends.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 40%, hsl(var(--accent) / 0.4) 0%, transparent 50%)`,
              }}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Our Story
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
                Where Every Bite Tells a Story
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La Farine was born from a simple dream – to bring the authentic taste of 
                French patisserie to Nagpur. Our name, meaning "The Flour" in French, 
                represents our deep respect for the fundamental craft of baking.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  From a Dream to Your Table
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2020, La Farine started as a small corner café with a big vision. 
                    Our founder, inspired by years of exploring Parisian bakeries, wanted to create 
                    a space where the art of French baking meets Indian hospitality.
                  </p>
                  <p>
                    Today, we've grown into Nagpur's beloved patisserie, serving thousands of 
                    happy customers who share our passion for exceptional pastries and perfect coffee.
                  </p>
                  <p>
                    Every morning, our bakers arrive before dawn to prepare fresh croissants, 
                    pain au chocolat, and an array of delights that make breakfast worth waking up for.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="rounded-2xl bg-gradient-to-br from-pastry to-secondary aspect-square flex items-center justify-center shadow-medium">
                    <span className="text-7xl">🥐</span>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-secondary to-blush aspect-[4/3] flex items-center justify-center shadow-medium">
                    <span className="text-6xl">🎂</span>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl bg-gradient-to-br from-blush to-secondary aspect-[4/3] flex items-center justify-center shadow-medium">
                    <span className="text-6xl">☕</span>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-secondary to-pastry aspect-square flex items-center justify-center shadow-medium">
                    <span className="text-7xl">🧁</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Our Values
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                The principles that guide everything we do at La Farine.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-soft border border-border/50"
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visit Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Visit Us Today
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Experience the warmth of La Farine. We're waiting to serve you 
                the perfect cup of coffee and your favorite pastry.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Laxminagar, Nagpur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>+91 88067 54042</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>8 AM - 10 PM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingOrderButton />
    </div>
  );
};

export default About;
