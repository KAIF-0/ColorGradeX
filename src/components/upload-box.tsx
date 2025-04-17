
import { useState, useRef } from "react";
import { Upload, Image, FileX } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface UploadBoxProps {
  className?: string;
  label: string;
  onImageUpload: (file: File) => void;
  preview?: string;
}

export function UploadBox({ className, label, onImageUpload, preview }: UploadBoxProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [filePreview, setFilePreview] = useState<string | undefined>(preview);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFileUpload(file);
    }
  };

  const handleFileUpload = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFilePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      onImageUpload(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setFilePreview(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <GlassCard 
      className={cn(
        "p-6 transition-all duration-300 w-full max-w-sm mx-auto h-64 flex flex-col items-center justify-center text-center",
        isDragging ? "ring-2 ring-primary" : "",
        filePreview ? "bg-white/20" : "bg-white/40",
        className
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/*" 
        onChange={handleInputChange}
      />
      
      {filePreview ? (
        <div className="relative w-full h-full">
          <img 
            src={filePreview} 
            alt={label}
            className="w-full h-full object-cover rounded-lg animate-scale-in"
          />
          <Button 
            variant="destructive" 
            size="icon" 
            className="absolute top-2 right-2 rounded-full w-8 h-8 animate-fade-in"
            onClick={handleRemoveImage}
          >
            <FileX className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <>
          <div className="mb-3 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-pulse-glow">
            {label.includes("Reference") ? (
              <Image className="w-8 h-8 text-primary" />
            ) : (
              <Upload className="w-8 h-8 text-primary" />
            )}
          </div>
          <h3 className="text-lg font-semibold mb-2">{label}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Drag & drop your image here or click to browse
          </p>
          <Button 
            variant="outline" 
            onClick={handleButtonClick}
            className="hover-scale"
          >
            Select File
          </Button>
        </>
      )}
    </GlassCard>
  );
}
