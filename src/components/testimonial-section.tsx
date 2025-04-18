
import { GlassCard } from "@/components/ui/glass-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Professional Photographer",
    avatar: "AM",
    testimonial: "ColorGradeX has saved me hours of post-processing time. I can apply my signature look to client photos in seconds."
  },
  {
    name: "Jordan Lee",
    role: "Filmmaker",
    avatar: "JL",
    testimonial: "The color matching is precise and natural. It's like having a professional colorist in my pocket."
  },
  {
    name: "Sam Rivera",
    role: "Social Media Manager",
    avatar: "SR",
    testimonial: "Our brand's Instagram feed has never looked more consistent. This tool is a game-changer for content creators."
  }
];

export function TestimonialSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in">
          <span className="gradient-text">What Our Users Say</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlassCard 
              key={testimonial.name} 
              className="p-6 flex flex-col animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-muted-foreground flex-grow mb-6">{testimonial.testimonial}</p>
              <div className="flex items-center mt-auto">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarFallback className="bg-primary/10 text-primary font-medium">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
