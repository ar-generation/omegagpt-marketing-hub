import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl font-bold text-foreground mb-8">
              Terms of Use
            </h1>

            <div className="prose prose-invert max-w-none">
              <div className="card-omega mb-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  By using OmegaGPT, you agree to the following terms and conditions.
                </p>
                
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  By downloading or using OmegaGPT, you agree to be bound by these terms. If you do not agree, please do not use the app.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  License
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  OmegaGPT grants you a limited, non-exclusive, non-transferable license to use the app for personal, non-commercial purposes.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  User Responsibilities
                </h2>
                <ul className="text-muted-foreground space-y-2 mb-6 list-disc list-inside">
                  <li>Use the app in compliance with applicable laws</li>
                  <li>Do not attempt to reverse engineer the app</li>
                  <li>Do not use the app for illegal activities</li>
                  <li>Understand that AI responses are for informational purposes only</li>
                </ul>

                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Disclaimer
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  OmegaGPT is provided "as is" without warranties of any kind. AI-generated responses may contain errors and should not be relied upon for medical, legal, or financial advice.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Full Terms of Use
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For our complete terms of use, please visit:{" "}
                  <a 
                    href="https://docs.google.com/document/d/1u6T3_MP2m2j0IGFJGdcaw3WuIIQzykx2F6jan0taQqk/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Full Terms of Use Document
                  </a>
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                Last updated: January 2025
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
