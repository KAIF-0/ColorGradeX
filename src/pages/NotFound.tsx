import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Navbar } from "@/components/navbar";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground intensity="subtle" speed="slow" />
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-4">
        <GlassCard className="p-12 max-w-lg text-center animate-fade-in">
          <h1 className="text-6xl font-bold font-heading mb-4 gradient-text">404</h1>
          <h2 className="text-2xl font-medium mb-6">Page not found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <GradientButton asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </GradientButton>
        </GlassCard>
      </main>
    </div>
  );
};

export default NotFound;
