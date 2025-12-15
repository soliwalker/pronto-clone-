import React from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCategories from './components/ServiceCategories';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-white text-gray-800">
        <Header />
        <main className="flex-grow">
          <Hero />
          <ServiceCategories />
          <HowItWorks />
          <Testimonials />
          <DownloadApp />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;