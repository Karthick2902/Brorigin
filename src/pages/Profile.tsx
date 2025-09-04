import { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Heart, Package, Settings, Edit, LogOut, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import honeyJarMain from '@/assets/honey-jar-main.jpg';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Rajesh',
    lastName: 'Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 98765 43210',
    address: '123 MG Road, Bangalore, Karnataka 560001',
    dateOfBirth: '1985-06-15',
    bio: 'Honey enthusiast and organic food lover. Love supporting local beekeepers and sustainable farming.',
  });

  const orderHistory = [
    {
      id: 'ORD001',
      date: '2024-01-15',
      items: [
        { name: 'Pure Organic Honey (500ml)', quantity: 2, price: 1999 },
        { name: 'Family Pack Honey (1L)', quantity: 1, price: 3699 },
      ],
      total: 7697,
      status: 'Delivered',
    },
    {
      id: 'ORD002',
      date: '2024-01-08',
      items: [
        { name: 'Travel Size Honey (250ml)', quantity: 3, price: 999 },
      ],
      total: 2997,
      status: 'Delivered',
    },
    {
      id: 'ORD003',
      date: '2024-01-02',
      items: [
        { name: 'Wildflower Honey (500ml)', quantity: 1, price: 2299 },
        { name: 'Acacia Honey (500ml)', quantity: 1, price: 2499 },
      ],
      total: 4798,
      status: 'Processing',
    },
  ];

  const wishlistItems = [
    {
      id: '1',
      name: 'Manuka Honey',
      price: 4999,
      image: honeyJarMain,
      size: '250ml',
    },
    {
      id: '2',
      name: 'Wildflower Honey',
      price: 2299,
      image: honeyJarMain,
      size: '500ml',
    },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save profile data API call
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-16 bg-cream-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-6">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-24 h-24 bg-honey-gradient rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
                <Camera className="w-4 h-4 text-primary" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="font-playfair text-4xl font-bold text-honey-dark">
                {profileData.firstName} {profileData.lastName}
              </h1>
              <p className="text-lg text-muted-foreground mt-1">
                Member since January 2024
              </p>
              <div className="flex items-center space-x-4 mt-3">
                <Badge variant="secondary" className="bg-honey-gradient text-white">
                  Premium Member
                </Badge>
                <Badge variant="outline">
                  5 Orders
                </Badge>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-x-3">
              {isEditing ? (
                <>
                  <Button onClick={() => setIsEditing(false)} variant="outline">
                    Cancel
                  </Button>
                  <Button onClick={handleSave} className="btn-honey">
                    Save Changes
                  </Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)} className="btn-honey">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 max-w-md">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card-premium p-6">
                  <h3 className="font-playfair text-xl font-semibold text-honey-dark mb-6">
                    Personal Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-honey-dark mb-2">
                          First Name
                        </label>
                        <Input
                          name="firstName"
                          value={profileData.firstName}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-honey-dark mb-2">
                          Last Name
                        </label>
                        <Input
                          name="lastName"
                          value={profileData.lastName}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-honey-dark mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input
                          name="email"
                          value={profileData.email}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="pl-10 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-honey-dark mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input
                          name="phone"
                          value={profileData.phone}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="pl-10 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-honey-dark mb-2">
                        Date of Birth
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input
                          type="date"
                          name="dateOfBirth"
                          value={profileData.dateOfBirth}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="pl-10 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="card-premium p-6">
                    <h3 className="font-playfair text-xl font-semibold text-honey-dark mb-6">
                      Address Information
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-honey-dark mb-2">
                        Address
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-muted-foreground w-5 h-5" />
                        <Textarea
                          name="address"
                          value={profileData.address}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="pl-10 rounded-xl"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card-premium p-6">
                    <h3 className="font-playfair text-xl font-semibold text-honey-dark mb-6">
                      About Me
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-honey-dark mb-2">
                        Bio
                      </label>
                      <Textarea
                        name="bio"
                        value={profileData.bio}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="rounded-xl"
                        rows={4}
                        placeholder="Tell us about yourself..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <div className="card-premium p-6">
                <h3 className="font-playfair text-2xl font-semibold text-honey-dark mb-6">
                  Order History
                </h3>

                <div className="space-y-6">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="border border-border rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-honey-dark">Order #{order.id}</h4>
                          <p className="text-sm text-muted-foreground">
                            Placed on {new Date(order.date).toLocaleDateString('en-IN')}
                          </p>
                        </div>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>

                      <div className="space-y-2 mb-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>{item.name} x{item.quantity}</span>
                            <span>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                          </div>
                        ))}
                      </div>

                      <Separator className="my-4" />

                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg">
                          Total: ₹{order.total.toLocaleString('en-IN')}
                        </span>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          {order.status === 'Delivered' && (
                            <Button variant="outline" size="sm">
                              Reorder
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Wishlist Tab */}
            <TabsContent value="wishlist">
              <div className="card-premium p-6">
                <h3 className="font-playfair text-2xl font-semibold text-honey-dark mb-6">
                  My Wishlist
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="border border-border rounded-2xl p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-cover rounded-xl mb-4"
                      />
                      <h4 className="font-semibold text-honey-dark mb-2">{item.name}</h4>
                      <Badge variant="secondary" className="mb-2">
                        {item.size}
                      </Badge>
                      <p className="text-lg font-bold text-primary mb-4">
                        ₹{item.price.toLocaleString('en-IN')}
                      </p>
                      <div className="space-y-2">
                        <Button className="btn-honey w-full" size="sm">
                          Add to Cart
                        </Button>
                        <Button variant="outline" size="sm" className="w-full text-red-600 border-red-200 hover:bg-red-50">
                          <Heart className="w-4 h-4 mr-2 fill-red-600" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card-premium p-6">
                  <h3 className="font-playfair text-xl font-semibold text-honey-dark mb-6">
                    Account Settings
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <h4 className="font-medium text-honey-dark">Email Notifications</h4>
                        <p className="text-sm text-muted-foreground">Receive order updates via email</p>
                      </div>
                      <input type="checkbox" className="rounded" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <h4 className="font-medium text-honey-dark">SMS Notifications</h4>
                        <p className="text-sm text-muted-foreground">Get delivery updates on your phone</p>
                      </div>
                      <input type="checkbox" className="rounded" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <h4 className="font-medium text-honey-dark">Newsletter</h4>
                        <p className="text-sm text-muted-foreground">Weekly honey tips and offers</p>
                      </div>
                      <input type="checkbox" className="rounded" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between py-3">
                      <div>
                        <h4 className="font-medium text-honey-dark">Marketing Emails</h4>
                        <p className="text-sm text-muted-foreground">Special promotions and new products</p>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                  </div>
                </div>

                <div className="card-premium p-6">
                  <h3 className="font-playfair text-xl font-semibold text-honey-dark mb-6">
                    Security Settings
                  </h3>
                  
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="w-4 h-4 mr-2" />
                      Change Password
                    </Button>

                    <Button variant="outline" className="w-full justify-start">
                      <Package className="w-4 h-4 mr-2" />
                      Download My Data
                    </Button>

                    <Button variant="outline" className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>

                    <Separator className="my-4" />

                    <Button variant="outline" className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;