import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

// Import images
import sofaImage from '@/assets/product-sofa-luxury.jpg';
import armchairImage from '@/assets/product-armchair.jpg';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Bergen Luxury Sofa',
      price: 3299,
      quantity: 1,
      image: sofaImage
    },
    {
      id: 3,
      name: 'Monaco Armchair',
      price: 1799,
      quantity: 2,
      image: armchairImage
    }
  ]);

  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 1000 ? 0 : 149;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
            <h1 className="font-display text-h2 font-bold text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-body-large text-muted-foreground mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/categories/all">
              <Button variant="hero" size="lg">
                Start Shopping
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
            <span className="text-foreground">Shopping Cart</span>
          </div>
          <h1 className="font-display text-h1 font-bold text-foreground">
            Shopping Cart
          </h1>
          <p className="text-body-large text-muted-foreground">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-h4 font-semibold text-foreground mb-2">
                              {item.name}
                            </h3>
                            <p className="text-body text-muted-foreground">
                              ${item.price.toLocaleString()}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-input rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="px-4 py-2 text-body font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <p className="text-h4 font-bold text-foreground">
                            ${(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <Link to="/categories/all">
                <Button variant="outline" size="lg">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-h3 font-semibold text-foreground mb-6">
                  Order Summary
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-body text-muted-foreground">Subtotal</span>
                    <span className="text-body font-medium">${subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-body text-muted-foreground">Shipping</span>
                    <span className="text-body font-medium">
                      {shipping === 0 ? 'Free' : `$${shipping}`}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-body text-muted-foreground">Tax</span>
                    <span className="text-body font-medium">${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-h4 font-semibold text-foreground">Total</span>
                      <span className="text-h4 font-bold text-foreground">
                        ${total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full mb-4">
                  Proceed to Checkout
                </Button>
                
                <div className="text-center">
                  <p className="text-small text-muted-foreground">
                    Free shipping on orders over $1,000
                  </p>
                </div>
                
                {/* Security badges */}
                <div className="mt-6 pt-6 border-t">
                  <p className="text-small text-muted-foreground text-center mb-3">
                    Secure checkout guaranteed
                  </p>
                  <div className="flex justify-center gap-4 text-muted-foreground">
                    <div className="text-xs bg-muted px-2 py-1 rounded">SSL</div>
                    <div className="text-xs bg-muted px-2 py-1 rounded">256-bit</div>
                    <div className="text-xs bg-muted px-2 py-1 rounded">Encrypted</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;