import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Heart, ShoppingCart, Menu, X, Instagram, Facebook, Twitter, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Import luxury furniture images
import heroImage from '@/assets/hero-luxury-living.jpg';
import sofaImage from '@/assets/product-sofa-luxury.jpg';
import diningImage from '@/assets/product-dining-table.jpg';
import armchairImage from '@/assets/product-armchair.jpg';
import bedroomImage from '@/assets/product-bedroom-set.jpg';
import officeImage from '@/assets/product-office-desk.jpg';
import outdoorImage from '@/assets/product-outdoor-set.jpg';
import lifestyleImage from '@/assets/lifestyle-design-space.jpg';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const { addToCart, getTotalItems } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  const featuredProducts = [
    { id: 1, name: 'Bergen Luxury Sofa', price: 3299, priceStr: '$3,299', image: sofaImage, category: 'living-room' },
    { id: 2, name: 'Walnut Dining Collection', price: 2899, priceStr: '$2,899', image: diningImage, category: 'dining' },
    { id: 3, name: 'Monaco Armchair', price: 1799, priceStr: '$1,799', image: armchairImage, category: 'living-room' },
    { id: 4, name: 'Scandi Bedroom Set', price: 4599, priceStr: '$4,599', image: bedroomImage, category: 'bedroom' },
    { id: 5, name: 'Executive Office Desk', price: 2199, priceStr: '$2,199', image: officeImage, category: 'office' },
    { id: 6, name: 'Teak Outdoor Collection', price: 3799, priceStr: '$3,799', image: outdoorImage, category: 'outdoor' },
  ];

  const newArrivals = [
    { id: 7, name: 'Minimalist Side Table', price: 899, priceStr: '$899', image: sofaImage },
    { id: 8, name: 'Luxury Bar Stool', price: 599, priceStr: '$599', image: armchairImage },
    { id: 9, name: 'Designer Floor Lamp', price: 1299, priceStr: '$1,299', image: diningImage },
    { id: 10, name: 'Velvet Ottoman', price: 799, priceStr: '$799', image: bedroomImage },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our latest updates and exclusive offers.",
    });
    setEmail('');
  };

  const totalCartItems = getTotalItems();

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="font-display text-2xl font-semibold text-foreground">Luxuria</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/categories/living-room" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Living Room
            </Link>
            <Link to="/categories/bedroom" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Bedroom
            </Link>
            <Link to="/categories/dining" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Dining
            </Link>
            <Link to="/categories/office" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Office
            </Link>
            <Link to="/categories/outdoor" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Outdoor
            </Link>
          </nav>

          {/* CTA and Cart */}
          <div className="flex items-center space-x-3">
            <Link to="/wishlist" className="hidden md:block">
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/cart" className="hidden md:block">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalCartItems}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/categories/all" className="hidden md:block">
              <Button variant="hero" size="sm">Shop</Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background animate-fade-in">
            <nav className="container py-4 px-4">
              <div className="flex flex-col space-y-3">
                <Link to="/categories/living-room" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Living Room
                </Link>
                <Link to="/categories/bedroom" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Bedroom
                </Link>
                <Link to="/categories/dining" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Dining
                </Link>
                <Link to="/categories/office" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Office
                </Link>
                <Link to="/categories/outdoor" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Outdoor
                </Link>
                <div className="flex space-x-3 pt-3">
                  <Link to="/wishlist">
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/cart">
                    <Button variant="ghost" size="sm" className="relative">
                      <ShoppingCart className="h-4 w-4" />
                      {totalCartItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                          {totalCartItems}
                        </span>
                      )}
                    </Button>
                  </Link>
                  <Link to="/categories/all">
                    <Button variant="hero" size="sm">Shop</Button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in">
              Exceptional furniture crafted for modern living
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
              Discover timeless elegance in every piece. Our curated collection brings together premium materials and sophisticated design.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/categories/all">
                <Button variant="hero" size="lg" className="w-full sm:w-auto px-8 py-3 text-base font-semibold">
                  Shop Now
                </Button>
              </Link>
              <Link to="/categories/all">
                <Button variant="heroSecondary" size="lg" className="w-full sm:w-auto px-8 py-3 text-base font-semibold">
                  Explore Collections
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products Grid */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                Featured Collection
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Handpicked pieces that define contemporary luxury and timeless design
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden group hover:shadow-luxury transition-all duration-300 animate-fade-in">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleWishlistToggle(product)}
                      className={`absolute top-3 right-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isInWishlist(product.id) ? 'text-red-500' : 'text-foreground'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{product.name}</h3>
                        <p className="text-xl font-bold text-foreground">{product.priceStr}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1" 
                        size="sm"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Link to={`/product/${product.id}`}>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                New Arrivals
              </h2>
              <p className="text-lg text-muted-foreground">
                Fresh designs that push the boundaries of contemporary furniture
              </p>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
              {newArrivals.map((product) => (
                <Card key={product.id} className="flex-none w-72 group hover:shadow-luxury transition-all duration-300 snap-start animate-scale-in">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleWishlistToggle(product)}
                      className={`absolute top-3 right-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isInWishlist(product.id) ? 'text-red-500' : 'text-foreground'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.priceStr}</p>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add
                      </Button>
                      <Link to={`/product/${product.id}`}>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lifestyle Section */}
        <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${lifestyleImage})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Design Your Space
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Every piece tells a story of exceptional craftsmanship and timeless design
            </p>
            <Link to="/categories/all">
              <Button variant="heroSecondary" size="lg" className="px-8 py-3 text-base font-semibold">
                Inspire Me
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-2xl font-bold mb-3">Luxuria</h3>
              <p className="text-sm text-background/80 mb-4 max-w-md">
                Exceptional furniture crafted for modern living. Discover timeless elegance in every piece.
              </p>
              
              {/* Newsletter */}
              <div>
                <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-sm">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/60 text-sm"
                    required
                  />
                  <Button type="submit" variant="secondary" size="sm">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Shop</h4>
              <ul className="space-y-2">
                <li><Link to="/categories/living-room" className="text-sm text-background/80 hover:text-background transition-colors">Living Room</Link></li>
                <li><Link to="/categories/bedroom" className="text-sm text-background/80 hover:text-background transition-colors">Bedroom</Link></li>
                <li><Link to="/categories/dining" className="text-sm text-background/80 hover:text-background transition-colors">Dining</Link></li>
                <li><Link to="/categories/office" className="text-sm text-background/80 hover:text-background transition-colors">Office</Link></li>
                <li><Link to="/categories/outdoor" className="text-sm text-background/80 hover:text-background transition-colors">Outdoor</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-background/80 hover:text-background transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-sm text-background/80 hover:text-background transition-colors">Contact</Link></li>
                <li><Link to="/shipping" className="text-sm text-background/80 hover:text-background transition-colors">Shipping & Returns</Link></li>
                <li><Link to="/faq" className="text-sm text-background/80 hover:text-background transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-background/60 mb-3 md:mb-0">
              © 2024 Luxuria. All rights reserved.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-background/60 hover:text-background p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background/60 hover:text-background p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background/60 hover:text-background p-2">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;