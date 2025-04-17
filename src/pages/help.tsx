
import { useState } from "react";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { GlassCard } from "@/components/ui/glass-card";
import { Navbar } from "@/components/navbar";
import { GradientButton } from "@/components/ui/gradient-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare, Mail, Twitter, Github } from "lucide-react";

export default function HelpPage() {
  const [activeTab, setActiveTab] = useState<'faq' | 'contact'>('faq');

  const faqs = [
    {
      question: "What is color grading?",
      answer: "Color grading is the process of altering and enhancing the color of an image or video. It helps establish a mood, atmosphere, or visual style by adjusting colors, contrast, and tone."
    },
    {
      question: "What file formats are supported?",
      answer: "ColorGradeX supports common image formats including JPEG, PNG, WebP, and TIFF. For best results, we recommend using high-quality images with minimal compression."
    },
    {
      question: "How accurate is the color transfer?",
      answer: "The color transfer aims to capture the overall mood and tone of the reference image, but results can vary depending on the color composition of both the reference and target images. The intensity slider allows you to control how strongly the effect is applied."
    },
    {
      question: "Do my images get uploaded to a server?",
      answer: "No. ColorGradeX processes all images directly in your browser. Your images never leave your device, ensuring complete privacy and faster processing times."
    },
    {
      question: "Why use ColorGradeX instead of traditional presets?",
      answer: "Unlike fixed presets, ColorGradeX dynamically analyzes your reference image to create a custom color profile. This allows for more natural and precise results that are tailored to your specific images."
    },
    {
      question: "Can I use ColorGradeX for commercial projects?",
      answer: "Yes! ColorGradeX is free to use for both personal and commercial projects. We'd love to see what you create with it."
    },
    {
      question: "How does the intensity slider work?",
      answer: "The intensity slider controls how strongly the color profile from the reference image is applied to the target image. Lower values result in a more subtle effect, while higher values create a more dramatic transformation."
    },
    {
      question: "Is there a limit to image resolution?",
      answer: "ColorGradeX works best with images up to 4K resolution. Larger images may require more processing time and memory. For very large images, we recommend resizing them before uploading."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground intensity="subtle" speed="slow" />
      <Navbar />
      
      <main className="flex-1 pt-32 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-center animate-fade-in mb-10">
            <span className="gradient-text">Help & Support</span>
          </h1>
          
          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white/30 backdrop-blur-sm p-1 rounded-full shadow-sm">
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === 'faq' 
                    ? 'bg-white shadow-sm text-foreground' 
                    : 'text-foreground/70 hover:text-foreground'
                }`}
                onClick={() => setActiveTab('faq')}
              >
                FAQs
              </button>
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === 'contact' 
                    ? 'bg-white shadow-sm text-foreground' 
                    : 'text-foreground/70 hover:text-foreground'
                }`}
                onClick={() => setActiveTab('contact')}
              >
                Contact Us
              </button>
            </div>
          </div>
          
          {/* FAQ Section */}
          {activeTab === 'faq' && (
            <GlassCard className="p-8 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6 font-heading">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
          )}
          
          {/* Contact Section */}
          {activeTab === 'contact' && (
            <GlassCard className="p-8 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6 font-heading">Get in Touch</h2>
              
              <p className="mb-8 text-muted-foreground">
                Have questions, feedback, or need help? We're here to assist you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/30 rounded-xl hover-scale">
                  <MessageSquare className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-2">Community Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join our community forum to get help, share tips, and see what others are creating.
                  </p>
                  <GradientButton variant="outline" size="sm">
                    Visit Forum
                  </GradientButton>
                </div>
                
                <div className="p-6 bg-white/30 rounded-xl hover-scale">
                  <Mail className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For direct assistance, reach out to our support team via email.
                  </p>
                  <GradientButton variant="outline" size="sm">
                    support@colorgrader.io
                  </GradientButton>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-3 bg-white/30 rounded-full hover:bg-white/50 transition-colors duration-200"
                  >
                    <Twitter className="h-5 w-5 text-primary" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-white/30 rounded-full hover:bg-white/50 transition-colors duration-200"
                  >
                    <Github className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </div>
            </GlassCard>
          )}
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
