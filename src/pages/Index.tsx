
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-aos]');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const scrollPosition = window.innerHeight * 0.85;
        
        if (elementPosition < scrollPosition) {
          if (element.classList.contains('animate-fade-in-up')) {
            element.classList.add('animate-stagger-1');
          } else if (element.classList.contains('animate-fade-in')) {
            element.classList.add('animate-stagger-1');
          } else if (element.classList.contains('animate-slide-in-right')) {
            element.classList.add('animate-stagger-2');
          } else {
            element.classList.add('animate-fade-in');
          }
        }
      });
    };
    
    // Run on initial load
    setTimeout(handleScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-caregray-800">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Process />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
