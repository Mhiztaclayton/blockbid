
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Bitcoin, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="bg-primary rounded-md p-1.5">
              <Bitcoin className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">BlockBid</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-primary transition-colors">
              Home
            </a>
            <a href="#auctions" className="text-white hover:text-primary transition-colors">
              Auctions
            </a>
            <a href="#how-it-works" className="text-white hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-white hover:text-primary transition-colors">
              About
            </a>
            <Button className="bg-gradient hover-scale">
              Connect Wallet
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 items-center">
            <a href="#" className="text-white hover:text-primary transition-colors" onClick={toggleMenu}>
              Home
            </a>
            <a href="#auctions" className="text-white hover:text-primary transition-colors" onClick={toggleMenu}>
              Auctions
            </a>
            <a href="#how-it-works" className="text-white hover:text-primary transition-colors" onClick={toggleMenu}>
              How It Works
            </a>
            <a href="#about" className="text-white hover:text-primary transition-colors" onClick={toggleMenu}>
              About
            </a>
            <Button className="bg-gradient hover-scale w-full">
              Connect Wallet
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
