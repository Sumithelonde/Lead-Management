import { motion } from "framer-motion";
import { ChefHat, Leaf, Clock, Award } from "lucide-react";

const features = [
  {
    icon: ChefHat,
    title: "Chef-Crafted",
    description: "Every recipe is perfected by our master pastry chefs with years of French culinary training.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source only the finest premium ingredients, from Belgian chocolate to French butter.",
  },
  {
    icon: Clock,
    title: "Baked Daily",
    description: "Our pastries are baked fresh every morning, ensuring you get the perfect flaky texture.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in pastry making and café ambience across the region.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Why La Farine
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Crafted with Passion
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Experience the difference that dedication and quality make in every bite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
