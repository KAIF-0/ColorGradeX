import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Navbar } from "@/components/navbar";
import { IntensitySlider } from "@/components/intensity-slider";
import { ArrowLeft, Download, Wand2, RefreshCw } from "lucide-react";

// Sample images - in a real app these would come from state/context
import {
  referenceImageSample,
  targetImageSample,
  resultImageSample,
} from "../assets";

export default function WorkspacePage() {
  const navigate = useNavigate();
  const [intensity, setIntensity] = useState(75);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);

  // Simulate image processing when intensity changes
  useEffect(() => {
    if (resultImage) {
      // In a real app, we would reprocess the image with the new intensity
      // For demo, we'll just use the sample result image with a delay
      setIsProcessing(true);
      const timer = setTimeout(() => {
        setIsProcessing(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [intensity, resultImage]);

  const handleApplyColorGrade = () => {
    setIsProcessing(true);

    // Simulate processing delay
    setTimeout(() => {
      setResultImage(resultImageSample);
      setIsProcessing(false);
    }, 1500);
  };

  const handleDownload = () => {
    // In a real app, this would download the actual result image
    // For demo, we'll just alert
    alert("Downloading result image...");
  };

  const handleStartOver = () => {
    navigate("/");
  };

  const handleIntensityChange = (value: number) => {
    setIntensity(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground intensity="subtle" speed="slow" />
      <Navbar />

      <main className="flex-1 pt-32 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-8">
            <GradientButton
              variant="outline"
              size="sm"
              onClick={() => navigate("/")}
              gradientFrom="from-foreground/10"
              gradientTo="to-foreground/5"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </GradientButton>

            {resultImage && (
              <GradientButton
                variant="ghost"
                size="sm"
                onClick={handleDownload}
                gradientFrom="from-gradients-purple/10"
                gradientTo="to-gradients-blue/10"
              >
                <Download className="mr-2 h-4 w-4" /> Download
              </GradientButton>
            )}
          </div>

          {/* Main Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Reference Image */}
            <GlassCard className="p-4 animate-fade-in">
              <h2 className="text-lg font-semibold mb-4 font-heading">
                Reference Image
              </h2>
              <div className="aspect-square overflow-hidden rounded-lg shadow-md hover-scale">
                <img
                  src={referenceImageSample}
                  alt="Reference"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                    e.currentTarget.classList.add("p-8", "bg-gray-50");
                  }}
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                The color profile to extract
              </p>
            </GlassCard>

            {/* Target Image */}
            <GlassCard className="p-4 animate-fade-in delay-100">
              <h2 className="text-lg font-semibold mb-4 font-heading">
                Target Image
              </h2>
              <div className="aspect-square overflow-hidden rounded-lg shadow-md hover-scale">
                <img
                  src={targetImageSample}
                  alt="Target"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                    e.currentTarget.classList.add("p-8", "bg-gray-50");
                  }}
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                The image to apply color grading to
              </p>
            </GlassCard>

            {/* Result Image */}
            <GlassCard className="p-4 animate-fade-in delay-200">
              <h2 className="text-lg font-semibold mb-4 font-heading">
                Result Image
              </h2>
              <div className="aspect-square overflow-hidden rounded-lg shadow-md bg-gray-100/50 flex items-center justify-center relative">
                {resultImage ? (
                  <img
                    src={resultImage}
                    alt="Result"
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      isProcessing ? "opacity-50" : "opacity-100"
                    }`}
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                      e.currentTarget.classList.add("p-8", "bg-gray-50");
                    }}
                  />
                ) : (
                  <div className="text-center p-8">
                    <Wand2 className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
                    <p className="text-muted-foreground">
                      Click "Apply Color Grade" to generate result
                    </p>
                  </div>
                )}

                {isProcessing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm">
                    <RefreshCw className="w-8 h-8 text-primary animate-spin" />
                  </div>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {resultImage
                  ? `Color grading applied at ${intensity}% intensity`
                  : "The processed image will appear here"}
              </p>
            </GlassCard>
          </div>

          {/* Controls */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <IntensitySlider
              onChange={handleIntensityChange}
              defaultValue={intensity}
              className="md:col-span-2"
            />

            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:col-span-2 justify-center">
              <GradientButton
                onClick={handleApplyColorGrade}
                disabled={isProcessing}
                className="min-w-40"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Apply Color Grade
                  </>
                )}
              </GradientButton>

              {resultImage && (
                <>
                  <GradientButton
                    onClick={handleDownload}
                    gradientFrom="from-gradients-green"
                    gradientTo="to-gradients-blue"
                    className="min-w-40"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Result
                  </GradientButton>

                  <GradientButton
                    variant="outline"
                    onClick={handleStartOver}
                    className="min-w-40"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Start Over
                  </GradientButton>
                </>
              )}
            </div>
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
