import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
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
              Privacy Policy
            </h1>

            <div className="prose prose-invert max-w-none">
              <div className="card-omega mb-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At OmegaGPT, we take your privacy seriously. Our app is designed from the ground up with privacy as a core principle.
                </p>
                
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Data Collection
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-foreground">OmegaGPT does not collect any personal data.</strong> All conversations and data processing happen entirely on your device. Nothing is sent to external servers.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  How It Works
                </h2>
                <ul className="text-muted-foreground space-y-2 mb-6 list-disc list-inside">
                  <li>All AI processing happens locally on your device</li>
                  <li>No account creation required</li>
                  <li>No cloud storage of conversations</li>
                  <li>No analytics or tracking</li>
                  <li>No third-party data sharing</li>
                </ul>

                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Since we don't collect any data, there's nothing to request, modify, or delete. Your conversations exist only on your device and are under your complete control.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Full Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For our complete privacy policy, please visit:{" "}
                  <a 
                    href="https://docs.google.com/document/d/1_NH91DLTKG0_5r-0Jv-13V07jOrCGpDi3aaMGkDWICU/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Full Privacy Policy Document
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

export default Privacy;
