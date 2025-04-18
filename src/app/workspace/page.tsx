
"use client";

import { useState } from "react";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { GlassCard } from "@/components/ui/glass-card";
import { IntensitySlider } from "@/components/intensity-slider";
import { GradientButton } from "@/components/ui/gradient-button";
import { Navbar } from "@/components/navbar";
import { UploadBox } from "@/components/upload-box";
import { ArrowLeft, Download, RefreshCw } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function WorkspacePage() {
  const [referenceImage, setReferenceImage] = useState<string | null>(null);
  const [targetImage, setTargetImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [intensity, setIntensity] = useState(100);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleIntensityChange = (value: number) => {
    setIntensity(value);
    // In a real app, we would reprocess the image with the new intensity
    console.log("New intensity:", value);
  };

  const handleReferenceUpload = (imageUrl: string) => {
    setReferenceImage(imageUrl);
  };

  const handleTargetUpload = (imageUrl: string) => {
    setTargetImage(imageUrl);
  };

  const processImages = () => {
    if (!referenceImage || !targetImage) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      // In a real app, this would call an API to process the images
      setResultImage(targetImage); // Just using the target image as the result for demo
      setIsProcessing(false);
    }, 1500);
  };

  const resetWorkspace = () => {
    setReferenceImage(null);
    setTargetImage(null);
    setResultImage(null);
    setIntensity(100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground intensity="subtle" speed="slow" />
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center text-sm hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold gradient-text">ColorGradeX Workspace</h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Reference Image */}
            <GlassCard className="p-6 animate-fade-in">
              <h2 className="text-lg font-semibold mb-4">Reference Image</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Upload the image with the color grading you want to copy.
              </p>
              <UploadBox 
                onImageUpload={handleReferenceUpload} 
                image={referenceImage}
                className="h-60 md:h-80"
              />
            </GlassCard>
            
            {/* Target Image */}
            <GlassCard className="p-6 animate-fade-in delay-100">
              <h2 className="text-lg font-semibold mb-4">Target Image</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Upload the image you want to apply the color grading to.
              </p>
              <UploadBox 
                onImageUpload={handleTargetUpload} 
                image={targetImage}
                className="h-60 md:h-80"
              />
            </GlassCard>
            
            {/* Result Image */}
            <GlassCard className="p-6 animate-fade-in delay-200">
              <h2 className="text-lg font-semibold mb-4">Result</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Your processed image will appear here.
              </p>
              {resultImage ? (
                <div className="relative h-60 md:h-80 rounded-md overflow-hidden bg-muted flex items-center justify-center">
                  <img 
                    src={resultImage} 
                    alt="Processed result" 
                    className="object-contain w-full h-full"
                  />
                  <div className="absolute top-2 right-2">
                    <GradientButton 
                      size="icon"
                      className="rounded-full w-8 h-8"
                      onClick={() => {/* Download logic */}}
                    >
                      <Download className="h-4 w-4" />
                    </GradientButton>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-60 md:h-80 rounded-md bg-muted">
                  <p className="text-muted-foreground text-sm">
                    {isProcessing ? "Processing..." : "Upload both images and click 'Apply Color Grade'"}
                  </p>
                </div>
              )}
            </GlassCard>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <IntensitySlider 
                onChange={handleIntensityChange} 
                defaultValue={intensity}
              />
            </div>
            
            <div className="flex flex-col lg:flex-row gap-3 justify-center lg:justify-end">
              <GradientButton
                onClick={processImages}
                disabled={!referenceImage || !targetImage || isProcessing}
                className="flex-1"
              >
                Apply Color Grade
              </GradientButton>
              
              <GradientButton
                onClick={resetWorkspace}
                variant="outline"
                className="flex-1 flex items-center justify-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Reset</span>
              </GradientButton>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
