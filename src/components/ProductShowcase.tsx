import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ShoppingCart, Sparkles } from 'lucide-react';
import { useToast } from './ui/use-toast';

interface ProductShowcaseProps {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  materials: string[];
  careInstructions: string[];
  isActive: boolean;
  onView: () => void;
}

export const ProductShowcase = ({
  title,
  description,
  price,
  image,
  category,
  materials,
  careInstructions,
  isActive,
  onView,
}: ProductShowcaseProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${title} has been added to your cart.`,
    });
  };

  return (
    <motion.div
      onViewportEnter={onView}
      className="w-full max-w-6xl mx-auto"
    >
      <Card className="overflow-hidden bg-luxury-black border-primary/20">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="relative group"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div
                className="relative aspect-square"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain p-8"
                />
                
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatDelay: Math.random() * 2,
                          ease: "easeInOut"
                        }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      >
                        <Sparkles className="w-3 h-3 text-primary" />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
            
            <motion.div
              className="p-8 flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
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