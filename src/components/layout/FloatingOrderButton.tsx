import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingOrderButton() {
  const handleOrderClick = () => {
    window.open('https://www.zomato.com/nagpur/la-farine-patisserie-and-cafe-bajaj-nagar', '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 md:hidden"
    >
      <Button
        onClick={handleOrderClick}
        variant="warm"
        size="lg"
        className="rounded-full shadow-elevated gap-2 px-6"
      >
        <ShoppingBag className="w-5 h-5" />
        Order
      </Button>
    </motion.div>
  );
}
