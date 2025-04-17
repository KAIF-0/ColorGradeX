
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { Github, HelpCircle, Home, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4 mr-1" /> },
    { name: "About", href: "/about", icon: <Info className="w-4 h-4 mr-1" /> },
    { name: "Help", href: "/help", icon: <HelpCircle className="w-4 h-4 mr-1" /> },
    { name: "GitHub", href: "https://github.com", icon: <Github className="w-4 h-4 mr-1" /> }
  ];

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300",
      scrolled ? "py-2" : "py-4",
      className
    )}>
      <GlassCard
        blur={scrolled ? "md" : "sm"}
        opacity={scrolled ? "heavy" : "light"}
        className={cn(
          "flex items-center justify-between px-6 py-2",
          "transition-all duration-300 w-full max-w-7xl mx-auto"
        )}
      >
        <Link 
          to="/" 
          className="flex items-center gap-2 font-heading font-bold text-lg gradient-text animate-pulse-glow"
        >
          <span className="flex items-center text-xl">ColorGradeX</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm flex items-center transition-colors duration-200",
                "hover:text-primary relative group"
              )}
            >
              {link.icon}
              <span>{link.name}</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </GlassCard>
    </div>
  );
}
