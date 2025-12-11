import { motion } from "framer-motion";
import type { MenuCategory } from "@/data/menu";
import { MenuCard } from "./MenuCard";

interface CategorySectionProps {
  category: MenuCategory;
}

export function CategorySection({ category }: CategorySectionProps) {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-6"
      >
        <span className="text-3xl">{category.icon}</span>
        <h2 className="font-display text-2xl font-bold text-foreground">
          {category.name}
        </h2>
        <div className="flex-1 h-px bg-border ml-4" />
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {category.items.map((item, index) => (
          <MenuCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
