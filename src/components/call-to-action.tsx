
import Link from "next/link";
import { GradientButton } from "@/components/ui/gradient-button";
import { Upload } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-gradients-purple to-gradients-blue p-[1px] rounded-xl animate-fade-in">
          <div className="bg-white rounded-xl px-8 py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Images?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Start using ColorGradeX today and discover how easy it can be to apply professional color grading to your photos.
            </p>
            <GradientButton asChild size="lg" className="flex items-center gap-2">
              <Link href="/workspace">
                <Upload className="w-5 h-5" />
                <span>Start Grading Now</span>
              </Link>
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
