
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Navbar } from "@/components/navbar";
import { UploadBox } from "@/components/upload-box";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();
  const [referenceImage, setReferenceImage] = useState<File | null>(null);
  const [targetImage, setTargetImage] = useState<File | null>(null);

  const handleReferenceUpload = (file: File) => {
    setReferenceImage(file);
  };

  const handleTargetUpload = (file: File) => {
    setTargetImage(file);
  };

  const handleContinue = () => {
    if (referenceImage && targetImage) {
      // In a real app, we would save these images to state/context
      // For now, navigate to the workspace page
      navigate("/workspace");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground intensity="medium" speed="slow" />
      <Navbar />
      
      <main className="flex-1 pt-32 px-4">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading animate-fade-in">
            <span className="gradient-text">ColorGradeX</span> – Cinematic Color, One Click Away
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 animate-fade-in delay-150 text-textColor-light">
            Transfer stunning tones and color moods from one image to another using AI-free tech.
          </p>
          
          <GradientButton 
            size="lg"
            className="animate-fade-in delay-300 group"
            onClick={() => document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Upload Images
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </GradientButton>
        </section>
        
        {/* Upload Section */}
        <section id="upload-section" className="max-w-5xl mx-auto mt-32 mb-32">
          <GlassCard className="p-8 animate-fade-in delay-500">
            <h2 className="text-2xl font-bold text-center mb-8 font-heading">
              Upload Your Images
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <UploadBox
                label="Reference Image"
                onImageUpload={handleReferenceUpload}
              />
              
              <UploadBox
                label="Target Image"
                onImageUpload={handleTargetUpload}
              />
            </div>
            
            {referenceImage && targetImage && (
              <div className="mt-8 text-center animate-fade-in">
                <GradientButton onClick={handleContinue}>
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </GradientButton>
              </div>
            )}
          </GlassCard>
        </section>
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
