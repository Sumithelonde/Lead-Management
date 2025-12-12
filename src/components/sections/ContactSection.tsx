import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            We'd Love to Hear From You
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a question, feedback, or want to place a bulk order? Drop us a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-card border-border"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  required
                  className="bg-card border-border"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more..."
                  rows={5}
                  required
                  className="bg-card border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-5 shadow-soft border border-border/50">
                <MapPin className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-medium text-foreground mb-1">Address</h4>
                <p className="text-sm text-muted-foreground">
                  Shraddhanand Chowk, opposite A Square Building, Laxminagar, Nagpur 440022
                </p>
              </div>
              <div className="bg-card rounded-xl p-5 shadow-soft border border-border/50">
                <Phone className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-medium text-foreground mb-1">Phone</h4>
                <a
                  href="tel:+918806754042"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  +91 88067 54042
                </a>
              </div>
              <div className="bg-card rounded-xl p-5 shadow-soft border border-border/50">
                <Mail className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-medium text-foreground mb-1">Email</h4>
                <a
                  href="mailto:hello@lafarine.cafe"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  hello@lafarine.cafe
                </a>
              </div>
              <div className="bg-card rounded-xl p-5 shadow-soft border border-border/50">
                <Clock className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-medium text-foreground mb-1">Hours</h4>
                <p className="text-sm text-muted-foreground">
                  Mon-Sun: 8AM - 10PM
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-medium h-[250px] bg-muted">
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
            </div>
            <motion.a
              href="https://www.google.com/maps/place/La+Farine+patisserie+and+cafe/@21.1248825,79.0567512,17z/data=!4m15!1m8!3m7!1s0x3bd4bfb969670c8d:0x118eb3e477af864a!2sLa+Farine+patisserie+and+cafe!8m2!3d21.1248825!4d79.0593261!10e9!16s%2Fg%2F11ghlp90d4!3m5!1s0x3bd4bfb969670c8d:0x118eb3e477af864a!8m2!3d21.1248825!4d79.0593261!16s%2Fg%2F11ghlp90d4?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Get Directions
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
