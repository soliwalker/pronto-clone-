import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          What our customers say
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Millions of people have found the right professional on ProntoPro. Here is what they have to say.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.imageUrl} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < testimonial.rating ? "currentColor" : "none"} 
                    className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-gray-600 italic flex-grow">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;