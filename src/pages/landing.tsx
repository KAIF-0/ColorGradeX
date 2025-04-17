
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Navbar } from "@/components/navbar";
import { UploadBox } from "@/components/upload-box";
import { ArrowRight, Image as ImageIcon, Sparkles, Zap, PaintBucket, Clock, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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

  const features = [
    {
      title: "Real-time Processing",
      description: "See color transformations applied instantly as you adjust intensity levels",
      icon: <Zap className="w-10 h-10 text-primary p-2 bg-primary/10 rounded-xl" />
    },
    {
      title: "Non-Destructive Edits",
      description: "Apply color grades without permanently altering your original images",
      icon: <PaintBucket className="w-10 h-10 text-primary p-2 bg-primary/10 rounded-xl" />
    },
    {
      title: "Lab Color Science",
      description: "Professional-grade color transfers using advanced LAB color statistics",
      icon: <Sparkles className="w-10 h-10 text-primary p-2 bg-primary/10 rounded-xl" />
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Upload Images",
      description: "Choose a reference image with your desired color grade and a target image to apply it to"
    },
    {
      number: "02",
      title: "Adjust Intensity",
      description: "Use the intuitive slider to fine-tune how strongly the color grade is applied"
    },
    {
      number: "03",
      title: "Download Result",
      description: "Get your professionally color-graded image in seconds, ready to use"
    }
  ];

  const testimonials = [
    {
      quote: "ColorGradeX helped me maintain consistent styling across my entire photography portfolio in minutes!",
      author: "Sophia Chen",
      role: "Professional Photographer"
    },
    {
      quote: "As a filmmaker, I need a reliable way to match scenes shot in different lighting. This tool is a lifesaver.",
      author: "Marcus Rivera",
      role: "Independent Filmmaker"
    },
    {
      quote: "The speed and accuracy of the color matching is remarkable. Better than solutions costing hundreds more.",
      author: "Jamie Scott",
      role: "Digital Artist"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground intensity="medium" speed="slow" />
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 px-4">
          <div className="max-w-6xl mx-auto text-center">
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
          </div>
        </section>
        
        {/* Upload Section */}
        <section id="upload-section" className="py-32 px-4">
          <GlassCard className="p-8 animate-fade-in delay-500 max-w-5xl mx-auto">
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
        
        {/* Features Section */}
        <section className="py-24 px-4 bg-white/50 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                <span className="gradient-text">Powerful</span> Features
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-textColor-light">
                Our technology ensures perfect color grading in seconds, no AI or machine learning required.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <GlassCard 
                  key={index} 
                  className="p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-4 animate-pulse-glow">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-textColor-light">{feature.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                <span className="gradient-text">How It</span> Works
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-textColor-light">
                ColorGradeX makes professional color grading accessible to everyone in three simple steps.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/30 via-accent/50 to-primary/30"></div>
              
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative flex flex-col items-center text-center animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-lg mb-6 relative z-10">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-textColor-light">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-24 px-4 bg-white/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                <span className="gradient-text">What Users</span> Say
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-textColor-light">
                Join thousands of satisfied creatives already using ColorGradeX.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <GlassCard 
                  key={index} 
                  className="p-8 flex flex-col"
                  opacity={index === 1 ? "heavy" : "medium"}
                >
                  <div className="mb-6 text-primary">
                    <Star className="w-8 h-8 fill-current" />
                    <Star className="w-8 h-8 fill-current" />
                    <Star className="w-8 h-8 fill-current" />
                    <Star className="w-8 h-8 fill-current" />
                    <Star className="w-8 h-8 fill-current" />
                  </div>
                  <p className="text-lg italic mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-textColor-muted">{testimonial.role}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 px-4">
          <GlassCard className="max-w-5xl mx-auto p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Ready to Transform Your Images?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-textColor-light">
              Start creating beautifully consistent imagery in seconds with our professional-grade color grading tool.
            </p>
            <GradientButton 
              size="lg"
              className="group"
              onClick={() => document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </GradientButton>
          </GlassCard>
        </section>
      </main>
      
      {/* Enhanced Footer */}
      <footer className="py-12 px-4 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4 gradient-text">ColorGradeX</h3>
              <p className="text-sm text-textColor-muted mb-4">
                Professional color grading made simple. Transform your images with just a few clicks.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-textColor-light hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="text-textColor-light hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="text-textColor-light hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="text-textColor-light hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="text-textColor-light hover:text-primary transition-colors">About</a></li>
                <li><a href="/help" className="text-textColor-light hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="text-textColor-light hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-textColor-light hover:text-primary transition-colors">Tutorials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-textColor-light hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="text-textColor-light hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="text-textColor-light hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="text-textColor-light hover:text-primary transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-textColor-muted">
            <p>&copy; {new Date().getFullYear()} ColorGradeX. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
