import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { MenuItem } from "@/data/menu";

interface MenuCardProps {
  item: MenuItem;
  index?: number;
}

export function MenuCard({ item, index = 0 }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50"
    >
      {/* Bestseller Badge */}
      {item.isBestseller && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-accent text-accent-foreground px-2.5 py-1 rounded-full text-xs font-medium">
          <Star className="w-3 h-3 fill-current" />
          Bestseller
        </div>
      )}

      {/* Image Placeholder */}
      <div className="relative h-40 bg-gradient-to-br from-secondary to-muted overflow-hidden">
        {item.image ? (
          <>
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                {item.category === "hot-brews" || item.category === "iced-brews" || item.category === "cold-brew"
                  ? "☕"
                  : item.category === "pasta" || item.category === "risotto"
                  ? "🍝"
                  : item.category === "pizza"
                  ? "🍕"
                  : item.category === "burgers"
                  ? "🍔"
                  : item.category === "waffles"
                  ? "🧇"
                  : item.category === "milkshakes" || item.category === "smoothies"
                  ? "🥤"
                  : item.category === "sandwiches"
                  ? "🥪"
                  : "🥐"}
              </span>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {item.name}
          </h3>
          <span className={`flex-shrink-0 w-4 h-4 border-2 ${item.isVeg ? 'border-green-600' : 'border-red-600'} rounded-sm flex items-center justify-center`}>
            <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 min-h-[40px]">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-bold text-foreground">
            ₹{item.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
