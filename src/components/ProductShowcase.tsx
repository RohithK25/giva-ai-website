import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { jewelryAnimations, sparkleEffect, cardAnimation } from '@/utils/animations';
import { ShoppingCart } from 'lucide-react';
import { useToast } from './ui/use-toast';

interface ProductShowcaseProps {
  title: string;
  description: string;
  price: number;
  image: string;
  materials: string[];
  careInstructions: string[];
}

export const ProductShowcase = ({
  title,
  description,
  price,
  image,
  materials,
  careInstructions,
}: ProductShowcaseProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${title} has been added to your cart.`,
    });
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto mb-16"
    >
      <Card className="overflow-hidden bg-luxury-black shadow-xl border-luxury-gold/20">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={jewelryAnimations}
              whileHover="hover"
              className="relative group"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-[500px] object-contain p-8"
              />
              <motion.div
                variants={sparkleEffect}
                className="absolute inset-0 pointer-events-none"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    variants={sparkleEffect}
                  />
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={cardAnimation}
              className="p-8 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-serif mb-4 text-primary">{title}</h2>
              <p className="text-gray-300 mb-6">{description}</p>
              <div className="text-2xl font-bold mb-8 text-primary">₹{price.toLocaleString()}</div>
              
              <motion.div
                animate={{ height: showDetails ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                {showDetails && (
                  <div className="space-y-4 pt-4">
                    <div>
                      <h3 className="font-semibold mb-2 text-primary">Materials</h3>
                      <ul className="list-disc list-inside text-gray-300">
                        {materials.map((material, index) => (
                          <li key={index}>{material}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-primary">Care Instructions</h3>
                      <ul className="list-disc list-inside text-gray-300">
                        {careInstructions.map((instruction, index) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
              
              <div className="space-y-4 mt-8">
                <Button
                  onClick={() => setShowDetails(!showDetails)}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                >
                  {showDetails ? 'Hide Details' : 'Show Details'}
                </Button>
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-primary hover:bg-primary-dark text-white"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};