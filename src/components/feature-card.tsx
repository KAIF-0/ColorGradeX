
import { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

interface FeatureCardProps {
  icon: LucideIcon | React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  const Icon = typeof icon === 'function' ? icon : null;
  
  return (
    <GlassCard 
      className={`p-6 hover-scale animate-fade-in`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {Icon ? <Icon className="h-6 w-6 text-primary" /> : icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </GlassCard>
  );
}
