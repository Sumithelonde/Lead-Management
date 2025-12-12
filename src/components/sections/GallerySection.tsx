import { motion } from "framer-motion";

const galleryImages = [
  { image: "Images\\Chamomile Tea.jpg", label: "Chamomile Tea", emoji: "🍞" },
  { image: "Images\\classic french fries.jpeg", label: "Classic Fries", emoji: "🍟" },
  { image: "Images\\Cappuccino.jpg", label: "Cappuccino", emoji: "☕" },
  { image: "Images\\peri peri fries.jpeg", label: "Peri Peri Fries", emoji: "🥐" },
  { image: "Images\\Red Velvet Waffle.jpg", label: "Red Velvet Waffle", emoji: "🧇" },
  { image: "Images\\Pink Sauce Pasta.jpeg", label: "Pink Sauce Pasta", emoji: "🍝" },
  { image: "Images\\BBQ Pulled Nachos.jpeg", label: "BBQ Pulled Nachos", emoji: "🍔" },
  { image: "Images\\Matcha Bubble Tea.jpeg", label: "Matcha Bubble Tea", emoji: "🧋" },
];

export function GallerySection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            A Feast for the Eyes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Take a peek at our delightful creations and cozy café ambience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`${
                  index === 0 || index === 5 ? "aspect-square" : "aspect-square"
                } ${item.image ? '' : 'bg-gradient-to-br from-secondary via-pastry/30 to-blush'} flex items-center justify-center relative`}
              >
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span
                    className={`${
                      index === 0 || index === 5 ? "text-8xl md:text-9xl" : "text-6xl"
                    } transition-transform duration-300 hover:scale-110`}
                  >
                    {item.emoji}
                  </span>
                )}
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-primary-foreground font-medium">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
