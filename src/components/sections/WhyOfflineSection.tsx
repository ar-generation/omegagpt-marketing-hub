import { motion } from "framer-motion";

const WhyOfflineSection = () => {
  return (
    <section id="why-offline" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-omega-purple/10 rounded-full blur-[100px]" />
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-omega-glow/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="omega-symbol text-5xl mb-6 block animate-glow-pulse">Ω</span>
          
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Why <span className="text-gradient-omega">Offline</span>?
          </h2>

          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              <span className="text-foreground font-medium">Your thoughts stay yours.</span> Most AI tools process your deepest questions, fears, and ideas on remote servers. We built OmegaGPT to run entirely on your device — no cloud, no data leaving your phone.
            </p>
            
            <p className="text-lg leading-relaxed">
              <span className="text-foreground font-medium">AI for everyone.</span> Millions are left behind because of geography, infrastructure, or cost. OmegaGPT works without internet, making AI accessible regardless of location, income, or connectivity.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-omega-card border border-omega-border"
          >
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-foreground font-medium">Private, accessible, owned by you</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyOfflineSection;
