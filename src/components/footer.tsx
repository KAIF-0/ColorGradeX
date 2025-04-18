
import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  Github, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail 
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 mt-auto relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4 gradient-text">ColorGradeX</h3>
            <p className="text-muted-foreground mb-4">
              Professional color grading transfer tool powered by advanced LAB color statistics.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <Github size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </Link>
              <Link href="https://youtube.com" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/workspace" className="text-muted-foreground hover:text-primary transition-colors">Workspace</Link></li>
              <li><Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Tutorials</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-muted-foreground" />
                <a href="mailto:info@colorgrader.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@colorgrader.com
                </a>
              </li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Feedback</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {currentYear} ColorGradeX. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
