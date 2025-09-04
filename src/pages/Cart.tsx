import { useState } from 'react';
import { Minus, Plus, X, ShoppingBag, ArrowRight, Truck, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import honeyJarMain from '@/assets/honey-jar-main.jpg';
import honeyVariants from '@/assets/honey-variants.jpg';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Pure Organic Honey',
      price: 1999,
      image: honeyJarMain,
      size: '500ml',
      quantity: 2,
    },
    {
      id: '2',
      name: 'Family Pack Honey',
      price: 3699,
      image: honeyVariants,
      size: '1L',
      quantity: 1,
    },
    {
      id: '3',
      name: 'Travel Size Honey',
      price: 999,
      image: honeyJarMain,
      size: '250ml',
      quantity: 3,
    },
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'honey10') {
      setIsPromoApplied(true);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = isPromoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 99900 ? 0 : 15000; // Free shipping above ₹999
  const total = subtotal - discount + shipping;

  const benefits = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders above ₹999',
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '100% pure & organic',
    },
    {
      icon: CreditCard,
      title: 'Secure Payment',
      description: 'Safe & encrypted checkout',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-16 bg-cream-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-playfair text-5xl font-bold text-honey-dark mb-4">
              Shopping Cart
            </h1>
            <p className="text-lg text-muted-foreground">
              Review your selected items and proceed to checkout
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {cartItems.length === 0 ? (
            // Empty Cart
            <div className="text-center py-20">
              <div className="bg-honey-cream rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-16 h-16 text-muted-foreground" />
              </div>
              <h2 className="font-playfair text-3xl font-bold text-honey-dark mb-4">
                Your cart is empty
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Discover our delicious honey varieties and start shopping!
              </p>
              <Button className="btn-honey text-lg px-8 py-3">
                Shop Honey Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          ) : (
            // Cart with Items
            <div className="lg:grid lg:grid-cols-3 lg:gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-playfair text-2xl font-semibold text-honey-dark">
                    Cart Items ({cartItems.length})
                  </h2>
                  <Button 
                    variant="outline" 
                    onClick={() => setCartItems([])}
                    className="text-red-600 border-red-200 hover:bg-red-50"
                  >
                    Clear Cart
                  </Button>
                </div>

                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="card-premium p-6">
                      <div className="flex items-start gap-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-xl"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-playfair text-lg font-semibold text-honey-dark">
                                {item.name}
                              </h3>
                              <Badge variant="secondary" className="mt-1">
                                {item.size}
                              </Badge>
                              <p className="text-2xl font-bold text-primary mt-2">
                                ₹{item.price.toLocaleString('en-IN')}
                              </p>
                            </div>
                            
                            {/* Remove Button */}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 p-0"
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <Input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                className="w-16 text-center"
                                min="1"
                              />
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 p-0"
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                            
                            <div className="text-right">
                              <p className="text-lg font-semibold text-honey-dark">
                                ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="mt-8 lg:mt-0">
                <div className="card-premium p-6 sticky top-24">
                  <h3 className="font-playfair text-xl font-semibold text-honey-dark mb-6">
                    Order Summary
                  </h3>

                  {/* Promo Code */}
                  <div className="space-y-3 mb-6">
                    <label className="block text-sm font-medium text-honey-dark">
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter code (try HONEY10)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1"
                        disabled={isPromoApplied}
                      />
                      <Button
                        variant="outline"
                        onClick={applyPromoCode}
                        disabled={isPromoApplied || !promoCode}
                      >
                        {isPromoApplied ? 'Applied' : 'Apply'}
                      </Button>
                    </div>
                    {isPromoApplied && (
                      <p className="text-sm text-green-600">
                        ✅ HONEY10 applied - 10% discount!
                      </p>
                    )}
                  </div>

                  <Separator className="my-6" />

                  {/* Price Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    
                    {isPromoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (10%)</span>
                        <span>-₹{discount.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          `₹${shipping.toLocaleString('en-IN')}`
                        )}
                      </span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-semibold">
                      <span className="text-honey-dark">Total</span>
                      <span className="text-primary">₹{total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <Button className="btn-honey w-full text-lg py-6 mt-6">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  {/* Benefits */}
                  <div className="mt-8 space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-honey-gradient w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-honey-dark text-sm">
                            {benefit.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;