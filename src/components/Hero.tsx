
import { Button } from "@/components/ui/button";
import { Gavel, Link, Database } from "lucide-react";

const Hero = () => {
  return (
    <section 
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden"
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill-opacity=\'0.05\' fill=\'%238B5CF6\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Bid, Win, Own</span>
              <span className="block mt-2">The Decentralized Auction Revolution</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Auction anything on the blockchain with transparency, security, and zero intermediaries. The future of digital ownership starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient text-lg py-6 px-8 hover-scale glow-effect">
                Connect Wallet
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8 border-primary hover:border-primary/80 hover-scale">
                Explore Auctions
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative h-80 w-80 mx-auto">
              {/* Animated elements */}
              <div className="absolute inset-0 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="relative">
                  <Gavel className="h-24 w-24 text-primary animate-pulse-glow absolute left-20 top-0" />
                  <Link className="h-20 w-20 text-secondary animate-pulse-glow absolute left-0 top-20" style={{ animationDelay: '0.7s' }} />
                  <Database className="h-20 w-20 text-accent animate-pulse-glow absolute right-0 top-30" style={{ animationDelay: '1.2s' }} />
                  
                  {/* Hexagon shape */}
                  <div className="h-40 w-40 bg-muted/30 backdrop-blur-sm rounded-xl rotate-45 border border-primary/20"></div>
                </div>
              </div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border border-primary/50 animate-ripple"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
