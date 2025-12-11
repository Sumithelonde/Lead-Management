import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingOrderButton } from "@/components/layout/FloatingOrderButton";
import { ContactSection } from "@/components/sections/ContactSection";
import { motion } from "framer-motion";

const Contact = () => {
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
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions? We're here to help. Reach out to us anytime.
              </p>
            </motion.div>
          </div>
        </section>

        <ContactSection />

        {/* Full Width Map */}
        <section className="h-[400px] bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0489!2d79.0728!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA4JzQ1LjAiTiA3OcKwMDQnMjIuMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="La Farine Location"
          />
        </section>
      </main>
      <Footer />
      <FloatingOrderButton />
    </div>
  );
};

export default Contact;
