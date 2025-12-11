import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuCard } from "@/components/menu/MenuCard";
import { getBestsellers } from "@/data/menu";

export function FeaturedMenu() {
  const bestsellers = getBestsellers().slice(0, 8);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Our Favorites
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Bestselling Delights
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Discover the items our guests can't stop ordering. Each one crafted to perfection.
            </p>
          </div>
          <Button asChild variant="outline" className="gap-2 self-start md:self-auto">
            <Link to="/menu">
              View Full Menu
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bestsellers.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
