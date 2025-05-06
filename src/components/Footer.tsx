
import { Bitcoin, ExternalLink, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary rounded-md p-1.5">
                <Bitcoin className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">BlockBid</span>
            </div>
            <p className="text-muted-foreground mb-4">
              The decentralized auction platform built for collectors, creators, and crypto enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          
          {/* Links columns */}
          <div>
            <h3 className="text-lg font-bold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Browse Auctions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Create Auction</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">My Bids</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Smart Contracts</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        {/* Blockchain info and copyright */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-muted-foreground">Powered by</span>
            <a href="#" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
              <Bitcoin size={16} />
              <span>Ethereum</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
              <Bitcoin size={16} />
              <span>Polygon</span>
            </a>
          </div>
          
          <div className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} BlockBid. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
