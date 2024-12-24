import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";

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
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Exclusive Collection
        </h1>
        
        <div className="space-y-16">
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
    </div>
  );
};

export default Index;