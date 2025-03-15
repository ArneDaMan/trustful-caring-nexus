
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-careblue-600 text-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Wer wir sind</h2>
          </div>
          
          <div 
            className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/20 shadow-soft"
            data-aos="fade-up"
          >
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              <span className="font-semibold">„CareBridge Africa"</span> ist Ihr Spezialist für die Vermittlung qualifizierter Pflegekräfte aus Simbabwe nach Deutschland. Mit unserem Netzwerk vor Ort und unserer Erfahrung in der Pflegebranche helfen wir deutschen Pflegeeinrichtungen, dringend benötigtes Personal schnell und zuverlässig zu finden.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Unser Team arbeitet sowohl in Deutschland als auch in Simbabwe, um einen reibungslosen Vermittlungsprozess zu gewährleisten und die kulturelle Brücke zwischen beiden Ländern zu schlagen.
            </p>
            
            <div className="mt-8 flex justify-center">
              <a href="#contact" className="cta-button bg-white text-careblue-700 hover:bg-careblue-50">
                Kontaktieren Sie uns
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
