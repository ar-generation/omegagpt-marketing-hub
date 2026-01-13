import { motion } from "framer-motion";
import { MessageSquare, BookOpen, FileText, HelpCircle, Languages, Pencil, ListTodo } from "lucide-react";

const templates = [
  { icon: MessageSquare, name: "No template", description: "Free-form conversation" },
  { icon: BookOpen, name: "Explain Simply", description: "Break down complex topics" },
  { icon: FileText, name: "Text Summary", description: "Condense long content" },
  { icon: HelpCircle, name: "Q&A on Text", description: "Answer questions about text" },
  { icon: Languages, name: "Translator", description: "Translate between languages" },
  { icon: Pencil, name: "Smart Notes", description: "Organize your thoughts" },
  { icon: ListTodo, name: "Task Planning", description: "Plan and prioritize tasks" },
];

const TemplatesSection = () => {
  return (
    <section id="templates" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Templates for <span className="text-gradient-omega">Every Task</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg">
              Pick a template and OmegaGPT adjusts the response style instantly — all processed offline on your device.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Instant switching</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>100% offline</span>
              </div>
            </div>
          </motion.div>

          {/* Templates Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-omega-purple/20 via-omega-glow/10 to-omega-purple/20 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative bg-omega-card/80 backdrop-blur-sm rounded-2xl border border-omega-border/50 p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="omega-symbol text-sm">Ω</span>
                </div>
                <span className="font-display font-medium text-foreground">Select Template</span>
              </div>

              <div className="space-y-2">
                {templates.map((template, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="template-card"
                  >
                    <div className="w-9 h-9 rounded-lg bg-omega-purple/20 flex items-center justify-center flex-shrink-0">
                      <template.icon className="w-4 h-4 text-omega-purple" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground text-sm">{template.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{template.description}</div>
                    </div>
                    <svg className="w-4 h-4 text-muted-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
