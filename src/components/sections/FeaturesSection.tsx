import { motion } from "framer-motion";
import { Shield, Wifi, Lock, Zap, Smartphone } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "100% Offline",
    description: "Works anywhere, anytime — no internet required. Your AI assistant is always available.",
  },
  {
    icon: Lock,
    title: "No Accounts",
    description: "No sign-ups, no servers, no tracking. Just open and start chatting instantly.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your conversations never leave your device. Complete privacy by design.",
  },
  {
    icon: Zap,
    title: "Fast On-Device",
    description: "Optimized AI models run directly on your phone for instant responses.",
  },
  {
    icon: Smartphone,
    title: "Secure by Design",
    description: "No cloud means no data breaches. Your thoughts stay yours forever.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-omega-purple/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient-omega">OmegaGPT</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI that respects your privacy and works on your terms.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card-omega card-omega-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
