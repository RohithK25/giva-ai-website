import { motion } from "framer-motion";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    title: "Sterling Silver Crystal Flower Pendant",
    description: "Exquisite sterling silver pendant featuring a delicate flower design adorned with premium crystals. Perfect for both casual and formal occasions.",
    price: 1999,
    image: "/lovable-uploads/f7ef6264-e1eb-4fb8-8171-a04479e578e4.png",
    materials: [
      "925 Sterling Silver",
      "Premium Crystal Stones",
      "Rhodium Plating for Extra Shine"
    ],
    careInstructions: [
      "Store in a cool, dry place",
      "Clean with silver polishing cloth",
      "Avoid contact with perfumes and chemicals"
    ]
  },
  {
    id: 2,
    title: "Silver Antler Heart Pendant",
    description: "A unique blend of romance and nature, this sterling silver pendant features antler-inspired details and a stunning red heart crystal centerpiece.",
    price: 2499,
    image: "/lovable-uploads/4ef99147-87c5-4090-8234-fee05967ed0a.png",
    materials: [
      "925 Sterling Silver",
      "Red Heart Crystal",
      "Anti-tarnish Coating"
    ],
    careInstructions: [
      "Store in the provided jewelry box",
      "Avoid exposure to water while wearing",
      "Polish regularly with a soft cloth"
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#1A1F2C]" />
        
        <Carousel className="h-full">
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id}>
                <div className="relative h-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center bg-gradient-to-t from-black/80 to-transparent">
                    <motion.h1 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-4xl md:text-6xl font-light mb-4"
                    >
                      GIVA JEWELRY
                    </motion.h1>
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="text-xl md:text-2xl font-light text-gray-300"
                    >
                      one stop for your loved ones
                    </motion.p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>

      {/* Product Showcases */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">Exclusive Collection</h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
        </motion.div>

        {products.map((product) => (
          <ProductShowcase
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            materials={product.materials}
            careInstructions={product.careInstructions}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;