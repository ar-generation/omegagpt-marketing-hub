import { motion } from "framer-motion";
import StoreButtons from "../StoreButtons";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-omega-glow/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="omega-symbol text-6xl mb-6 block">Ω</span>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Chat <span className="text-gradient-omega">Privately</span>?
          </h2>

          <p className="text-lg text-muted-foreground mb-10">
            Private, accessible AI — owned by the user.
          </p>

          <StoreButtons className="justify-center" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Free during early access. No accounts. No credit card.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
