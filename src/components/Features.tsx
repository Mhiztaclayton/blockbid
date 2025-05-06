
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Chain, Database, Bitcoin, Hexagon } from "lucide-react";

const features = [
  {
    title: "Decentralized Bidding",
    description: "Secure bidding with crypto wallets. No central authorities, just you and the auction.",
    icon: <Chain className="h-10 w-10 text-primary" />,
    delay: "0s"
  },
  {
    title: "Transparent Auctions",
    description: "All transactions on-chain, verifiable via blockchain explorers. No secrets, no surprises.",
    icon: <Hexagon className="h-10 w-10 text-secondary" />,
    delay: "0.2s"
  },
  {
    title: "NFT Support",
    description: "Auction unique digital assets with full ERC-721 and ERC-1155 compatibility.",
    icon: <Bitcoin className="h-10 w-10 text-accent" />,
    delay: "0.4s"
  },
  {
    title: "Low Fees",
    description: "Benefit from layer-2 or low-gas blockchains like Polygon, saving you money on every transaction.",
    icon: <Database className="h-10 w-10 text-primary" />,
    delay: "0.6s"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="text-gradient">Next Generation</span> of Digital Auctions
          </h2>
          <p className="text-muted-foreground text-lg">
            BlockBid combines cutting-edge blockchain technology with user-friendly auction mechanics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card/60 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover-scale overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-all duration-300"></div>
              
              <CardHeader>
                <div className="mb-4 p-3 bg-muted inline-block rounded-lg">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
