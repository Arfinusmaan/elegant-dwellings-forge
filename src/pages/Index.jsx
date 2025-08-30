import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Heart, ShoppingCart, Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';

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

  const featuredProducts = [
    { id: 1, name: 'Bergen Luxury Sofa', price: '$3,299', image: sofaImage, category: 'living-room' },
    { id: 2, name: 'Walnut Dining Collection', price: '$2,899', image: diningImage, category: 'dining' },
    { id: 3, name: 'Monaco Armchair', price: '$1,799', image: armchairImage, category: 'living-room' },
    { id: 4, name: 'Scandi Bedroom Set', price: '$4,599', image: bedroomImage, category: 'bedroom' },
    { id: 5, name: 'Executive Office Desk', price: '$2,199', image: officeImage, category: 'office' },
    { id: 6, name: 'Teak Outdoor Collection', price: '$3,799', image: outdoorImage, category: 'outdoor' },
  ];

  const newArrivals = [
    { id: 7, name: 'Minimalist Side Table', price: '$899', image: sofaImage },
    { id: 8, name: 'Luxury Bar Stool', price: '$599', image: armchairImage },
    { id: 9, name: 'Designer Floor Lamp', price: '$1,299', image: diningImage },
    { id: 10, name: 'Velvet Ottoman', price: '$799', image: bedroomImage },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="font-display text-h2 font-semibold text-foreground">Luxuria</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/categories/living-room" className="text-body font-medium text-muted-foreground hover:text-foreground transition-colors">
              Living Room
            </Link>
            <Link to="/categories/bedroom" className="text-body font-medium text-muted-foreground hover:text-foreground transition-colors">
              Bedroom
            </Link>
            <Link to="/categories/dining" className="text-body font-medium text-muted-foreground hover:text-foreground transition-colors">
              Dining
            </Link>
            <Link to="/categories/office" className="text-body font-medium text-muted-foreground hover:text-foreground transition-colors">
              Office
            </Link>
            <Link to="/categories/outdoor" className="text-body font-medium text-muted-foreground hover:text-foreground transition-colors">
              Outdoor
            </Link>
          </nav>

          {/* CTA and Cart */}
          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="hidden md:block">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart" className="hidden md:block">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/categories/all" className="hidden md:block">
              <Button variant="hero" size="lg">Shop</Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container py-6 px-4">
              <div className="flex flex-col space-y-4">
                <Link to="/categories/living-room" className="text-body font-medium text-muted-foreground hover:text-foreground">
                  Living Room
                </Link>
                <Link to="/categories/bedroom" className="text-body font-medium text-muted-foreground hover:text-foreground">
                  Bedroom
                </Link>
                <Link to="/categories/dining" className="text-body font-medium text-muted-foreground hover:text-foreground">
                  Dining
                </Link>
                <Link to="/categories/office" className="text-body font-medium text-muted-foreground hover:text-foreground">
                  Office
                </Link>
                <Link to="/categories/outdoor" className="text-body font-medium text-muted-foreground hover:text-foreground">
                  Outdoor
                </Link>
                <div className="flex space-x-4 pt-4">
                  <Link to="/wishlist">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/cart">
                    <Button variant="ghost" size="icon">
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/categories/all">
                    <Button variant="hero" size="lg">Shop</Button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="font-display text-h1 md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Exceptional furniture crafted for modern living
            </h1>
            <p className="text-body-large md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
              Discover timeless elegance in every piece. Our curated collection brings together premium materials and sophisticated design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/categories/all">
                <Button variant="hero" size="lg" className="w-full sm:w-auto px-10 py-4 text-body-large font-semibold">
                  Shop Now
                </Button>
              </Link>
              <Link to="/categories/all">
                <Button variant="heroSecondary" size="lg" className="w-full sm:w-auto px-10 py-4 text-body-large font-semibold">
                  Explore Collections
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products Grid */}
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-h2 md:text-5xl font-bold text-foreground mb-4">
                Featured Collection
              </h2>
              <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
                Handpicked pieces that define contemporary luxury and timeless design
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden group hover:shadow-luxury transition-all duration-300">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 bg-white/90 hover:bg-white text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-h4 font-semibold text-foreground mb-2">{product.name}</h3>
                        <p className="text-h3 font-bold text-foreground">{product.price}</p>
                      </div>
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <Button variant="outline" className="w-full font-medium">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-h2 md:text-5xl font-bold text-foreground mb-4">
                New Arrivals
              </h2>
              <p className="text-body-large text-muted-foreground">
                Fresh designs that push the boundaries of contemporary furniture
              </p>
            </div>

            <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
              {newArrivals.map((product) => (
                <Card key={product.id} className="flex-none w-80 group hover:shadow-luxury transition-all duration-300 snap-start">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-h4 font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-body text-muted-foreground mb-3">{product.price}</p>
                    <Link to={`/product/${product.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lifestyle Section */}
        <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${lifestyleImage})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
            <h2 className="font-display text-h2 md:text-5xl font-bold mb-6">
              Design Your Space
            </h2>
            <p className="text-body-large mb-8 opacity-90">
              Every piece tells a story of exceptional craftsmanship and timeless design
            </p>
            <Link to="/categories/all">
              <Button variant="heroSecondary" size="lg" className="px-10 py-4 text-body-large font-semibold">
                Inspire Me
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-h3 font-bold mb-4">Luxuria</h3>
              <p className="text-body text-background/80 mb-6 max-w-md">
                Exceptional furniture crafted for modern living. Discover timeless elegance in every piece.
              </p>
              
              {/* Newsletter */}
              <div>
                <h4 className="text-h4 font-semibold mb-3">Stay Updated</h4>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-sm">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                    required
                  />
                  <Button type="submit" variant="secondary">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-h4 font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link to="/categories/living-room" className="text-body text-background/80 hover:text-background transition-colors">Living Room</Link></li>
                <li><Link to="/categories/bedroom" className="text-body text-background/80 hover:text-background transition-colors">Bedroom</Link></li>
                <li><Link to="/categories/dining" className="text-body text-background/80 hover:text-background transition-colors">Dining</Link></li>
                <li><Link to="/categories/office" className="text-body text-background/80 hover:text-background transition-colors">Office</Link></li>
                <li><Link to="/categories/outdoor" className="text-body text-background/80 hover:text-background transition-colors">Outdoor</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-h4 font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-body text-background/80 hover:text-background transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-body text-background/80 hover:text-background transition-colors">Contact</Link></li>
                <li><Link to="/shipping" className="text-body text-background/80 hover:text-background transition-colors">Shipping & Returns</Link></li>
                <li><Link to="/faq" className="text-body text-background/80 hover:text-background transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-small text-background/60 mb-4 md:mb-0">
              © 2024 Luxuria. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background/60 hover:text-background">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/60 hover:text-background">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/60 hover:text-background">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;