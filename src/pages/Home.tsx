import { ArrowRight, Star, Shield, Truck, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import honeyHeroBg from '@/assets/honey-hero-bg.jpg';
import honeyJarMain from '@/assets/honey-jar-main.jpg';
import honeyVariants from '@/assets/honey-variants.jpg';

const Home = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Pure Organic Honey',
      price: 1999,
      image: honeyJarMain,
      size: '500ml',
      description: 'Premium organic honey with rich floral notes, perfect for daily use and natural sweetening.',
      isNew: true,
    },
    {
      id: '2',
      name: 'Family Pack Honey',
      price: 3699,
      image: honeyVariants,
      size: '1L',
      description: 'Large family-sized jar of pure organic honey, ideal for households and baking enthusiasts.',
    },
    {
      id: '3',
      name: 'Travel Size Honey',
      price: 999,
      image: honeyJarMain,
      size: '250ml',
      description: 'Convenient travel-sized jar, perfect for on-the-go sweetening and gift giving.',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: '100% Organic',
      description: 'Certified organic honey from trusted beekeepers',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Hand-selected for purity and exceptional taste',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Fresh honey delivered to your doorstep',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${honeyHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-honey-amber/20 to-primary/30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Badge className="bg-white/20 text-white border-white/30 mb-6 animate-fade-in">
            ✨ Pure • Natural • Organic
          </Badge>
          
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Taste Nature's
            <br />
            <span className="bg-golden-gradient bg-clip-text text-transparent">
              Sweetest Gift
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in">
            Brorigin brings you 100% organic, farm-fresh honey directly from trusted beekeepers. 
            Experience pure sweetness in every drop.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button className="btn-premium text-lg px-10 py-4">
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="btn-outline-honey bg-white/10 border-white/30 text-white hover:bg-white hover:text-honey-dark text-lg px-10 py-4">
              Learn More
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-float" />
        <div className="absolute bottom-32 right-16 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-20 w-8 h-8 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-honey-dark mb-4">
              Why Choose Brorigin?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to bringing you the finest organic honey with uncompromising quality and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-honey-gradient w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-honey-dark">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-honey-dark mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our premium collection of organic honey varieties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-honey text-lg px-8 py-3">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-honey-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold text-honey-dark mb-16">
            What Our Customers Say
          </h2>

          <div className="bg-white rounded-3xl p-8 shadow-[var(--shadow-soft)]">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 italic">
              "The best honey I've ever tasted! The quality is exceptional and you can really taste the difference. 
              Brorigin has become our family's go-to for all things sweet and natural."
            </blockquote>
            <cite className="font-semibold text-honey-dark">
              Sarah Johnson, Verified Customer
            </cite>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;