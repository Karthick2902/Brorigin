import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Show success message
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@brorigin.com',
      subtitle: 'We respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      subtitle: 'Mon-Sat, 9 AM - 6 PM IST',
    },
    {
      icon: MapPin,
      title: 'Visit Our Farm',
      details: '123 Honey Farm Lane, Sweet Valley, Maharashtra 411001',
      subtitle: 'Open for farm tours by appointment',
    },
  ];

  const faqs = [
    {
      question: 'What makes Brorigin honey special?',
      answer: 'Our honey is 100% organic, unprocessed, and sourced directly from certified beekeepers across India.',
    },
    {
      question: 'Do you ship across India?',
      answer: 'Yes, we ship pan-India with free shipping on orders above ₹999.',
    },
    {
      question: 'How do I know the honey is pure?',
      answer: 'Each jar comes with a purity certificate and QR code for traceability back to the source.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-cream-gradient">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl font-bold text-honey-dark mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our honey? Need help with your order? We're here to help! 
            Reach out to our friendly team anytime.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="card-premium p-6 text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-honey-gradient w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-honey-dark mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-medium text-foreground mb-1">
                  {info.details}
                </p>
                <p className="text-sm text-muted-foreground">
                  {info.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-playfair text-4xl font-bold text-honey-dark mb-6">
                Send us a Message
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                Our team is passionate about helping you find the perfect honey for your needs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-honey-dark mb-2">
                      First Name *
                    </label>
                    <Input 
                      placeholder="Enter your first name" 
                      className="rounded-xl"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-honey-dark mb-2">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Enter your last name" 
                      className="rounded-xl"
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-honey-dark mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="rounded-xl"
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-honey-dark mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-honey-dark mb-2">
                    Subject *
                  </label>
                  <Select>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="order">Order Support</SelectItem>
                      <SelectItem value="wholesale">Wholesale/Bulk Orders</SelectItem>
                      <SelectItem value="quality">Product Quality</SelectItem>
                      <SelectItem value="shipping">Shipping & Delivery</SelectItem>
                      <SelectItem value="farm-tour">Farm Tour Request</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-honey-dark mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="rounded-xl"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-honey w-full text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending Message...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* FAQ & Additional Info */}
            <div className="mt-12 lg:mt-0">
              <h3 className="font-playfair text-3xl font-bold text-honey-dark mb-8">
                Frequently Asked Questions
              </h3>

              <div className="space-y-6 mb-12">
                {faqs.map((faq, index) => (
                  <div key={index} className="card-premium p-6">
                    <h4 className="font-semibold text-honey-dark mb-3 flex items-start">
                      <MessageCircle className="w-5 h-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                      {faq.question}
                    </h4>
                    <p className="text-muted-foreground pl-7">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="card-premium p-6">
                <h4 className="font-playfair text-xl font-semibold text-honey-dark mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Business Hours
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Response times may vary during weekends and holidays
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-honey-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold text-honey-dark mb-4">
              Visit Our Farm
            </h3>
            <p className="text-lg text-muted-foreground">
              Experience the honey-making process firsthand with a guided farm tour
            </p>
          </div>
          
          {/* Placeholder for map - you can integrate Google Maps here */}
          <div className="bg-white rounded-3xl p-8 shadow-[var(--shadow-soft)] text-center">
            <div className="bg-honey-cream rounded-2xl p-12">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h4 className="font-playfair text-2xl font-semibold text-honey-dark mb-2">
                Farm Location
              </h4>
              <p className="text-muted-foreground mb-6">
                123 Honey Farm Lane, Sweet Valley<br />
                Maharashtra 411001, India
              </p>
              <Button className="btn-honey">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;