import React from 'react';
import { Smartphone } from 'lucide-react';

const DownloadApp: React.FC = () => {
  return (
    <section className="bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="py-16 md:py-24 md:pr-12 text-center md:text-left max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get things done on the go
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Download the ProntoPro app to find professionals, chat, and manage your requests from anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors border border-gray-700">
                <Smartphone size={24} className="mr-3" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors border border-gray-700">
                <Smartphone size={24} className="mr-3" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          
          <div className="hidden md:block relative h-full self-end -mb-16 lg:-mb-24">
             {/* Mock phone */}
             <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden transform rotate-6">
                <div className="absolute inset-0 bg-white overflow-hidden">
                  {/* Fake App UI */}
                  <div className="bg-primary h-16 w-full mb-4"></div>
                  <div className="p-4 space-y-4">
                    <div className="h-24 bg-gray-100 rounded-lg"></div>
                    <div className="h-24 bg-gray-100 rounded-lg"></div>
                    <div className="h-24 bg-gray-100 rounded-lg"></div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;