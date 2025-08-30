import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart, Minus, Plus, Star, Truck, Shield, RotateCcw } from 'lucide-react';

// Import images
import sofaImage from '@/assets/product-sofa-luxury.jpg';
import diningImage from '@/assets/product-dining-table.jpg';
import armchairImage from '@/assets/product-armchair.jpg';
import bedroomImage from '@/assets/product-bedroom-set.jpg';
import officeImage from '@/assets/product-office-desk.jpg';
import outdoorImage from '@/assets/product-outdoor-set.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const productData = {
    1: { 
      name: 'Bergen Luxury Sofa', 
      price: '$3,299', 
      image: sofaImage, 
      category: 'living-room',
      description: 'Experience ultimate comfort with our Bergen Luxury Sofa. Crafted with premium Italian leather and solid hardwood frame, this sofa represents the perfect blend of contemporary design and traditional craftsmanship.',
      features: ['Premium Italian leather upholstery', 'Solid hardwood frame construction', 'High-density foam cushioning', 'Reinforced corner blocking', 'Professional assembly included'],
      dimensions: '84" W x 36" D x 32" H',
      materials: 'Italian leather, hardwood frame, high-density foam',
      care: 'Dust regularly with soft cloth. Professional cleaning recommended.',
      rating: 4.8,
      reviews: 127
    },
    2: { 
      name: 'Walnut Dining Collection', 
      price: '$2,899', 
      image: diningImage, 
      category: 'dining',
      description: 'Elevate your dining experience with our exquisite Walnut Dining Collection. This stunning set features rich walnut wood grain and contemporary design that will be the centerpiece of your dining room.',
      features: ['Solid walnut wood construction', 'Seats up to 6 people comfortably', 'Hand-finished with natural oils', 'Matching chairs included', 'Expandable table option available'],
      dimensions: 'Table: 72" L x 36" W x 30" H, Chairs: 18" W x 20" D x 32" H',
      materials: 'Solid walnut wood, natural oil finish',
      care: 'Clean with damp cloth. Avoid harsh chemicals.',
      rating: 4.9,
      reviews: 89
    },
    3: { 
      name: 'Monaco Armchair', 
      price: '$1,799', 
      image: armchairImage, 
      category: 'living-room',
      description: 'The Monaco Armchair combines mid-century modern aesthetics with contemporary comfort. Perfect for reading nooks or as accent seating in any room.',
      features: ['Premium fabric upholstery', 'Solid oak wood legs', 'Ergonomic design', 'Multiple color options', 'Lifetime frame warranty'],
      dimensions: '32" W x 34" D x 30" H',
      materials: 'Premium fabric, solid oak wood, steel springs',
      care: 'Vacuum regularly. Professional cleaning recommended.',
      rating: 4.7,
      reviews: 203
    }
  };

  const product = productData[id] || productData[1];
  const images = [product.image, product.image, product.image]; // In real app, would have multiple images

  const relatedProducts = [
    { id: 7, name: 'Minimalist Side Table', price: '$899', image: sofaImage },
    { id: 8, name: 'Luxury Bar Stool', price: '$599', image: armchairImage },
    { id: 9, name: 'Designer Floor Lamp', price: '$1,299', image: diningImage },
  ];

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b bg-background">
        <div className="container mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to={`/categories/${product.category}`} className="hover:text-foreground transition-colors">
              {product.category.replace('-', ' ')}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="aspect-square mb-4 overflow-hidden rounded-lg">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square w-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="font-display text-h1 font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                <span className="text-body text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <p className="text-h2 font-bold text-foreground mb-6">{product.price}</p>
            </div>

            <div className="mb-8">
              <p className="text-body-large text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-body font-medium">Quantity:</span>
                <div className="flex items-center border border-input rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 text-body font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="hero" size="lg" className="flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-h3 font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                    <span className="text-body text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Icons */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-border">
              <div className="text-center">
                <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-small font-medium">Free Shipping</p>
                <p className="text-small text-muted-foreground">On orders over $1,000</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-small font-medium">2 Year Warranty</p>
                <p className="text-small text-muted-foreground">Full coverage included</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-small font-medium">30 Day Returns</p>
                <p className="text-small text-muted-foreground">Easy return policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-h4 font-semibold mb-4">Dimensions</h3>
              <p className="text-body text-muted-foreground">{product.dimensions}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-h4 font-semibold mb-4">Materials</h3>
              <p className="text-body text-muted-foreground">{product.materials}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-h4 font-semibold mb-4">Care Instructions</h3>
              <p className="text-body text-muted-foreground">{product.care}</p>
            </CardContent>
          </Card>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="font-display text-h2 font-bold text-foreground mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="overflow-hidden group hover:shadow-luxury transition-all duration-300">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-h4 font-semibold text-foreground mb-2">{relatedProduct.name}</h3>
                  <p className="text-h4 font-bold text-foreground mb-4">{relatedProduct.price}</p>
                  <Link to={`/product/${relatedProduct.id}`}>
                    <Button variant="outline" className="w-full">
                      View Details
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

export default ProductDetail;