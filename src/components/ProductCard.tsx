import { useState } from 'react';
import { Eye, ShoppingCart } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  };
  onQuickView: (product: any) => void;
}

export const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div
      className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => onQuickView(product)}
            className="bg-white p-2 rounded-full hover:bg-primary-light transition-colors"
          >
            <Eye className="w-5 h-5 text-secondary" />
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-white p-2 rounded-full hover:bg-primary-light transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-secondary" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-secondary mb-2">{product.name}</h3>
        <p className="text-primary font-medium">₹{product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};