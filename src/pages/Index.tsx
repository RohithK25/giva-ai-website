import { motion } from "framer-motion";
import { ProductShowcase } from "@/components/ProductShowcase";

const products = [
  {
    id: 1,
    title: "Elegant Diamond Ring",
    description: "A stunning engagement ring featuring baguette-cut diamonds in a unique geometric pattern with a halo setting.",
    price: 149999,
    image: "/lovable-uploads/183608dc-5059-437e-9221-24d036bbd4f2.png",
    materials: [
      "18K White Gold",
      "VVS1 Clarity Diamonds",
      "Baguette Cut Center Stones"
    ],
    careInstructions: [
      "Store in a cool, dry place",
      "Clean with professional jewelry cleaner",
      "Regular maintenance check recommended"
    ]
  },
  {
    id: 2,
    title: "Square Diamond Pendant",
    description: "Modern square-cut diamond pendant with a delicate halo setting, perfect for everyday luxury.",
    price: 89999,
    image: "/lovable-uploads/57b744c3-ba7b-41d9-8ae9-ca1c7d518bba.png",
    materials: [
      "925 Sterling Silver",
      "Premium Diamond Center Stone",
      "Micro-pave Diamond Setting"
    ],
    careInstructions: [
      "Store in the provided jewelry box",
      "Avoid contact with harsh chemicals",
      "Professional cleaning recommended bi-annually"
    ]
  },
  {
    id: 3,
    title: "Crystal Circle Necklace",
    description: "Minimalist circular pendant necklace featuring brilliant-cut crystals in a modern design.",
    price: 59999,
    image: "/lovable-uploads/a66b5b88-e642-4159-b5ef-8ef7f9ebc641.png",
    materials: [
      "Sterling Silver Chain",
      "Premium Crystal Stones",
      "Rhodium Plating"
    ],
    careInstructions: [
      "Keep away from water",
      "Store in a dry place",
      "Clean with soft jewelry cloth"
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