import { motion } from "framer-motion";

const promotionalTexts = [
  {
    title: "Special Offer",
    description: "Up to 20% off on selected diamond jewelry"
  },
  {
    title: "Timeless Elegance",
    description: "Crafted with precision, worn with pride"
  },
  {
    title: "New Collection",
    description: "Discover our latest luxury pieces"
  },
  {
    title: "Free Shipping",
    description: "On all orders above ₹25,000"
  }
];

const BackgroundCollage = () => {
  return (
    <div className="fixed inset-0 grid grid-cols-3 grid-rows-3 gap-1 opacity-20 pointer-events-none">
      {/* Row 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-luxury-dark flex items-center justify-center p-4 text-center"
      >
        <div className="text-luxury-gold">
          <h3 className="font-serif text-xl">{promotionalTexts[0].title}</h3>
          <p className="text-sm">{promotionalTexts[0].description}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative overflow-hidden"
      >
        <img
          src="/lovable-uploads/f7f07dde-9cf9-4603-a8e1-f6201b8cffc1.png"
          alt="Luxury Ring"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="bg-luxury-dark flex items-center justify-center p-4 text-center"
      >
        <div className="text-luxury-gold">
          <h3 className="font-serif text-xl">{promotionalTexts[1].title}</h3>
          <p className="text-sm">{promotionalTexts[1].description}</p>
        </div>
      </motion.div>

      {/* Row 2 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative overflow-hidden"
      >
        <img
          src="/lovable-uploads/ded1649c-e6c2-40af-bede-8b99004fe1a1.png"
          alt="Diamond Pendant"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="bg-luxury-dark flex items-center justify-center p-4 text-center"
      >
        <div className="text-luxury-gold">
          <h3 className="font-serif text-xl">{promotionalTexts[2].title}</h3>
          <p className="text-sm">{promotionalTexts[2].description}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative overflow-hidden"
      >
        <img
          src="/lovable-uploads/e421076c-3ecf-489f-98ae-f3e974223bd7.png"
          alt="Circle Necklace"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Row 3 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="bg-luxury-dark flex items-center justify-center p-4 text-center"
      >
        <div className="text-luxury-gold">
          <h3 className="font-serif text-xl">{promotionalTexts[3].title}</h3>
          <p className="text-sm">{promotionalTexts[3].description}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative overflow-hidden"
      >
        <img
          src="/lovable-uploads/df067f12-2b40-4581-9693-d2f8091a65a7.png"
          alt="Diamond Necklace"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="relative overflow-hidden"
      >
        <img
          src="/lovable-uploads/f407b0ba-8c7e-4b8b-8f69-453e1d8e6599.png"
          alt="Heart Necklace"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default BackgroundCollage;