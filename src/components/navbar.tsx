
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { Github, HelpCircle, Home, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
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
    { name: "GitHub", href: "https://github.com", icon: <Github className="w-4 h-4 mr-1" />, external: true }
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
          href="/" 
          className="flex items-center gap-2 font-heading font-bold text-lg gradient-text animate-pulse-glow"
        >
          <span className="flex items-center text-xl">ColorGradeX</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "text-sm flex items-center transition-colors duration-200",
                  "relative group",
                  isActive ? "text-primary" : "hover:text-primary"
                )}
              >
                {link.icon}
                <span>{link.name}</span>
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            );
          })}
        </nav>
      </GlassCard>
    </div>
  );
}
