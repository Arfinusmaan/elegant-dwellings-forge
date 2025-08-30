import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart, Filter, Grid, List } from 'lucide-react';

// Import images
import sofaImage from '@/assets/product-sofa-luxury.jpg';
import diningImage from '@/assets/product-dining-table.jpg';
import armchairImage from '@/assets/product-armchair.jpg';
import bedroomImage from '@/assets/product-bedroom-set.jpg';
import officeImage from '@/assets/product-office-desk.jpg';
import outdoorImage from '@/assets/product-outdoor-set.jpg';

const Categories = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  const allProducts = [
    { id: 1, name: 'Bergen Luxury Sofa', price: 3299, priceStr: '$3,299', image: sofaImage, category: 'living-room', description: 'Premium leather sofa with modern design' },
    { id: 2, name: 'Walnut Dining Collection', price: 2899, priceStr: '$2,899', image: diningImage, category: 'dining', description: 'Complete dining set in rich walnut wood' },
    { id: 3, name: 'Monaco Armchair', price: 1799, priceStr: '$1,799', image: armchairImage, category: 'living-room', description: 'Elegant armchair with premium upholstery' },
    { id: 4, name: 'Scandi Bedroom Set', price: 4599, priceStr: '$4,599', image: bedroomImage, category: 'bedroom', description: 'Complete bedroom furniture in Scandinavian style' },
    { id: 5, name: 'Executive Office Desk', price: 2199, priceStr: '$2,199', image: officeImage, category: 'office', description: 'Professional desk with modern functionality' },
    { id: 6, name: 'Teak Outdoor Collection', price: 3799, priceStr: '$3,799', image: outdoorImage, category: 'outdoor', description: 'Weather-resistant outdoor furniture set' },
    { id: 7, name: 'Minimalist Side Table', price: 899, priceStr: '$899', image: sofaImage, category: 'living-room', description: 'Sleek side table with clean lines' },
    { id: 8, name: 'Luxury Bar Stool', price: 599, priceStr: '$599', image: armchairImage, category: 'dining', description: 'Premium bar stool with comfortable seating' },
    { id: 9, name: 'Designer Floor Lamp', price: 1299, priceStr: '$1,299', image: diningImage, category: 'living-room', description: 'Modern floor lamp with adjustable height' },
    { id: 10, name: 'Velvet Ottoman', price: 799, priceStr: '$799', image: bedroomImage, category: 'bedroom', description: 'Luxurious velvet ottoman for extra seating' },
  ];

  const categoryTitles = {
    'living-room': 'Living Room',
    'bedroom': 'Bedroom',
    'dining': 'Dining',
    'office': 'Office',
    'outdoor': 'Outdoor',
    'all': 'All Furniture'
  };

  const filteredProducts = category === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === category);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const finalProducts = priceRange === 'all' ? sortedProducts : sortedProducts.filter(product => {
    switch (priceRange) {
      case 'under-1000':
        return product.price < 1000;
      case '1000-3000':
        return product.price >= 1000 && product.price <= 3000;
      case 'over-3000':
        return product.price > 3000;
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/" className="font-display text-h3 font-semibold text-foreground hover:text-muted-foreground transition-colors">
              Luxuria
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">{categoryTitles[category] || 'Category'}</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="font-display text-h1 font-bold text-foreground mb-2">
                {categoryTitles[category] || 'Category'}
              </h1>
              <p className="text-body-large text-muted-foreground">
                {finalProducts.length} {finalProducts.length === 1 ? 'item' : 'items'} available
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-background border border-input rounded-md px-3 py-2 text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>

              <select 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
                className="bg-background border border-input rounded-md px-3 py-2 text-sm"
              >
                <option value="all">All Prices</option>
                <option value="under-1000">Under $1,000</option>
                <option value="1000-3000">$1,000 - $3,000</option>
                <option value="over-3000">Over $3,000</option>
              </select>

              <div className="flex border border-input rounded-md">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Products */}
      <main className="container mx-auto px-4 md:px-8 py-12">
        {finalProducts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-h2 font-semibold text-foreground mb-4">No products found</h2>
            <p className="text-body-large text-muted-foreground mb-8">Try adjusting your filters or browse all categories.</p>
            <Link to="/categories/all">
              <Button variant="hero" size="lg">Browse All Furniture</Button>
            </Link>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
            : "space-y-6"
          }>
            {finalProducts.map((product) => (
              <Card key={product.id} className={`overflow-hidden group hover:shadow-luxury transition-all duration-300 ${
                viewMode === 'list' ? 'flex flex-row' : ''
              }`}>
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-48 aspect-[3/2]' : 'aspect-[3/2]'
                }`}>
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
                
                <CardContent className={`${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''} p-6`}>
                  <div className={viewMode === 'list' ? 'mb-4' : 'mb-4'}>
                    <h3 className="text-h4 font-semibold text-foreground mb-2">{product.name}</h3>
                    {viewMode === 'list' && (
                      <p className="text-body text-muted-foreground mb-3">{product.description}</p>
                    )}
                    <p className="text-h3 font-bold text-foreground">{product.priceStr}</p>
                  </div>
                  
                  <div className={`${viewMode === 'list' ? 'flex gap-3' : 'space-y-2'}`}>
                    <Link to={`/product/${product.id}`} className={viewMode === 'list' ? 'flex-1' : ''}>
                      <Button variant="outline" className="w-full font-medium">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </Link>
                    {viewMode === 'list' && (
                      <Link to={`/product/${product.id}`}>
                        <Button variant="ghost" className="font-medium">
                          View Details
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      {/* Back to Top */}
      <div className="container mx-auto px-4 md:px-8 pb-12">
        <div className="text-center">
          <Link to="/">
            <Button variant="outline" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;