import { Mail, Phone, MapPin, Users, Award, Heart, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import beekeeperStory from '@/assets/beekeeper-story.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Purity',
      description: 'Every jar represents our unwavering commitment to delivering the purest, most natural honey possible.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'We work with eco-conscious beekeepers who prioritize environmental sustainability and bee welfare.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Supporting local beekeeping communities and helping preserve traditional honey-making methods.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Rigorous quality control ensures every batch meets our exceptional standards for taste and purity.',
    },
  ];

  const stats = [
    { number: '100+', label: 'Trusted Beekeepers' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '5★', label: 'Average Rating' },
    { number: '100%', label: 'Organic Certified' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-cream-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl font-bold text-honey-dark mb-6">
              Our Sweet Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Brorigin was born from a simple belief: that nature's sweetest gift should be shared 
              in its purest form, connecting people to the timeless tradition of beekeeping.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-10 lg:mb-0">
              <img
                src={beekeeperStory}
                alt="Beekeeper working with hives"
                className="rounded-3xl shadow-[var(--shadow-premium)] w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="font-playfair text-4xl font-bold text-honey-dark mb-6">
                From Hive to Home
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Brorigin is dedicated to bringing you 100% organic, farm-fresh honey directly 
                  from trusted beekeepers. Our journey began with a passion for authentic, 
                  unprocessed honey and a commitment to supporting sustainable beekeeping practices.
                </p>
                <p>
                  We work exclusively with certified organic apiaries that share our values of 
                  environmental stewardship and bee welfare. Each jar tells a story of dedication, 
                  from the careful tending of hives to the gentle extraction that preserves 
                  honey's natural properties.
                </p>
                <p>
                  Our variants (250g, 500g, and 1L) suit every need – from daily use to family 
                  packs, ensuring that pure, natural sweetness is always within reach.
                </p>
              </div>
              <div className="mt-8">
                <Button className="btn-honey">
                  Shop Our Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-honey-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold font-playfair text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-honey-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-honey-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[var(--shadow-soft)] group-hover:shadow-[var(--shadow-premium)] group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-honey-dark">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Contact Info */}
            <div className="mb-10 lg:mb-0">
              <h2 className="font-playfair text-4xl font-bold text-honey-dark mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our honey or need help choosing the perfect variety? 
                We'd love to hear from you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-honey-gradient w-12 h-12 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-honey-dark">Email Us</h3>
                    <p className="text-muted-foreground">info@brorigin.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-honey-gradient w-12 h-12 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-honey-dark">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-honey-gradient w-12 h-12 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-honey-dark">Visit Us</h3>
                    <p className="text-muted-foreground">
                      123 Honey Farm Lane<br />
                      Sweet Valley, CA 90210
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-premium p-8">
              <h3 className="font-playfair text-2xl font-semibold text-honey-dark mb-6">
                Send us a message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-honey-dark mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-honey-dark mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="rounded-xl" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-honey-dark mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="john@example.com" className="rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-honey-dark mb-2">
                    Subject
                  </label>
                  <Input placeholder="How can we help you?" className="rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-honey-dark mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..."
                    rows={4}
                    className="rounded-xl"
                  />
                </div>
                <Button className="btn-honey w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;