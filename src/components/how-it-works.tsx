
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-secondary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in">
          <span className="gradient-text">How It Works</span>
        </h2>
        
        <GlassCard className="p-8 mb-12 animate-fade-in delay-200">
          <div className="relative">
            {/* Flow line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-gradients-purple via-gradients-blue to-gradients-green hidden lg:block"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative">
                <div className="w-12 h-12 rounded-full bg-gradients-purple flex items-center justify-center mb-4 z-10">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Reference Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  ColorGradeX analyzes the reference image in LAB color space to extract its statistical color profile.
                </p>
                <ArrowRight className="absolute top-24 right-0 text-primary h-8 w-8 hidden lg:block" />
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative">
                <div className="w-12 h-12 rounded-full bg-gradients-blue flex items-center justify-center mb-4 z-10">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Color Mapping</h3>
                <p className="text-sm text-muted-foreground">
                  The algorithm creates a precise color transfer function that maps target image colors to reference colors.
                </p>
                <ArrowRight className="absolute top-24 right-0 text-primary h-8 w-8 hidden lg:block" />
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-gradients-green flex items-center justify-center mb-4 z-10">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Smart Application</h3>
                <p className="text-sm text-muted-foreground">
                  The color profile is intelligently applied to your target image, preserving details while transferring mood.
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
