import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto mb-16"
    >
      <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <img
                src={image}
                alt={title}
                className="w-full h-[500px] object-contain p-8 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">{title}</h2>
              <p className="text-gray-600 mb-6">{description}</p>
              <div className="text-2xl font-bold mb-8 text-primary">₹{price.toLocaleString()}</div>
              
              <div className="space-y-4 mb-8">
                <motion.div
                  animate={{ height: showDetails ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  {showDetails && (
                    <div className="space-y-4 pt-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-gray-800">Materials</h3>
                        <ul className="list-disc list-inside text-gray-600">
                          {materials.map((material, index) => (
                            <li key={index}>{material}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-gray-800">Care Instructions</h3>
                        <ul className="list-disc list-inside text-gray-600">
                          {careInstructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
              
              <div className="space-y-4">
                <Button
                  onClick={() => setShowDetails(!showDetails)}
                  variant="outline"
                  className="w-full"
                >
                  {showDetails ? 'Hide Details' : 'Show Details'}
                </Button>
                <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};