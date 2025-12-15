import React from 'react';
import { CATEGORIES } from '../constants';

const ServiceCategories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Explore by Category
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {CATEGORIES.map((category) => (
            <a 
              key={category.id} 
              href="#" 
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group border border-transparent hover:border-primary/20"
            >
              <div className="p-4 bg-gray-100 rounded-full text-gray-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors mb-4">
                <category.icon size={32} strokeWidth={1.5} />
              </div>
              <span className="font-medium text-gray-800 text-center group-hover:text-primary transition-colors">
                {category.name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center text-primary font-semibold hover:underline">
            See all categories
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;