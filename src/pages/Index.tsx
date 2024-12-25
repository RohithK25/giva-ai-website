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
    image: "/lovable-uploads/9c68ba28-7b63-4146-b64b-c4114cd22501.png",
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
    image: "/lovable-uploads/b4c17720-59c8-475c-80d6-c46ea5107ce7.png",
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
    image: "/lovable-uploads/654a9397-1d52-457e-8c7b-eac55a4f5392.png",
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
  }
];

const Index = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-luxury-black">
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
  );
};

export default Index;