import { motion } from "framer-motion";
import { ProductShowcase } from "@/components/ProductShowcase";
import { JewelryHero } from "@/components/JewelryHero";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    title: "Elegant Diamond Ring",
    description: "A stunning engagement ring featuring baguette-cut diamonds in a unique geometric pattern with a halo setting.",
    price: 149999,
    image: "/lovable-uploads/d1d20741-61e7-4d90-a06f-804f2f6e5f4a.png",
    category: "ring",
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
    image: "/lovable-uploads/4562be45-5c1e-4f53-9efd-e0b9856a55c6.png",
    category: "necklace",
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
    image: "/lovable-uploads/6b48a9d9-e9ba-41af-af66-6784bde83bbc.png",
    category: "necklace",
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
  },
  {
    id: 4,
    title: "Floral Diamond Pendant",
    description: "Exquisite floral-inspired pendant featuring a cluster of diamonds in a delicate arrangement.",
    price: 79999,
    image: "/lovable-uploads/c237b7aa-74be-405b-87c8-8a74f3724c10.png",
    category: "necklace",
    materials: [
      "18K White Gold",
      "Natural Diamonds",
      "Fine Link Chain"
    ],
    careInstructions: [
      "Avoid exposure to perfumes",
      "Store separately from other jewelry",
      "Annual professional cleaning recommended"
    ]
  },
  {
    id: 5,
    title: "Heart Ruby Necklace",
    description: "Romantic heart-shaped ruby pendant with antler-inspired silver detailing.",
    price: 69999,
    image: "/lovable-uploads/4a5f9389-f6ac-4b7c-a3e9-d9dc8b320f36.png",
    category: "necklace",
    materials: [
      "Sterling Silver",
      "Natural Ruby",
      "Antler Design Elements"
    ],
    careInstructions: [
      "Gentle cleaning with soft cloth",
      "Store in cool, dry place",
      "Avoid exposure to sunlight"
    ]
  }
];

const Index = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-luxury-black relative">
      {/* Background Collage */}
      <div className="fixed inset-0 grid grid-cols-3 grid-rows-3 gap-2 opacity-20 pointer-events-none">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          src="/lovable-uploads/82489695-7644-46af-bb6b-84e16013280e.png"
          alt="Jewelry Collage"
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-gradient-to-br from-luxury-gold/20 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-gradient-to-bl from-luxury-gold/10 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-gradient-to-tr from-luxury-black to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative overflow-hidden bg-luxury-black/50"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="bg-gradient-to-tl from-luxury-gold/20 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="bg-gradient-to-r from-luxury-black to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="bg-gradient-to-l from-luxury-gold/10 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="bg-gradient-to-t from-luxury-black to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <JewelryHero isLoaded={isLoaded} />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="container mx-auto px-4 py-16"
        >
          <div className="space-y-32">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.2,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              >
                <ProductShowcase
                  {...product}
                  isActive={activeProduct === index}
                  onView={() => setActiveProduct(index)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;