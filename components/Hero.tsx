import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { POPULAR_SEARCHES } from '../constants';

const Hero: React.FC = () => {
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const filteredSuggestions = POPULAR_SEARCHES.filter(s => 
    s.toLowerCase().includes(service.toLowerCase())
  ).slice(0, 5);

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Image / Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-24 md:pt-28 md:pb-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Find the best <span className="text-primary">professional</span> for every need
          </h1>
          <p className="mt-4 text-xl text-gray-600 mb-10">
            Compare quotes and choose the right pro for you.
          </p>

          {/* Search Bar Container */}
          <div className="bg-white p-2 rounded-lg shadow-xl border border-gray-200 flex flex-col md:flex-row gap-2 max-w-4xl mx-auto relative">
            
            {/* Service Input */}
            <div className="relative flex-grow group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border-none rounded-md focus:ring-0 text-gray-900 placeholder-gray-500 sm:text-lg focus:outline-none"
                placeholder="What are you looking for?"
                value={service}
                onChange={(e) => setService(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              />
              
              {/* Autocomplete Dropdown */}
              {isFocused && (service || filteredSuggestions.length > 0) && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50 text-left">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Popular Services
                  </div>
                  {filteredSuggestions.map((item, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                      onClick={() => setService(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Divider (Desktop) */}
            <div className="hidden md:block w-px bg-gray-200 my-2"></div>

            {/* Location Input */}
            <div className="relative md:w-1/3 group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border-none rounded-md focus:ring-0 text-gray-900 placeholder-gray-500 sm:text-lg focus:outline-none"
                placeholder="Postal code or city"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Search Button */}
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition duration-150 ease-in-out shadow-sm text-lg w-full md:w-auto mt-2 md:mt-0">
              Search
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-gray-500">
            <span className="font-medium">Popular:</span>
            {POPULAR_SEARCHES.slice(0, 4).map((term) => (
              <a key={term} href="#" className="hover:text-primary underline decoration-dotted underline-offset-2">
                {term}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;