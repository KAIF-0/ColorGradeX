
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { GlassCard } from "@/components/ui/glass-card";

interface IntensitySliderProps {
  onChange: (value: number) => void;
  defaultValue?: number;
  className?: string;
}

export function IntensitySlider({ 
  onChange, 
  defaultValue = 100, 
  className 
}: IntensitySliderProps) {
  const [value, setValue] = useState(defaultValue);
  
  const handleValueChange = (newValue: number[]) => {
    const intensity = newValue[0];
    setValue(intensity);
    onChange(intensity);
  };

  return (
    <GlassCard className={`p-6 ${className}`}>
      <div className="mb-2 flex justify-between items-center">
        <h3 className="text-lg font-semibold">Transfer Intensity</h3>
        <div className="text-sm font-medium bg-primary/10 px-3 py-1 rounded-full text-primary">
          {value}%
        </div>
      </div>
      
      <div className="relative pt-1">
        <Slider
          defaultValue={[defaultValue]}
          min={0}
          max={100}
          step={1}
          onValueChange={handleValueChange}
          className="py-4"
        />
        
        {/* Custom gradient track underneath */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-gradients-blue to-gradients-purple opacity-30"
          style={{ bottom: "14px" }}
        />
        
        {/* Tooltip showing current value */}
        <div 
          className="absolute left-0 top-0 transition-all duration-200 py-1 px-2 rounded-full text-xs bg-primary text-white transform -translate-y-8"
          style={{ left: `calc(${value}% - ${value > 50 ? 15 : 10}px)` }}
        >
          {value}%
          <div className="absolute left-1/2 bottom-0 w-2 h-2 bg-primary transform -translate-x-1/2 translate-y-1/2 rotate-45"></div>
        </div>
      </div>
      
      <div className="flex justify-between text-xs text-muted-foreground mt-1">
        <span>Subtle</span>
        <span>Balanced</span>
        <span>Intense</span>
      </div>
    </GlassCard>
  );
}
