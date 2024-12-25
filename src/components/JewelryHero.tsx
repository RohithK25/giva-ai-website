import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SparklesIcon } from "lucide-react";

interface JewelryHeroProps {
  isLoaded: boolean;
}

export const JewelryHero = ({ isLoaded }: JewelryHeroProps) => {
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => setShowSparkles(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-black/90 to-luxury-black pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary mb-6"
        >
          GIVA JEWELRY
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg md:text-xl text-primary-light/80 font-light max-w-2xl mx-auto mb-8"
        >
          Discover our collection of exquisite jewelry pieces, crafted with precision and elegance
        </motion.p>

        {showSparkles && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                <SparklesIcon className="w-4 h-4 text-primary" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};