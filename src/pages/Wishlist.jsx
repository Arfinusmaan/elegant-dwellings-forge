import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { Heart, ShoppingCart, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Wishlist = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleRemoveFromWishlist = (productId, productName) => {
    removeFromWishlist(productId);
    toast({
      title: "Removed from wishlist",
      description: `${productName} has been removed from your wishlist.`,
    });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-6 py-20">
          <div className="text-center max-w-md mx-auto">
            <Heart className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Your Wishlist is Empty
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Save items you love to your wishlist for easy access later.
            </p>
            <Link to="/categories/all">
              <Button variant="hero" size="lg">
                Discover Furniture
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Wishlist</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <Heart className="h-6 w-6 text-primary fill-primary" />
            <h1 className="font-display text-3xl font-bold text-foreground">
              My Wishlist
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            {items.length} {items.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden group hover:shadow-luxury transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Remove button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveFromWishlist(item.id, item.name)}
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-4">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.name}</h3>
                  <p className="text-xl font-bold text-foreground">{item.priceStr || `$${item.price.toLocaleString()}`}</p>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full font-medium"
                    onClick={() => handleAddToCart(item)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  
                  <Link to={`/product/${item.id}`}>
                    <Button variant="ghost" className="w-full font-medium">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/categories/all">
            <Button variant="outline" size="lg">
              Continue Shopping
            </Button>
          </Link>
          
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => {
              items.forEach(item => addToCart(item));
              toast({
                title: "All items added to cart",
                description: `${items.length} items have been added to your cart.`,
              });
            }}
            disabled={items.length === 0}
          >
            Add All to Cart
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Wishlist;