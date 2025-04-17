
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
  speed?: "slow" | "medium" | "fast";
}

export function AnimatedBackground({
  className,
  intensity = "medium",
  speed = "medium",
}: AnimatedBackgroundProps) {
  // Intensity controls the opacity and size
  const intensityConfig = {
    subtle: {
      opacity: "opacity-20",
      scale: "scale-75"
    },
    medium: {
      opacity: "opacity-40",
      scale: "scale-100"
    },
    strong: {
      opacity: "opacity-60",
      scale: "scale-125"
    }
  };
  
  // Speed controls animation duration
  const speedConfig = {
    slow: {
      blob1: "animate-[blob-move_30s_ease-in-out_infinite]",
      blob2: "animate-[blob-move_34s_ease-in-out_infinite]",
      blob3: "animate-[blob-move_28s_ease-in-out_infinite]"
    },
    medium: {
      blob1: "animate-[blob-move_22s_ease-in-out_infinite]",
      blob2: "animate-[blob-move_18s_ease-in-out_infinite]",
      blob3: "animate-[blob-move_24s_ease-in-out_infinite]"
    },
    fast: {
      blob1: "animate-[blob-move_16s_ease-in-out_infinite]",
      blob2: "animate-[blob-move_12s_ease-in-out_infinite]",
      blob3: "animate-[blob-move_18s_ease-in-out_infinite]"
    }
  };

  return (
    <div 
      className={cn(
        "fixed inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {/* Subtle gradient noise texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjEgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiLz48L3N2Zz4=')]"></div>

      {/* Purple blob */}
      <div 
        className={cn(
          "bg-blob w-[40vw] h-[40vw] top-[15%] left-[20%] bg-gradients-purple",
          intensityConfig[intensity].opacity,
          intensityConfig[intensity].scale,
          speedConfig[speed].blob1
        )}
      />
      
      {/* Blue blob */}
      <div 
        className={cn(
          "bg-blob w-[45vw] h-[45vw] bottom-[10%] right-[15%] bg-gradients-blue", 
          intensityConfig[intensity].opacity,
          intensityConfig[intensity].scale,
          speedConfig[speed].blob2
        )}
      />
      
      {/* Peach blob */}
      <div 
        className={cn(
          "bg-blob w-[25vw] h-[25vw] top-[45%] right-[35%] bg-gradients-peach",
          intensityConfig[intensity].opacity,
          intensityConfig[intensity].scale,
          speedConfig[speed].blob3
        )}
      />
    </div>
  );
}
