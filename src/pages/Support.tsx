import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="omega-symbol text-5xl mb-6 block">Ω</span>
            
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            
            <p className="text-muted-foreground text-lg mb-12">
              Have questions, feedback, or need help? We're here to assist you.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="card-omega inline-flex flex-col items-center gap-6 p-10"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                  Email Support
                </h2>
                <p className="text-muted-foreground mb-4">
                  Reach out to us directly via email
                </p>
                <a 
                  href="mailto:argeneration.com@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  argeneration.com@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-sm text-muted-foreground"
            >
              We typically respond within 24-48 hours.
            </motion.p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
