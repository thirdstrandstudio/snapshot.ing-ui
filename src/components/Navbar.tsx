
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Database, Lock, Send } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Database className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-display font-bold">SnaptShot.ing</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-sm font-medium hover:text-blue-500 transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Pricing
          </a>
          <a href="#airdrop" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Airdrop
          </a>
          <Button className="rounded-full bg-blue-500 hover:bg-blue-600 transition-all">
            Get Started
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
