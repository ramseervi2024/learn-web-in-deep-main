import React, { useState } from 'react';
import { Search, Phone, MapPin, Star, ChevronRight, Menu, X, Heart, Share2, Clock, Mail, ShoppingBag, Car, Wrench, GraduationCap, Stethoscope, Home, Scissors, Camera, Utensils, DollarSign, TrendingUp, Award, CheckCircle, Users } from 'lucide-react';

export default function JustDial() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState('Bengaluru');
    const [activeTab, setActiveTab] = useState('all');

    const categories = [
        { name: 'Restaurants', icon: '🍽️', color: 'bg-orange-100', count: '2.5K+' },
        { name: 'Hotels', icon: '🏨', color: 'bg-blue-100', count: '1.8K+' },
        { name: 'Beauty Spa', icon: '💆', color: 'bg-pink-100', count: '3.2K+' },
        { name: 'Home Decor', icon: '🏠', color: 'bg-green-100', count: '1.5K+' },
        { name: 'Education', icon: '📚', color: 'bg-purple-100', count: '4.1K+' },
        { name: 'Hospitals', icon: '🏥', color: 'bg-red-100', count: '890+' },
        { name: 'Contractors', icon: '🔨', color: 'bg-yellow-100', count: '2.1K+' },
        { name: 'PG/Hostels', icon: '🛏️', color: 'bg-indigo-100', count: '670+' },
        { name: 'Electronics', icon: '📱', color: 'bg-cyan-100', count: '1.9K+' },
        { name: 'Automobile', icon: '🚗', color: 'bg-gray-100', count: '1.2K+' },
        { name: 'Real Estate', icon: '🏢', color: 'bg-teal-100', count: '3.5K+' },
        { name: 'Travel', icon: '✈️', color: 'bg-sky-100', count: '980+' },
    ];

    const listings = [
        {
            id: 1,
            name: 'The Spice Garden Restaurant',
            category: 'Restaurant',
            rating: 4.5,
            reviews: 234,
            address: 'MG Road, Bengaluru',
            phone: '+91 80 1234 5678',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
            verified: true,
            open: true,
            distance: '2.3 km',
            price: '₹₹'
        },
        {
            id: 2,
            name: 'Luxury Palace Hotel',
            category: 'Hotel',
            rating: 4.8,
            reviews: 456,
            address: 'Indiranagar, Bengaluru',
            phone: '+91 80 2345 6789',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
            verified: true,
            open: true,
            distance: '3.1 km',
            price: '₹₹₹'
        },
        {
            id: 3,
            name: 'Serenity Spa & Wellness',
            category: 'Beauty Spa',
            rating: 4.6,
            reviews: 189,
            address: 'Koramangala, Bengaluru',
            phone: '+91 80 3456 7890',
            image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop',
            verified: true,
            open: true,
            distance: '1.8 km',
            price: '₹₹'
        },
        {
            id: 4,
            name: 'Tech Master Computer Services',
            category: 'Electronics',
            rating: 4.3,
            reviews: 145,
            address: 'Whitefield, Bengaluru',
            phone: '+91 80 4567 8901',
            image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop',
            verified: true,
            open: false,
            distance: '5.2 km',
            price: '₹'
        },
        {
            id: 5,
            name: 'Green Valley Hospital',
            category: 'Hospital',
            rating: 4.7,
            reviews: 567,
            address: 'JP Nagar, Bengaluru',
            phone: '+91 80 5678 9012',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop',
            verified: true,
            open: true,
            distance: '4.5 km',
            price: '₹₹₹'
        },
        {
            id: 6,
            name: 'Elite Coaching Academy',
            category: 'Education',
            rating: 4.4,
            reviews: 298,
            address: 'Jayanagar, Bengaluru',
            phone: '+91 80 6789 0123',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
            verified: true,
            open: true,
            distance: '3.7 km',
            price: '₹₹'
        },
        {
            id: 7,
            name: 'Royal Biryani House',
            category: 'Restaurant',
            rating: 4.6,
            reviews: 412,
            address: 'BTM Layout, Bengaluru',
            phone: '+91 80 7890 1234',
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop',
            verified: true,
            open: true,
            distance: '2.9 km',
            price: '₹₹'
        },
        {
            id: 8,
            name: 'Premium Home Solutions',
            category: 'Home Decor',
            rating: 4.2,
            reviews: 167,
            address: 'HSR Layout, Bengaluru',
            phone: '+91 80 8901 2345',
            image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop',
            verified: true,
            open: true,
            distance: '3.4 km',
            price: '₹₹₹'
        },
        {
            id: 9,
            name: 'Quick Fix Auto Repair',
            category: 'Automobile',
            rating: 4.5,
            reviews: 223,
            address: 'Electronic City, Bengaluru',
            phone: '+91 80 9012 3456',
            image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
            verified: true,
            open: true,
            distance: '6.1 km',
            price: '₹₹'
        }
    ];

    const trendingSearches = [
        'Restaurants near me', 'Plumbers', 'AC Repair', 'Packers and Movers',
        'Electricians', 'Beauty Parlour', 'Hospitals', 'Hotels', 'Gyms',
        'Photographers', 'Carpenters', 'Pizza Delivery'
    ];

    const topBrands = [
        { name: 'McDonald\'s', category: 'Fast Food', outlets: 45 },
        { name: 'Apollo Hospitals', category: 'Healthcare', outlets: 12 },
        { name: 'Reliance Digital', category: 'Electronics', outlets: 28 },
        { name: 'VLCC', category: 'Beauty & Wellness', outlets: 34 },
        { name: 'Decathlon', category: 'Sports', outlets: 8 },
        { name: 'Urban Ladder', category: 'Furniture', outlets: 6 }
    ];

    const featuredServices = [
        {
            icon: <Wrench className="text-blue-600" size={32} />,
            title: 'Home Services',
            desc: 'Plumbers, Electricians, Carpenters',
            count: '500+ Professionals'
        },
        {
            icon: <Car className="text-green-600" size={32} />,
            title: 'Automobile',
            desc: 'Service Centers, Spare Parts',
            count: '300+ Services'
        },
        {
            icon: <ShoppingBag className="text-purple-600" size={32} />,
            title: 'Shopping',
            desc: 'Malls, Boutiques, Electronics',
            count: '1000+ Stores'
        },
        {
            icon: <Stethoscope className="text-red-600" size={32} />,
            title: 'Healthcare',
            desc: 'Hospitals, Clinics, Pharmacies',
            count: '400+ Facilities'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Bar */}
            <div className="bg-gray-800 text-white text-sm py-2 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <div className="flex space-x-6">
                        <span>🎉 New: Book appointments online</span>
                        <span>📞 Customer Support: 1800-123-4567</span>
                    </div>
                    <div className="flex space-x-4">
                        <button className="hover:text-red-400">List Your Business</button>
                        <button className="hover:text-red-400">Help</button>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className="bg-red-600 text-white sticky top-0 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="lg:hidden p-2 hover:bg-red-700 rounded"
                            >
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                            <h1 className="text-2xl md:text-3xl font-bold">JustDial</h1>
                        </div>

                        <div className="hidden lg:flex items-center space-x-6">
                            <div className="flex items-center space-x-2 bg-red-700 px-4 py-2 rounded-lg cursor-pointer">
                                <MapPin size={18} />
                                <select
                                    value={selectedCity}
                                    onChange={(e) => setSelectedCity(e.target.value)}
                                    className="bg-transparent outline-none cursor-pointer"
                                >
                                    <option value="Bengaluru">Bengaluru</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Chennai">Chennai</option>
                                </select>
                            </div>
                        </div>

                        <button className="hidden md:block bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                            Login / Sign Up
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-white shadow-lg p-4 space-y-4 relative z-40">
                    <div className="flex items-center space-x-2">
                        <MapPin size={18} />
                        <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                    </div>
                    <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                        Login / Sign Up
                    </button>
                </div>
            )}

            {/* Search Hero Section */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
                        Find Local Businesses Near You
                    </h2>
                    <p className="text-center text-lg mb-8 opacity-90">
                        Search from over 100,000+ verified businesses across India
                    </p>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-2xl p-2 flex flex-col md:flex-row gap-2">
                            <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded">
                                <Search className="text-gray-400 mr-3" size={24} />
                                <input
                                    type="text"
                                    placeholder="Search for restaurants, hotels, services..."
                                    className="flex-1 outline-none bg-transparent text-gray-800 text-lg"
                                />
                            </div>
                            <button className="bg-red-600 text-white px-8 py-3 rounded font-semibold hover:bg-red-700 transition flex items-center justify-center">
                                <Search className="mr-2" size={20} />
                                Search
                            </button>
                        </div>

                        {/* Trending Searches */}
                        <div className="mt-6 text-center">
                            <p className="text-sm mb-3 opacity-90">Trending Searches:</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {trendingSearches.slice(0, 8).map((search, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-white bg-opacity-20 px-4 py-1 rounded-full text-sm cursor-pointer hover:bg-opacity-30 transition"
                                    >
                                        {search}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="bg-white shadow-md py-6">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="text-3xl font-bold text-red-600">100K+</div>
                            <div className="text-gray-600 text-sm">Listed Businesses</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-red-600">50K+</div>
                            <div className="text-gray-600 text-sm">Daily Searches</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-red-600">250+</div>
                            <div className="text-gray-600 text-sm">Cities Covered</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-red-600">5M+</div>
                            <div className="text-gray-600 text-sm">Happy Customers</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">

                {/* Featured Services */}
                <section className="mb-12">
                    <h3 className="text-3xl font-bold mb-8">Featured Services</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredServices.map((service, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer border-2 border-transparent hover:border-red-500"
                            >
                                <div className="mb-4">{service.icon}</div>
                                <h4 className="font-bold text-xl mb-2">{service.title}</h4>
                                <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
                                <p className="text-red-600 font-semibold text-sm">{service.count}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Categories Section */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-bold">Browse by Category</h3>
                        <button className="text-red-600 font-semibold flex items-center hover:underline">
                            View All <ChevronRight size={20} />
                        </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {categories.map((cat, idx) => (
                            <div
                                key={idx}
                                className={`${cat.color} p-6 rounded-xl text-center cursor-pointer hover:shadow-xl transition transform hover:-translate-y-2`}
                            >
                                <div className="text-5xl mb-3">{cat.icon}</div>
                                <p className="font-bold text-gray-800 mb-1">{cat.name}</p>
                                <p className="text-xs text-gray-600">{cat.count}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Top Brands Section */}
                <section className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl">
                    <h3 className="text-3xl font-bold mb-8 text-center">Top Brands in {selectedCity}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topBrands.map((brand, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer flex items-center space-x-4"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                                    {brand.name.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-1">{brand.name}</h4>
                                    <p className="text-gray-600 text-sm mb-1">{brand.category}</p>
                                    <p className="text-red-600 text-xs font-semibold">{brand.outlets} outlets</p>
                                </div>
                                <ChevronRight className="text-gray-400" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Listings Section with Tabs */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-3xl font-bold">Top Rated Businesses</h3>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setActiveTab('all')}
                                className={`px-4 py-2 rounded-lg font-semibold transition ${activeTab === 'all' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setActiveTab('verified')}
                                className={`px-4 py-2 rounded-lg font-semibold transition ${activeTab === 'verified' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                Verified
                            </button>
                            <button
                                onClick={() => setActiveTab('nearby')}
                                className={`px-4 py-2 rounded-lg font-semibold transition ${activeTab === 'nearby' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                Nearby
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {listings.map((listing) => (
                            <div
                                key={listing.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
                            >
                                <div className="relative">
                                    <img
                                        src={listing.image}
                                        alt={listing.name}
                                        className="w-full h-52 object-cover"
                                    />
                                    {listing.verified && (
                                        <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                                            <CheckCircle size={14} className="mr-1" />
                                            Verified
                                        </div>
                                    )}
                                    <div className="absolute top-3 right-3 flex space-x-2">
                                        <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition">
                                            <Heart size={18} className="text-gray-700" />
                                        </button>
                                        <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition">
                                            <Share2 size={18} className="text-gray-700" />
                                        </button>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1">
                                            <h4 className="font-bold text-lg mb-1 line-clamp-1">{listing.name}</h4>
                                            <p className="text-sm text-gray-600">{listing.category}</p>
                                        </div>
                                        <div className="text-gray-600 font-semibold">{listing.price}</div>
                                    </div>

                                    <div className="flex items-center mb-3 space-x-3">
                                        <div className="flex items-center bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                                            <Star size={14} fill="white" className="mr-1" />
                                            {listing.rating}
                                        </div>
                                        <span className="text-gray-600 text-sm">
                                            {listing.reviews} reviews
                                        </span>
                                        <span className="text-gray-500 text-xs">• {listing.distance}</span>
                                    </div>

                                    <div className="flex items-start text-gray-600 text-sm mb-3">
                                        <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                                        <span className="line-clamp-1">{listing.address}</span>
                                    </div>

                                    <div className="flex items-center text-sm mb-4">
                                        <Clock size={16} className={`mr-2 ${listing.open ? 'text-green-600' : 'text-red-600'}`} />
                                        <span className={listing.open ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                                            {listing.open ? 'Open Now' : 'Closed'}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t">
                                        <button className="flex items-center text-gray-700 hover:text-red-600 transition">
                                            <Phone size={18} className="mr-2" />
                                            <span className="text-sm font-semibold">Call</span>
                                        </button>
                                        <button className="bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                            Load More Businesses
                        </button>
                    </div>
                </section>

                {/* Why Choose JustDial */}
                <section className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 p-8 md:p-12 rounded-2xl">
                    <h3 className="text-3xl font-bold mb-8 text-center">Why Choose JustDial?</h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle size={32} className="text-white" />
                            </div>
                            <h4 className="font-bold mb-2">Verified Listings</h4>
                            <p className="text-gray-600 text-sm">All businesses are verified for authenticity</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users size={32} className="text-white" />
                            </div>
                            <h4 className="font-bold mb-2">Trusted Reviews</h4>
                            <p className="text-gray-600 text-sm">Real reviews from real customers</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award size={32} className="text-white" />
                            </div>
                            <h4 className="font-bold mb-2">Best Quality</h4>
                            <p className="text-gray-600 text-sm">Top-rated service providers</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp size={32} className="text-white" />
                            </div>
                            <h4 className="font-bold mb-2">Growing Network</h4>
                            <p className="text-gray-600 text-sm">Expanding to more cities daily</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 md:p-12 rounded-2xl text-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">List Your Business on JustDial</h3>
                    <p className="text-lg mb-6 opacity-90">Reach millions of customers searching for your services</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                            Get Started Free
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition">
                            Learn More
                        </button>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white mt-16 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-5 gap-8 mb-8">
                        <div className="md:col-span-2">
                            <h4 className="text-2xl font-bold mb-4">JustDial</h4>
                            <p className="text-gray-400 mb-4">India's No. 1 Local Search Engine. Find the best businesses and services near you.</p>
                            <div className="flex space-x-4">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition">
                                    f
                                </div>
                                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition">
                                    in
                                </div>
                                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition">
                                    t
                                </div>
                                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition">
                                    y
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">Company</h4>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}