import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    url: "https://giva.co/cdn/shop/files/Necklaces_Desktop_Banner_1900x.jpg?v=1703574784",
    title: "Elegant Silver Necklaces",
    subtitle: "Handcrafted with Love"
  },
  {
    url: "https://giva.co/cdn/shop/files/Pendants_Desktop_Banner_1900x.jpg?v=1703574784",
    title: "Stunning Pendants",
    subtitle: "Make a Statement"
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {images.map((image, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-black/30 z-10" />
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-white z-20"
              >
                <h1 className="text-5xl font-bold mb-4">{image.title}</h1>
                <p className="text-xl">{image.subtitle}</p>
              </motion.div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};