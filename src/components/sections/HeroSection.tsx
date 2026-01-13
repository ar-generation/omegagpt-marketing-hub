import { motion } from "framer-motion";
import StoreButtons from "../StoreButtons";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-background/60 z-0" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-omega-purple/20 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-omega-glow/10 rounded-full blur-[80px] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Free During Early Access</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-omega-glow/10 border border-omega-glow/30 mb-6 ml-2"
            >
              <svg className="w-4 h-4 text-omega-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-sm text-omega-glow font-medium">FIRST Fully Offline AI Chat on iOS & Android</span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="omega-symbol">Ω</span>megaGPT
              <br />
              <span className="text-gradient-omega">100% Offline AI Chat</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Fast. Private. Runs on your device. No cloud. No accounts. No data leaving your phone.
            </p>

            <StoreButtons className="justify-center lg:justify-start" />

            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-muted-foreground">No signup required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-muted-foreground">Works without internet</span>
              </div>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-t from-omega-glow/30 via-omega-purple/20 to-transparent blur-3xl scale-110" />
              
              {/* Phone frame */}
              <div className="relative w-64 sm:w-72 animate-float">
                <div className="bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-background rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-b-2xl z-10" />
                    
                    {/* Screen content */}
                    <div className="aspect-[9/19] bg-gradient-to-b from-omega-dark to-omega-card p-4 pt-8">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-muted-foreground">Offline GPT Chat</span>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                        </div>
                      </div>

                      {/* Chat messages */}
                      <div className="space-y-3">
                        <div className="bg-omega-purple/20 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                          <p className="text-xs text-foreground">What's the best way to learn a new language?</p>
                        </div>
                        <div className="bg-muted/50 rounded-2xl rounded-tr-sm p-3 ml-auto max-w-[85%]">
                          <p className="text-xs text-foreground leading-relaxed">
                            Here are proven methods for language learning:
                            <br /><br />
                            1. Immersion - surround yourself with the language
                            <br />
                            2. Practice daily, even just 15 minutes
                            <br />
                            3. Focus on high-frequency vocabulary first...
                          </p>
                        </div>
                      </div>

                      {/* Input */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-muted/50 rounded-full px-4 py-2.5 flex items-center gap-2">
                          <span className="text-xs text-muted-foreground flex-1">Enter Message...</span>
                          <div className="w-6 h-6 rounded-full bg-primary/80 flex items-center justify-center">
                            <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
