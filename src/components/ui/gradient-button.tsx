
import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonProps {
  gradientFrom?: string;
  gradientTo?: string;
  hoverScale?: boolean;
  glow?: boolean;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ 
    className, 
    children, 
    gradientFrom = "from-primary", 
    gradientTo = "to-accent", 
    hoverScale = true,
    glow = true,
    ...props 
  }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-gradient-to-r transition-all duration-300",
          gradientFrom,
          gradientTo,
          hoverScale && "hover:scale-105",
          glow && "hover:shadow-lg hover:shadow-primary/25",
          className
        )}
        {...props}
      >
        {children}
        <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
      </Button>
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton };
