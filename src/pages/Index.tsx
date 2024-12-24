import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { QuickViewModal } from "@/components/QuickViewModal";

const products = [
  {
    id: 1,
    name: "Sterling Silver Butterfly Pendant",
    price: 1999,
    image: "https://giva.co/cdn/shop/products/PD02262_1_800x.jpg?v=1681471307",
    description: "Delicate butterfly pendant crafted in 925 sterling silver with rhodium plating for lasting shine."
  },
  {
    id: 2,
    name: "Rose Gold Heart Necklace",
    price: 2499,
    image: "https://giva.co/cdn/shop/products/PD02263_1_800x.jpg?v=1681471307",
    description: "Beautiful heart pendant with rose gold plating on sterling silver chain."
  },
  {
    id: 3,
    name: "Infinity Love Pendant",
    price: 1799,
    image: "https://giva.co/cdn/shop/products/PD02264_1_800x.jpg?v=1681471307",
    description: "Elegant infinity symbol pendant symbolizing eternal love."
  },
  {
    id: 4,
    name: "Crystal Drop Necklace",
    price: 2999,
    image: "https://giva.co/cdn/shop/products/PD02265_1_800x.jpg?v=1681471307",
    description: "Stunning drop pendant featuring premium crystals set in sterling silver."
  },
  {
    id: 5,
    name: "Pearl Chain Pendant",
    price: 3499,
    image: "https://giva.co/cdn/shop/products/PD02266_1_800x.jpg?v=1681471307",
    description: "Classic pearl pendant with intricate silver work."
  },
  {
    id: 6,
    name: "Zodiac Sign Necklace",
    price: 1599,
    image: "https://giva.co/cdn/shop/products/PD02267_1_800x.jpg?v=1681471307",
    description: "Personalized zodiac sign pendant in sterling silver."
  }
];

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (product: any) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
          Our Bestselling Collections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={handleQuickView}
            />
          ))}
        </div>
      </div>

      <QuickViewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </div>
  );
};

export default Index;