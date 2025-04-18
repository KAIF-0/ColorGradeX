import { AnimatedBackground } from "@/components/ui/animated-background";
import { GlassCard } from "@/components/ui/glass-card";
import { Navbar } from "@/components/navbar";
import {
  ArrowRight,
  Zap,
  Shield,
  Clock,
  FileCode,
  Maximize2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground intensity="subtle" speed="slow" />
      <Navbar />

      <main className="flex-1 pt-32 px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <section className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold font-heading animate-fade-in mb-6">
              <span className="gradient-text">About ColorGradeX</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-100">
              A powerful tool that lets you transfer color grading from one
              image to another using LAB color statistics.
            </p>
          </section>

          {/* How it Works */}
          <GlassCard className="p-8 mb-12 animate-fade-in delay-200">
            <h2 className="text-2xl font-semibold mb-8 font-heading text-center">
              How It Works
            </h2>

            <div className="relative">
              {/* Flow line */}
              {/* <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-gradients-purple via-gradients-blue to-gradients-green hidden lg:block"></div> */}

              {/* Steps */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center relative">
                  <div className="w-12 h-12 rounded-full bg-gradients-purple flex items-center justify-center mb-4 z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Reference Analysis
                  </h3>
                  <div className="text-sm text-muted-foreground flex">
                    <p>
                      {" "}
                      ColorGradeX analyzes the reference image in LAB color
                      space to extract its statistical color profile.{" "}
                    </p>
                    <span>
                      <ArrowRight className="text-primary size-8 hidden lg:block" />
                    </span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center relative">
                  <div className="w-12 h-12 rounded-full bg-gradients-blue flex items-center justify-center mb-4 z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Color Mapping</h3>
                  <div className="text-sm text-muted-foreground flex">
                    <p>
                      The algorithm creates a precise color transfer function
                      that maps target image colors to reference colors.
                    </p>
                    <span>
                      <ArrowRight className="text-primary h-8 w-8 hidden lg:block" />
                    </span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gradients-green flex items-center justify-center mb-4 z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Smart Application
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    The color profile is intelligently applied to your target
                    image, preserving details while transferring mood.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Features */}
          <h2 className="text-2xl font-semibold mb-8 font-heading text-center animate-fade-in delay-300">
            Why Choose ColorGradeX?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Feature 1 */}
            <GlassCard className="p-6 animate-fade-in delay-400 hover-scale">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Process images in seconds without the overhead of machine
                learning models.
              </p>
            </GlassCard>

            {/* Feature 2 */}
            <GlassCard className="p-6 animate-fade-in delay-500 hover-scale">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Privacy-Focused</h3>
              <p className="text-sm text-muted-foreground">
                All processing happens locally in your browser. Your images
                never leave your device.
              </p>
            </GlassCard>

            {/* Feature 3 */}
            <GlassCard className="p-6 animate-fade-in delay-600 hover-scale">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileCode className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">OpenCV Powered</h3>
              <p className="text-sm text-muted-foreground">
                Built on reliable, industry-standard OpenCV technology for
                consistent results.
              </p>
            </GlassCard>

            {/* Feature 4 */}
            <GlassCard className="p-6 animate-fade-in delay-700 hover-scale">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Real-time Adjustments
              </h3>
              <p className="text-sm text-muted-foreground">
                Fine-tune the intensity of the color transfer in real-time with
                the interactive slider.
              </p>
            </GlassCard>

            {/* Feature 5 */}
            <GlassCard className="p-6 animate-fade-in delay-800 hover-scale">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Maximize2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Preserves Detail</h3>
              <p className="text-sm text-muted-foreground">
                Maintains the original image details while only transferring
                color characteristics.
              </p>
            </GlassCard>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <p className="text-sm text-textColor-muted">
          &copy; {new Date().getFullYear()} ColorGradeX. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
