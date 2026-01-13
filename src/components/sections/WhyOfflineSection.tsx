import { motion } from "framer-motion";
import { Shield, Wifi, Lock, Zap, Smartphone, MessageSquare, BookOpen, FileText, Languages, Pencil, ListTodo } from "lucide-react";

const advantages = [
  {
    icon: Wifi,
    title: "100% Offline",
    description: "Works anywhere, anytime — no internet required.",
  },
  {
    icon: Lock,
    title: "No Accounts",
    description: "No sign-ups, no servers, no tracking.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your conversations never leave your device.",
  },
  {
    icon: Zap,
    title: "Fast On-Device",
    description: "Optimized AI models for instant responses.",
  },
  {
    icon: Smartphone,
    title: "Secure by Design",
    description: "No cloud means no data breaches.",
  },
];

const templates = [
  { icon: MessageSquare, name: "No template" },
  { icon: BookOpen, name: "Explain Simply" },
  { icon: FileText, name: "Text Summary" },
  { icon: Languages, name: "Translator" },
  { icon: Pencil, name: "Smart Notes" },
  { icon: ListTodo, name: "Task Planning" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const WhyOfflineSection = () => {
  return (
    <section id="why-omegagpt" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-omega-purple/5 to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-omega-purple/10 rounded-full blur-[100px]" />
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-omega-glow/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="omega-symbol text-4xl mb-4 block animate-glow-pulse">Ω</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient-omega">OmegaGPT</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI that respects your privacy, works on your terms, and is accessible to everyone.
          </p>
        </motion.div>

        {/* FIRST Highlight Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-omega-purple/20 via-omega-glow/10 to-omega-purple/20 border border-omega-glow/30">
            <svg className="w-5 h-5 text-omega-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-foreground font-medium">
              OmegaGPT is the <span className="text-omega-glow font-bold">FIRST</span> fully offline AI chat app available on both iOS and Android.
            </span>
          </div>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card-omega card-omega-hover group text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <advantage.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1 text-sm">
                {advantage.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Templates + Manifesto Row */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Templates Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-omega-purple/20 via-omega-glow/10 to-omega-purple/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-omega-card/80 backdrop-blur-sm rounded-2xl border border-omega-border/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="omega-symbol text-sm">Ω</span>
                </div>
                <div>
                  <span className="font-display font-medium text-foreground block">Templates for Every Task</span>
                  <span className="text-xs text-muted-foreground">Pick a template, OmegaGPT adjusts instantly — offline.</span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {templates.map((template, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-omega-purple/10 border border-omega-border/30 hover:bg-omega-purple/20 transition-colors"
                  >
                    <template.icon className="w-4 h-4 text-omega-purple flex-shrink-0" />
                    <span className="text-xs text-foreground truncate">{template.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div>
              <h3 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Your thoughts stay yours
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Most AI tools process your deepest questions, fears, and ideas on remote servers. OmegaGPT runs entirely on your device — no cloud, no data leaving your phone.
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                AI for everyone
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Millions are left behind because of geography, infrastructure, or cost. OmegaGPT works without internet, making AI accessible regardless of location, income, or connectivity.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-omega-card border border-omega-border">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-foreground font-medium text-sm">Private, accessible, owned by you</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyOfflineSection;
