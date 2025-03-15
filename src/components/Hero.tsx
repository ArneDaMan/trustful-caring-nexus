
import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-24 pb-20 md:pt-32 md:pb-32 bg-gradient-to-b from-careblue-50 to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-5 -top-5 w-72 h-72 bg-careblue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-10 w-96 h-96 bg-careblue-300 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="relative section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-careblue-100 text-careblue-700 rounded-full text-sm font-medium animate-fade-in">
            Fachkräfte aus Simbabwe für deutsche Pflegeeinrichtungen
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-caregray-800 leading-tight mb-6 animate-fade-in animate-stagger-1">
            Fachkräfte aus Simbabwe für Ihre Pflegeeinrichtung
            <span className="block text-careblue-600">Schnell. Qualifiziert. Zuverlässig.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-caregray-600 mb-10 max-w-3xl mx-auto animate-fade-in-up animate-stagger-2">
            Wir vermitteln motivierte und qualifizierte Pflegekräfte aus Simbabwe direkt in deutsche Pflegeeinrichtungen.
          </p>
          
          <div className="animate-fade-in-up animate-stagger-3">
            <a href="#contact" className="cta-button text-lg">
              Jetzt Personal anfragen
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
