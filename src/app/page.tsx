
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { FeatureCard } from "@/components/feature-card";
import { HowItWorks } from "@/components/how-it-works";
import { TestimonialSection } from "@/components/testimonial-section";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import { 
  Upload, 
  Zap, 
  Shield, 
  FileCode, 
  Maximize2 
} from "lucide-react";

const queryClient = new QueryClient();

export default function HomePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col">
          <AnimatedBackground intensity="subtle" speed="slow" />
          
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center px-4 pt-32 pb-20">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 animate-fade-in">
                <span className="gradient-text">ColorGradeX</span>
                <span className="block text-3xl md:text-5xl mt-2">Cinematic Color, One Click Away</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-12 animate-fade-in delay-100">
                Transfer stunning tones and color moods from one image to another 
                using AI-free technology powered by advanced LAB color statistics.
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-200">
                <GradientButton asChild size="lg" className="flex items-center gap-2">
                  <Link href="/workspace">
                    <Upload className="w-5 h-5" />
                    <span>Upload Images</span>
                  </Link>
                </GradientButton>
                <GradientButton 
                  asChild 
                  variant="outline" 
                  size="lg"
                  gradientFrom="from-gradients-purple"
                  gradientTo="to-gradients-blue"
                  className="bg-white"
                >
                  <Link href="/about">Learn More</Link>
                </GradientButton>
              </div>
            </div>
          </section>
          
          {/* Features Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in">
                <span className="gradient-text">Why Choose ColorGradeX?</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard 
                  icon={Zap}
                  title="Lightning Fast"
                  description="Process images in seconds without the overhead of machine learning models."
                  delay={100}
                />
                <FeatureCard 
                  icon={Shield}
                  title="Privacy-Focused"
                  description="All processing happens locally in your browser. Your images never leave your device."
                  delay={200}
                />
                <FeatureCard 
                  icon={FileCode}
                  title="OpenCV Powered"
                  description="Built on reliable, industry-standard OpenCV technology for consistent results."
                  delay={300}
                />
                <FeatureCard 
                  icon={Maximize2}
                  title="Preserves Detail"
                  description="Maintains the original image details while only transferring color characteristics."
                  delay={400}
                />
                <FeatureCard 
                  icon={<Upload className="h-5 w-5 text-primary" />}
                  title="Batch Processing"
                  description="Apply the same color grade to multiple images with our intuitive batch workflow."
                  delay={500}
                />
                <FeatureCard 
                  icon={<Zap className="h-5 w-5 text-primary" />}
                  title="Intensity Control"
                  description="Fine-tune the effect with our precision slider to get the perfect balance."
                  delay={600}
                />
              </div>
            </div>
          </section>
          
          {/* How It Works Section */}
          <HowItWorks />
          
          {/* Testimonials */}
          <TestimonialSection />
          
          {/* CTA Section */}
          <CallToAction />
          
          {/* Footer */}
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
