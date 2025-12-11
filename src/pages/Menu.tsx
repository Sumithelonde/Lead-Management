import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingOrderButton } from "@/components/layout/FloatingOrderButton";
import { CategorySection } from "@/components/menu/CategorySection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { menuData, type MenuCategory } from "@/data/menu";

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories: MenuCategory[] = menuData
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0)
    .filter((category) => !activeCategory || category.id === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Our Menu
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From freshly baked pastries to artisan coffees, discover our complete 
                collection of handcrafted delights.
              </p>

              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-card border-border rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-[72px] z-30 bg-background/95 backdrop-blur-md border-b border-border py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeCategory === null ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setActiveCategory(null)}
                  className="flex-shrink-0 rounded-full transition-all duration-200"
                >
                  <Filter className="w-4 h-4 mr-1" />
                  All
                </Button>
              </motion.div>
              {menuData.map((category) => (
                <motion.div
                  key={category.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={activeCategory === category.id ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setActiveCategory(category.id)}
                    className="flex-shrink-0 rounded-full transition-all duration-200"
                  >
                    {category.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {filteredCategories.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <span className="text-6xl mb-4 block">🔍</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  No items found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria.
                </p>
              </motion.div>
            ) : (
              filteredCategories.map((category) => (
                <CategorySection key={category.id} category={category} />
              ))
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingOrderButton />
    </div>
  );
};

export default Menu;
