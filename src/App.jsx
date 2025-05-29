import React, { useState } from 'react';

export default function FoodDeliveryLanding() {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = [
    { name: 'Main Course', icon: '🍖', color: 'bg-red-500' },
    { name: 'Dessert', icon: '🍰', color: 'bg-pink-500' },
    { name: 'Salads', icon: '🥗', color: 'bg-green-500' },
    { name: 'Drinks All', icon: '🥤', color: 'bg-blue-500' }
  ];

  const dishes = [
    {
      name: 'Fattoush salad',
      description: 'Description of the item',
      price: '$24.00',
      rating: 4.9,
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Vegetable salad',
      description: 'Description of the item',
      price: '$26.00',
      rating: 4.6,
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Egg veg salad',
      description: 'Description of the item',
      price: '$23.00',
      rating: 4.5,
      image: '/api/placeholder/200/200'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">F</span>
          </div>
          <span className="text-xl font-bold">Foodi</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-green-500">Home</a>
          <a href="#" className="text-gray-600 hover:text-green-500">Menu</a>
          <a href="#" className="text-gray-600 hover:text-green-500">Services</a>
          <a href="#" className="text-gray-600 hover:text-green-500">Offers</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
            Contact
          </button>
        </div>
      </nav>

      <section className="relative px-6 py-20 bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Dive into Delights
              <br />
              Of Delectable
              <br />
              <span className="text-green-500">Food</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors">
                Order Now
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-green-500">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-5 h-5 ml-1 bg-green-500"></div>
                </div>
                <span>Watch Video</span>
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/api/placeholder/400/400" 
                alt="Delicious food" 
                className="rounded-full w-96 h-96 object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Customer Favorites</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-12">Popular Categories</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="relative cursor-pointer transform hover:scale-105 transition-transform"
                onClick={() => setActiveCategory(index)}
              >
                <div className="w-32 h-32 mx-auto relative">
                  <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">{category.icon}</span>
                  </div>
                  <div className={`absolute -bottom-2 -right-2 w-12 h-12 ${category.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold">$</span>
                  </div>
                </div>
                <h4 className="mt-4 font-semibold text-gray-900">{category.name}</h4>
                <p className="text-gray-500 text-sm">(86 dishes)</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Standout Dishes</h2>
              <h3 className="text-4xl font-bold text-gray-900">From Our Menu</h3>
            </div>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                ←
              </button>
              <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg">
                →
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative mb-4">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <button className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">❤</span>
                  </button>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{dish.name}</h4>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                    <span className="text-sm text-gray-600">{dish.rating}</span>
                  </div>
                  <span className="text-xl font-bold text-red-500">{dish.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/api/placeholder/400/500" 
              alt="Chef" 
              className="w-full rounded-3xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-xl">
              <div className="w-12 h-12 bg-white rounded"></div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Customers
              <br />
              Say About Us
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable
            </p>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex -space-x-2">
                <img src="/api/placeholder/40/40" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="/api/placeholder/40/40" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="/api/placeholder/40/40" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Customer Feedback</p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded"></div>
                  ))}
                  <span className="text-sm text-gray-600 ml-2">(18.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culinary Journey</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-12">And Services</h3>
          
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-500 rounded"></div>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Catering</h4>
              <p className="text-gray-600 text-sm">Delight your guests with our flavors and presentation</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Fast delivery</h4>
              <p className="text-gray-600 text-sm">We deliver your order promptly to your door</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-500 rounded"></div>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Online Ordering</h4>
              <p className="text-gray-600 text-sm">Explore menu & order with ease using our Online Ordering</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-500 rounded"></div>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Gift Cards</h4>
              <p className="text-gray-600 text-sm">Give the gift of exceptional dining with Foodi Gift Cards</p>
            </div>
          </div>
          
          <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors">
            Explore
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="text-xl font-bold">Foodi</span>
              </div>
              <p className="text-gray-400 mb-4">
                Savor the artistry where every dish is a culinary masterpiece
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Useful links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About us</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><a href="#" className="hover:text-white">Blogs</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Main Menu</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Offers</a></li>
                <li><a href="#" className="hover:text-white">Menus</a></li>
                <li><a href="#" className="hover:text-white">Reservation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  <span>example@email.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  <span>+64 958 248 966</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  <span>Social media</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
              <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            </div>
            <p className="text-gray-400 text-sm">
              Copyright © 2023 Dscode | All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}