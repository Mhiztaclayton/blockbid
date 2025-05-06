
import { Bitcoin, Gavel, Database, Link } from "lucide-react";

const steps = [
  {
    title: "Connect Wallet",
    description: "Link your MetaMask, Coinbase Wallet or any Web3 wallet to get started.",
    icon: <Bitcoin className="h-12 w-12 text-primary" />,
    number: "01"
  },
  {
    title: "List or Bid on Items",
    description: "Create your auction or place bids on existing items with cryptocurrency.",
    icon: <Gavel className="h-12 w-12 text-secondary" />,
    number: "02"
  },
  {
    title: "Win and Settle",
    description: "When auctions end, smart contracts automatically transfer assets and funds.",
    icon: <Database className="h-12 w-12 text-accent" />,
    number: "03"
  },
  {
    title: "Verify on Blockchain",
    description: "All transactions are recorded on-chain and can be verified via blockchain explorers.",
    icon: <Link className="h-12 w-12 text-primary" />,
    number: "04"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How BlockBid Works</h2>
          <p className="text-muted-foreground text-lg">
            Our platform makes blockchain auctions simple, secure, and seamless.
          </p>
        </div>

        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
              >
                {/* Step content */}
                <div className="md:w-1/2 text-center md:text-left">
                  <div className="inline-block text-3xl font-bold mb-4 bg-muted px-4 py-2 rounded-lg text-primary">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Step icon */}
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                    {/* Decorative circles */}
                    <div className="absolute inset-0 bg-muted/30 backdrop-blur-sm rounded-full animate-pulse-glow"></div>
                    <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center relative z-10">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
