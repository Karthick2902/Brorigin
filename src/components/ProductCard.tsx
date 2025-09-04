import { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  description: string;
  isNew?: boolean;
}

const ProductCard = ({ id, name, price, image, size, description, isNew }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="card-product p-6 relative overflow-hidden">
      {/* New Badge */}
      {isNew && (
        <Badge className="absolute top-4 left-4 bg-honey-gradient text-white z-10">
          New
        </Badge>
      )}

      {/* Like Button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
      >
        <Heart
          className={`w-4 h-4 transition-colors ${
            isLiked ? 'text-red-500 fill-red-500' : 'text-gray-400'
          }`}
        />
      </button>

      {/* Product Image */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs font-medium">
            {size}
          </Badge>
          <span className="font-playfair text-2xl font-bold text-honey-dark">
            ${price}
          </span>
        </div>

        <h3 className="font-playfair text-xl font-semibold text-honey-dark group-hover:text-primary transition-colors">
          {name}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button className="btn-honey flex-1" size="sm">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          <Button variant="outline" className="btn-outline-honey">
            Buy Now
          </Button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
    </div>
  );
};

export default ProductCard;