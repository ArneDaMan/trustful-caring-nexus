
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-caregray-800 text-white py-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">CareBridge<span className="text-careblue-400">Africa</span></h3>
            <p className="text-caregray-300 mb-4">
              Qualifizierte Pflegekräfte aus Simbabwe für deutsche Pflegeeinrichtungen.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Schnelllinks</h4>
            <ul className="space-y-2">
              <li><a href="#benefits" className="text-caregray-300 hover:text-white transition-colors">Warum Simbabwe?</a></li>
              <li><a href="#services" className="text-caregray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#process" className="text-caregray-300 hover:text-white transition-colors">Prozess</a></li>
              <li><a href="#about" className="text-caregray-300 hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#contact" className="text-caregray-300 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-caregray-300 hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="text-caregray-300 hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#" className="text-caregray-300 hover:text-white transition-colors">AGB</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-caregray-300">
              <li>Deutschland & Simbabwe</li>
              <li><a href="mailto:info@carebridge-africa.de" className="hover:text-white transition-colors">info@carebridge-africa.de</a></li>
              <li><a href="tel:+49XXXXXXXXX" className="hover:text-white transition-colors">+49 XXX XXXXXXX</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-caregray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-caregray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CareBridge Africa. Alle Rechte vorbehalten.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-caregray-400 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-caregray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
