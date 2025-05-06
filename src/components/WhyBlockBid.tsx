
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Trustless",
    description: "No intermediaries, powered by smart contracts for guaranteed execution."
  },
  {
    title: "Global",
    description: "Accessible to anyone with a crypto wallet, auction without borders."
  },
  {
    title: "Immutable",
    description: "Auction history stored permanently on the blockchain, ensuring transparency."
  },
  {
    title: "Community-Driven",
    description: "Future governance via DAO, putting power in the hands of users."
  }
];

const WhyBlockBid = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side: Platform mockup */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -left-6 -top-6 -right-6 -bottom-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-lg"></div>
              
              {/* Mockup */}
              <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-xl">
                {/* Mockup header */}
                <div className="bg-muted p-4 flex items-center justify-between border-b border-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div className="px-4 py-1 bg-background text-xs rounded-full">blockbid.auction</div>
                  <div className="w-16"></div> {/* Spacer for alignment */}
                </div>
                
                {/* Mockup content */}
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Featured Auction</h4>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <div className="h-40 w-full bg-muted/50 rounded-lg mb-4"></div>
                      <h3 className="text-xl font-bold">Crypto Punk #4269</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm">Current bid:</span>
                        <span className="text-primary font-bold">3.5 ETH</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-6 bg-muted/30 rounded w-full"></div>
                    <div className="h-6 bg-muted/30 rounded w-4/5"></div>
                    <div className="h-6 bg-muted/30 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Text content */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose <span className="text-gradient">BlockBid</span>?</h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              Traditional auction platforms are centralized, expensive, and lack transparency. BlockBid changes the game with Web3 technology.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/20 p-1 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "BlockBid made my NFT auction seamless! The transparency and security gave both me and the bidders confidence throughout the process."
              <footer className="text-sm mt-2">— Alex, Digital Artist</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBlockBid;
