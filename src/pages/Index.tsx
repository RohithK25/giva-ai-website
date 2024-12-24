import { motion } from "framer-motion";
import { ProductShowcase } from "@/components/ProductShowcase";

const products = [
  {
    id: 1,
    title: "Sterling Silver Crystal Flower Pendant",
    description: "Exquisite sterling silver pendant featuring a delicate flower design adorned with premium crystals.",
    price: 1999,
    image: "/lovable-uploads/f7ef6264-e1eb-4fb8-8171-a04479e578e4.png",
    materials: [
      "925 Sterling Silver",
      "Premium Crystal Stones",
      "Rhodium Plating for Extra Shine"
    ],
    careInstructions: [
      "Store in a cool, dry place",
      "Clean with silver polishing cloth",
      "Avoid contact with perfumes and chemicals"
    ]
  },
  {
    id: 2,
    title: "Silver Antler Heart Pendant",
    description: "A unique blend of romance and nature, this sterling silver pendant features antler-inspired details.",
    price: 2499,
    image: "/lovable-uploads/4ef99147-87c5-4090-8234-fee05967ed0a.png",
    materials: [
      "925 Sterling Silver",
      "Red Heart Crystal",
      "Anti-tarnish Coating"
    ],
    careInstructions: [
      "Store in the provided jewelry box",
      "Avoid exposure to water while wearing",
      "Polish regularly with a soft cloth"
    ]
  }
];

const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-[280px] h-[560px] rounded-[45px] border-[14px] border-luxury-black bg-luxury-black overflow-hidden shadow-xl">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-luxury-black rounded-b-[20px] z-10">
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[60px] h-[4px] bg-gray-800 rounded-full" />
    </div>
    {children}
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <PhoneFrame>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 right-4">
                  <div className="font-serif text-2xl text-white/90 italic">
                    Ring Bling
                  </div>
                  <div className="text-sm text-white/70">
                    DM FOR 25% OFF
                  </div>
                </div>
              </PhoneFrame>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 mb-24"
        >
          <h1 className="font-serif text-5xl md:text-7xl text-luxury-gold mb-4">
            GIVA JEWELRY
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light tracking-wider">
            one stop for your loved ones
          </p>
        </motion.div>
      </div>

      {/* Product Showcases */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        {products.map((product) => (
          <ProductShowcase
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;