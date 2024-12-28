import { motion } from "framer-motion";
import { ProductShowcase } from "@/components/ProductShowcase";
import { JewelryHero } from "@/components/JewelryHero";
import { useEffect, useState } from "react";
import BackgroundCollage from "@/components/BackgroundCollage";

const products = [
  {
    id: 1,
    title: "Elegant Diamond Ring",
    description: "A stunning engagement ring featuring baguette-cut diamonds in a unique geometric pattern with a halo setting.",
    price: 149999,
    image: "/lovable-uploads/72a3dc68-be04-4407-8e39-953681de491e.png",
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
    image: "/lovable-uploads/fe7f1d52-0ff9-4d08-bd04-4fc81b184f49.png",
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
    image: "/lovable-uploads/81c907a3-3906-4015-bff3-3da26d964aee.png",
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
    image: "/lovable-uploads/818ac08b-b6fa-49fb-88f8-7072f19c9727.png",
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
    image: "/lovable-uploads/e7222759-7435-4d60-b2b9-b062887b004d.png",
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
    <div className="min-h-screen relative bg-luxury-black">
      <div className="h-screen relative overflow-hidden">
        {/* Background Collage */}
        <BackgroundCollage />

        {/* Hero Content */}
        <JewelryHero isLoaded={isLoaded} />
      </div>
      
      {/* Products Section */}
      <div className="container mx-auto px-4 py-16">
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
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-1/2">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              <div className="w-1/2 space-y-4">
                <motion.h2 
                  className="text-4xl font-serif text-primary"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {product.title}
                </motion.h2>
                <motion.p 
                  className="text-gray-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {product.description}
                </motion.p>
                <motion.div 
                  className="text-2xl font-bold text-primary"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  ₹{product.price.toLocaleString()}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;