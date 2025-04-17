
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: "sm" | "md" | "lg";
  opacity?: "light" | "medium" | "heavy";
  animate?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, blur = "md", opacity = "medium", animate = false, ...props }, ref) => {
    const blurClasses = {
      sm: "backdrop-blur-sm",
      md: "backdrop-blur-md",
      lg: "backdrop-blur-lg",
    };

    const opacityClasses = {
      light: "bg-white/30",
      medium: "bg-white/50", 
      heavy: "bg-white/70",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-white/30 shadow-lg",
          blurClasses[blur],
          opacityClasses[opacity],
          animate && "animate-scale-in",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
