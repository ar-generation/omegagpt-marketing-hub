import { motion } from "framer-motion";
import { Shield, Wifi, Lock, Zap, Smartphone, Globe } from "lucide-react";

const advantages = [
  {
    icon: Wifi,
    title: "100% Offline",
    description: "No internet required",
  },
  {
    icon: Lock,
    title: "No Accounts",
    description: "No sign-ups or tracking",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Data stays on device",
  },
  {
    icon: Zap,
    title: "Fast On-Device",
    description: "Instant AI responses",
  },
  {
    icon: Smartphone,
    title: "Secure by Design",
    description: "No cloud, no breaches",
  },
  {
    icon: Globe,
    title: "Built-in Templates",
    description: "Summaries · Translation · Tasks",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const WhyOfflineSection = () => {
  return (
    <section id="why-omegagpt" className="py-28 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - clearly secondary to hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-3">
            Why <span className="text-gradient-omega">OmegaGPT</span>?
          </h2>
          <p className="text-muted-foreground text-sm">
            AI that respects your privacy
          </p>
        </motion.div>

        {/* Feature Grid - cleaner, more space */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card/50 border border-border/30 rounded-xl p-5 text-center hover:border-border/50 transition-colors"
            >
              <div className="w-9 h-9 mx-auto rounded-lg bg-muted/50 flex items-center justify-center mb-3">
                <advantage.icon className="w-4 h-4 text-foreground/70" />
              </div>
              <h3 className="font-display font-medium text-foreground text-sm mb-1">
                {advantage.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Simple tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center text-muted-foreground/70 text-xs mt-10"
        >
          AI for everyone — accessible regardless of location or income
        </motion.p>
      </div>
    </section>
  );
};

export default WhyOfflineSection;