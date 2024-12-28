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
    <div className="absolute inset-0 h-screen w-full grid grid-cols-3 grid-rows-3 gap-1">
      {/* Row 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-luxury-dark flex items-center justify-center p-4 text-center"
      >
        <div className="text-luxury-gold">
          <h3 className="font-serif text-xl font-bold">{promotionalTexts[0].title}</h3>
          <p className="text-sm font-medium">{promotionalTexts[0].description}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative overflow-hidden"
      >
        <img
          src="/lovable-uploads/72a3dc68-be04-4407-8e39-953681de491e.png"
          alt="Luxury Ring"
          className="w-full h-full object-cover contrast-125"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="bg-luxury-dark flex items-center justify-center p-4 text-center"
      >
        <div className="text-luxury-gold">
          <h3 className="font-serif text-xl font-bold">{promotionalTexts[1].title}</h3>
          <p className="text-sm font-medium">{promotionalTexts[1].description}</p>
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
          src="/lovable-uploads/fe7f1d52-0ff9-4d08-bd04-4fc81b184f49.png"
          alt="Diamond Pendant"
          className="w-full h-full object-cover contrast-125"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="bg-luxury-dark flex items-center justify-center p-4 text-center"
      >
        <div className="text-luxury-gold">
          <h3 className="font-serif text-xl font-bold">{promotionalTexts[2].title}</h3>
          <p className="text-sm font-medium">{promotionalTexts[2].description}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative overflow-hidden"
      >
        <img
          src="/lovable-uploads/81c907a3-3906-4015-bff3-3da26d964aee.png"
          alt="Circle Necklace"
          className="w-full h-full object-cover contrast-125"
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
          <h3 className="font-serif text-xl font-bold">{promotionalTexts[3].title}</h3>
          <p className="text-sm font-medium">{promotionalTexts[3].description}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative overflow-hidden"
      >
        <img
          src="/lovable-uploads/818ac08b-b6fa-49fb-88f8-7072f19c9727.png"
          alt="Diamond Necklace"
          className="w-full h-full object-cover contrast-125"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="relative overflow-hidden"
      >
        <img
          src="/lovable-uploads/e7222759-7435-4d60-b2b9-b062887b004d.png"
          alt="Heart Necklace"
          className="w-full h-full object-cover contrast-125"
        />
      </motion.div>
    </div>
  );
};

export default BackgroundCollage;