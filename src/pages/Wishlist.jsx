import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart, X } from 'lucide-react';

// Import images
import sofaImage from '@/assets/product-sofa-luxury.jpg';
import diningImage from '@/assets/product-dining-table.jpg';
import bedroomImage from '@/assets/product-bedroom-set.jpg';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Bergen Luxury Sofa',
      price: '$3,299',
      image: sofaImage,
      inStock: true
    },
    {
      id: 2,
      name: 'Walnut Dining Collection',
      price: '$2,899',
      image: diningImage,
      inStock: true
    },
    {
      id: 4,
      name: 'Scandi Bedroom Set',
      price: '$4,599',
      image: bedroomImage,
      inStock: false
    }
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <div className="text-center max-w-md mx-auto">
            <Heart className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
            <h1 className="font-display text-h2 font-bold text-foreground mb-4">
              Your Wishlist is Empty
            </h1>
            <p className="text-body-large text-muted-foreground mb-8">
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
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Wishlist</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <h1 className="font-display text-h1 font-bold text-foreground">
              My Wishlist
            </h1>
          </div>
          <p className="text-body-large text-muted-foreground">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="overflow-hidden group hover:shadow-luxury transition-all duration-300">
              <div className="relative aspect-[3/2] overflow-hidden">
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
                  size="icon"
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <X className="h-4 w-4" />
                </Button>
                
                {/* Stock status */}
                {!item.inStock && (
                  <div className="absolute bottom-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-small font-medium">
                    Out of Stock
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-h4 font-semibold text-foreground mb-2">{item.name}</h3>
                  <p className="text-h3 font-bold text-foreground">{item.price}</p>
                </div>
                
                <div className="space-y-2">
                  <Link to={`/product/${item.id}`} className="block">
                    <Button 
                      variant={item.inStock ? "outline" : "ghost"} 
                      className="w-full font-medium"
                      disabled={!item.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </Link>
                  
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
              // Add all in-stock items to cart
              const inStockItems = wishlistItems.filter(item => item.inStock);
              if (inStockItems.length > 0) {
                console.log('Adding to cart:', inStockItems);
                // In a real app, would dispatch to cart store
              }
            }}
            disabled={!wishlistItems.some(item => item.inStock)}
          >
            Add All to Cart
          </Button>
        </div>

        {/* Recently Viewed or Recommendations */}
        <div className="mt-16">
          <h2 className="font-display text-h2 font-bold text-foreground mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 7, name: 'Minimalist Side Table', price: '$899', image: sofaImage },
              { id: 8, name: 'Luxury Bar Stool', price: '$599', image: diningImage },
              { id: 9, name: 'Designer Floor Lamp', price: '$1,299', image: bedroomImage },
            ].map((product) => (
              <Card key={product.id} className="overflow-hidden group hover:shadow-luxury transition-all duration-300">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-h4 font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-h4 font-bold text-foreground mb-4">{product.price}</p>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="outline" className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wishlist;