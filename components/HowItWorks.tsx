import React from 'react';
import { Search, MessageSquare, Star } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "1. Tell us what you need",
    description: "Answer a few questions to help us understand exactly what you are looking for."
  },
  {
    icon: MessageSquare,
    title: "2. Receive quotes",
    description: "Within hours, you'll receive custom quotes from interested professionals."
  },
  {
    icon: Star,
    title: "3. Choose the best",
    description: "Compare quotes, read reviews from other customers, and hire the right pro."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
          How ProntoPro Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm relative z-10">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-primary">
                  <step.icon size={36} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 max-w-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;