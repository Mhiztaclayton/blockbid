
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Bid on the Future?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of collectors and creators in the decentralized auction revolution. Start bidding or listing your digital assets today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient text-lg py-6 px-8 hover-scale glow-effect">
              Connect Wallet
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8 border-primary hover:border-primary/80 hover-scale">
              View Live Auctions
            </Button>
          </div>
          
          <div className="mt-10 flex items-center justify-center space-x-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">10,000+</span>
              <span className="text-muted-foreground">Active Users</span>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">$1M+</span>
              <span className="text-muted-foreground">Auction Volume</span>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">100%</span>
              <span className="text-muted-foreground">Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
