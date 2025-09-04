import { useState } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import honeyJarMain from '@/assets/honey-jar-main.jpg';
import honeyVariants from '@/assets/honey-variants.jpg';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: '1',
      name: 'Pure Organic Honey',
      price: 1999,
      image: honeyJarMain,
      size: '500ml',
      description: 'Premium organic honey with rich floral notes, perfect for daily use and natural sweetening.',
      category: 'classic',
      isNew: true,
    },
    {
      id: '2',
      name: 'Family Pack Honey',
      price: 3699,
      image: honeyVariants,
      size: '1L',
      description: 'Large family-sized jar of pure organic honey, ideal for households and baking enthusiasts.',
      category: 'family',
    },
    {
      id: '3',
      name: 'Travel Size Honey',
      price: 999,
      image: honeyJarMain,
      size: '250ml',
      description: 'Convenient travel-sized jar, perfect for on-the-go sweetening and gift giving.',
      category: 'travel',
    },
    {
      id: '4',
      name: 'Wildflower Honey',
      price: 2299,
      image: honeyJarMain,
      size: '500ml',
      description: 'Rich and complex wildflower honey with diverse floral notes from mountain meadows.',
      category: 'specialty',
      isNew: true,
    },
    {
      id: '5',
      name: 'Acacia Honey',
      price: 2499,
      image: honeyVariants,
      size: '500ml',
      description: 'Light and delicate acacia honey with subtle sweetness and crystal-clear appearance.',
      category: 'specialty',
    },
    {
      id: '6',
      name: 'Manuka Honey',
      price: 4999,
      image: honeyJarMain,
      size: '250ml',
      description: 'Premium Manuka honey with natural antibacterial properties and rich, earthy flavor.',
      category: 'premium',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'classic', name: 'Classic', count: 1 },
    { id: 'family', name: 'Family Size', count: 1 },
    { id: 'travel', name: 'Travel Size', count: 1 },
    { id: 'specialty', name: 'Specialty', count: 2 },
    { id: 'premium', name: 'Premium', count: 1 },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="bg-cream-gradient py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="font-playfair text-5xl font-bold text-honey-dark mb-4">
              Our Premium Honey Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of organic honey varieties, 
              each offering unique flavors and natural benefits.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for honey varieties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg rounded-xl border-border/50 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Sidebar Filters */}
            <div className="hidden lg:block">
              <div className="card-premium p-6 sticky top-24">
                <div className="flex items-center mb-6">
                  <SlidersHorizontal className="w-5 h-5 mr-2 text-primary" />
                  <h3 className="font-playfair text-lg font-semibold">Filter Products</h3>
                </div>

                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-honey-gradient text-white'
                          : 'hover:bg-honey-cream text-muted-foreground hover:text-honey-dark'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{category.name}</span>
                        <Badge 
                          variant={selectedCategory === category.id ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {category.count}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-honey-cream rounded-xl">
                  <h4 className="font-semibold text-honey-dark mb-2">Need Help?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Contact our honey experts for personalized recommendations.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            <div className="lg:hidden mb-6">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`whitespace-nowrap ${
                      selectedCategory === category.id ? 'btn-honey' : 'btn-outline-honey'
                    }`}
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-playfair text-2xl font-semibold text-honey-dark">
                  {selectedCategory === 'all' ? 'All Products' : 
                   categories.find(c => c.id === selectedCategory)?.name} 
                  <span className="text-muted-foreground ml-2">
                    ({filteredProducts.length} products)
                  </span>
                </h2>
                <Button variant="outline" size="sm" className="hidden md:flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Sort by Price
                </Button>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-honey-cream rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-honey-dark mb-2">
                    No products found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="btn-honey"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;